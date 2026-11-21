-- MY Photo Rates: backend for live mode.
-- NOT APPLIED. Run only after the owner approves going live.
-- Adds 4 new tables + 1 trigger + 1 function to the SIS Supabase project.
-- Does not touch any existing SIS table. Safe to run more than once.

begin;

-- 1. Anonymous rate answers (insert-only for the public, nobody can read rows via the API)
create table if not exists public.rate_submissions (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  category text not null check (category in ('wedding_photo','wedding_video','prewedding','event','corporate','commercial','portrait')),
  state text not null check (state in ('kl','selangor','putrajaya','penang','johor','perak','negeri_sembilan','melaka','kedah','perlis','kelantan','terengganu','pahang','sabah','sarawak','labuan')),
  years text not null check (years in ('y0_2','y3_5','y6_10','y10p')),
  team text not null check (team in ('solo','assist','team')),
  price numeric not null check (price between 50 and 200000),
  lowest_accepted numeric check (lowest_accepted between 0 and 200000),
  lang text check (lang in ('en','ms','zh'))
);
alter table public.rate_submissions enable row level security;
drop policy if exists rate_submissions_anon_insert on public.rate_submissions;
create policy rate_submissions_anon_insert on public.rate_submissions for insert to anon with check (true);

-- 2. Report signups (email + explicit consent, PDPA)
create table if not exists public.rate_report_signups (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  lang text check (lang in ('en','ms','zh')),
  consent boolean not null check (consent)
);
alter table public.rate_report_signups enable row level security;
drop policy if exists rate_report_signups_anon_insert on public.rate_report_signups;
create policy rate_report_signups_anon_insert on public.rate_report_signups for insert to anon with check (true);

-- 3. Secret salt for hashing IPs. Random, generated once inside the database,
--    never in this file or the page. No API role can read it.
create table if not exists public.rate_secret (
  id int primary key default 1 check (id = 1),
  salt text not null
);
alter table public.rate_secret enable row level security;  -- no policies
revoke all on public.rate_secret from anon, authenticated;
insert into public.rate_secret (salt)
  values (replace(gen_random_uuid()::text || gen_random_uuid()::text, '-', ''))
  on conflict (id) do nothing;

-- 4. Flood guard log. Stores only a salted sha256 hash, never the raw IP. Kept 1 day.
create table if not exists public.rate_ip_hits (
  ip_hash text not null,
  hit_at timestamptz not null default now()
);
create index if not exists rate_ip_hits_hash_time on public.rate_ip_hits (ip_hash, hit_at);
alter table public.rate_ip_hits enable row level security;  -- no policies
revoke all on public.rate_ip_hits from anon, authenticated;

-- Limits:
--   per IP:  3 answers per hour
--   overall: 60 answers per hour, whatever the IP. This caps the damage if the
--            per-IP check is fooled by a forged header.
-- Client IP: cf-connecting-ip is set by Cloudflare and cannot be forged by the
--            visitor; x-forwarded-for is only a fallback.
create or replace function public.rate_guard() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  v_headers json := coalesce(nullif(current_setting('request.headers', true), ''), '{}')::json;
  v_ip text := coalesce(
    nullif(trim(v_headers ->> 'cf-connecting-ip'), ''),
    nullif(trim(split_part(v_headers ->> 'x-forwarded-for', ',', 1)), ''),
    'none');
  v_hash text := encode(sha256(convert_to((select salt from rate_secret where id = 1) || ':' || v_ip, 'UTF8')), 'hex');
begin
  if (select count(*) from rate_submissions where created_at > now() - interval '1 hour') >= 60 then
    raise exception 'rate limited';
  end if;
  if (select count(*) from rate_ip_hits where ip_hash = v_hash and hit_at > now() - interval '1 hour') >= 3 then
    raise exception 'rate limited';
  end if;
  insert into rate_ip_hits (ip_hash) values (v_hash);
  delete from rate_ip_hits where hit_at < now() - interval '1 day';
  return new;
end $$;
revoke all on function public.rate_guard() from public, anon, authenticated;

drop trigger if exists rate_submissions_guard on public.rate_submissions;
create trigger rate_submissions_guard before insert on public.rate_submissions
  for each row execute function public.rate_guard();

-- 5. Aggregates only. Returns null when the group has fewer than 5 answers.
--    Same category + state first; falls back to all of Malaysia.
create or replace function public.rate_stats(p_category text, p_state text, p_price numeric)
returns json language sql stable security definer set search_path = public as $$
  with loc as (select price from rate_submissions where category = p_category and state = p_state),
       nat as (select price from rate_submissions where category = p_category),
       pick as (
         select 'state'::text as scope, price from loc where (select count(*) from loc) >= 5
         union all
         select 'national', price from nat where (select count(*) from loc) < 5 and (select count(*) from nat) >= 5
       )
  select case when count(*) >= 5 then json_build_object(
    'scope', min(scope),
    'n',     count(*),
    'p10',   percentile_cont(0.10) within group (order by price),
    'p25',   percentile_cont(0.25) within group (order by price),
    'p50',   percentile_cont(0.50) within group (order by price),
    'p75',   percentile_cont(0.75) within group (order by price),
    'p90',   percentile_cont(0.90) within group (order by price),
    'pct',   round(100.0 * (count(*) filter (where price < p_price) + 0.5 * count(*) filter (where price = p_price)) / count(*))
  ) end
  from pick;
$$;
revoke all on function public.rate_stats(text, text, numeric) from public;
grant execute on function public.rate_stats(text, text, numeric) to anon;

commit;
