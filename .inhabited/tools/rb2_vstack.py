# Stack frames vertically at full resolution (two 1280 x 800 frames make 1280 x 1600). python3 rb2_vstack.py <out> <file> <file> ...
import sys
from PIL import Image
out = sys.argv[1]; ims = [Image.open(f).convert('RGB') for f in sys.argv[2:]]
W = max(i.size[0] for i in ims); H = sum(i.size[1] for i in ims)
sh = Image.new('RGB', (W, H), (0, 0, 0)); y = 0
for im in ims: sh.paste(im, (0, y)); y += im.size[1]
m = max(W, H)
if m > 1600: sh = sh.resize((int(W * 1600 / m), int(H * 1600 / m)), Image.LANCZOS)
sh.save(out); print(out, sh.size)
