# cycle 4: paste frames side by side (or stacked when wide), no scaling, label each with its file stem; sheets at most 1600 px wide
import sys, glob
from PIL import Image, ImageDraw
d, out = sys.argv[1], sys.argv[2]
fr = sorted(glob.glob(d + '/*.png')); ims = [Image.open(f).convert('RGB') for f in fr]
w, h = ims[0].size
if w <= 800:
    per = max(1, 1600 // w)
    for s in range(0, len(ims), per):
        ch = ims[s:s + per]; sh = Image.new('RGB', (w * len(ch), h), (255, 0, 255))
        for i, im in enumerate(ch): sh.paste(im, (i * w, 0))
        dr = ImageDraw.Draw(sh)
        for i, f in enumerate(fr[s:s + per]):
            lab = f.split('/')[-1][:-4]; dr.rectangle((i * w + 2, h - 16, i * w + 90, h - 2), fill=(0, 0, 0)); dr.text((i * w + 5, h - 15), lab, fill=(255, 255, 0))
        p = '%s_%s.png' % (out, chr(97 + s // per)); sh.save(p); print(p, sh.size)
else:
    per = max(1, 1600 // h) if h < 800 else 1
    for s in range(0, len(ims), per):
        ch = ims[s:s + per]; sh = Image.new('RGB', (w, h * len(ch)), (255, 0, 255))
        for i, im in enumerate(ch): sh.paste(im, (0, i * h))
        dr = ImageDraw.Draw(sh)
        for i, f in enumerate(fr[s:s + per]):
            lab = f.split('/')[-1][:-4]; dr.rectangle((2, i * h + 2, 90, i * h + 16), fill=(0, 0, 0)); dr.text((5, i * h + 3), lab, fill=(255, 255, 0))
        p = '%s_%s.png' % (out, chr(97 + s // per)); sh.save(p); print(p, sh.size)
