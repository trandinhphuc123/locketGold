#!url=https://raw.githubusercontent.com/tphuc/shad/main/modules/Locket_ohb.sgmodule
#!name=Locket-TPhuc_Gold
#!desc=Crack By Tphuc

[Script]
# ~ By Tphuc
# ～ Egern transfer to Shadowrocket & Surge & LanceX
revenuecat = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$), script-path=https://raw.githubusercontent.com/tphuc/shad/main/js/Locket_tphuc.js, requires-body=true, max-size=-1, timeout=60

deleteHeader = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers), script-path=https://raw.githubusercontent.com/tphuc/shad/main/js/deleteHeader.js, timeout=60

[MITM]
hostname = %APPEND% api.revenuecat.com
