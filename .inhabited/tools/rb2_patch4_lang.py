# Rebuild 2, patch 4: the language cut keeps the point under the reading line where it is (proportional anchor),
# and the audit measures that point independently.
import io
P = '/home/user/Mad/.inhabited/designer/index.html'
s = io.open(P, encoding='utf-8').read()
a = s.index("function setLang(l){"); b = s.index("var DESC={zh:")
NEW = '''function setLang(l){
  var y=window.innerHeight*.4,best=null,bd=1e9,bh=0;
  $$(ANCH).forEach(function(e){
    var r=e.getBoundingClientRect();if(!r.height||getComputedStyle(e).position==='sticky')return;
    var d=y<r.top?r.top-y:y>r.bottom?y-r.bottom:0;
    if(d<bd||(d===bd&&r.height<bh)){bd=d;best=e;bh=r.height}
  });
  /* the point of that block that is on the reading line stays on the reading line (a block that reflows keeps its proportion) */
  var r0=best?best.getBoundingClientRect():null,f=r0?clamp((y-r0.top)/r0.height,0,1):0;
  setLang0(l);
  if(best){var r1=best.getBoundingClientRect(),dlt=(r1.top+f*r1.height)-(r0.top+f*r0.height);if(Math.abs(dlt)>.5)window.scrollBy(0,dlt)}
}
'''
s = s[:a] + NEW + s[b:]
io.open(P, 'w', encoding='utf-8').write(s)

A = '/home/user/Mad/.inhabited/tools/rb2_audit.js'
t = io.open(A, encoding='utf-8').read()
i0 = t.index("      const probe = () => q.evaluate(() => {"); i1 = t.index("    console.log('\\nlanguage switch at '")
new_probe = '''      const probe = () => q.evaluate(() => {
        // independent landmark: the deepest block that exists in both languages under the reading line, found from the pixels
        const y = innerHeight * .4, xs = [innerWidth * .5, innerWidth * .25, 60]; let e = null;
        for (const x of xs) { e = document.elementFromPoint(x, y); while (e && e.closest && e.closest('.zh,.en')) e = e.closest('.zh,.en').parentElement; if (e && !/^(BODY|HTML|MAIN|SECTION|HEADER)$/.test(e.tagName) && !e.classList.contains('col') && getComputedStyle(e).position !== 'sticky' && !e.closest('.leaf')) break; e = null; }
        window.__lm = e; if (!e) return { sy: Math.round(scrollY), who: '(gap)' };
        const r = e.getBoundingClientRect(); window.__f = (y - r.top) / r.height;
        return { sy: Math.round(scrollY), top: r.top, pt: y, who: (e.className || e.tagName).toString().slice(0, 24) };
      });
      const after = () => q.evaluate(() => { const e = window.__lm; if (!e) return { sy: Math.round(scrollY) }; const r = e.getBoundingClientRect(); return { sy: Math.round(scrollY), top: r.top, pt: r.top + window.__f * r.height, h: r.height }; });
      const a = await probe();
      await q.click('.lang-toggle'); await q.waitForTimeout(160);
      const bb = await after();
      await q.click('.lang-toggle'); await q.waitForTimeout(160);
      const c = await after();
      if (a.who === '(gap)') { rows.push(y + ': scrollY zh ' + a.sy + ' > en ' + bb.sy + ' > zh ' + c.sy + ' | reading line is on a gap'); continue; }
      const mv = Math.abs(bb.pt - a.pt), mvTop = Math.abs(bb.top - a.top), back = Math.abs(c.sy - a.sy);
      if (mv > worst) { worst = mv; worstAt = y; } if (mvTop > worstTop) { worstTop = mvTop; worstTopAt = y; } if (back > worstBack) worstBack = back;
      rows.push(y + ': scrollY zh ' + a.sy + ' > en ' + bb.sy + ' > zh ' + c.sy + ' | block ' + a.who + ': point under the reading line moved ' + mv.toFixed(1) + ' px, its top edge ' + mvTop.toFixed(1) + ' px');
    }
'''
t = t[:i0] + new_probe + t[i1:]
def rep(x, y):
    global t
    assert t.count(x) == 1, x[:50]
    t = t.replace(x, y)
rep("let worst = 0, worstAt = 0, rows = [];", "let worst = 0, worstAt = 0, worstTop = 0, worstTopAt = 0, worstBack = 0, rows = [];")
rep("await q.evaluate(yy => scrollTo(0, yy), y); await q.waitForTimeout(60);", "await q.evaluate(yy => scrollTo(0, yy), y); await q.waitForTimeout(420);")
rep("console.log('\\nlanguage switch at ' + w + ' x ' + h + ': worst on-screen movement of the block under the reading line ' + worst.toFixed(1) + ' px at scroll ' + worstAt);",
    "console.log('\\nlanguage switch at ' + w + ' x ' + h + ': worst movement of the point under the reading line ' + worst.toFixed(1) + ' px (scroll ' + worstAt + '); worst movement of that block top edge ' + worstTop.toFixed(1) + ' px (scroll ' + worstTopAt + '); worst scrollY not restored after zh > en > zh ' + worstBack + ' px');")
rep("  await p.evaluate(() => scrollTo(0, 99999)); await p.waitForTimeout(300); await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300);\n  await rb('default (after one pass down the page)');",
    "  await p.evaluate(() => scrollTo(0, 99999)); await p.waitForTimeout(500);\n  await rb('default (read at the foot of the page, every sequence at its end)');")
rep("await p.evaluate(() => scrollTo(0, 99999)); await p.waitForTimeout(300); await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300); await rb('draft after a pass down the page');",
    "await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300); await p.evaluate(() => scrollTo(0, 99999)); await p.waitForTimeout(500); await rb('draft after going up and down the page again');")
io.open(A, 'w', encoding='utf-8').write(t)
print('ok')
