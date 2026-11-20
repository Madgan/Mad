# Rebuild 2 (after critic cycle 2), patch 3 of 3: script.
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
def cut(start, end, new):
    global s, n
    a = s.index(start); b = s.index(end, a)
    s = s[:a] + new + s[b:]; n += 1

# ---------- sample data: each client has the person who asks for the invoice ----------
rep('''  {code:'LUMEN',name:'Lumen Events Sdn Bhd',co:true,sub:'Attn: Farah Aziz · Puchong, Selangor',''',
    '''  {code:'LUMEN',name:'Lumen Events Sdn Bhd',co:true,av:'F',who:'Farah · Lumen Events',sub:'Attn: Farah Aziz · Puchong, Selangor',''')
rep('''  {code:'TANJUNG',name:'Tanjung Bakery',co:true,sub:'Attn: Mei Ling Tan · Klang, Selangor',''',
    '''  {code:'TANJUNG',name:'Tanjung Bakery',co:true,av:'M',who:'Mei Ling · Tanjung Bakery',sub:'Attn: Mei Ling Tan · Klang, Selangor',''')
rep('''  {code:'ARIA',name:'Aria Lim',co:false,sub:'Petaling Jaya, Selangor',''',
    '''  {code:'ARIA',name:'Aria Lim',co:false,av:'A',who:'Aria Lim',sub:'Petaling Jaya, Selangor',''')
rep('''function dateCaps(d){return p2(d.getDate())+' '+MON[d.getMonth()].toUpperCase()+' '+d.getFullYear()}''',
    '''function dateCaps(d){return p2(d.getDate())+' '+MON[d.getMonth()].toUpperCase()+' '+d.getFullYear()}
/* sample times in the threads are his clock, some minutes ago (never before midnight, so "today" stays true) */
function ago(min){var m=Math.min(min,NOW.getHours()*60+NOW.getMinutes());return hm(new Date(NOW.getTime()-m*60000))}''')

# ---------- timeline: a way to drop a timeline without running its end ----------
rep('''/* one-off decoration that plays into a state already set by a cut */''',
    '''TL.prototype.kill=function(){
  this.done=true;this.pause();
  for(var i=0;i<this.an.length;i++)this.an[i].cancel();
  for(var k=0;k<this.trash.length;k++){var n=this.trash[k];if(n.parentNode)n.parentNode.removeChild(n)}
  this.an=[];this.fns=[];this.trash=[];
};
/* one-off decoration that plays into a state already set by a cut */''')
rep('''function restCaption(){caption.innerHTML=state.rates.length?capHTML(stamp,'单开好了。','Invoice done.'):capHTML(stamp,'还没选价目。','No rate picked yet.')}''',
    '''function restCaption(){caption.innerHTML=state.rates.length?capHTML(stamp,'单开好了。','Invoice ready.'):capHTML(stamp,'还没选价目。','No rate picked yet.')}''')
rep('''function renderAll(){renderSheet();renderPickers();restCaption();syncLater()}''',
    '''function renderAll(){renderSheet();renderPickers();restCaption();syncLater();frame()}''')

# ---------- downstream ----------
cut('''var storyStage=$('#story-stage'),leaf=''', '''/* ---------- S1 The Catch ---------- */''',
'''var storyStage=$('#story-stage'),leaf=$('.leaf',storyStage),docBubble=$('.doc-bubble'),stub=$('.stub'),pastRows=$$('.past-row'),report=$('#report'),reportMsg=$('#report-msg');
var mcols=$$('.mcol'),bracket=$('.bracket'),tag014=$('.tag014'),picked=5,novAdded=true;
var MONTHS=[];(function(){for(var i=5;i>=0;i--){var d=new Date(NOW.getFullYear(),NOW.getMonth()-i,1);MONTHS.push(d.getMonth())}})();
function stubHTML(no,amt,dateHTML,code,word){return '<b>INV-'+no+'</b>'+(code?'<span class="tape-label code">'+code+'</span>':'')+'<span class="am2">RM '+fmt(amt)+'</span><span class="dt">'+dateHTML+'</span><span class="ok">'+word+'</span>'}
function novSales(){return SALES[5]+(novAdded?total():0)}
function writeMonth(i){
  var s=i===5?novSales():SALES[i],e=EXP[i];
  $('.d-mo',report).innerHTML=B((MONTHS[i]+1)+'月',MON[MONTHS[i]]);
  $('.d-s',report).textContent='RM '+fmt0(s);$('.d-e',report).textContent='RM '+fmt0(e);$('.d-n',report).textContent='RM '+fmt0(s-e);
}
function writeNov(v){$('.fs',mcols[5]).textContent=fmt0(v);if(picked===5){$('.d-s',report).textContent='RM '+fmt0(v);$('.d-n',report).textContent='RM '+fmt0(v-EXP[5])}}
/* everything further down the thread takes the client, the rates and the state (done or draft) of the sheet in the first screen */
function syncLater(){
  var c=CLIENTS[state.client],t=total(),draft=!state.rates.length,dcap=p2(NOW.getDate())+' '+MON[NOW.getMonth()].toUpperCase();
  /* the leaf is the sheet he just watched, copied as it now stands, with the small print the first screen leaves out */
  leaf.innerHTML=sheet.innerHTML;
  leaf.classList.toggle('is-draft',draft);
  $$('.slot-empty:not([data-slot="none"]),.strike',leaf).forEach(function(n){n.parentNode.removeChild(n)});
  $('.bill-to',leaf).insertAdjacentHTML('beforeend','<span class="sub">'+c.sub+'</span>');
  $('.total-wrap',leaf).insertAdjacentHTML('afterend',TERMS);
  /* the chat he answers is the chat of the client he picked */
  $('#story .chat-head .av').textContent=c.av;$('#story .chat-head .who').textContent=c.who;
  $('.fn',docBubble).textContent=INV+'.pdf';
  $('.sc-client .code').textContent=c.code;$('.sc-client .cn').textContent=c.name;
  $('.sc-client .kd2').innerHTML=c.co?B('公司客户','Company client'):B('个人客户','Individual client');
  $('.sface.done',stub).innerHTML=stubHTML('014',t,dcap,'',B('已归档','Filed'));
  $('.sface.front',stub).innerHTML=stubHTML('014',t,dcap,c.code,B('存根','Stub'));
  pastRows.forEach(function(el,i){var p=c.past[i];el.innerHTML=stubHTML(p[0],sumOf(p[1]),B('更早','Earlier'),'',B('已归档','Filed'))});
  /* report */
  mcols.forEach(function(m,i){
    $('.mo',m).innerHTML=B((MONTHS[i]+1)+'月',MON[MONTHS[i]]);
    $('.fs',m).textContent=fmt0(i===5?novSales():SALES[i]);$('.fe',m).textContent=fmt0(EXP[i]);
    $('.bar.sales',m).style.height=(SALES[i]/13000*9).toFixed(2)+'em';$('.bar.exp',m).style.height=(EXP[i]/13000*9).toFixed(2)+'em';
  });
  tag014.style.bottom=((SALES[5]/13000*9+.2)/1.1).toFixed(2)+'em';
  $('.csv-name').textContent='sis-report-'+YEAR+'-'+p2(NOW.getMonth()+1)+'.csv';
  writeMonth(picked);
  var rk=CLIENTS.map(function(k,i){var s=k.past.reduce(function(a,p){return a+sumOf(p[1])},0),n=k.past.length;if(i===state.client&&!draft){s+=t;n+=1}return {name:k.name,n:n,s:s}});
  rk.sort(function(a,b){return b.s-a.s});
  $('.rank',report).innerHTML=rk.map(function(r,i){return '<li><span class="rk">'+(i+1)+'</span><span>'+r.name+'</span><span class="ct">'+B(r.n+' 张单',r.n+' invoices')+'</span></li>'}).join('');
}

''')

# ---------- S1: the band, the smear, the catch ----------
cut('''var bandBuilt=false;''', '''function buildS1(){''',
'''/* the smear of one bubble: a square head whose trailing edge breaks into tines, and three to five thin bars along the travel */
function lcg(seed){var v=seed;return function(){v=(v*1103515245+12345)&0x7fffffff;return v/0x7fffffff}}
function addSmear(bub,k){
  var r=lcg(k*7919+101),out=bub.classList.contains('out'),tl=4.6+r()*3.6;
  function Y(f){return 'calc(100% - '+(tl*(1-f)).toFixed(2)+'em)'}
  var pts=['0 0','100% 0','100% '+Y(0)],x=100,i;
  for(i=0;i<4&&x>16;i++){
    var gap=3+r()*13,w=4+r()*15,f=.28+r()*.72,x1=x-gap,x0=Math.max(1,x1-w);
    pts.push(x1.toFixed(1)+'% '+Y(0),x1.toFixed(1)+'% '+Y(f*.66),((x1+x0)/2).toFixed(1)+'% '+Y(f),x0.toFixed(1)+'% '+Y(f*.66),x0.toFixed(1)+'% '+Y(0));
    x=x0;
  }
  pts.push('0 '+Y(0));
  var h='<i class="hd" style="clip-path:polygon('+pts.join(',')+')"></i>',nb=3+Math.floor(r()*3),W=[.22,.5,.3,.9,.36],OFF=[.7,2.5,4.4,6.1,8.4];
  for(i=0;i<nb;i++){
    var wd=W[(i+k)%5],len=7+r()*10.5,off=OFF[i]+(r()-.5)*.6,col=(i+k)%3===(out?0:1)?(out?'b':'g'):(out?'g':'b');
    h+='<i class="tr" data-c="'+col+'" style="'+(out?'right':'left')+':'+off.toFixed(2)+'em;width:'+wd+'em;height:'+len.toFixed(1)+'em"></i>';
  }
  var sm=D.createElement('span');sm.className='smear';sm.setAttribute('aria-hidden','true');sm.style.setProperty('--tl',tl.toFixed(2)+'em');sm.innerHTML=h;
  bub.appendChild(sm);
}
var bandBuilt=false;
function buildBand(){
  if(bandBuilt)return;bandBuilt=true;
  var frag=D.createDocumentFragment();
  MID.forEach(function(b){var w=D.createElement('div');w.className='pb';w.style.top=b[0]+'em';w.innerHTML='<div class="bubble'+(b[1]==='o'?' out':'')+'">'+bubbleHTML(b[1],b[2],b[3])+'</div>';frag.appendChild(w)});
  strip.appendChild(frag);
  $$('.bubble',strip).forEach(addSmear);
}
''')
rep('''function buildS1(){
  var tl=new TL(S1);s1T0=new Date();''', '''function buildS1(keepT0){
  var tl=new TL(S1);if(!keepT0)s1T0=new Date();''')
cut('''  /* the catch: one translate, linear, a hard stop, one frame of settle; two fixed-alpha copies trail it */''', '''  var T1=760,T2=1100,T3=1360,T4=1560;''',
'''  /* the catch: one translate, linear, a hard stop, one frame of settle; three thin tapered bars trail it along its travel */
  function chip(fragEl,target,start,dur,cls,html){
    var r=target.getBoundingClientRect(),f=fragEl.getBoundingClientRect();if(!r.width)return;
    var el=D.createElement('span');el.className='catch'+(cls?' '+cls:'');el.innerHTML=html;
    el.style.left=(r.left-sr.left)+'px';el.style.top=(r.top-sr.top)+'px';el.style.fontSize=getComputedStyle(target).fontSize;
    layer.appendChild(el);tl.trash.push(el);
    var dx=f.left-r.left,dy=f.top-r.top,len=Math.hypot(dx,dy)||1,ux=dx/len,uy=dy/len,ang=(Math.atan2(uy,ux)*180/Math.PI).toFixed(1);
    var w=el.offsetWidth,h=el.offsetHeight;
    [[.12,62,'b'],[.5,96,'g'],[.86,44,'b']].forEach(function(g){
      var k=D.createElement('i');k.className='catch-tr';k.setAttribute('data-c',g[2]);
      k.style.left=(r.left-sr.left+w*g[0]-4)+'px';k.style.top=(r.top-sr.top+h/2)+'px';k.style.width=g[1]+'px';
      layer.insertBefore(k,el);tl.trash.push(k);
      tl.add(k,[{transform:'translate('+dx+'px,'+dy+'px) rotate('+ang+'deg)',visibility:'visible'},{transform:'translate(0,0) rotate('+ang+'deg)',visibility:'visible'}],start,dur,'none');
    });
    var from='translate('+dx+'px,'+dy+'px) skewX(-12deg)',past='translate('+(-ux*2)+'px,'+(-uy*2)+'px) skewX(-12deg)';
    tl.add(el,[{transform:from,visibility:'visible'},{transform:past,visibility:'visible',offset:dur/(dur+17)},{transform:past,visibility:'visible'}],start,dur+17,'none');
  }
''')
rep('''    tl.add(mover,[{transform:'translateY('+TRAVEL+'em)'},{transform:'translateY(0)'}],0,RUN,'backwards','steps('+STEPS+', end)');''',
    '''    /* 22 steps of 6.4em; the first on the first frame of the run, the last 84 ms before the band is cut back to sharp */
    tl.add(mover,[{transform:'translateY('+TRAVEL+'em)'},{transform:'translateY(0)'}],1,RUN-1,'backwards','steps('+STEPS+', jump-start)');''')
rep('''[1900,draft?'还没选价目。':'划线。',draft?'No rate picked yet.':'Crossed.'],[2230,draft?'还没选价目。':'单开好了。',draft?'No rate picked yet.':'Invoice done.']];''',
    '''[1900,draft?'还没选价目。':'划线。',draft?'No rate picked yet.':'Crossed.'],[2230,draft?'还没选价目。':'单开好了。',draft?'No rate picked yet.':'Invoice ready.']];''')
rep('''    band.classList.toggle('running',live&&t>0&&t<RUN);''',
    '''    var run_=live&&t>0&&t<RUN;band.classList.toggle('running',run_);
    /* alternate steps print a different drag: the bars change length on each step, by a cut */
    band.setAttribute('data-ph',run_?String(Math.floor(t/RUN*STEPS)%2):'0');''')
rep(''''Number and date: filled in.','Total','Crossed.','Invoice done.']''', ''''Number and date: filled in.','Total','Crossed.','Invoice ready.']''')

# ---------- scroll-linked ----------
cut('''/* S4 starts only when the whole leaf is on screen''', '''/* S6: the months come in at shortening intervals''',
'''var flags={};
function latch(key,on){var was=flags[key];flags[key]=on;return was===undefined?(on?0:-1):(was===on?0:(on?1:-1))}
/* S4 and S5. Where the stage stands on the screen decides the beat; every threshold is a position, so it runs backwards.
   tear: the leaf slides 7.2em sideways along the perforation, under the thumb (90 px of scroll).
   drop: one hard-stopped translate of 13.3em into his reply, as soon as the landing place is on screen.
   then the stub turns over, and the ticks come one at a time, each a good thumb's move apart. */
var forced=null,dropAn=null,UP1='translate(7.2em,11.6em)',DOWN='translate(7.2em,24.9em)';
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
    leaf.style.transform='translate('+(7.2*b.tear).toFixed(3)+'em,11.6em)';
    if(ch===-1)run(leaf,[{transform:DOWN},{transform:UP1}],140);
  }
  var st=!b.drop||dropAn?'empty':b.tick===0?'file':b.tick===1?'sent':b.tick===2?'delivered':'read';
  if(docBubble.getAttribute('data-state')!==st){docBubble.setAttribute('data-state',st);if(st==='read'&&!docBubble.stamped){docBubble.stamped=true;$('.tm',docBubble).textContent=hm(new Date())}}
  stub.classList.toggle('is-front',!b.filed);
}
''')
rep('''  var ch=latch('nov',p>=.92);
  if(ch===0&&flags.novInit)return;
  flags.novInit=true;
  clearTimeout(NOVT);
  if(p>=.92){
    novAdded=true;tag014.classList.remove('pre');reportMsg.setAttribute('data-state','read');
    if(!reportMsg.stamped){reportMsg.stamped=true;$('.tm',reportMsg).textContent=hm(new Date())}
    if(ch===1&&!BOOT&&!RM){''',
    '''  /* number 014 reaches the month only if the invoice exists: a draft does not drop */
  var on=p>=.92&&state.rates.length>0,ch=latch('nov',on);
  if(ch===0&&flags.novInit)return;
  flags.novInit=true;
  clearTimeout(NOVT);
  if(on){
    novAdded=true;tag014.classList.remove('pre');
    if(ch===1&&!BOOT&&!RM){''')
rep('''    }else writeNov(novSales());
  }else{novAdded=false;tag014.classList.add('pre');reportMsg.setAttribute('data-state','sent');writeNov(SALES[5])}''',
    '''    }else writeNov(novSales());
  }else{novAdded=false;tag014.classList.add('pre');writeNov(SALES[5])}''')
rep('''  if(!RM){story(progStory());month(prog(report,.8,.36));sort(prog(importStage,.75,.33))}
  cutGround();stamps();''',
    '''  story();month(RM?1:prog(report,.8,.36));if(!RM)sort(prog(importStage,.75,.33));
  cutGround();stamps();''')

# ---------- S9, S10: SIS state is carried by the tape labels; the message's ticks are a chat receipt and do not change ----------
rep('''/* S9 green wrap. The message's ticks are the end signal: one grey tick until he approves. */
var approve=$('.approve'),card=$('.review-card'),wrap=$('.wrap-checked'),busy9=false;''',
    '''/* S9 green wrap. The state is carried by the tape label under the card (not saved, saved). */
var approve=$('.approve'),card=$('.review-card'),wrap=$('.wrap-checked'),busy9=false;''')
rep('''function(){importStage.classList.add('is-saved');importMsg.setAttribute('data-state','read');$('.tm',importMsg).textContent=hm(n);busy9=false});''',
    '''function(){importStage.classList.add('is-saved');busy9=false});''')
rep('''function(){card.classList.remove('is-wrapped');importStage.classList.remove('is-saved');importMsg.setAttribute('data-state','sent');busy9=false});''',
    '''function(){card.classList.remove('is-wrapped');importStage.classList.remove('is-saved');busy9=false});''')
rep('''function(){sk.classList.remove('on');proStage.setAttribute('data-token','off');proMsg.setAttribute('data-state','sent');busy10=false},120);''',
    '''function(){sk.classList.remove('on');proStage.setAttribute('data-token','off');busy10=false},120);''')
rep('''    proStage.setAttribute('data-token','on');proMsg.setAttribute('data-state','read');''',
    '''    proStage.setAttribute('data-token','on');''')

# ---------- S11: the language cut holds the reader's place at any scroll position ----------
cut('''function setLang(l){''', '''toggle.addEventListener('click',function(){''',
'''/* The block nearest the reading line (40% down the screen) is held where it is. Blocks are whole things (a message,
   a notice, a stage, a plan list), never a language span, so the anchor exists in both languages. */
var ANCH='.fwd-label,.hero-claim,.hero-stage,.hero-cta,.cut-rail,.picker-client,.picker-rate,.sample-note,.chat-head,.msg.in,.at-head,.stage,.plan h3,.price,.pl,.plan .cta-trial,.file-bar,.notice,.composer,footer p';
function setLang(l){
  var y=window.innerHeight*.4,best=null,bd=1e9,edge='top';
  $$(ANCH).forEach(function(e){
    var r=e.getBoundingClientRect();if(!r.height&&!r.width)return;
    var d=y<r.top?r.top-y:y>r.bottom?y-r.bottom:0;
    if(d<bd||(d===bd&&best&&r.height<best.getBoundingClientRect().height)){bd=d;best=e;edge=Math.abs(y-r.top)<=Math.abs(y-r.bottom)?'top':'bottom'}
  });
  var a0=best?best.getBoundingClientRect()[edge]:0;
  setLang0(l);
  if(best){var dlt=best.getBoundingClientRect()[edge]-a0;if(dlt)window.scrollBy(0,dlt)}
}
var DESC={zh:'SIS：给马来西亚摄像师、摄影师和小型工作室的开单与记录工具。7 天免费试用，Basic RM 199/年，Pro RM 399/年。',en:'SIS: invoicing and records for Malaysian videographers, photographers and small studios. 7-day free trial, Basic RM 199/year, Pro RM 399/year.'};
function setLang0(l){
  H.setAttribute('data-lang',l);H.setAttribute('lang',l==='zh'?'zh-Hans':'en');
  toggle.setAttribute('aria-checked',l==='en'?'true':'false');
  D.title=l==='zh'?'SIS · 选客户，选价目，单就开好了':'SIS · Pick a client. Pick a rate. Invoice done.';
  var md=D.getElementById('meta-desc');if(md)md.setAttribute('content',DESC[l]);
}
''')

# ---------- start ----------
cut('''/* ---------- start ---------- */''', '''window.SIS_READY=true;''',
'''/* ---------- start ---------- */
if(H.getAttribute('data-lang')==='en')setLang0('en');
$$('[data-ago]').forEach(function(e){e.textContent=ago(+e.getAttribute('data-ago'))});
renderAll();
if(RM){$('.tm',docBubble).textContent=hm(new Date())}
requestAnimationFrame(function(){requestAnimationFrame(function(){BOOT=false;H.classList.remove('boot')})});
function onStage(){var r=stage.getBoundingClientRect();return r.bottom>60&&r.top<window.innerHeight}
if(AUTO&&!RM&&CAN&&onStage()){
  /* take over the held start frame from the stylesheet without a visible change; the clock starts a fixed 200 ms
     after the first frame is painted. Nothing waits for the web fonts. */
  s1=buildS1();s1.seek(0);railState('paused');H.classList.remove('s1-pre');
  var started=false,go=function(){if(started)return;started=true;if(s1&&!rc&&onStage())s1Play(0);else s1End()};
  requestAnimationFrame(function(){setTimeout(go,200)});
  /* if the faces arrive while the opening runs, the catches are measured again where the sheet's text now stands */
  if(D.fonts&&D.fonts.status==='loading'&&D.fonts.ready)D.fonts.ready.then(function(){
    if(!s1||s1.done||rc)return;
    var t=s1.t,pl=s1.playing;s1.kill();s1=buildS1(true);if(pl)s1.play(t);else s1.seek(t);
  });
}else H.classList.remove('s1-pre');
''')
rep('''  progress:{story:story,month:month,sort:sort}''',
    '''  beat:function(b){forced=b||null;story()},progress:{month:month,sort:sort}''')
rep('''    $$('.slot-tile.past').forEach''', '''    $$('.slot-tile.past').forEach''', 0)
io.open(P, 'w', encoding='utf-8').write(s)
print('patch 3 applied,', n, 'replacements; bytes', len(s.encode('utf-8')))
