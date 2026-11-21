# Rebuild 3, patch 3: at 900 and up the last line of the page's own voice ("your turn to reply") stands in the margin
# beside the composer, like every other note. A record; cannot be re-run.
import io
p = '/home/user/Mad/.inhabited/designer/index.html'
s = io.open(p, encoding='utf-8').read()
def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (a[:90], s.count(a))
    s = s.replace(a, b)
rep('''  .nt::before{content:"";position:absolute;left:0;right:calc(-1 * var(--gap));top:0;height:1px;background:repeating-linear-gradient(to right,var(--meta) 0 4px,transparent 4px 8px)}''',
    '''  .nt::before,.tail>.elapsed::before{content:"";position:absolute;left:0;right:calc(-1 * var(--gap));top:0;height:1px;background:repeating-linear-gradient(to right,var(--meta) 0 4px,transparent 4px 8px)}''')
rep('''  .nt .ck{display:block;margin:0 0 4px;font-size:13px}''',
    '''  .nt .ck,.tail>.elapsed .ck{display:block;margin:0 0 4px;font-size:13px}
  /* the last line stands beside the composer it points at */
  .tail{display:contents}
  .tail>.composer{grid-column:2;margin-top:26px}
  .tail>.elapsed{grid-column:1;grid-row:3;position:relative;width:auto;max-width:none;margin:26px 0 0;padding:11px max(0px,100% - 28rem) 0 0;border-radius:0;background:none;font-size:16px;line-height:1.65}''')
rep('''  .tc>.notice{font-size:18px;line-height:1.6}''', '''  .tc>.notice,.tail>.elapsed{font-size:18px;line-height:1.6}''')
io.open(p, 'w', encoding='utf-8').write(s)
print('ok')
