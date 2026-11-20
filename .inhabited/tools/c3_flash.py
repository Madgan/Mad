# cycle 3: general-flash count on the opening (WCAG 2.3.1 terms). Frames are 1/60 s apart.
# Transition: relative luminance moves 0.10 or more away from the last counted extreme, darker state below 0.80.
# The reference follows the running extreme in the current direction, so an opposing move is measured from the peak or trough.
# Flash = a pair of opposing transitions. Reported: share of the worst 341 x 256 box whose pixels have N or more opposing
# transitions inside any one-second window, for N = 4, 6, 7, 8 (7 = "more than three flashes" on the stricter reading, 8 on the looser).
import sys, glob, os
import numpy as np
from PIL import Image
d = sys.argv[1]; files = sorted(glob.glob(os.path.join(d, 'f_*.png')))
def lum(f):
    a = np.asarray(Image.open(f).convert('RGB'), dtype=np.float64) / 255.0
    a = np.where(a <= 0.03928, a / 12.92, ((a + 0.055) / 1.055) ** 2.4)
    return 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
L0 = lum(files[0]); H, W = L0.shape
ref = L0.copy(); lastdir = np.zeros((H, W), dtype=np.int8); ev = []
for f in files[1:]:
    L = lum(f); dl = L - ref; dirn = np.sign(dl).astype(np.int8)
    big = (np.abs(dl) >= 0.10) & (np.minimum(L, ref) < 0.80)
    opp = big & (dirn != lastdir)
    ev.append(opp)
    # follow the extreme: a further move in the last counted direction moves the reference; a counted transition resets it
    same = (dirn == lastdir) & (lastdir != 0)
    ref = np.where(big | same, L, ref); lastdir = np.where(big, dirn, lastdir)
ev = np.array(ev, dtype=np.uint8); n = ev.shape[0]; win = 60
bw, bh = min(341, W), min(256, H)
res = {}
for N in (4, 6, 7, 8):
    best = 0.0; at = 0
    for s0 in range(0, max(1, n - win + 1)):
        c = ev[s0:s0 + win].sum(axis=0) >= N
        ii = np.zeros((H + 1, W + 1)); ii[1:, 1:] = c.cumsum(0).cumsum(1)
        box = ii[bh:, bw:] - ii[:-bh, bw:] - ii[bh:, :-bw] + ii[:-bh, :-bw]
        fr = box.max() / (bw * bh)
        if fr > best: best, at = fr, s0
    res[N] = (best, at)
    print('pixels with %d or more opposing transitions in one second: worst share of a %d x %d box %.1f%% (window from frame %d)' % (N, bw, bh, best * 100, at))
tot = ev.sum(axis=0)
print('stage %d x %d, frames %d; pixels with any transition %.1f%%; most transitions at one pixel over the run %d; in one second %d' % (W, H, n + 1, (tot > 0).mean() * 100, tot.max(), max(ev[s:s + win].sum(axis=0).max() for s in range(0, max(1, n - win + 1)))))
# how much of the stage changes at all per step (any change above 0.02 luminance), as a description of what the eye gets
