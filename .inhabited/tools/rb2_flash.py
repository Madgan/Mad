# Flash check on the opening sequence. Input: a folder of lossless frames f_0000.png ... taken every 1/60 s of the page clock.
# A transition is a change in relative luminance of 0.10 or more against the last settled value, with the darker state below 0.80.
# WCAG general flash: more than three flashes (pairs of opposing transitions) in any one second, over more than 25% of any 341 x 256 box.
# Two counts are reported: the strict one (4 or more opposing pairs in a second) and a harsher one (more than 3 transitions in a second).
import sys, glob, os
import numpy as np
from PIL import Image
d = sys.argv[1]
files = sorted(glob.glob(os.path.join(d, 'f_*.png')))
def lum(im):
    a = np.asarray(im.convert('RGB'), dtype=np.float64) / 255.0
    a = np.where(a <= 0.03928, a / 12.92, ((a + 0.055) / 1.055) ** 2.4)
    return 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
L0 = lum(Image.open(files[0])); H, W = L0.shape
ref = L0.copy(); lastdir = np.zeros((H, W), dtype=np.int8)
events = []  # per frame: boolean map of a counted transition (opposing to the previous one, or the first)
anyev = []
for f in files[1:]:
    L = lum(Image.open(f)); dlt = L - ref
    big = (np.abs(dlt) >= 0.10) & (np.minimum(L, ref) < 0.80)
    dirn = np.sign(dlt).astype(np.int8)
    opp = big & (dirn != lastdir)
    anyev.append(big.copy()); events.append(opp.copy())
    ref = np.where(big, L, ref); lastdir = np.where(big, dirn, lastdir)
ev = np.array(events, dtype=np.uint8); n = ev.shape[0]
win = 60
def worst(mask_fn, label):
    best = 0.0; bestwin = 0
    for s0 in range(0, max(1, n - win + 1), 3):
        c = ev[s0:s0 + win].sum(axis=0)
        m = mask_fn(c).astype(np.float64)
        ii = np.zeros((H + 1, W + 1)); ii[1:, 1:] = m.cumsum(0).cumsum(1)
        bw, bh = min(341, W), min(256, H)
        box = ii[bh:, bw:] - ii[:-bh, bw:] - ii[bh:, :-bw] + ii[:-bh, :-bw]
        frac = box.max() / (bw * bh)
        if frac > best: best = frac; bestwin = s0
    print('%s: worst share of a 341 x 256 box %.1f%% (one-second window starting at frame %d of %d)' % (label, best * 100, bestwin, n))
worst(lambda c: c >= 8, 'strict (more than three flashes: 8 or more opposing transitions in a second)')
worst(lambda c: c > 3, 'harsh (more than 3 transitions of 0.10 in a second)')
tot = ev.sum(axis=0)
print('pixels with any transition over the whole run: %.1f%% of the %d x %d area; max transitions at one pixel %d' % ((tot > 0).mean() * 100, W, H, tot.max()))
