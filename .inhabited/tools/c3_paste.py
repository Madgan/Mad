# cycle 3: paste walk shots (four across at phone width, two stacked at desktop width), no scaling
import sys, glob
from PIL import Image, ImageDraw
name=sys.argv[1]
S='/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad/walk_'+name
OUT='/home/user/Mad/.inhabited/v1_critic/screens'
fr=sorted(glob.glob(S+'/*.png')); ims=[Image.open(f).convert('RGB') for f in fr]
w,h=ims[0].size
per = max(1, 1600//w) if w<=800 else 1
rows = 1 if w<=800 else 2
group=per*rows
for s in range(0,len(ims),group):
    ch=ims[s:s+group]
    if w<=800:
        sh=Image.new('RGB',(w*len(ch),h),(255,0,255))
        for i,im in enumerate(ch): sh.paste(im,(i*w,0))
    else:
        sh=Image.new('RGB',(w,h*len(ch)),(255,0,255))
        for i,im in enumerate(ch): sh.paste(im,(0,i*h))
    d=ImageDraw.Draw(sh)
    for i,f in enumerate(fr[s:s+group]):
        lab=f.split('/')[-1][:-4]
        x,y=(i*w+2,2) if w<=800 else (2,i*h+2)
        d.rectangle((x,y,x+80,y+12),fill=(0,0,0)); d.text((x+2,y),lab,fill=(255,255,0))
    p=f'{OUT}/c3_walk_{name}_{chr(97+s//group)}.png'; sh.save(p); print(p,sh.size)
