# Rebuild 2, patch 5: at 900 and up each episode's heading stands in the right margin beside the question, and its note beside the attachment.
import io, re
P = '/home/user/Mad/.inhabited/designer/index.html'
s = io.open(P, encoding='utf-8').read()
def rep(a, b, c=1):
    global s
    assert s.count(a) == c, (s.count(a), a[:70]); s = s.replace(a, b)
# move each section heading into its thread column (still screen-reader-only on a phone)
for sid, nh in [('story', False), ('reports', False), ('import', False), ('pro', True), ('pricing', True)]:
    m = re.search(r'(<section id="%s"[^>]*>\n(?:  <span class="date-chip">.*?</span>\n)?)(  <h2 class="sr">.*?</h2>\n)(  <div class="col tc">\n)' % sid, s)
    assert m, sid
    h2 = m.group(2).replace('  <h2 class="sr">', '    <h2 class="sr">')
    col = m.group(3).replace('class="col tc"', 'class="col tc nh"') if nh else m.group(3)
    s = s[:m.start()] + m.group(1) + col + h2 + s[m.end():]
rep('''h1 .zh{font-weight:700}''', '''h1 .zh,h2 .zh{font-weight:700}''')
rep('''  .tc>.notice{grid-column:2;grid-row:1 / span 8;position:sticky;top:84px;width:auto;max-width:27rem;margin:4px 0 0;padding:14px 0 0;border-radius:0;font-size:16px;line-height:1.65;background:repeating-linear-gradient(to right,var(--meta) 0 4px,transparent 4px 8px) top / 100% 1px no-repeat}''',
    '''  .tc>h2{position:static;width:auto;height:auto;overflow:visible;clip-path:none;white-space:normal;grid-column:2;grid-row:1 / span 2;align-self:start;font:800 30px/1.2 var(--f-page);font-variation-settings:"opsz" 30;letter-spacing:-.01em}
  .tc.nh>h2{grid-row:1}
  .tc>.notice{grid-column:2;grid-row:3 / span 8;position:sticky;top:84px;width:auto;max-width:27rem;margin:6px 0 0;padding:14px 0 0;border-radius:0;font-size:16px;line-height:1.65;background:repeating-linear-gradient(to right,var(--meta) 0 4px,transparent 4px 8px) top / 100% 1px no-repeat}
  .tc.nh>.notice{grid-row:2 / span 8}''')
rep('''.ai-list li{font-size:1.25em;line-height:1.55}''', '''.ai-list li{font-size:1.25em;line-height:1.55;font-weight:500}''')
io.open(P, 'w', encoding='utf-8').write(s)
print('ok')
