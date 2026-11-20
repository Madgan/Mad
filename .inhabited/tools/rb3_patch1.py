# Rebuild 3, patch 1: ticks on a clock (item 1), the language switch as a native checkbox (item 5),
# the desktop margin and lane (item 3). A record of what changed; it cannot be re-run on the patched file.
import io
p = '/home/user/Mad/.inhabited/designer/index.html'
s = io.open(p, encoding='utf-8').read()
def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (a[:90], s.count(a))
    s = s.replace(a, b)

# =====================================================================================================================
# ITEM 5: language. The switch is a native checkbox; with scripts off the stylesheet reads it with :has().
# =====================================================================================================================
rep('''/* ---------- language: a cut. Stacked containers keep the height of the longer language ---------- */
html[data-lang="zh"] .en,html[data-lang="en"] .zh{display:none}
.stack{display:grid}
.stack>.zh,.stack>.en{grid-area:1/1;display:block}
html[data-lang="zh"] .stack>.en,html[data-lang="en"] .stack>.zh{display:block;visibility:hidden}''',
'''/* ---------- language: a cut. Stacked containers keep the height of the longer language.
   English is on when the script says so (data-lang) or, with scripts off, when the switch in the top bar is checked:
   the switch is a native checkbox, and these rules read it with :has(). A browser without :has() gets the last rule. ---------- */
html[data-lang="zh"]:not(:has(#lang-en:checked)) .en{display:none}
html:is([data-lang="en"],:has(#lang-en:checked)) .zh{display:none}
.stack{display:grid}
.stack>.zh,.stack>.en{grid-area:1/1;display:block}
html[data-lang="zh"]:not(:has(#lang-en:checked)) .stack>.en{display:block;visibility:hidden}
html:is([data-lang="en"],:has(#lang-en:checked)) .stack>.zh{display:block;visibility:hidden}
@supports not selector(:has(*)){
  html[data-lang="zh"] .en{display:none}
  html[data-lang="zh"] .stack>.en{display:block;visibility:hidden}
  html[data-lang="zh"] .lt-zh{color:var(--text)}
}''')
rep('''.lang-toggle{height:44px;padding:6px 0;background:none;border:0;cursor:pointer}''',
'''.lang-toggle{position:relative;display:block;height:44px;padding:6px 0;cursor:pointer}
.lang-toggle input{position:absolute;inset:0;z-index:1;width:100%;height:100%;margin:0;padding:0;-webkit-appearance:none;appearance:none;background:none;border:0;border-radius:3px;cursor:pointer}''')
rep('''html[data-lang="en"] .lt-thumb{transform:translateX(36px)}''',
    '''html:is([data-lang="en"],:has(#lang-en:checked)) .lt-thumb{transform:translateX(36px)}''')
rep('''html[data-lang="zh"] .lt-zh,html[data-lang="en"] .lt-en{color:var(--text)}
.lang-toggle:active .lt-track{transform:translateY(1px)}''',
'''html[data-lang="zh"]:not(:has(#lang-en:checked)) .lt-zh{color:var(--text)}
html:is([data-lang="en"],:has(#lang-en:checked)) .lt-en{color:var(--text)}
.lang-toggle input:active+.lt-track{transform:translateY(1px)}''')
rep('''    <button class="lang-toggle" type="button" role="switch" aria-checked="false" aria-label="English">
      <span class="lt-track"><span class="lt-thumb"></span><span class="lt-zh">中文</span><span class="lt-en">EN</span></span>
    </button>''',
'''    <label class="lang-toggle"><input type="checkbox" id="lang-en" role="switch" aria-label="English" autocomplete="off"><span class="lt-track"><span class="lt-thumb"></span><span class="lt-zh">中文</span><span class="lt-en">EN</span></span></label>''')
rep('''var toggle=$('.lang-toggle'),thumb=$('.lt-thumb'),langBusy=false;''',
    '''var toggle=$('#lang-en'),thumb=$('.lt-thumb'),langBusy=false,WIDE=window.matchMedia?matchMedia('(min-width:900px)'):{matches:false};''')
rep('''    var r=e.getBoundingClientRect();if(!r.height||getComputedStyle(e).position==='sticky')return;''',
    '''    /* at 900 and up the notes of an episode stand in the margin at several heights; the lane is what is held */
    if(WIDE.matches&&e.classList.contains('notice')&&e.parentNode.classList.contains('tc'))return;
    var r=e.getBoundingClientRect();if(!r.height)return;''')
rep('''  toggle.setAttribute('aria-checked',l==='en'?'true':'false');''',
    '''  toggle.checked=l==='en';''')
rep('''toggle.addEventListener('click',function(){
  if(langBusy)return;var to=H.getAttribute('data-lang')==='zh'?'en':'zh';langBusy=true;
  run(thumb,to==='en'?[{transform:'translateX(0)'},{transform:'translateX(36px)'}]:[{transform:'translateX(36px)'},{transform:'translateX(0)'}],80,function(){setLang(to);langBusy=false});
});''',
'''/* The switch is a native checkbox, so it works with scripts off (the stylesheet reads :checked). With script the strings
   are cut on the frame the thumb stops, so the click's own change is cancelled and the state is written then. A change
   written inside the cancelled click would be undone by the browser, so the no-motion path writes it one task later. */
toggle.addEventListener('click',function(e){
  e.preventDefault();
  if(langBusy)return;var to=H.getAttribute('data-lang')==='zh'?'en':'zh',inClick=true,apply=function(){setLang(to);langBusy=false};langBusy=true;
  run(thumb,to==='en'?[{transform:'translateX(0)'},{transform:'translateX(36px)'}]:[{transform:'translateX(36px)'},{transform:'translateX(0)'}],80,function(){if(inClick)setTimeout(apply,0);else apply()});
  inClick=false;
});
toggle.addEventListener('keydown',function(e){if(e.key==='Enter')toggle.click()});''')
rep('''if(H.getAttribute('data-lang')==='en')setLang0('en');''',
    '''if(H.getAttribute('data-lang')==='en'||toggle.checked)setLang0('en');''')

# =====================================================================================================================
# ITEM 1: ticks on a clock
# =====================================================================================================================
SENT = '<span class="w-sent"><span class="zh">已发出</span><span class="en">Sent</span></span>'
OLD = '<span class="w-read"><span class="zh">已读</span><span class="en">Read</span></span><span class="tm tn" data-clock>23:41</span></span>'
NEW = SENT + '<span class="w-read"><span class="zh">已读</span><span class="en">Read</span></span><span class="tm tn">23:41</span></span>'
rep(OLD, NEW, 4)
rep('''.doc-bubble[data-state="file"] .st{visibility:hidden}
''', '')
rep('''   then the stub turns over, and the ticks come one at a time, each a good thumb's move apart. */
var forced=null,dropAn=null,UP1='translate(7.2em,11.3em)',DOWN='translate(7.2em,24.9em)';
function storyBeat(){
  var r=storyStage.getBoundingClientRect(),vh=window.innerHeight,em=r.width/35.8,S=r.top;
  var SD=Math.max(vh-8-61.1*em,64-6.3*em),SS=Math.min(SD-50,vh-12-66.1*em),d=clamp(vh*.09,56,84);
  return {tear:clamp((SD+114-S)/90,0,1),drop:S<=SD,filed:S<=SD-30,tick:S<=SS-2*d?3:S<=SS-d?2:S<=SS?1:0};
}
function story(){
  var draft=!state.rates.length,b=draft?{tear:0,drop:false,filed:false,tick:0}:forced?forced:RM?{tear:1,drop:true,filed:true,tick:3}:storyBeat();
  storyStage.classList.toggle('is-draft',draft);
  var ch=latch('drop',b.drop);
  if(ch!==0&&dropAn){var a0=dropAn;dropAn=null;a0.cancel()}
  if(b.drop){
    leaf.style.transform=DOWN;
    if(ch===1)dropAn=run(leaf,[{transform:UP1},{transform:'translate(7.2em,25.1em)',offset:.9},{transform:DOWN}],177,function(){dropAn=null;story()});
  }else{
    leaf.style.transform='translate('+(7.2*b.tear).toFixed(3)+'em,11.3em)';
    if(ch===-1)run(leaf,[{transform:DOWN},{transform:UP1}],140);
  }
  var st=!b.drop||dropAn?'empty':b.tick===0?'file':b.tick===1?'sent':b.tick===2?'delivered':'read';''',
'''   then the stub turns over.
   The receipt is not tied to the thumb. Its clock starts on the frame the leaf lands: one grey tick and "sent" on that
   frame, two grey and "delivered" 260 ms later, two blue and "read" at 520 ms, each a cut. Going back above the drop
   takes the leaf out of the message and all three with it. Where the drop is not played (reduced motion, a page opened
   below it) the receipt stands at read. */
var forced=null,dropAn=null,UP1='translate(7.2em,11.3em)',DOWN='translate(7.2em,24.9em)',tick=3,tickT=[],TICK=260;
function storyBeat(){
  var r=storyStage.getBoundingClientRect(),vh=window.innerHeight,em=r.width/35.8,S=r.top;
  var SD=Math.max(vh-8-61.1*em,64-6.3*em);
  return {tear:clamp((SD+114-S)/90,0,1),drop:S<=SD,filed:S<=SD-30};
}
function tickStop(){clearTimeout(tickT[0]);clearTimeout(tickT[1]);tickT=[]}
function landed(){
  dropAn=null;tickStop();tick=1;
  tickT=[setTimeout(function(){tick=2;story()},TICK),setTimeout(function(){tick=3;story()},2*TICK)];
  story();
}
function story(){
  var draft=!state.rates.length,b=draft?{tear:0,drop:false,filed:false}:forced?forced:RM?{tear:1,drop:true,filed:true}:storyBeat();
  storyStage.classList.toggle('is-draft',draft);
  var ch=latch('drop',b.drop);
  if(ch!==0&&dropAn){var a0=dropAn;dropAn=null;a0.cancel()}
  if(b.drop){
    leaf.style.transform=DOWN;
    if(ch===1){
      tickStop();
      if(RM||BOOT||!CAN)tick=3;
      else{tick=0;dropAn=run(leaf,[{transform:UP1},{transform:'translate(7.2em,25.1em)',offset:.9},{transform:DOWN}],177,landed)}
    }
  }else{
    tickStop();tick=0;
    leaf.style.transform='translate('+(7.2*b.tear).toFixed(3)+'em,11.3em)';
    if(ch===-1)run(leaf,[{transform:DOWN},{transform:UP1}],140);
  }
  var tk=forced&&forced.tick?forced.tick:tick;
  var st=!b.drop||dropAn||!tk?'empty':tk===1?'sent':tk===2?'delivered':'read';''')
rep('''var ticking=false;
function frame(){
  ticking=false;
  story();month(RM?1:prog(report,.8,.36));if(!RM)sort(prog(importStage,.75,.33));
  cutGround();stamps();
}''',
'''/* The four other messages he sends (report, old files, token, plans). Each stands at one grey tick and "sent" until its
   receipt, the last line of the attachment, has been wholly on screen for 260 ms; then it is cut to two blue and "read"
   with the minute, and stays read. A receipt that is already on or above the screen when the page opens, or that has
   gone past the top unseen, is read. Reduced motion and no script: read from the first frame. */
var rcpts=$$('.msg.attach[data-state]').map(function(m){return {m:m,st:$('.st',m),tm:$('.st .tm',m),t:0,done:false}});
function rcptRead(q){q.done=true;q.m.setAttribute('data-state','read');q.tm.textContent=hm(new Date())}
function receipts(){
  var vh=window.innerHeight;
  rcpts.forEach(function(q){
    if(q.done||q.t)return;
    var r=q.st.getBoundingClientRect();
    if(RM){if(r.top<vh&&r.bottom>0){q.done=true;q.tm.textContent=hm(new Date())}return}
    if(r.bottom<52||(BOOT&&r.top<vh)){rcptRead(q);return}
    if(r.top>=52&&r.bottom<=vh)q.t=setTimeout(function(){rcptRead(q)},TICK);
  });
}
if(!RM)rcpts.forEach(function(q){q.m.setAttribute('data-state','sent')});
var ticking=false;
function frame(){
  ticking=false;
  story();month(RM?1:prog(report,.8,.36));if(!RM)sort(prog(importStage,.75,.33));
  cutGround();stamps();receipts();
}''')

# =====================================================================================================================
# ITEM 3: desktop. The lane moves under the stage (right), so the sheet and the landed leaf share their left edge;
# the generic headings stay screen-reader-only at every width; each episode's note is cut into the facts it holds,
# each standing in the margin at the height of the thing it is about, on a perforated leader that runs to the lane.
# =====================================================================================================================
def note(parts):
    out = '<p class="notice">'
    for i, (zh, en) in enumerate(parts):
        last = i == len(parts) - 1
        out += '<span class="nt">' + ('<span class="ck" data-stamp></span>' if i == 0 else '') + '<span class="zh">' + zh + '</span><span class="en">' + en + ('' if last else ' ') + '</span></span>'
    return out + '</p>'
rep('''    <p class="notice"><span class="ck" data-stamp></span><span class="zh">撕下来的这一张就是 PDF。发给客户这一步，是你在自己的聊天里做的：那两个勾是聊天软件的，不是 SIS 的。存根留在客户页，跟之前的单排在一起；公司客户和个人客户分开放。</span><span class="en">This sheet tears off as its PDF. Sending it is something you do in your own chat: those ticks belong to your chat app, not to SIS. Its stub stays on your client's page, next to earlier invoices; company and individual clients are kept apart.</span></p>''',
    '    ' + note([
        ('存根留在客户页，跟之前的单排在一起；公司客户和个人客户分开放。', "The stub stays on your client's page, next to earlier invoices; company and individual clients are kept apart."),
        ('撕下来的这一张就是 PDF。', 'The sheet that tears off is its PDF.'),
        ('发给客户这一步，是你在自己的聊天里做的：那两个勾是聊天软件的，不是 SIS 的。', 'Sending it is something you do in your own chat: those ticks belong to your chat app, not to SIS.')]))
rep('''    <p class="notice"><span class="ck" data-stamp></span><span class="zh">销售、开销、净利，按月看；点一个月，看那个月。客户有排名。要交给会计，导出 CSV。</span><span class="en">Sales, expenses and net profit, month by month; tap a month to read it. Clients are ranked. For your accountant, export a CSV.</span></p>''',
    '    ' + note([
        ('销售、开销、净利，按月看；点一个月，看那个月。', 'Sales, expenses and net profit, month by month; tap a month to read it.'),
        ('客户有排名。', 'Clients are ranked.'),
        ('要交给会计，导出 CSV。', 'For your accountant, export a CSV.')]))
rep('''    <p class="notice"><span class="ck" data-stamp></span><span class="zh">旧发票、收据、照片都能上传：PDF、JPG、PNG，一批最多 50 个。AI 读出客户资料；你核对并批准之前，什么都不保存。</span><span class="en">Upload old invoices, receipts or photos: PDF, JPG, PNG, up to 50 a batch. AI reads client details; nothing is saved until you review and approve.</span></p>''',
    '    ' + note([
        ('旧发票、收据、照片都能上传：PDF、JPG、PNG，一批最多 50 个。', 'Upload old invoices, receipts or photos: PDF, JPG, PNG, up to 50 a batch.'),
        ('AI 读出客户资料。', 'AI reads client details.'),
        ('你核对并批准之前，什么都不保存。', 'Nothing is saved until you review and approve.')]))
rep('''    <p class="notice"><span class="ck" data-stamp></span><span class="zh">Pro 可以接上你自己的 AI，走 API / MCP。令牌由获授权的工作室成员创建，随时可以撤销。AI 只在获准的工作室范围内做事。</span><span class="en">On Pro, connect your own AI through API / MCP. Authorised studio members create each token and can revoke it at any time. Your AI only works inside its permitted studio scope.</span></p>''',
    '    ' + note([
        ('Pro 可以接上你自己的 AI，走 API / MCP。', 'On Pro, connect your own AI through API / MCP.'),
        ('令牌由获授权的工作室成员创建，随时可以撤销。', 'Authorised studio members create each token and can revoke it at any time.'),
        ('AI 只在获准的工作室范围内做事。', 'Your AI only works inside its permitted studio scope.')]))
rep('''    <p class="notice"><span class="ck" data-stamp></span><span class="zh">两个方案都先免费试用 7 天。</span><span class="en">Both plans start with a 7-day free trial.</span></p>''',
    '    ' + note([('两个方案都先免费试用 7 天。', 'Both plans start with a 7-day free trial.')]))

rep('''/* ---------- 900 and up. The first screen: the claim on the left, the stage on the right with room for the thread to run,
   and the transport and both pickers on one console under the sheet. Below it the thread is a 480 px lane left of
   centre and the page's own notes stand in the right margin, beside the thing they describe. No sequence changes its timing. ---------- */''',
'''/* ---------- 900 and up. Two columns all the way down: the page's own voice on the left (the claim and the trial button,
   then the notes), the thread on the right (the stage, then a 480 px lane that ends on the stage's right edge). The sheet
   and the leaf that lands in his reply share their left edge. The transport and both pickers are one console under the
   stage. Each note stands at the height of the thing it is about, on a perforated leader that runs across to the lane.
   No sequence changes its timing. ---------- */''')
rep('''  .hero-stage{margin:0;font-size:13px}''',
    '''  .hero-stage{margin:0;font-size:13px}
  .hero-stage .invoice-sheet{right:1.5em}''')
rep('''  .tc{display:grid;grid-template-columns:minmax(0,480px) minmax(0,1fr);column-gap:72px;align-items:start}
  .tc>*{grid-column:1}
  .tc>h2{position:static;width:auto;height:auto;overflow:visible;clip-path:none;white-space:normal;grid-column:2;grid-row:1 / span 2;align-self:start;font:800 30px/1.2 var(--f-page);font-variation-settings:"opsz" 30;letter-spacing:-.01em}
  .tc.nh>h2{grid-row:1}
  .tc>.notice{grid-column:2;grid-row:3 / span 8;position:sticky;top:84px;width:auto;max-width:27rem;margin:6px 0 0;padding:14px 0 0;border-radius:0;font-size:16px;line-height:1.65;background:repeating-linear-gradient(to right,var(--meta) 0 4px,transparent 4px 8px) top / 100% 1px no-repeat}
  .tc.nh>.notice{grid-row:2 / span 8}
  .tc>.notice .ck{display:block;margin:0 0 6px;font-size:13px}
  .date-chip{left:calc(50% - min(1120px,100% - 64px) / 2 + 240px)}''',
'''  .tc{--gap:clamp(44px,5.6vw,72px);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,480px);column-gap:var(--gap);align-items:start}
  .tc>*{grid-column:2}
  /* the notes: one grid in the margin, in the row of the attachment. Its first track is the distance down to the first
     thing a note is about; each later track is at least the distance to the next, and grows if a note runs long. */
  .tc>.notice{grid-column:1;grid-row:3;display:grid;grid-template-rows:var(--rows,0 auto);width:auto;max-width:none;margin:0;padding:0;border-radius:0;background:none;font-size:16px;line-height:1.65}
  .tc.nh>.notice{grid-row:2}
  .nt{position:relative;display:block;padding:11px max(0px,100% - 27rem) 16px 0}
  .nt::before{content:"";position:absolute;left:0;right:calc(-1 * var(--gap));top:0;height:1px;background:repeating-linear-gradient(to right,var(--meta) 0 4px,transparent 4px 8px)}
  .nt:nth-child(1){grid-row:2}.nt:nth-child(2){grid-row:3}.nt:nth-child(3){grid-row:4}
  .nt .ck{display:block;margin:0 0 4px;font-size:13px}
  #story .notice{--rows:84px minmax(242px,auto) minmax(520px,auto) auto}
  #reports .notice{--rows:88px minmax(280px,auto) minmax(140px,auto) auto}
  #import .notice{--rows:39px minmax(142px,auto) minmax(306px,auto) auto}
  #pro .notice{--rows:36px minmax(86px,auto) minmax(165px,auto) auto}
  #pricing .notice{--rows:36px auto}
  .date-chip{left:calc(50% + min(1120px,100% - 64px) / 2 - 240px)}''')
rep('''  footer .col{display:grid;grid-template-columns:minmax(0,480px) minmax(0,1fr);column-gap:72px;align-items:start}
  footer .trust-line{grid-column:1;grid-row:1 / span 2}
  footer .support-whatsapp,footer .legal{grid-column:2;margin-top:0}''',
'''  footer .col{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,480px);column-gap:clamp(44px,5.6vw,72px);align-items:start}
  footer .trust-line{grid-column:2;grid-row:1 / span 2}
  footer .support-whatsapp,footer .legal{grid-column:1;margin-top:0}''')
io.open(p, 'w', encoding='utf-8').write(s)
print('patched', len(s.encode('utf-8')), 'bytes')
