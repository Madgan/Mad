# Rebuild 2 (after critic cycle 2), patch 1 of 3: stylesheet. Applies exact one-for-one replacements to designer/index.html.
import io, sys
P = '/home/user/Mad/.inhabited/designer/index.html'
s = io.open(P, encoding='utf-8').read()
n = 0
def rep(old, new, count=1):
    global s, n
    c = s.count(old)
    if c != count:
        sys.exit('PATCH FAIL (%d found, want %d): %r' % (c, count, old[:90]))
    s = s.replace(old, new); n += 1

# ---------- grounds: three nights that differ in hue, each one a cut ----------
rep('''body[data-ep="month"]{--night:#081530}
body[data-ep="dayone"]{--night:#1B1208}
.ep[data-ep="month"]{background-color:#081530}
.ep[data-ep="dayone"],footer{background-color:#1B1208}
.cuts .ep,.cuts footer{background-color:transparent}''',
'''body[data-ep="month"]{--night:#0A1B4A}
body[data-ep="dayone"]{--night:#2A1606}
.ep[data-ep="month"]{background-color:#0A1B4A}
.ep[data-ep="dayone"],footer{background-color:#2A1606}
.cuts .ep,.cuts footer{background-color:transparent}''')
rep('''p,h1,h2,h3,ul,ol,dl,dd{margin:0;padding:0}''', '''p,h1,h2,h3,ul,ol,dl,dd{margin:0;padding:0}
b{font-weight:700}''')

# ---------- language block: Chinese weights as locked (700 headline, 500 controls, thread and product, 400 page copy) ----------
rep('''html[data-lang="zh"] .stack>.en,html[data-lang="en"] .stack>.zh{display:block;visibility:hidden}''',
'''html[data-lang="zh"] .stack>.en,html[data-lang="en"] .stack>.zh{display:block;visibility:hidden}
.zh,.lt-zh{font-weight:500}
h1 .zh{font-weight:700}
.hero-sub .zh,.sample-note .zh,.pk-hint .zh,.pk-label>span .zh,.hint .zh,.notice .zh,.plan ul.zh,.price>span .zh,footer .zh,.smp .zh{font-weight:400}''')

# ---------- top bar ----------
rep('''.lt-track{position:relative;display:grid;grid-template-columns:36px 36px;width:72px;height:32px;align-items:center;justify-items:center;box-shadow:inset 0 0 0 1px var(--meta);border-radius:3px;font:600 12px/1 var(--f-ui)}''',
    '''.lt-track{position:relative;display:grid;grid-template-columns:36px 36px;width:72px;height:32px;align-items:center;justify-items:center;box-shadow:inset 0 0 0 1px var(--meta);border-radius:3px;font:600 12px/1 var(--f-page)}''')
rep('''html[data-lang="zh"] .lt-zh,html[data-lang="en"] .lt-en{color:var(--text);font-weight:700}''',
    '''html[data-lang="zh"] .lt-zh,html[data-lang="en"] .lt-en{color:var(--text)}''')
rep('''.signin{min-height:44px;min-width:44px;display:flex;align-items:center;justify-content:center;padding:0 2px;font-weight:500;font-size:14px;text-decoration:none;white-space:nowrap}''',
    '''.signin{min-height:44px;min-width:44px;display:flex;align-items:center;justify-content:center;padding:0 2px;font-weight:600;font-size:14px;text-decoration:none;white-space:nowrap}''')
rep('''.cta-trial{display:flex;align-items:center;justify-content:center;height:52px;background:var(--t-green);color:var(--marker);font:700 17px/1 var(--f-page);''',
    '''.cta-trial{display:flex;align-items:center;justify-content:center;height:52px;background:var(--t-green);color:var(--marker);font:600 17px/1 var(--f-page);''')
rep('''.cta-compact{position:relative;width:84px;height:36px;font-size:13px}
.cta-compact::after{content:"";position:absolute;inset:-4px 0}''',
    '''.cta-compact{width:84px;height:44px;font-size:13px}''')

# ---------- thread furniture ----------
rep('''.chat-head .tape-label{margin-left:auto}''',
    '''.chat-head .smp{margin-left:auto;font-weight:400;font-size:12px;color:var(--meta)}
/* the chip of the episode he is in is lit: the cut has a title card */
body[data-ep="today"] #story .date-chip,body[data-ep="month"] #reports .date-chip,body[data-ep="dayone"] #import .date-chip{background:var(--sheet);color:var(--ink)}''')
rep('''.notice{width:fit-content;max-width:min(100%,21.5rem);margin:14px auto 0;padding:7px 12px 8px;background:#05090B;border-radius:8px;font:400 13px/1.6 var(--f-ui);color:var(--text)}''',
    '''.notice{width:fit-content;max-width:min(100%,21.5rem);margin:14px auto 0;padding:7px 12px 8px;background:#05090B;border-radius:8px;font:400 13px/1.6 var(--f-page);color:var(--text)}''')
rep('''.st .w-sent,.st .w-deliv,.st .w-read,.st .tm{display:none}
[data-state="sent"] .st .w-sent,[data-state="delivered"] .st .w-deliv,[data-state="read"] .st .w-read,[data-state="read"] .st .tm{display:inline}''',
    '''.st .w-sent,.st .w-deliv,.st .w-read,.st .tm{display:none}
[data-state="sent"] .st .w-sent,[data-state="delivered"] .st .w-deliv,[data-state="read"] .st .w-read,[data-state="read"] .st .tm{display:inline}
[data-state="delivered"] .doc-tm,[data-state="sent"] .doc-tm{display:none}''')

# ---------- the smear: thin bars along the travel, text clipped out while the band runs ----------
rep('''.strip,.ghost{position:absolute;inset:0}
/* the smear: two stretched copies, off the step grid, fixed transparency, cut on and cut off */
.ghost{visibility:hidden;opacity:.6;transform:translate(.3em,2.2em)}
.ghost[data-n="2"]{opacity:.42;transform:translate(-.4em,4.7em)}
.thread-band.running .ghost{visibility:visible}
.ghost .bubble{background:var(--tick);transform-origin:50% 0;transform:scaleY(2.6)}
.ghost[data-n="2"] .bubble{background:var(--streak);transform:scaleY(3.6)}
.ghost .bubble>*{visibility:hidden}
.thread-band.running .strip .bubble{transform-origin:50% 0;transform:scaleY(1.5)}''',
'''.strip{position:absolute;inset:0}
/* the smear. While the band runs a bubble is not drawn at all: no text, no rounded card. In its place stands its drag:
   a square-ended head whose trailing edge breaks into tines, and three to five thin bars along the travel, uneven in
   width, each tapered at its trailing end. Fixed transparency, cut on with the first step and cut off on the last. */
.smear{position:absolute;left:0;right:0;top:0;height:calc(150% + var(--tl,6em));font-size:.76923em;visibility:hidden;pointer-events:none}
.thread-band.running .strip .bubble{visibility:hidden}
.thread-band.running .strip .smear{visibility:visible}
.smear .hd{position:absolute;inset:0;background:var(--bubble)}
.bubble.out .smear .hd{background:var(--bubble-out)}
.smear .tr{position:absolute;top:0;background:var(--tick);opacity:.6;transform-origin:50% 0;clip-path:polygon(0 0,100% 0,100% calc(100% - 2.2em),50% 100%,0 calc(100% - 2.2em))}
.smear .tr[data-c="g"]{background:var(--streak);opacity:.42}
.thread-band[data-ph="1"] .smear .tr:nth-of-type(odd){transform:scaleY(.62)}
.thread-band[data-ph="1"] .smear .tr:nth-of-type(even){transform:scaleY(1.24)}''')
rep('''.catch.g1{background:var(--tick);opacity:.6}
.catch.g2{background:var(--streak);opacity:.42}''',
'''.catch-tr{position:absolute;visibility:hidden;height:.34em;margin-top:-.17em;background:var(--tick);opacity:.6;transform-origin:0 50%;clip-path:polygon(0 0,72% 0,100% 50%,72% 100%,0 100%)}
.catch-tr[data-c="g"]{background:var(--streak);opacity:.42}''')

# ---------- the sheet ----------
rep('''.crossing .phrase{font:700 11px var(--f-ui);fill:var(--pen);letter-spacing:.02em}''',
    '''.crossing .phrase{font:700 11px var(--f-ui);fill:var(--pen);letter-spacing:.02em}
.draft-tape{left:.9em;top:1.3em;font-size:1.1em;transform:rotate(-4deg);z-index:3;visibility:hidden}
.invoice-sheet.is-draft .draft-tape{visibility:visible}''')
rep('''.record-block .mark b{font-size:1.1em}''', '''.record-block .mark b{font-size:1.1em;font-weight:700}''')

# ---------- offer, rail, pickers: page voice for the page's own controls ----------
rep('''.replay{height:44px;min-width:66px;padding:0 8px;background:none;border:0;box-shadow:inset 0 0 0 1px var(--meta);border-radius:3px;font:600 12px/1 var(--f-ui);white-space:nowrap;cursor:pointer}''',
    '''.replay{height:44px;min-width:66px;padding:0 8px;background:none;border:0;box-shadow:inset 0 0 0 1px var(--meta);border-radius:3px;font:600 12px/1 var(--f-page);white-space:nowrap;cursor:pointer}''')
rep('''.rail .hint{position:absolute;left:0;right:0;bottom:0;font:400 11px/12px var(--f-ui);color:var(--meta);white-space:nowrap;pointer-events:none}''',
    '''.rail .hint{position:absolute;left:0;right:0;bottom:0;font:400 11px/12px var(--f-page);color:var(--meta);white-space:nowrap;pointer-events:none}''')
rep('''.pk-label{display:flex;align-items:baseline;gap:8px;height:18px;font:600 12px/18px var(--f-ui);color:var(--meta)}
.pk-label b{color:var(--text);font-weight:700}''',
    '''.pk-label{display:flex;align-items:baseline;gap:8px;height:18px;font:400 12px/18px var(--f-page);color:var(--meta)}
.pk-label b{color:var(--text);font-weight:600}''')
rep('''.pk-hint{flex:0 0 100%;margin-top:-4px;font:400 12px/1.45 var(--f-ui);color:var(--meta)}''',
    '''.pk-hint{flex:0 0 100%;margin-top:-4px;font:400 12px/1.45 var(--f-page);color:var(--meta)}''')
rep('''.sample-note{margin-top:10px;font:400 12px/18px var(--f-ui);color:var(--meta)}''',
    '''.sample-note{margin-top:10px;font:400 12px/18px var(--f-page);color:var(--meta)}''')

# ---------- today: the client page, the stub that stays, the leaf that tears off sideways and drops into his reply ----------
a = s.index('/* ---------- today: the leaf tears off')
b = s.index('/* ---------- month end: the report goes out as an attachment ---------- */')
STORY = '''/* ---------- today: his client page in SIS, the leaf hanging from its stub; it tears off sideways and drops into his reply ---------- */
.story-stage{font-size:min(10px,calc((100vw - 32px) / 35.8));width:35.8em;height:66.4em}
.sis-card{position:absolute;left:0;right:0;top:0;height:23.6em}
.sc-head{display:flex;align-items:center;gap:.7em;height:2.6em}
.sis-chip{padding:.15em .5em;background:var(--sheet);color:var(--ink);font:800 1.2em/1.3 var(--f-page);letter-spacing:.03em}
.sc-head .pg{font-size:1.25em;font-weight:600}
.sc-head .tape-label{margin-left:auto;font-size:1.1em}
.sc-client{display:flex;align-items:center;gap:.7em;height:3em}
.sc-client .tape-label{font-size:1.1em}
.sc-client b{font-size:1.3em;font-weight:600;white-space:nowrap}
.sc-client .kd2{margin-left:auto;font-size:1.15em;color:var(--meta);white-space:nowrap}
/* the counterfoil: a strip across the top of the leaf. It stays. Filed is its other face. */
.stub-row{position:absolute;left:0;right:0;top:6.3em;height:5em}
.stub-slot{position:absolute;inset:0;visibility:hidden}
.stub{position:absolute;inset:0;perspective:60em}
.stub .tile-in{position:absolute;inset:0;display:block;transform-style:preserve-3d;transition:transform 200ms linear}
.stub.is-front>.tile-in{transform:rotateX(180deg)}
.sface,.past-row{display:grid;grid-template-columns:6.3em 9.4em 1fr auto;align-items:center;column-gap:.6em;padding:0 .9em;font-size:1em;line-height:1.25;white-space:nowrap}
.sface{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}
.sface.front{grid-template-columns:6.3em auto 9.4em 1fr auto;background:var(--sheet);color:var(--ink);transform:rotateX(180deg)}
.sface.done,.past-row{background:var(--ink);color:var(--sheet);box-shadow:inset 0 0 0 1px #3A464D}
.sface b,.past-row b{font-size:1.3em;font-weight:700;font-variant-numeric:tabular-nums}
.sface .am2,.past-row .am2{font-size:1.25em;font-weight:600;font-variant-numeric:tabular-nums}
.sface .dt,.past-row .dt{font-size:1.1em;color:var(--label);font-variant-numeric:tabular-nums}
.sface.done .dt,.past-row .dt{color:#AEB8BD}
.sface .ok,.past-row .ok{font-size:1.15em;font-weight:600}
.sface .tape-label{font-size:1.1em}
.perforation{position:absolute;left:0;top:11.45em;width:28em;height:1px;background:repeating-linear-gradient(to right,var(--meta) 0 4px,transparent 4px 8px)}
.past{position:absolute;left:0;right:0;top:11.9em}
.past-row{height:3.6em}
.past-row+.past-row{margin-top:.2em}
.doc-bubble{position:absolute;left:6.6em;top:24.3em;width:29.2em;height:41.8em;background:var(--bubble-out);color:var(--text);border-radius:.9em 0 .9em .9em}
.doc-bubble::before{content:"";position:absolute;right:-7px;top:0;border-style:solid;border-width:9px 8px 0 0;border-color:var(--bubble-out) transparent transparent transparent}
.doc-bubble .file-bar{position:absolute;left:.6em;right:.6em;bottom:.5em;padding:0}
.doc-bubble .empty-label{display:none;position:absolute;left:0;right:0;bottom:1.4em;text-align:center;font:600 1.3em/1.4 var(--f-ui);letter-spacing:.1em;color:var(--meta)}
.doc-bubble[data-state="empty"]{background:none;outline:1px dashed var(--meta);outline-offset:-1px}
.doc-bubble[data-state="empty"]::before,.doc-bubble[data-state="empty"] .file-bar{visibility:hidden}
.doc-bubble[data-state="empty"] .empty-label{display:block}
.doc-bubble[data-state="file"] .st{visibility:hidden}
.empty-label .l-draft{display:none;letter-spacing:.04em}
/* the finished frame: the leaf is in his message. Script moves it back to the stub and plays it in. */
.invoice-sheet.leaf{left:0;top:0;height:36.2em;z-index:4;transform:translate(7.2em,24.9em)}
.leaf .bill-to{height:5em}
.leaf .lines{top:13.3em}
.leaf .total-wrap{top:20.7em}
.leaf .terms{display:block;top:24.9em}
.leaf .record-zone{top:29.9em}
.leaf .machine-line{top:33.8em}
/* draft downstream: no stub, no PDF, nothing leaves */
.story-stage.is-draft .stub{visibility:hidden}
.story-stage.is-draft .stub-slot{visibility:visible}
.story-stage.is-draft .empty-label .l-wait{display:none}
.story-stage.is-draft .empty-label .l-draft{display:inline}
/* tiles that turn over (the old files) */
.slot-row{position:absolute;left:0;right:0}
.tile-in{position:absolute;inset:0;display:block;transform-style:preserve-3d;transition:transform 200ms linear}
.is-front>.tile-in{transform:rotateY(180deg)}
.face{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:.6em .5em .5em;backface-visibility:hidden;-webkit-backface-visibility:hidden;font-size:1em;line-height:1.25}
.face.done{background:var(--ink);color:var(--sheet);box-shadow:inset 0 0 0 1px #3A464D}
.face.front{background:var(--sheet);color:var(--ink);transform:rotateY(180deg)}
.face .ok{font-size:1.1em;font-weight:600;white-space:nowrap}

'''
s = s[:a] + STORY + s[b:]; n += 1

# ---------- import, pro: ticks are chat receipts only ----------
rep('''.attach .st .w-wait,.attach .st .w-done{display:none}
.attach[data-state="sent"] .st .w-wait,.attach[data-state="read"] .st .w-done{display:inline}
''', '')
rep('''.plan{position:relative;display:flex;flex-direction:column;padding:20px 9px 9px;background:var(--stage)}''',
    '''.plan{position:relative;display:flex;flex-direction:column;padding:20px 9px 9px;background:var(--stage);font-family:var(--f-page)}''')
rep('''.composer{display:flex;align-items:center;gap:10px;margin-top:10px;min-height:56px;padding:4px 4px 4px 18px;background:var(--bubble);border-radius:28px;text-decoration:none;font:600 16px/1.3 var(--f-ui)}''',
    '''.composer{display:flex;align-items:center;gap:10px;margin-top:10px;min-height:56px;padding:4px 4px 4px 18px;background:var(--bubble);border-radius:28px;text-decoration:none;font:600 16px/1.3 var(--f-page)}''')

# ---------- 900 and up ----------
a = s.index('/* ---------- 900 and up:')
b = s.index('@media (max-width:379px){')
DESK = '''/* ---------- 900 and up. The first screen: the claim on the left, the stage on the right with room for the thread to run,
   and the transport and both pickers on one console under the sheet. Below it the thread is a 480 px lane left of
   centre and the page's own notes stand in the right margin, beside the thing they describe. No sequence changes its timing. ---------- */
@media (min-width:900px){
  .ep{padding:46px 32px 40px}
  .col{max-width:1120px}
  #hero{padding-top:24px;padding-bottom:30px}
  .hero-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(507px,1.6fr);grid-template-rows:1fr auto auto auto 1fr auto auto;column-gap:44px}
  .fwd-label{grid-column:1;grid-row:2}
  .hero-claim{grid-column:1;grid-row:3;margin-top:8px}
  #hero .hero-cta{grid-column:1;grid-row:4;margin-top:28px;max-width:390px;height:60px}
  .stage-wrap{grid-column:2;grid-row:1 / 6;margin-top:0}
  .hero-stage{margin:0;font-size:13px}
  .stage-caption>span{font-size:14px}
  .hero-claim h1{font-size:clamp(35px,3.9vw,50px);line-height:1.16;font-variation-settings:"opsz" 40}
  .hero-claim h1 .en{font-size:clamp(24px,2.6vw,33px);line-height:1.33;padding-top:6px;font-variation-settings:"opsz" 33}
  .hero-sub,.hero-sub .en{font-size:16px;line-height:24px;margin-top:10px;white-space:normal}
  .trial-terms{font-size:13.5px}
  .console{grid-column:1 / -1;grid-row:6;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:44px;row-gap:14px;align-items:start;margin-top:18px}
  .console .cut-rail{grid-column:1 / -1;max-width:390px;margin-top:0}
  .console .picker-client,.console .picker-rate{margin-top:0}
  .sample-note{grid-column:1 / -1;grid-row:7}
  .tc{display:grid;grid-template-columns:minmax(0,480px) minmax(0,1fr);column-gap:72px;align-items:start}
  .tc>*{grid-column:1}
  .tc>.notice{grid-column:2;grid-row:1 / span 8;position:sticky;top:84px;width:auto;max-width:27rem;margin:4px 0 0;padding:14px 0 0;border-radius:0;font-size:16px;line-height:1.65;background:repeating-linear-gradient(to right,var(--meta) 0 4px,transparent 4px 8px) top / 100% 1px no-repeat}
  .tc>.notice .ck{display:block;margin:0 0 6px;font-size:13px}
  .date-chip{left:calc(50% - min(1120px,100% - 64px) / 2 + 240px)}
  .stage{font-size:calc(456px / 33.4)}
  .story-stage{font-size:calc(480px / 35.8)}
  .msg{font-size:15.5px}
  .plan{padding:24px 14px 14px}
  .plan li,.plan .cta-trial,.plan .cta-trial .en{font-size:14px}
  footer{padding:30px 32px 56px}
  footer .col{display:grid;grid-template-columns:minmax(0,480px) minmax(0,1fr);column-gap:72px;align-items:start}
  footer .trust-line{grid-column:1;grid-row:1 / span 2}
  footer .support-whatsapp,footer .legal{grid-column:2;margin-top:0}
}
@media (min-width:1120px){
  .console{grid-template-columns:minmax(0,1fr) minmax(0,1.2fr) minmax(0,1.2fr)}
  .console .cut-rail{grid-column:auto;margin-top:18px}
}
'''
s = s[:a] + DESK + s[b:]; n += 1
io.open(P, 'w', encoding='utf-8').write(s)
print('patch 1 applied,', n, 'replacements; bytes', len(s.encode('utf-8')))
