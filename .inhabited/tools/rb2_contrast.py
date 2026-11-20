# WCAG contrast of every text colour on every ground it stands on (computed from the hex values in the stylesheet).
def L(h):
    h = h.lstrip('#'); c = [int(h[i:i+2], 16) / 255 for i in (0, 2, 4)]
    c = [x / 12.92 if x <= 0.03928 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
def cr(a, b):
    x, y = L(a), L(b); return (max(x, y) + 0.05) / (min(x, y) + 0.05)
G = {'today #0B1216': '#0B1216', 'month end #0B2346': '#0B2346', 'day one #2A1606': '#2A1606', 'notice box #05090B': '#05090B'}
T = {'--text #E9EEF0': '#E9EEF0', '--meta #8A9AA3': '#8A9AA3', '--tick #53BDEB (time stamps)': '#53BDEB'}
for gn, g in G.items():
    print(gn, '(relative luminance %.4f):' % L(g), ', '.join('%s %.1f' % (tn, cr(t, g)) for tn, t in T.items()))
pairs = [('--text on --bubble #1F2C33', '#E9EEF0', '#1F2C33'), ('--meta on --bubble', '#8A9AA3', '#1F2C33'), ('--text on --bubble-out #0F5345', '#E9EEF0', '#0F5345'), ('--soft #B9D3CC on --bubble-out', '#B9D3CC', '#0F5345'),
         ('--ink on --sheet', '#14181B', '#F5F2E9'), ('--label #5A6268 on --sheet', '#5A6268', '#F5F2E9'), ('--pen on --sheet', '#1F5FBF', '#F5F2E9'), ('marker on tape green (trial button)', '#111111', '#1E9E4A'),
         ('marker on tape yellow', '#111111', '#F2C418'), ('tape white on tape red (draft, not saved, revoked)', '#F3F1EA', '#D4262C'), ('tape white on tape blue', '#F3F1EA', '#1F5FBF'),
         ('--sheet on --ink (filed rows)', '#F5F2E9', '#14181B'), ('#AEB8BD on --ink (row dates)', '#AEB8BD', '#14181B'), ('--ink on --sheet (lit date chip)', '#14181B', '#F5F2E9'), ('--text on --stage (plans)', '#E9EEF0', '#0B1216'), ('--meta on --stage (plans)', '#8A9AA3', '#0B1216')]
for n, a, b in pairs: print('%s: %.1f' % (n, cr(a, b)))
print('ground against ground (the cut): today / month end %.2f, month end / day one %.2f, today / day one %.2f' % (cr('#0B1216', '#0B2346'), cr('#0B2346', '#2A1606'), cr('#0B1216', '#2A1606')))
print('bubble grey against each ground: %.2f, %.2f, %.2f' % (cr('#1F2C33', '#0B1216'), cr('#1F2C33', '#0B2346'), cr('#1F2C33', '#2A1606')))
