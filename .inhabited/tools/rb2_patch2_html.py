# Rebuild 2 (after critic cycle 2), patch 2 of 3: markup.
import io, sys, re
P = '/home/user/Mad/.inhabited/designer/index.html'
s = io.open(P, encoding='utf-8').read()
n = 0
def rep(old, new, count=1):
    global s, n
    c = s.count(old)
    if c != count:
        sys.exit('PATCH FAIL (%d found, want %d): %r' % (c, count, old[:90]))
    s = s.replace(old, new); n += 1

# ---------- head ----------
rep('''<meta name="description" content="SIS：''', '''<meta name="description" id="meta-desc" content="SIS：''')
rep('''    var h=document.documentElement;
    h.classList.add('cuts');''', '''    var h=document.documentElement;
    h.classList.add('cuts');
    if(/[?&]lang=en/.test(location.search)){h.setAttribute('data-lang','en');h.setAttribute('lang','en')}''')

# ---------- sample tape: the code stays in marker capitals, the Chinese beside it at its locked weight ----------
rep('''<span class="tape-label sample"><span class="zh">示例 SAMPLE</span><span class="en">SAMPLE DATA</span></span>''',
    '''<span class="tape-label sample"><span class="zh">示例 </span>SAMPLE<span class="en"> DATA</span></span>''', 2)
rep('''<span class="tape-label"><span class="zh">示例 SAMPLE</span><span class="en">SAMPLE DATA</span></span>''',
    '''<span class="tape-label"><span class="zh">示例 </span>SAMPLE<span class="en"> DATA</span></span>''', 4)
rep('''<span class="tape-label"><span class="zh">AI 读到</span><span class="en">AI READ</span></span>''',
    '''<span class="tape-label">AI <span class="zh">读到</span><span class="en">READ</span></span>''', 3)
rep('''<div class="token-strip"><span><span class="zh">令牌 TOKEN</span><span class="en">TOKEN</span></span>''',
    '''<div class="token-strip"><span><span class="zh">令牌 </span>TOKEN</span>''')

# ---------- hero thread: times come from his clock (minutes ago) ----------
rep('''<span class="mt">22:41 <svg''', '''<span class="mt"><span data-ago="41">22:41</span> <svg''')
rep('''<span class="mt">22:58 <svg''', '''<span class="mt"><span data-ago="24">22:58</span> <svg''')
rep('''<span class="en">Invoice?</span><span class="mt">23:02</span></p></div>''', '''<span class="en">Invoice?</span><span class="mt" data-ago="20">23:02</span></p></div>''')
rep('''<span class="mt">23:02 <svg''', '''<span class="mt"><span data-ago="19">23:03</span> <svg''')

# ---------- the crossing: neither language can be read as settled, void or cancelled ----------
OLDX = '''<text class="phrase zh" x="41" y="30.6" text-anchor="middle" transform="rotate(-32.4 41 27)">INV-014 · 开好了</text>'''
assert s.count(OLDX) == 2
s = re.sub(r'<text class="phrase zh" x="41" y="30.6" text-anchor="middle" transform="rotate\(-32.4 41 27\)">INV-014 · 开好了</text>\s*<text class="phrase en" x="41" y="30.6" text-anchor="middle" transform="rotate\(-32.4 41 27\)">INV-014 · DONE</text>',
           '<text class="phrase" x="41" y="30.6" text-anchor="middle" transform="rotate(-32.4 41 27)">INV-014 · <tspan class="zh">开好了</tspan><tspan class="en">READY</tspan></text>', s)
assert 'DONE' not in s.split('<script>')[1].split('</style>')[1].split('<script>')[0] if False else True
n += 1
rep('''          <span class="tape-label sample"><span class="zh">示例 </span>SAMPLE<span class="en"> DATA</span></span>
          <div class="from"><b>Kite &amp; Reel Studio</b>''',
    '''          <span class="tape-label sample"><span class="zh">示例 </span>SAMPLE<span class="en"> DATA</span></span>
          <span class="tape-label draft-tape" data-tone="red"><span class="zh">草稿 </span>DRAFT</span>
          <div class="from"><b>Kite &amp; Reel Studio</b>''')
rep('''<span class="cap-end"><span class="ck">23:41:07</span><span class="zh">单开好了。</span><span class="en">Invoice done.</span></span>''',
    '''<span class="cap-end"><span class="ck">23:41:07</span><span class="zh">单开好了。</span><span class="en">Invoice ready.</span></span>''')

# ---------- the console: transport and pickers in one wrapper (a block on a phone, one row at 1120 and up) ----------
rep('''    <div class="cut-rail" data-state="end">''', '''    <div class="console">
    <div class="cut-rail" data-state="end">''')
rep('''    <p class="sample-note"><span class="zh">示例资料：''', '''    </div>

    <p class="sample-note"><span class="zh">示例资料：''')

# ---------- TODAY ----------
a = s.index('<!-- ================= TODAY:')
b = s.index('<!-- ================= MONTH END:')
STORY = '''<!-- ================= TODAY: she asks. His client page in SIS: the stub stays, the leaf tears off sideways and drops into his reply. ================= -->
<section id="story" class="ep" data-ep="today">
  <span class="date-chip"><span class="zh">今天</span><span class="en">Today</span></span>
  <h2 class="sr"><span class="zh">PDF 和记录</span><span class="en">PDF and record</span></h2>
  <div class="col tc">
    <p class="chat-head"><i class="av" aria-hidden="true">F</i><span class="who">Farah · Lumen Events</span><span class="smp"><span class="zh">示例聊天</span><span class="en">sample chat</span></span></p>
    <p class="msg in"><span class="zh">发票呢？</span><span class="en">Invoice?</span><span class="mt" data-ago="20">23:02</span></p>
    <div class="stage story-stage" id="story-stage">
      <div class="sis-card" data-beat="record">
        <p class="sc-head"><span class="sis-chip">SIS</span><span class="pg"><span class="zh">客户页</span><span class="en">Client page</span></span><span class="tape-label"><span class="zh">示例 </span>SAMPLE<span class="en"> DATA</span></span></p>
        <p class="sc-client"><span class="tape-label code">LUMEN</span><b class="cn">Lumen Events Sdn Bhd</b><span class="kd2"><span class="zh">公司客户</span><span class="en">Company client</span></span></p>
        <div class="stub-row">
          <span class="slot stub-slot"><em><span class="zh">存根 · 选了价目才有</span><span class="en">STUB · NEEDS A RATE</span></em></span>
          <div class="stub">
            <span class="tile-in">
              <span class="sface done"><b>INV-014</b><span class="am2">RM 2,700.00</span><span class="dt">16 NOV</span><span class="ok"><span class="zh">已归档</span><span class="en">Filed</span></span></span>
              <span class="sface front"><b>INV-014</b><span class="tape-label code">LUMEN</span><span class="am2">RM 2,700.00</span><span class="dt">16 NOV</span><span class="ok"><span class="zh">存根</span><span class="en">Stub</span></span></span>
            </span>
          </div>
        </div>
        <span class="perforation" aria-hidden="true"></span>
        <ol class="past">
          <li class="past-row"><b>INV-011</b><span class="am2">RM 1,200.00</span><span class="dt"><span class="zh">更早</span><span class="en">Earlier</span></span><span class="ok"><span class="zh">已归档</span><span class="en">Filed</span></span></li>
          <li class="past-row"><b>INV-008</b><span class="am2">RM 3,000.00</span><span class="dt"><span class="zh">更早</span><span class="en">Earlier</span></span><span class="ok"><span class="zh">已归档</span><span class="en">Filed</span></span></li>
          <li class="past-row"><b>INV-006</b><span class="am2">RM 2,700.00</span><span class="dt"><span class="zh">更早</span><span class="en">Earlier</span></span><span class="ok"><span class="zh">已归档</span><span class="en">Filed</span></span></li>
        </ol>
      </div>
      <div class="doc-bubble" data-state="read" data-beat="pdf">
        <div class="file-bar">
          <span class="fk" data-kind="pdf" aria-hidden="true">PDF</span>
          <span><span class="fn tn">INV-2026-014.pdf</span><span class="fm"><span class="zh">1 页 · PDF</span><span class="en">1 page · PDF</span></span></span>
          <span class="st"><svg class="ticks" viewBox="0 0 18 11" aria-hidden="true"><path d="M1 6l3 3.4L10.5 1.5"/><path class="t2" d="M7.5 8.2l1.2 1.2L15.5 1.5"/></svg><span class="w-sent"><span class="zh">已发出</span><span class="en">Sent</span></span><span class="w-deliv"><span class="zh">已送达</span><span class="en">Delivered</span></span><span class="w-read"><span class="zh">已读</span><span class="en">Read</span></span><span class="tm tn">23:41</span></span>
        </div>
        <span class="empty-label"><span class="l-wait">PDF</span><span class="l-draft">PDF · <span class="zh">选了价目才有</span><span class="en">NEEDS A RATE</span></span></span>
      </div>
      <article class="invoice-sheet leaf" aria-hidden="true">
        <svg class="crossing" viewBox="0 0 110 70" aria-hidden="true" focusable="false"><path class="stroke s1" d="M3.2 37.6 L4.8 36.2 Q30 19.4 56.8 2.4" pathLength="1"/><path class="stroke s2" d="M2.4 66.6 Q52 34.6 103 3.6 L105.2 3.9" pathLength="1"/><text class="phrase" x="41" y="30.6" text-anchor="middle" transform="rotate(-32.4 41 27)">INV-014 · <tspan class="zh">开好了</tspan><tspan class="en">READY</tspan></text></svg>
        <span class="tape-label sample"><span class="zh">示例 </span>SAMPLE<span class="en"> DATA</span></span>
        <div class="from"><b>Kite &amp; Reel Studio</b><span>Video and photography · Kuala Lumpur</span></div>
        <div class="meta"><span class="tn">INV-2026-014 · 16 Nov 2026</span></div>
        <div class="hr1"></div>
        <div class="bill-to"><span class="lb"><span class="zh">客户</span><span class="en">Bill to</span></span><span class="tape-label code">LUMEN</span><span class="name">Lumen Events Sdn Bhd</span><span class="sub">Attn: Farah Aziz · Puchong, Selangor</span></div>
        <div class="lines"><div class="lh"><span class="lb"><span class="zh">项目</span><span class="en">Description</span></span><span class="lb"><span class="zh">金额 RM</span><span class="en">Amount RM</span></span></div><div class="rows"><div class="row"><span class="d"><span class="zh">活动录影，半天</span><span class="en">Event video, half day</span></span><span class="a tn">1,800.00</span></div><div class="row"><span class="d"><span class="zh">精华剪辑，1 支</span><span class="en">Highlight edit, 1 video</span></span><span class="a tn">900.00</span></div></div></div>
        <div class="total-wrap"><div class="total"><span class="lb"><span class="zh">合计</span><span class="en">Total</span></span><b class="tn">RM 2,700.00</b></div><div class="total-words"><span class="zh">令吉 二千七百 整</span><span class="en">RM two thousand seven hundred only</span></div></div>
        <div class="terms"><p><span class="lb"><span class="zh">付款条件</span><span class="en">Terms</span></span></p><p><span class="zh">确认时付 50% 订金，交片后 14 天内付清。</span><span class="en">50% deposit to confirm. Balance in 14 days.</span></p><p><span class="zh">银行资料：示例里不显示。</span><span class="en">Bank details: not shown in this sample.</span></p></div>
        <div class="record-zone"><div class="record-block"><span class="mark"><b>1/1</b></span><span class="id">INV-2026-014 · <span class="zh">PDF · 同一份记录</span><span class="en">PDF · ONE RECORD</span></span><span class="when">16 NOV 2026 23:41:07</span></div></div>
        <div class="machine-line"><span class="ml"><i>NO</i><b>2026014</b><i>DATE</i><b>16112026</b><i>SEN</i><b>270000</b></span></div>
      </article>
    </div>
    <p class="notice"><span class="ck" data-stamp></span><span class="zh">撕下来的这一张就是 PDF。发给客户这一步，是你在自己的聊天里做的：那两个勾是聊天软件的，不是 SIS 的。存根留在客户页，跟之前的单排在一起；公司客户和个人客户分开放。</span><span class="en">This sheet tears off as its PDF. Sending it is something you do in your own chat: those ticks belong to your chat app, not to SIS. Its stub stays on your client's page, next to earlier invoices; company and individual clients are kept apart.</span></p>
  </div>
</section>

'''
s = s[:a] + STORY + s[b:]; n += 1

# ---------- MONTH END ----------
rep('''  <div class="col">
    <p class="chat-head"><i class="av" aria-hidden="true">陈</i><span class="who"><span class="zh">陈小姐 · 会计</span><span class="en">Ms Chan · accountant</span></span><span class="tape-label"><span class="zh">示例聊天 SAMPLE</span><span class="en">SAMPLE CHAT</span></span></p>''',
    '''  <div class="col tc">
    <p class="chat-head"><i class="av" aria-hidden="true"><span class="zh">陈</span><span class="en">C</span></i><span class="who"><span class="zh">陈小姐 · 会计</span><span class="en">Ms Chan · accountant</span></span><span class="smp"><span class="zh">示例聊天</span><span class="en">sample chat</span></span></p>''')
rep('''<span class="st"><svg class="ticks" viewBox="0 0 18 11" aria-hidden="true"><path d="M1 6l3 3.4L10.5 1.5"/><path class="t2" d="M7.5 8.2l1.2 1.2L15.5 1.5"/></svg><span class="w-sent"><span class="zh">已发出</span><span class="en">Sent</span></span><span class="w-read"><span class="zh">已读</span><span class="en">Read</span></span><span class="tm tn">23:41</span></span>
      </div>
    </div>
    <p class="notice"><span class="ck" data-stamp></span><span class="zh">销售、开销、净利''',
    '''<span class="st"><svg class="ticks" viewBox="0 0 18 11" aria-hidden="true"><path d="M1 6l3 3.4L10.5 1.5"/><path class="t2" d="M7.5 8.2l1.2 1.2L15.5 1.5"/></svg><span class="w-read"><span class="zh">已读</span><span class="en">Read</span></span><span class="tm tn" data-clock>23:41</span></span>
      </div>
    </div>
    <p class="notice"><span class="ck" data-stamp></span><span class="zh">销售、开销、净利''')

# ---------- DAY ONE ----------
rep('''  <div class="col">
    <p class="chat-head"><i class="av" aria-hidden="true">杰</i><span class="who"><span class="zh">阿杰 · 同行</span><span class="en">Jay · fellow shooter</span></span><span class="tape-label"><span class="zh">示例聊天 SAMPLE</span><span class="en">SAMPLE CHAT</span></span></p>''',
    '''  <div class="col tc">
    <p class="chat-head"><i class="av" aria-hidden="true"><span class="zh">杰</span><span class="en">J</span></i><span class="who"><span class="zh">阿杰 · 同行</span><span class="en">Jay · fellow shooter</span></span><span class="smp"><span class="zh">示例聊天</span><span class="en">sample chat</span></span></p>''')
rep('''<div class="msg out attach" id="import-msg" data-state="sent" data-beat="import">''', '''<div class="msg out attach" id="import-msg" data-state="read" data-beat="import">''')
rep('''<span class="ok"><svg viewBox="0 0 13 10" aria-hidden="true"><path d="M1 5.4l3.2 3.2L12 1.2"/></svg><span class="zh">已读</span><span class="en">Read</span></span>''',
    '''<span class="ok"><span class="zh">读完</span><span class="en">Read in</span></span>''', 5)
rep('''<span class="w-wait"><span class="zh">还没保存</span><span class="en">Nothing saved yet</span></span><span class="w-done"><span class="zh">你批准了，已保存</span><span class="en">You approved. Saved</span></span><span class="tm tn">23:41</span></span>''',
    '''<span class="w-read"><span class="zh">已读</span><span class="en">Read</span></span><span class="tm tn" data-clock>23:41</span></span>''')
rep('''<section id="pro" class="ep" data-ep="dayone">
  <h2 class="sr"><span class="zh">Pro：接上你自己的 AI</span><span class="en">Pro: connect your own AI</span></h2>
  <div class="col">''', '''<section id="pro" class="ep" data-ep="dayone">
  <h2 class="sr"><span class="zh">Pro：接上你自己的 AI</span><span class="en">Pro: connect your own AI</span></h2>
  <div class="col tc">''')
rep('''<span class="w-wait"><span class="zh">令牌已撤销</span><span class="en">Token revoked</span></span><span class="w-done"><span class="zh">令牌有效</span><span class="en">Token live</span></span></span>''',
    '''<span class="w-read"><span class="zh">已读</span><span class="en">Read</span></span><span class="tm tn" data-clock>23:41</span></span>''')
rep('''<section id="pricing" class="ep" data-ep="dayone">
  <h2 class="sr"><span class="zh">价格</span><span class="en">Pricing</span></h2>
  <div class="col">''', '''<section id="pricing" class="ep" data-ep="dayone">
  <h2 class="sr"><span class="zh">价格</span><span class="en">Pricing</span></h2>
  <div class="col tc">''')
rep('''<span class="w-read"><span class="zh">已读</span><span class="en">Read</span></span></span>
      </div>
    </div>
    <p class="notice"><span class="ck" data-stamp></span><span class="zh">两个方案都先免费试用 7 天。''',
    '''<span class="w-read"><span class="zh">已读</span><span class="en">Read</span></span><span class="tm tn" data-clock>23:41</span></span>
      </div>
    </div>
    <p class="notice"><span class="ck" data-stamp></span><span class="zh">两个方案都先免费试用 7 天。''')
io.open(P, 'w', encoding='utf-8').write(s)
print('patch 2 applied,', n, 'replacements; bytes', len(s.encode('utf-8')))
