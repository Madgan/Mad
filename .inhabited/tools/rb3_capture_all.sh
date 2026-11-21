#!/bin/bash
# Regenerate the rebuild-3 evidence set in v1_critic/screens (prefix rebuild3_) and the log tools/rb3_capture_log.txt.
# Every frame is viewport-bounded. Sheets paste frames side by side (phone) or stack two (desktop) at full resolution.
cd /home/user/Mad/.inhabited/tools
S=/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad
O=/home/user/Mad/.inhabited/v1_critic/screens
F=/home/user/Mad/.inhabited/designer/index.html
L=/home/user/Mad/.inhabited/tools/rb3_capture_log.txt
rm -f $O/rebuild3_*.png
{
echo "build: $(wc -c < $F) bytes, $(wc -l < $F) lines, modified $(date -r $F '+%Y-%m-%d %H:%M:%S'); capture run started $(date '+%Y-%m-%d %H:%M:%S')"
echo; echo "== misc (rest, clients, draft, language, ground cuts, taps, focus, zoom)"
node rb3_misc.js 2>&1 | grep -v '^/home'
echo; echo "== opening, stepped on the page clock"
for g in "a 0,100,255,300" "b 500,700,760,830" "c 900,1000,1100,1180" "d 1257,1360,1480,1560" "e 1680,1720,1770,1840" "f 1900,2030,2150,2230" "g 2320,2420"; do set -- $g; node rb3_s1.js 390 844 zh $O/rebuild3_s1_390zh_$1.png $2 0 640; done
node rb3_s1.js 390 844 zh $O/rebuild3_s1_390zh_first600.png 1,85,170,255 150 430
node rb3_s1.js 390 844 zh $O/rebuild3_s1_390zh_first600b.png 300,345,430,600 150 430
node rb3_s1.js 390 844 en $O/rebuild3_s1_390en_a.png 0,255,900,1257 0 640
node rb3_s1.js 390 844 en $O/rebuild3_s1_390en_b.png 1840,2150,2420 0 640
node rb3_s1.js 390 844 zh $O/rebuild3_s1_zoom2x.png 170,255,300 173 394 2
node rb3_s1.js 1280 800 zh $O/rebuild3_s1_1280zh_a.png 1,170 0 640 1 - stack
node rb3_s1.js 1280 800 zh $O/rebuild3_s1_1280zh_b.png 255,300 0 640 1 - stack
node rb3_s1.js 1280 800 zh $O/rebuild3_s1_1280zh_c.png 430,600 0 640 1 - stack
node rb3_s1.js 1280 800 en $O/rebuild3_s1_1280en_a.png 255,900 0 640 1 - stack
echo; echo "== opening on the wall clock (video, 25 frames a second), with the in-page log"
for T in zh390:zh:390:844 en390:en:390:844 zh1280:zh:1280:800; do
  tag=${T%%:*}; rest=${T#*:}; lang=${rest%%:*}; rest=${rest#*:}; w=${rest%%:*}; h=${rest#*:}
  node rb3_video.js $tag $lang $w $h 2>&1
  D=$S/rb3vid_$tag
  ffmpeg -loglevel error -y -i $D/v.webm -vsync 0 $D/f_%04d.png
  echo "frames in $tag: $(ls $D | grep -c '^f_')"
done
python3 rb2_rt_sheets.py $S/rb3vid_zh390 $O/rebuild3_rt390zh 150 640
python3 rb2_rt_sheets.py $S/rb3vid_en390 $O/rebuild3_rt390en 150 640 8
echo; echo "== first paint, the hold and the cut, 8 cold runs (the critic's c3_open2.js)"
node rb3_open.js 2>&1
echo; echo "== lossless frames on the wall clock, with what is drawn in the band"
node rb3_live.js 2>&1
echo; echo "== flash (the critic's c3_flash.py on 146 lossless frames)"
TAG=final ./rb3_flash_all.sh 2>&1
echo; echo "== smear geometry, gutter, desktop positions"
node rb3_geom.js 2>&1
echo; echo "== every timed move, as the page asks for it"
node rb3_durations.js 2>&1
echo; echo "== today: tear, drop, stub (by position)"
node rb3_beats.js 390 844 zh rebuild3_story390zh 2>&1
node rb3_beats.js 390 844 en rebuild3_story390en 2>&1
node rb3_beats.js 1280 800 zh rebuild3_story1280zh 2>&1
echo; echo "== the receipt clock: pictures"
node rb3_ticks.js 390zh 390 844 zh 400 2>&1
node rb3_ticks.js 390en 390 844 en 400 2>&1
node rb3_ticks.js 1280zh 1280 800 zh 500 2>&1
node rb3_ticks.js 1280en 1280 800 en 500 2>&1
echo; echo "== the receipt clock: per-frame log at three wheel speeds"
for sp in 300 600 1500; do node rb3_story.js t390_$sp 390 844 zh $sp 2>&1; done
node rb3_story.js t1280_800 1280 800 zh 800 2>&1
echo; echo "== the four other receipts"
node rb3_receipts.js 390 844 600 2>&1; node rb3_receipts.js 390 844 1500 2>&1; node rb3_receipts.js 1280 800 800 2>&1; node rb3_receipts.js 390 844 600 rm 2>&1
echo; echo "== sections at three scroll positions"
node rb3_sections.js 390 844 zh rebuild3_sec390zh 2>&1
node rb3_sections.js 390 844 en rebuild3_sec390en 2>&1
node rb3_sections.js 1280 800 zh rebuild3_sec1280zh 2>&1
node rb3_sections.js 1280 800 en rebuild3_sec1280en 2>&1
echo; echo "== reduced motion and no script"
node rb3_sections.js 390 844 zh rebuild3_rm390zh reduced 2>&1
node rb3_sections.js 390 844 en rebuild3_rm390en reduced 2>&1
node rb3_sections.js 1280 800 zh rebuild3_rm1280zh reduced 2>&1
node rb3_sections.js 1280 800 en rebuild3_rm1280en reduced 2>&1
node rb3_sections.js 390 844 zh rebuild3_nojs390zh nojs 2>&1
node rb3_sections.js 1280 800 zh rebuild3_nojs1280zh nojs 2>&1
echo; echo "== the language switch with scripts off"
node rb3_nojs_lang.js 390 844 2>&1; node rb3_nojs_lang.js 1280 800 2>&1
echo; echo "== walks by wheel, top to footer"
node rb3_walk.js d1280zh 1280 800 zh js none 2>&1
node rb3_walk.js d1280en 1280 800 en js none 2>&1
node rb3_walk.js d1440zh 1440 900 zh js none 2>&1
node rb3_walk.js m390zh 390 844 zh js none 760 2>&1
node rb3_walk.js m390en 390 844 en js none 760 2>&1
node rb3_walk.js tanjung390zh 390 844 zh js client1 760 2>&1
node rb3_walk.js aria1280en 1280 800 en js client2 2>&1
node rb3_walk.js draft390en 390 844 en js draft 760 2>&1
node rb3_walk.js draft1280zh 1280 800 zh js draft 2>&1
echo; echo "== other widths"
node rb3_shot.js w320_zh 320 700 zh js 0,800,1050,3700 2>&1
node rb3_shot.js w768_zh 768 1024 zh js 0,1500 2>&1
node rb3_shot.js w900_zh 900 800 zh js 0,860,3560 2>&1
node rb3_shot.js w1024_en 1024 768 en js 0,1000,3500 2>&1
node rb3_shot.js w1440_en 1440 900 en js 0,900,4200 2>&1
echo; echo "== margin notes against their targets"
for c in "900 800 zh" "900 800 en" "1024 768 zh" "1024 768 en" "1280 800 zh" "1280 800 en" "1440 900 zh" "1440 900 en"; do set -- $c; echo "-- $1 x $2 $3"; node rb3_measure.js $1 $2 $3 2>&1; done
echo; echo "== language switch: place held (the critic's c3_lang.js)"
node rb3_lang.js 2>&1
echo; echo "== contrast (computed)"
python3 rb2_contrast.py 2>&1
echo; echo "== audit"
node rb3_audit.js 2>&1
echo; echo "== sizes, targets, gutters, overflow at five widths"
node rb3_sizes.js 2>&1
echo; echo "== the last line: does anything in view move when it is cut"
node rb3_shift.js 2>&1; node rb3_shift2.js 2>&1
echo; echo "== code checks"
./rb3_greps.sh 2>&1
echo; echo "capture run finished $(date '+%Y-%m-%d %H:%M:%S'); build modified $(date -r $F '+%Y-%m-%d %H:%M:%S')"
} > $L 2>&1
echo done
