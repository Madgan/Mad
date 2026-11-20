#!/bin/sh
# Regenerate the rebuild-2 evidence set in v1_critic/screens (prefix rebuild2_). Every frame is viewport-bounded.
# Sheets paste frames side by side (phone) or stack two (1280 x 800) at full resolution.
set -e
cd /home/user/Mad/.inhabited/tools
S=/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad
O=/home/user/Mad/.inhabited/v1_critic/screens
L=$S/rb2_logs.txt
: > $L
echo "== misc (rest, clients, draft, language, ground cuts, taps, focus, zoom)" >> $L
node rb2_misc.js 2>&1 | grep -v '^/home' >> $L
echo "== opening, stepped on the page clock, 390 zh" >> $L
node rb2_s1.js 390 844 zh rebuild2_s1_390zh_a 0,100,255,300 0 640 >> $L
node rb2_s1.js 390 844 zh rebuild2_s1_390zh_b 500,700,760,830 0 640 >> $L
node rb2_s1.js 390 844 zh rebuild2_s1_390zh_c 900,1000,1100,1180 0 640 >> $L
node rb2_s1.js 390 844 zh rebuild2_s1_390zh_d 1257,1360,1480,1560 0 640 >> $L
node rb2_s1.js 390 844 zh rebuild2_s1_390zh_e 1680,1720,1770,1840 0 640 >> $L
node rb2_s1.js 390 844 zh rebuild2_s1_390zh_f 1900,2030,2150,2230 0 640 >> $L
node rb2_s1.js 390 844 zh rebuild2_s1_390zh_g 2320,2420 0 640 >> $L
node rb2_s1.js 390 844 en rebuild2_s1_390en_a 0,255,900,1257 0 640 >> $L
node rb2_s1.js 390 844 en rebuild2_s1_390en_b 1840,2150,2420 0 640 >> $L
node rb2_s1.js 390 844 zh rebuild2_s1_zoom2x 170,255,300 173 394 2 >> $L
node rb2_s1.js 1280 800 zh rebuild2_s1_1280zh_t0255 255 0 800 >> $L
node rb2_s1.js 1280 800 zh rebuild2_s1_1280zh_t0900 900 0 800 >> $L
echo "== opening on the wall clock (video, 25 frames a second), with the in-page log" >> $L
for T in zh390:zh:390:844 en390:en:390:844 zh1280:zh:1280:800; do
  tag=${T%%:*}; rest=${T#*:}; lang=${rest%%:*}; rest=${rest#*:}; w=${rest%%:*}; h=${rest#*:}
  node rb2_video.js $tag $lang $w $h >> $L 2>&1
  D=$S/rb2vid_$tag
  ffmpeg -loglevel error -y -i $D/v.webm -vsync 0 $D/f_%04d.png
  echo "frames in $tag: $(ls $D | grep -c '^f_')" >> $L
done
node rb2_video.js zh390slow zh 390 844 x slowfonts >> $L 2>&1
D=$S/rb2vid_zh390
python3 rb2_rt_sheets.py $D $O/rebuild2_rt390zh 150 640 >> $L
python3 rb2_rt_sheets.py $S/rb2vid_en390 $O/rebuild2_rt390en 150 640 12 >> $L
echo "== first paint and the opening hold, sampled in the page without recording" >> $L
node rb2_firstpaint.js >> $L 2>&1
echo "== lossless frames on the wall clock, with what is drawn in the band" >> $L
node rb2_live.js >> $L 2>&1
echo "== flash" >> $L
node rb2_flashcap.js 390 844 $S/flash390 >> $L && python3 rb2_flash.py $S/flash390 >> $L
node rb2_flashcap.js 1280 800 $S/flash1280 >> $L && python3 rb2_flash.py $S/flash1280 >> $L
echo "== today: tear, drop, stub, ticks" >> $L
node rb2_story.js 390 844 zh rebuild2_story390zh >> $L 2>&1
node rb2_story.js 390 844 en rebuild2_story390en >> $L 2>&1
node rb2_story.js 1280 800 zh rebuild2_story1280zh >> $L 2>&1
echo "== sections at three scroll positions" >> $L
node rb2_sections.js 390 844 zh rebuild2_sec390zh >> $L 2>&1
node rb2_sections.js 390 844 en rebuild2_sec390en >> $L 2>&1
node rb2_sections.js 1280 800 zh rebuild2_sec1280zh >> $L 2>&1
node rb2_sections.js 1280 800 en rebuild2_sec1280en >> $L 2>&1
echo "== reduced motion and no script" >> $L
node rb2_sections.js 390 844 zh rebuild2_rm390zh reduced >> $L 2>&1
node rb2_sections.js 390 844 en rebuild2_rm390en reduced >> $L 2>&1
node rb2_sections.js 1280 800 zh rebuild2_rm1280zh reduced >> $L 2>&1
node rb2_sections.js 390 844 zh rebuild2_nojs390zh nojs >> $L 2>&1
node rb2_sections.js 1280 800 zh rebuild2_nojs1280zh nojs >> $L 2>&1
echo "== other widths" >> $L
node rb2_shot.js '{"w":320,"h":700,"out":[{"name":"rebuild2_wip_n0","y":0},{"name":"rebuild2_wip_n1","y":800},{"name":"rebuild2_wip_n2","y":1050},{"name":"rebuild2_wip_n3","y":3700}]}' >> $L
python3 rb2_paste.py $O/rebuild2_w320_zh.png $O/rebuild2_wip_n0.png $O/rebuild2_wip_n1.png $O/rebuild2_wip_n2.png $O/rebuild2_wip_n3.png >> $L
node rb2_shot.js '{"w":1024,"h":768,"lang":"en","out":[{"name":"rebuild2_wip_m0","y":0},{"name":"rebuild2_wip_m1","y":1000}]}' >> $L
python3 rb2_vstack.py $O/rebuild2_w1024_en.png $O/rebuild2_wip_m0.png $O/rebuild2_wip_m1.png >> $L
node rb2_shot.js '{"w":900,"h":700,"out":[{"name":"rebuild2_wip_m0","y":0},{"name":"rebuild2_wip_m1","y":1900}]}' >> $L
python3 rb2_vstack.py $O/rebuild2_w900_zh.png $O/rebuild2_wip_m0.png $O/rebuild2_wip_m1.png >> $L
echo "== contrast" >> $L
python3 rb2_contrast.py >> $L
echo "== audit" >> $L
node rb2_audit.js >> $L 2>&1
echo done
