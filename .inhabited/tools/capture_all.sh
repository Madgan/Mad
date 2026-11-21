#!/bin/sh
# Regenerate every screenshot from the current build, then the contact sheets.
set -e
cd /home/user/Mad/.inhabited/tools
rm -f ../designer/screens/*.png
node smoke.js
node s1frames.js 390 844 s1_390 zh
node s1frames.js 390 844 s1_390en en 500,1250,2000,2500
node s1frames.js 1280 800 s1_1280 zh 0,500,1250,1700,2000,2300
node seqs.js 390 844 390 all
node seqs.js 1280 800 1280 scroll
node walk.js 390 844 zh walk390zh
node walk.js 390 844 en walk390en
node walk.js 1280 800 zh walk1280zh
node walk.js 1280 800 en walk1280en
node walk.js 390 844 zh walk390rm reduced
node modes.js
node focus.js
node widths.js
node lang.js
S="python3 sheets.py"
$S sheet_rest_390.png rest_390_zh.png rest_390_en.png
$S sheet_s1_a.png s1_390_t0000.png s1_390_t0300.png s1_390_t0500.png s1_390_t0900.png
$S sheet_s1_b.png s1_390_t1250.png s1_390_t1500.png s1_390_t1700.png s1_390_t1850.png
$S sheet_s1_c.png s1_390_t2000.png s1_390_t2300.png s1_390_t2500.png
$S sheet_s1_en.png s1_390en_t0500.png s1_390en_t1250.png s1_390en_t2000.png s1_390en_t2500.png
$S sheet_s2.png s2_knob_600_390.png s2_knob_1300_390.png s2_knob_2100_390.png s2_focus_key_390.png
$S sheet_s3_client.png s3_0_before_390.png s3_1_client_t060_390.png s3_1_client_t200_390.png s3_1_client_t290_390.png
$S sheet_s3_client2.png s3_1_client_t360_390.png s3_1_client_after_390.png s3_2_add_t080_390.png s3_2_add_t215_390.png
$S sheet_s3_rate.png s3_2_add_t330_390.png s3_2_add_after_390.png s3_3_remove_t060_390.png s3_3_remove_t150_390.png
$S sheet_s3_rate2.png s3_3_remove_t240_390.png s3_3_remove_after_390.png s3_4_none_t150_390.png s3_4_none_t260_390.png
$S sheet_s3_none.png s3_4_none_after_390.png s3_5_redraw_after_390.png s3_6_realtap_after_390.png
$S sheet_s4_down_a.png s4s5_down_0_p000_390.png s4s5_down_1_p004_390.png s4s5_down_2_p030_390.png s4s5_down_3_p052_390.png
$S sheet_s4_down_b.png s4s5_down_4_p060_390.png s4s5_down_5_p068_390.png s4s5_down_6_p082_390.png s4s5_down_7_p093_390.png
$S sheet_s4_up.png s4s5_down_8_p100_390.png s4s5_up_0_p082_390.png s4s5_up_1_p030_390.png s4s5_up_2_p000_390.png
$S sheet_s6.png s6_down_0_p010_390.png s6_down_1_p050_390.png s6_down_2_p086_390.png s6_down_3_p100_390.png
$S sheet_s6_up.png s6_up_0_p050_390.png s6_up_1_p010_390.png s6_tap_before_390.png s6_tap_after_390.png
$S sheet_s8_down.png s8_down_0_p005_390.png s8_down_1_p030_390.png s8_down_2_p060_390.png s8_down_3_p082_390.png
$S sheet_s8_up.png s8_down_4_p100_390.png s8_up_0_p060_390.png s8_up_1_p030_390.png s8_up_2_p005_390.png
$S sheet_s9.png s9_0_before_390.png s9_1_during_390.png s9_2_after_390.png s9_3_undone_390.png
$S sheet_s10.png s10_0_before_390.png s10_1_during_390.png s10_2_revoked_390.png s10_3_created_390.png
$S sheet_walk390zh_a.png walk390zh_00.png walk390zh_01.png walk390zh_02.png walk390zh_03.png
$S sheet_walk390zh_b.png walk390zh_04.png walk390zh_05.png
$S sheet_walk390en_a.png walk390en_00.png walk390en_01.png walk390en_02.png walk390en_03.png
$S sheet_walk390en_b.png walk390en_04.png walk390en_05.png
$S sheet_walk390rm_a.png walk390rm_00.png walk390rm_01.png walk390rm_02.png walk390rm_03.png
$S sheet_walk390rm_b.png walk390rm_04.png walk390rm_05.png
$S sheet_rm.png rm_first_390.png rm_tap_client_390.png rm_story_early_390.png rm_import_early_390.png
$S sheet_rm2.png rm_rail_snap_390.png rm_import_saved_390.png
$S sheet_nojs_a.png nojs_first_390.png nojs_1_390.png nojs_2_390.png nojs_3_390.png
$S sheet_nojs_b.png nojs_4_390.png nojs_5_390.png
$S sheet_rt_a.png rt_load_0_390.png rt_load_1_390.png rt_load_2_390.png rt_load_3_390.png
$S sheet_rt_b.png rt_load_4_390.png rt_load_5_390.png rt_load_6_390.png rt_load_7_390.png
$S sheet_rt_drag.png rt_drag_mid_390.png rt_drag_released_390.png rt_resume_390.png
$S sheet_focus_a.png focus_01_skip_390.png focus_03_toggle_390.png focus_05_topcta_390.png focus_06_herocta_390.png
$S sheet_focus_b.png focus_07_replay_390.png focus_08_rail_390.png focus_10_tile_390.png focus_12_strip_added_390.png
$S sheet_lang.png lang_0_zh_390.png lang_1_mid_390.png lang_2_en_390.png
# keep only what was opened and read: drop the desktop extras that were not
cd ../designer/screens
rm -f lang_mid_390.png walk1280en_*.png focus_toggle_*.png focus_herocta_*.png focus_rail_*.png focus_tile_*.png rt_load_8_390.png s1_1280_t0000.png s1_1280_t0500.png s1_1280_t1700.png s1_1280_t2000.png s1_1280_t2300.png
for f in s4s5_*_1280.png s6_*_1280.png s8_*_1280.png; do case "$f" in s4s5_down_2_p030_1280.png|s8_down_2_p060_1280.png|s6_down_1_p050_1280.png) ;; *) rm -f "$f";; esac; done
ls | wc -l
