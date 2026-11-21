# Critic cycle 2: frame diff listing and contact sheets from extracted video frames.
import sys, glob, os
from PIL import Image, ImageChops, ImageDraw
mode = sys.argv[1]
d = sys.argv[2]
files = sorted(glob.glob(os.path.join(d, 'f_*.png')))
if mode == 'diff':
    prev = None
    for i, f in enumerate(files):
        im = Image.open(f).convert('RGB')
        if prev is not None:
            bb = ImageChops.difference(im, prev).getbbox()
            print(i, i*40, 'same' if bb is None else bb)
        else:
            print(i, 0, 'first', im.size)
        prev = im
elif mode == 'sheet':
    # sheet <dir> <out> <crop y0> <crop y1> <idx...>
    out = sys.argv[3]; y0 = int(sys.argv[4]); y1 = int(sys.argv[5]); idx = [int(x) for x in sys.argv[6:]]
    ims = [Image.open(files[i]).convert('RGB') for i in idx]
    w = ims[0].size[0]; h = y1 - y0
    scale = min(1.0, 1600.0 / (w * len(ims)))
    sheet = Image.new('RGB', (int(w * len(ims) * scale), int(h * scale) + 16), (0, 0, 0))
    dr = ImageDraw.Draw(sheet)
    for k, im in enumerate(ims):
        c = im.crop((0, y0, w, y1))
        if scale < 1: c = c.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
        sheet.paste(c, (int(k * w * scale), 16))
        dr.text((int(k * w * scale) + 4, 2), 'frame %d  video t=%d ms' % (idx[k], idx[k] * 40), fill=(255, 255, 0))
    sheet.save(out); print(out, sheet.size)
