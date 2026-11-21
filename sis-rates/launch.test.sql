-- Local test for launch.sql. Run on a throwaway database with Supabase-like anon/authenticated roles, never on production.
\set ON_ERROR_STOP 0
set role anon;
-- 1) normal insert from IP A x3 ok, 4th blocked
select set_config('request.headers','{"cf-connecting-ip":"1.1.1.1","x-forwarded-for":"9.9.9.9"}',false);
insert into rate_submissions(category,state,years,team,price) values ('event','kl','y3_5','solo',1500);
insert into rate_submissions(category,state,years,team,price) values ('event','kl','y3_5','solo',1600);
insert into rate_submissions(category,state,years,team,price) values ('event','kl','y3_5','solo',1700);
\echo EXPECT rate limited:
insert into rate_submissions(category,state,years,team,price) values ('event','kl','y3_5','solo',1800);
-- 2) forging x-forwarded-for does not help when cf-connecting-ip present
select set_config('request.headers','{"cf-connecting-ip":"1.1.1.1","x-forwarded-for":"5.5.5.5"}',false);
\echo EXPECT rate limited (forged XFF):
insert into rate_submissions(category,state,years,team,price) values ('event','kl','y3_5','solo',1800);
-- 3) other IP ok
select set_config('request.headers','{"cf-connecting-ip":"2.2.2.2"}',false);
insert into rate_submissions(category,state,years,team,price) values ('event','kl','y3_5','solo',2000);
insert into rate_submissions(category,state,years,team,price) values ('event','kl','y3_5','solo',2200);
-- 4) anon cannot read anything
\echo EXPECT 0 rows / permission denied:
select count(*) from rate_submissions;
select * from rate_secret;
select * from rate_ip_hits;
select * from rate_report_signups;
-- 5) stats: 5 answers -> numbers
select rate_stats('event','kl',1700);
select rate_stats('event','penang',1700) as national_fallback;
select rate_stats('wedding_photo','kl',1700) as expect_null;
-- 6) signup consent
insert into rate_report_signups(email,consent,lang) values ('a@b.co',true,'zh');
\echo EXPECT check violation:
insert into rate_report_signups(email,consent) values ('a@b.co',false);
reset role;
-- 7) no raw IP stored; hash is 64 hex
select ip_hash ~ '^[0-9a-f]{64}$' as sha256_ok, count(*) from rate_ip_hits group by 1;
select count(*) filter (where ip_hash like '%1.1.1.1%') as raw_ip_leak from rate_ip_hits;
-- 8) global cap: 60/hour
select set_config('request.headers','',false);
do $$ begin for i in 1..60 loop
  perform set_config('request.headers', json_build_object('cf-connecting-ip','10.0.0.'||i)::text, false);
  begin insert into rate_submissions(category,state,years,team,price) values ('portrait','johor','y0_2','solo',300);
  exception when others then raise notice 'blocked at %', i; end;
end loop; end $$;
select count(*) as total_after_cap from rate_submissions;
