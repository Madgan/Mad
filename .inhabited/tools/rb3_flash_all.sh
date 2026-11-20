#!/bin/bash
# rebuild 3: the critic's flash count (c3_flash.py) on 146 lossless frames, three conditions. usage: rb3_flash_all.sh <tag> [file]
S=/tmp/claude-0/-home-user-Mad/d20709b7-82e7-5279-b1d0-ee4b8a86d2c4/scratchpad
cd /home/user/Mad/.inhabited/tools
for c in "390 844 zh" "390 844 en" "1280 800 zh"; do set -- $c; q=""; [ "$3" = en ] && q="&lang=en"
  echo "== $1 x $2 $3"; node rb3_flashcap.js $1 $2 $S/flash_${TAG:-x}_$1_$3 "$q" ${FILE:-/home/user/Mad/.inhabited/designer/index.html} >/dev/null && python3 c3_flash.py $S/flash_${TAG:-x}_$1_$3 | grep -E '^pixels with (4|7)|stage'
done
