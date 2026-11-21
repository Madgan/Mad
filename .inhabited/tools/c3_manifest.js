// cycle 3: manifest entries checked against computed values in the build (390 and 1280)
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [w, h, lang] of [[390, 844, 'zh'], [390, 844, 'en'], [1280, 800, 'zh'], [1280, 800, 'en']]) {
    const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
    await p.goto('file:///home/user/Mad/.inhabited/designer/index.html?autoplay=0' + (lang === 'en' ? '&lang=en' : '')); await p.waitForTimeout(800); await p.evaluate(() => document.fonts.ready);
    const r = await p.evaluate(() => {
      const hex = c => { const m = c.match(/\d+(\.\d+)?/g); if (!m) return c; const a = m.length > 3 ? '/' + m[3] : ''; return '#' + m.slice(0, 3).map(x => (+x).toString(16).padStart(2, '0')).join('').toUpperCase() + a; };
      const cs = (s, pr) => { const el = document.querySelector(s); if (!el) return 'MISSING ' + s; const v = getComputedStyle(el)[pr]; return /^rgb/.test(v) ? hex(v) : v; };
      const o = {};
      o.body_bg = cs('body', 'backgroundColor'); o.stage_bg = cs('.hero-stage', 'backgroundColor'); o.plan_bg = cs('.plan', 'backgroundColor');
      o.bubble = cs('.set-end .bubble', 'backgroundColor'); o.msg_in = cs('.msg.in', 'backgroundColor'); o.bubble_out = cs('.set-end .bubble.out', 'backgroundColor'); o.msg_out = cs('.msg.out', 'backgroundColor'); o.doc_bubble = cs('.doc-bubble', 'backgroundColor');
      o.ticks_read = cs('#report-msg .ticks', 'stroke'); o.ck = cs('.stage-caption .ck', 'color');
      o.text = cs('body', 'color'); o.mt = cs('.msg.in .mt', 'color'); o.st = cs('#report-msg .st', 'color');
      o.sheet = cs('#sheet', 'backgroundColor'); o.ink = cs('#sheet', 'color'); o.cross = cs('#sheet .crossing .stroke', 'stroke'); o.cross_w = [cs('#sheet .crossing .s1', 'strokeWidth'), cs('#sheet .crossing .s2', 'strokeWidth')].join(',');
      o.strike = cs('#sheet .strike path', 'stroke');
      o.beam = cs('.beam', 'backgroundColor') + ' blend ' + cs('.beam', 'mixBlendMode') + ' clip ' + cs('.beam', 'clipPath').slice(0, 60);
      o.notice_bg = cs('.notice', 'backgroundColor'); o.caption_bg = cs('.stage-caption', 'backgroundColor');
      o.cta = cs('#hero .hero-cta', 'backgroundColor'); o.send = cs('.composer-send', 'backgroundColor'); o.tape = cs('.tape-label.sample', 'backgroundColor'); o.tape_rot = cs('.tape-label.sample', 'transform').slice(0, 50);
      o.month_sec = cs('#reports', 'backgroundColor'); o.footer_bg = cs('footer', 'backgroundColor');
      const fnt = s => { const el = document.querySelector(s); if (!el) return 'MISSING ' + s; const c = getComputedStyle(el); return [c.fontFamily.split(',')[0], c.fontWeight, c.fontSize, 'opsz ' + c.fontVariationSettings, 'optical-sizing ' + c.fontOpticalSizing, c.fontStyle, c.fontVariantNumeric, c.letterSpacing].join(' | '); };
      o.h1 = fnt('h1 .' + document.documentElement.dataset.lang); o.h2 = fnt('.tc>h2'); o.price = fnt('.price b'); o.wordmark = fnt('.wordmark'); o.sub = fnt('.hero-sub'); o.cta_f = fnt('#hero .hero-cta .cta-l'); o.terms_f = fnt('#hero .trial-terms');
      o.bubble_f = fnt('.set-end .bubble p'); o.sheet_total = fnt('#sheet .total b'); o.readout = fnt('.readout .ro-t'); o.mark = fnt('.record-block .mark b'); o.when = fnt('.record-block .when'); o.machine = fnt('.machine-line b');
      o.slots = [...document.querySelectorAll('#sheet .slot-empty[data-slot]')].map(e => e.dataset.slot).join(',');
      o.rail_marks = [...document.querySelectorAll('.cut-rail .rail i, .cut-rail .mk, .cut-rail .rail span')].map(e => Math.round(e.getBoundingClientRect().left)).join(',');
      o.rail_html = document.querySelector('.cut-rail .rail').innerHTML.replace(/\s+/g, ' ').slice(0, 300);
      o.bubble_radius = cs('.set-end .bubble', 'borderRadius'); o.msg_radius = cs('.msg.in', 'borderRadius'); o.sheet_radius = cs('#sheet', 'borderRadius'); o.sheet_shadow = cs('#sheet', 'boxShadow');
      o.perf = cs('.perforation', 'backgroundImage').slice(0, 120); o.notice_border = cs('.tc>.notice', 'backgroundImage').slice(0, 110) + ' pos ' + cs('.tc>.notice', 'position') + ' top ' + cs('.tc>.notice', 'top');
      o.fw_labels = ['.fwd-label', '.set-start .bubble .fw', '.set-end .bubble .fw', '.at-head'].map(s => s + ':' + document.querySelectorAll(s).length).join(' ');
      o.at_head_style = cs('.at-head', 'fontStyle'); o.fwd_style = cs('.fwd-label', 'fontStyle');
      o.wave_bars = document.querySelectorAll('.set-end .wave i').length; o.play_controls = document.querySelectorAll('.wave button, .wave [role=button], audio').length;
      o.shot_rot = [cs('.set-end .shot .ph', 'transform'), cs('.set-end .shot .ph .ph', 'transform')].join(' ; ');
      o.grain = document.querySelectorAll('[filter="url(#grain)"]').length + ' rect(s) using #grain, inside ' + (document.querySelector('[filter="url(#grain)"]').closest('.thread-band') ? '.thread-band' : 'elsewhere');
      const tc = document.querySelector('#story .tc'), lane = document.querySelector('#story .chat-head').getBoundingClientRect(), h2r = document.querySelector('#story .tc>h2').getBoundingClientRect(), nr = document.querySelector('#story .tc>.notice').getBoundingClientRect(), fr = [...document.querySelectorAll('footer .col>*')].slice(0, 3).map(e => Math.round(e.getBoundingClientRect().left));
      o.lane = 'lane x ' + Math.round(lane.left) + '..' + Math.round(lane.right) + ' (w ' + Math.round(lane.width) + ') | h2 x ' + Math.round(h2r.left) + ' w ' + Math.round(h2r.width) + ' | notice x ' + Math.round(nr.left) + '..' + Math.round(nr.right) + ' | footer children x ' + fr.join(',') + ' | chip x ' + Math.round(document.querySelector('#story .date-chip').getBoundingClientRect().left + document.querySelector('#story .date-chip').getBoundingClientRect().width / 2);
      const st = document.querySelector('.hero-stage').getBoundingClientRect(), sh = document.querySelector('#sheet').getBoundingClientRect(), con = document.querySelector('.console').getBoundingClientRect(), pc = document.querySelector('.picker-client').getBoundingClientRect(), pr = document.querySelector('.picker-rate').getBoundingClientRect(), rl = document.querySelector('.cut-rail').getBoundingClientRect();
      o.hero = 'stage ' + Math.round(st.width) + 'x' + Math.round(st.height) + ' at ' + Math.round(st.left) + ',' + Math.round(st.top) + ' | sheet ' + Math.round(sh.left) + '..' + Math.round(sh.right) + ' | console y ' + Math.round(con.top) + ' | rail y ' + Math.round(rl.top) + ' x ' + Math.round(rl.left) + ' | clients y ' + Math.round(pc.top) + ' x ' + Math.round(pc.left) + ' | rates y ' + Math.round(pr.top) + ' x ' + Math.round(pr.left);
      o.inv014 = ['#sheet .inv-no', '#sheet .crossing .phrase', '#sheet .rec-no', '#sheet .machine-line', '#story .stub .sface.front b', '#story .stub .sface.done b', '.doc-bubble .fn', '.tag014'].map(s => { const e = document.querySelector(s); return e ? e.textContent.trim().slice(0, 22) : 'MISSING ' + s; }).join(' | ');
      o.months = document.querySelectorAll('#reports .month-bars .mcol').length + ' columns; detail ' + (document.querySelector('#report .detail') ? 'present' : 'MISSING'); o.plans = [...document.querySelectorAll('#pricing .plan')].map(e => e.dataset.plan).join(',');
      o.composer = (document.querySelector('.composer') ? 'composer ' : 'MISSING ') + (document.querySelector('.composer-send') ? document.querySelector('.composer-send').tagName + ' ' + (document.querySelector('.composer-send').getAttribute('href') || document.querySelector('.composer').getAttribute('href')) : 'MISSING send');
      o.sample_tapes = document.querySelectorAll('.tape-label.sample').length + ' sample tapes; visible ' + [...document.querySelectorAll('.tape-label.sample')].filter(e => e.getBoundingClientRect().width > 0).length;
      o.hooks = ['#hero .cta-trial', '#hero .trial-terms', 'header.topbar .cta-trial', 'header.topbar .lang-toggle', '#hero .hero-claim', 'footer .trust-line', 'footer .support-whatsapp', '#import .review-state', '#import .wrap-checked', '.picker-client .lock', '.slot-row', '.slot-tile', '#story [data-beat="pdf"]', '#pricing .plan[data-plan="basic"]', '#pricing .plan[data-plan="pro"]', '.invoice-sheet .from', '.invoice-sheet .bill-to', '.invoice-sheet .meta', '.invoice-sheet .lines', '.invoice-sheet .total', '.invoice-sheet .terms', '.bubble[data-kind="voice"]', '.bubble[data-kind="shot"]', '#import .old-file', 'main.thread', '.doc-bubble .ticks'].map(s => s + (document.querySelector(s) ? ' ok' : ' MISSING')).filter(x => /MISSING/.test(x)).join(' ; ') || 'all listed hooks exist';
      return o;
    });
    console.log('\n==== ' + w + ' ' + lang); for (const k of Object.keys(r)) console.log('  ' + k + ': ' + r[k]);
    await p.close();
  }
  await b.close();
})();
