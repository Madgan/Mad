# Contact sheets: lay saved frames side by side at full resolution (no downscale), longest edge at most 1600 px.
# Usage: python3 sheets.py <out_name> <file1> <file2> ...   (files relative to the screens folder)
import sys
from PIL import Image
D='/home/user/Mad/.inhabited/designer/screens/'
out=sys.argv[1]; files=sys.argv[2:]
ims=[Image.open(D+f).convert('RGB') for f in files]
gap=8
W=sum(i.width for i in ims)+gap*(len(ims)-1); H=max(i.height for i in ims)
assert W<=1600 and H<=1600,(W,H)
sheet=Image.new('RGB',(W,H),(60,0,60))
x=0
for i in ims:
    sheet.paste(i,(x,0)); x+=i.width+gap
sheet.save(D+out)
print(out,W,H,len(ims))
