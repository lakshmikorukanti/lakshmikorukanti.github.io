System.register(["./chunk-vendor.js","./chunk-frameworks.js"],(function(){"use strict";var t,n,e;return{setters:[function(e){t=e.r,n=e.a},function(t){e=t.r}],execute:function(){t(".js-fetch-downgrade-features-count",(async function(t,n){const e=(await n.json()).json;for(const c in e.counts){const n=`.js-downgrade-count[data-${c}-count]`,s=t.querySelector(n);o=s,(r=e.counts[c])&&"0"!==r?o.textContent=`(using ${r})`:o.remove()}var o,r})),n(".js-fetch-downgrade-features-count",{constructor:HTMLFormElement,add:e})}}}));
//# sourceMappingURL=billing-settings-c3884a17.js.map
