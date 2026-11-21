#!/bin/sh
# Regenerate the rebuild-1 evidence set in v1_critic/screens (prefix rebuild1_), then the contact sheets.
# Contact sheets paste the saved frames side by side at full resolution, with no scaling.
set -e
cd /home/user/Mad/.inhabited/tools
node rb1_smoke.js
node rb1_s1.js 390 844 zh rebuild1_s1_390zh 0,100,260,340,500,700,800,860,1000,1150,1200,1300,1420,1600,1650,1780,1830,1900,1960,2100,2200,2300,2420 640
node rb1_s1.js 390 844 en rebuild1_s1_390en 0,260,860,1150,1650,2420 640
node rb1_s1.js 1280 800 zh rebuild1_s1_1280zh 260,1150 800
node rb1_load.js zh rebuild1_rt_zh
node rb1_firstpaint.js
node rb1_scroll.js 390 844 zh
node rb1_walk.js 390 844 zh rebuild1_walk390zh
node rb1_walk.js 390 844 en rebuild1_walk390en
node rb1_walk.js 390 844 zh rebuild1_rm390zh reduced
node rb1_walk.js 390 844 en rebuild1_rm390en reduced
node rb1_walk.js 390 844 zh rebuild1_nojs390 nojs
node rb1_walk.js 1280 800 zh rebuild1_walk1280zh "" 716
node rb1_misc.js
S="python3 rb1_sheets.py"
P=rebuild1_s1_390zh
$S rebuild1_sheet_s1_a.png ${P}_t0000.png ${P}_t0100.png ${P}_t0260.png ${P}_t0340.png
$S rebuild1_sheet_s1_b.png ${P}_t0500.png ${P}_t0700.png ${P}_t0800.png ${P}_t0860.png
$S rebuild1_sheet_s1_c.png ${P}_t1000.png ${P}_t1150.png ${P}_t1200.png ${P}_t1300.png
$S rebuild1_sheet_s1_d.png ${P}_t1420.png ${P}_t1600.png ${P}_t1650.png ${P}_t1780.png
$S rebuild1_sheet_s1_e.png ${P}_t1830.png ${P}_t1900.png ${P}_t1960.png ${P}_t2100.png
$S rebuild1_sheet_s1_f.png ${P}_t2200.png ${P}_t2300.png ${P}_t2420.png
P=rebuild1_s1_390en
$S rebuild1_sheet_s1_en_a.png ${P}_t0000.png ${P}_t0260.png ${P}_t0860.png ${P}_t1150.png
$S rebuild1_sheet_s1_en_b.png ${P}_t1650.png ${P}_t2420.png rebuild1_rest_390_zh.png rebuild1_rest_390_en.png
P=rebuild1_rt_zh
$S rebuild1_sheet_rt_a.png ${P}_00.png ${P}_01.png ${P}_02.png ${P}_03.png
$S rebuild1_sheet_rt_b.png ${P}_04.png ${P}_05.png ${P}_06.png ${P}_07.png
$S rebuild1_sheet_firstpaint.png rebuild1_firstpaint_0000.png rebuild1_firstpaint_0050.png rebuild1_firstpaint_0150.png rebuild1_firstpaint_0400.png
$S rebuild1_sheet_story_a.png rebuild1_story_0_p0m6_390zh.png rebuild1_story_1_p004_390zh.png rebuild1_story_2_p025_390zh.png rebuild1_story_3_p044_390zh.png
$S rebuild1_sheet_story_b.png rebuild1_story_4_p058_390zh.png rebuild1_story_5_p080_390zh.png rebuild1_story_6_p096_390zh.png rebuild1_story_up_p025_390zh.png
$S rebuild1_sheet_month.png rebuild1_month_0_p010_390zh.png rebuild1_month_1_p045_390zh.png rebuild1_month_2_p080_390zh.png rebuild1_month_3_p100_390zh.png
$S rebuild1_sheet_import_a.png rebuild1_import_0_p003_390zh.png rebuild1_import_1_p030_390zh.png rebuild1_import_2_p055_390zh.png rebuild1_import_3_p078_390zh.png
$S rebuild1_sheet_import_b.png rebuild1_import_4_p100_390zh.png rebuild1_approve_mid_390zh.png rebuild1_approve_after_390zh.png rebuild1_token_revoked_390zh.png
P=rebuild1_walk390zh
$S rebuild1_sheet_walk390zh_a.png ${P}_00.png ${P}_01.png ${P}_02.png ${P}_03.png
$S rebuild1_sheet_walk390zh_b.png ${P}_04.png ${P}_05.png ${P}_06.png
P=rebuild1_walk390en
$S rebuild1_sheet_walk390en_a.png ${P}_00.png ${P}_01.png ${P}_02.png ${P}_03.png
$S rebuild1_sheet_walk390en_b.png ${P}_04.png ${P}_05.png ${P}_06.png
$S rebuild1_sheet_rm_a.png rebuild1_rm390zh_00.png rebuild1_rm390zh_01.png rebuild1_rm390zh_02.png rebuild1_rm390zh_03.png
$S rebuild1_sheet_rm_b.png rebuild1_rm390zh_04.png rebuild1_rm390zh_05.png rebuild1_rm390zh_06.png rebuild1_rm390en_00.png
$S rebuild1_sheet_nojs_a.png rebuild1_nojs390_00.png rebuild1_nojs390_01.png rebuild1_nojs390_02.png rebuild1_nojs390_03.png
$S rebuild1_sheet_taps.png rebuild1_tap_client_mid_390.png rebuild1_tap_client_after_390.png rebuild1_tap_rate_mid_390.png rebuild1_tap_rate_after_390.png
$S rebuild1_sheet_focus.png rebuild1_focus_cta_390.png rebuild1_focus_tile_390.png rebuild1_s3_none_390zh.png
echo done
