# cycle 3: paste consecutive video frames four across, no scaling, from the first painted frame
import sys, glob, os
from PIL import Image, ImageDraw
S='/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad'
OUT='/home/user/Mad/.inhabited/v1_critic/screens'
name, crop_h, per, nsheets = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
fr=sorted(glob.glob(f'{S}/f_{name}/*.png'))
def blank(im):
    ex=im.convert('L').getextrema(); return ex[1]-ex[0] < 40
first=next(i for i,f in enumerate(fr) if not blank(Image.open(f)))
print(name,'frames',len(fr),'first painted frame index',first)
fr=fr[first:]
for s in range(nsheets):
    chunk=fr[s*per:(s+1)*per]
    if not chunk: break
    ims=[Image.open(f).convert('RGB') for f in chunk]
    w,h=ims[0].size; ch=min(crop_h,h)
    if per==1: sheet=ims[0].crop((0,0,w,ch))
    else:
        sheet=Image.new('RGB',(w*len(ims),ch),(255,0,255))
        for i,im in enumerate(ims): sheet.paste(im.crop((0,0,w,ch)),(i*w,0))
    d=ImageDraw.Draw(sheet)
    for i in range(len(ims)):
        n=s*per+i
        d.rectangle((i*w+2,ch-16,i*w+92,ch-2),fill=(0,0,0)); d.text((i*w+5,ch-15),f'f{n:02d} +{n*40}ms',fill=(255,255,0))
    p=f'{OUT}/c3_rt{name}_f{s*per:02d}-{s*per+len(ims)-1:02d}.png'
    sheet.save(p); print(p, sheet.size)
