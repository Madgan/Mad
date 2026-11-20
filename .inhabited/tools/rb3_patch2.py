# Rebuild 3, patch 2: margin notes at 18 px from 1120 up; the Pro notes reordered so each stands beside its thing
# (connect / scope / token); leaders stop at the attachment's edge. A record; cannot be re-run.
import io
p = '/home/user/Mad/.inhabited/designer/index.html'
s = io.open(p, encoding='utf-8').read()
def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (a[:90], s.count(a))
    s = s.replace(a, b)
rep('''<span class="nt"><span class="zh">令牌由获授权的工作室成员创建，随时可以撤销。</span><span class="en">Authorised studio members create each token and can revoke it at any time. </span></span><span class="nt"><span class="zh">AI 只在获准的工作室范围内做事。</span><span class="en">Your AI only works inside its permitted studio scope.</span></span>''',
    '''<span class="nt"><span class="zh">AI 只在获准的工作室范围内做事。</span><span class="en">Your AI only works inside its permitted studio scope. </span></span><span class="nt"><span class="zh">令牌由获授权的工作室成员创建，随时可以撤销。</span><span class="en">Authorised studio members create each token and can revoke it at any time.</span></span>''')
rep('''  .nt{position:relative;display:block;padding:11px max(0px,100% - 27rem) 16px 0}''',
    '''  .nt{position:relative;display:block;padding:11px max(0px,100% - 28rem) 14px 0}''')
rep('''  .tc>.attach~.notice .nt::before{right:calc(-1 * var(--gap) - 12px)}''',
    '''  #reports .nt::before,#import .nt::before,#pro .nt::before{right:calc(-1 * var(--gap) - 12px)}''')
rep('''  /* measured from the top of the attachment's row: the stub, the reply the leaf lands in, its file bar; the bars, the
     ranking, the CSV; the files, the card, the saved state; the plate, the token, the scope; the prices */''',
    '''  /* measured from the top of the attachment's row: the stub, the reply the leaf lands in, its file bar; the bars, the
     ranking, the CSV; the files, the card, the saved state; the plate, the scope line, the token button; the prices */''')
rep('''  #pro .notice{--rows:40px minmax(83px,auto) minmax(168px,auto) auto}''',
    '''  #pro .notice{--rows:40px minmax(251px,auto) minmax(111px,auto) auto}''')
rep('''@media (min-width:1120px){
  .console{grid-template-columns:minmax(0,1fr) minmax(0,1.2fr) minmax(0,1.2fr)}''',
    '''@media (min-width:1120px){
  .tc>.notice{font-size:18px;line-height:1.6}
  .console{grid-template-columns:minmax(0,1fr) minmax(0,1.2fr) minmax(0,1.2fr)}''')
io.open(p, 'w', encoding='utf-8').write(s)
print('ok')
