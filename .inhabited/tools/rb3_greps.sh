#!/bin/bash
# Rebuild 3: the code searches behind the constraint gate and hard limits 3, 4, 5, 6 and 9 (the critic's own patterns).
cd /home/user/Mad/.inhabited
F=designer/index.html
echo "-- opacity, alpha, fades (every hit is listed)"
grep -n -i -o -E '.{0,40}(opacity|globalAlpha|rgba\(|hsla\(|#[0-9a-f]{8}\b|fade|dissolve).{0,30}' $F
echo "-- 4-digit hex colours: $(grep -c -i -E '#[0-9a-f]{4}\b[^0-9a-f]' $F | head -1) lines match the loose pattern; listed:"; grep -n -i -o -E '.{0,20}#[0-9a-f]{4}\b[^0-9a-f].{0,10}' $F | grep -v -i -E '#[0-9a-f]{6}' | head
echo "-- transition / animation / keyframes"
grep -n -i -o -E '.{0,60}(transition|@keyframes|animation|startViewTransition|<animate|scroll-timeline|view-timeline|animation-timeline).{0,50}' $F
echo "-- .animate( calls: $(grep -c '\.animate(' $F) lines; requestAnimationFrame: $(grep -c 'requestAnimationFrame' $F) lines; canvas: $(grep -c -i '<canvas\|getContext' $F)"
echo "-- transparent: $(grep -o -i 'transparent' $F | wc -l) occurrences (borders and dash gradients)"
echo "-- limit 3:"; grep -n -i -E 'LHDN|IRBM|MyInvois|\be[- ]?invoic|einvois|validat|\bQR\b|qrcode|电子发票|內陸稅收局|内陆税收局|税务局|已验证|验证通过' $F; echo "   (end; exit $?)"
echo "-- limit 4:"; grep -n -i -E 'cheque|check leaf|支票|payee|A/C|or bearer|Maybank|CIMB|Public Bank|RHB|Hong Leong|AmBank|UOB|OCBC|HSBC|Bank Islam|Bank Rakyat|Alliance|Affin|DuitNow|FPX|Touch .?n Go|马来亚银行|大众银行|联昌|丰隆|兴业' $F; echo "   (end; exit $?)"
echo "-- payment words:"; grep -n -i -o -E '.{0,30}(paid|已付|收款|payment received|pay now|credit card|refund|\bSST\b|trusted by|no card).{0,30}' $F; echo "   (end)"
echo "-- limit 5:"; grep -n -i -o -E '.{0,30}(<img|<picture|<video|url\(|data:image/(png|jpe?g|webp|gif|avif)|\.(png|jpe?g|webp|gif|avif|mp4|webm)\b).{0,30}' $F
echo "-- limit 6 (long dashes):"; LC_ALL=C.UTF-8 grep -n -P '[\x{2012}\x{2013}\x{2014}\x{2015}\x{2E3A}\x{2E3B}\x{FE31}\x{FE58}]' $F; echo "   (end; exit $?)"
echo "-- limit 9:"; grep -n -i -o -E '.{0,30}(<audio|<video|AudioContext|webkitAudioContext|new Audio|speechSynthesis|\.play\(|\.mp3|\.wav|\.ogg).{0,30}' $F
echo "-- prices:"; grep -o -E 'RM ?[0-9][0-9,]*(/| / )?(年|year)?' $F | sort | uniq -c
echo "-- external requests:"; grep -n -o -E '(src|href)="https?://[^"]+"' $F | sort | uniq -c | sort -rn
echo "-- listeners that could trap scroll:"; grep -n -o -E '.{0,30}(preventDefault|wheel|touchmove|scroll-snap|overscroll).{0,40}' $F
