# cycle 3: paste a chosen run of video frames (four across at phone width, two stacked at desktop), no scaling
import sys, glob
from PIL import Image, ImageDraw
name, a, b, tag = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
stride = int(sys.argv[5]) if len(sys.argv)>5 else 1
S='/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad'
OUT='/home/user/Mad/.inhabited/v1_critic/screens'
fr=sorted(glob.glob(f'{S}/f_{name}/*.png'))
sel=list(range(a,b+1,stride))
w,h=Image.open(fr[0]).size
grp=4 if w<=400 else 2
for s in range(0,len(sel),grp):
    idx=sel[s:s+grp]; ims=[Image.open(fr[i]).convert('RGB') for i in idx if i<len(fr)]
    if w<=400:
        sh=Image.new('RGB',(w*len(ims),h)); [sh.paste(im,(i*w,0)) for i,im in enumerate(ims)]
    else:
        sh=Image.new('RGB',(w,h*len(ims))); [sh.paste(im,(0,i*h)) for i,im in enumerate(ims)]
    d=ImageDraw.Draw(sh)
    for i,k in enumerate(idx[:len(ims)]):
        x,y=(i*w+2,h-14) if w<=400 else (2,i*h+h-14)
        d.rectangle((x,y,x+90,y+12),fill=(0,0,0)); d.text((x+2,y),f'frame {k} ({k*40}ms)',fill=(255,255,0))
    p=f'{OUT}/c3_{tag}_f{idx[0]:03d}-{idx[-1]:03d}.png'; sh.save(p); print(p,sh.size)
