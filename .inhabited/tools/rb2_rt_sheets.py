# Contact sheets of consecutive video frames (25 a second), four per sheet, from the first frame.
# python3 rb2_rt_sheets.py <frame dir> <out prefix> <crop y0> <crop y1> [number of sheets]
import sys, glob, os
from PIL import Image, ImageDraw
d, out, y0, y1 = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
nsheets = int(sys.argv[5]) if len(sys.argv) > 5 else 20
files = sorted(glob.glob(os.path.join(d, 'f_*.png')))
# the first video frame that is not blank is frame 0 of the page
def blank(im):
    ex = im.convert('L').getextrema(); return ex[1] - ex[0] < 8
start = 0
while start < len(files) and blank(Image.open(files[start])): start += 1
print('first non-blank video frame', start, 'of', len(files))
for s in range(nsheets):
    idx = [start + s * 4 + k for k in range(4)]
    if idx[-1] >= len(files): break
    ims = [Image.open(files[i]).convert('RGB') for i in idx]
    w = ims[0].size[0]; h = y1 - y0
    sheet = Image.new('RGB', (w * 4, h + 16), (0, 0, 0)); dr = ImageDraw.Draw(sheet)
    for k, im in enumerate(ims):
        sheet.paste(im.crop((0, y0, w, y1)), (k * w, 16))
        dr.text((k * w + 4, 2), 'frame %d, %d ms after the first painted frame' % (idx[k] - start, (idx[k] - start) * 40), fill=(255, 255, 0))
    name = '%s_f%02d-%02d.png' % (out, idx[0] - start, idx[-1] - start)
    sheet.save(name); print(os.path.basename(name))
