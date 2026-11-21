# Paste frames side by side with a caption strip. python3 rb2_paste.py <out> <file[::label]> ...
# Frames are pasted at full resolution unless the sheet would exceed 1600 px on its longest edge; then the whole sheet is scaled once.
import sys
from PIL import Image, ImageDraw
out = sys.argv[1]
items = [a.split('::') for a in sys.argv[2:]]
ims = [Image.open(i[0]).convert('RGB') for i in items]
W = sum(im.size[0] for im in ims); H = max(im.size[1] for im in ims) + 16
sheet = Image.new('RGB', (W, H), (0, 0, 0))
dr = ImageDraw.Draw(sheet); x = 0
for im, it in zip(ims, items):
    sheet.paste(im, (x, 16))
    if len(it) > 1: dr.text((x + 4, 2), it[1], fill=(255, 255, 0))
    x += im.size[0]
m = max(W, H)
if m > 1600:
    k = 1600.0 / m
    sheet = sheet.resize((int(W * k), int(H * k)), Image.LANCZOS)
sheet.save(out)
print(out, sheet.size)
