export default(async()=>{function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(n)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),i=a?t=>requestAnimationFrame(t):t;const u=new Set;function h(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&i(h)}let d=!1;function f(t,e,n,s){for(;t<e;){const o=t+(e-t>>1);n(o)<=s?t=o+1:e=o}return t}function m(t,e){d?(function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const l=f(1,o+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;s[t]=n[l]+1;const r=l+1;n[r]=t,o=Math.max(r,o)}const l=[],r=[];let a=e.length-1;for(let t=n[o]+1;0!=t;t=s[t-1]){for(l.push(e[t-1]);a>=t;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);l.reverse(),r.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<r.length;e++){for(;n<l.length&&r[e].claim_order>=l[n].claim_order;)n++;const s=n<l.length?l[n]:null;t.insertBefore(r[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function v(t,e,n){d&&!n?m(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function $(){return y(" ")}function w(){return y("")}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t){return Array.from(t.childNodes)}function b(t,e,n,s,o=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l))return n(l),t.splice(s,1),o||(t.claim_info.last_index=s),l}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l))return n(l),t.splice(s,1),o?t.claim_info.last_index--:t.claim_info.last_index=s,l}return s()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function T(t,e,n,s){return b(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const o=t.attributes[s];n[o.name]||e.push(o.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):x(e)))}function P(t,e){return b(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>y(e)),!0)}function I(t){return P(t," ")}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}const S=new Set;let H,D=0;function F(t,e,n,s,o,l,r,a=0){const c=16.666/s;let i="{\n";for(let t=0;t<=1;t+=c){const s=e+(n-e)*l(t);i+=100*t+`%{${r(s,1-s)}}\n`}const u=i+`100% {${r(n,1-n)}}\n}`,h=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=t.ownerDocument;S.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(x("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[h]||(m[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${h} ${s}ms linear ${o}ms 1 both`,D+=1,h}function L(t){H=t}function k(t){(function(){if(!H)throw new Error("Function called outside component initialization");return H})().$$.on_mount.push(t)}const B=[],R=[],z=[],C=[],q=Promise.resolve();let O=!1;function M(t){z.push(t)}function U(t){C.push(t)}let j=!1;const K=new Set;function G(){if(!j){j=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];L(e),J(e.$$)}for(L(null),B.length=0;R.length;)R.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];K.has(e)||(K.add(e),e())}z.length=0}while(B.length);for(;C.length;)C.pop()();O=!1,j=!1,K.clear()}}function J(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let Q;function V(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,void 0),n}(`${e?"intro":"outro"}${n}`))}const W=new Set;let X;function Y(){X={r:0,c:[],p:X}}function Z(){X.r||o(X.c),X=X.p}function tt(t,e){t&&t.i&&(W.delete(t),t.i(e))}function et(t,e,n,s){if(t&&t.o){if(W.has(t))return;W.add(t),X.c.push((()=>{W.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const nt={duration:0};function st(n,s,r,a){let d=s(n,r),f=a?0:1,m=null,v=null,p=null;function g(){p&&function(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-s.length;o&&(t.style.animation=s.join(", "),D-=o,D||i((()=>{D||(S.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),S.clear())})))}(n,p)}function x(t,e){const n=t.b-f;return e*=Math.abs(n),{a:f,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(s){const{delay:l=0,duration:r=300,easing:a=e,tick:y=t,css:$}=d||nt,w={start:c()+l,b:s};s||(w.group=X,X.r+=1),m||v?v=w:($&&(g(),p=F(n,f,s,r,l,a,$)),s&&y(0,1),m=x(w,r),M((()=>V(n,s,"start"))),function(t){let e;0===u.size&&i(h),new Promise((n=>{u.add(e={c:t,f:n})}))}((t=>{if(v&&t>v.start&&(m=x(v,r),v=null,V(n,m.b,"start"),$&&(g(),p=F(n,f,m.b,m.duration,0,a,d.css))),m)if(t>=m.end)y(f=m.b,1-f),V(n,m.b,"end"),v||(m.b?g():--m.group.r||o(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;f=m.a+m.d*a(e/m.duration),y(f,1-f)}return!(!m&&!v)})))}return{run(t){l(d)?(Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q).then((()=>{d=d(),y(t)})):y(t)},end(){g(),m=v=null}}}function ot(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function lt(t){t&&t.c()}function rt(t,e){t&&t.l(e)}function at(t,e,s,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:u}=t.$$;a&&a.m(e,s),r||M((()=>{const e=c.map(n).filter(l);i?i.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(M)}function ct(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(e,n,l,r,a,c,i=[-1]){const u=H;L(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:i,skip_bound:!1};let f=!1;if(h.ctx=l?l(e,n.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),f&&function(t,e){-1===t.$$.dirty[0]&&(B.push(t),O||(O=!0,q.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],h.update(),f=!0,o(h.before_update),h.fragment=!!r&&r(h.ctx),n.target){if(n.hydrate){d=!0;const t=E(n.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();n.intro&&tt(e.$$.fragment),at(e,n.target,n.anchor,n.customElement),d=!1,G()}L(u)}class ut{$destroy(){ct(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ht(t,e,n){const s=t.slice();return s[1]=e[n],s}function dt(t){let e,n,s,o,l,r,a,c,i,u,h,d,f,g,w,b,N,S,H,D,F=t[1].utcTime+"",L=t[1].side+"",k=t[1].reduceOnly+"",B=t[1].reason+"",R=t[1].asset+"",z=t[1].equityBeforeThisDeal+"";return{c(){e=x("tr"),n=x("td"),s=y(F),o=$(),l=x("td"),r=y(L),a=$(),c=x("td"),i=y(k),u=$(),h=x("td"),d=y(B),f=$(),g=x("td"),w=y(R),b=$(),N=x("td"),S=y(z),H=$(),D=x("tr"),this.h()},l(t){e=T(t,"TR",{class:!0});var m=E(e);n=T(m,"TD",{class:!0});var v=E(n);s=P(v,F),v.forEach(p),o=I(m),l=T(m,"TD",{class:!0});var x=E(l);r=P(x,L),x.forEach(p),a=I(m),c=T(m,"TD",{class:!0});var y=E(c);i=P(y,k),y.forEach(p),u=I(m),h=T(m,"TD",{class:!0});var $=E(h);d=P($,B),$.forEach(p),f=I(m),g=T(m,"TD",{class:!0});var _=E(g);w=P(_,R),_.forEach(p),b=I(m),N=T(m,"TD",{class:!0});var A=E(N);S=P(A,z),A.forEach(p),H=I(m),m.forEach(p),D=T(t,"TR",{class:!0}),E(D).forEach(p),this.h()},h(){_(n,"class","svelte-1x3wihs"),_(l,"class","svelte-1x3wihs"),_(c,"class","svelte-1x3wihs"),_(h,"class","svelte-1x3wihs"),_(g,"class","svelte-1x3wihs"),_(N,"class","svelte-1x3wihs"),_(e,"class","svelte-1x3wihs"),_(D,"class","svelte-1x3wihs")},m(t,p){v(t,e,p),m(e,n),m(n,s),m(e,o),m(e,l),m(l,r),m(e,a),m(e,c),m(c,i),m(e,u),m(e,h),m(h,d),m(e,f),m(e,g),m(g,w),m(e,b),m(e,N),m(N,S),m(e,H),v(t,D,p)},p(t,e){1&e&&F!==(F=t[1].utcTime+"")&&A(s,F),1&e&&L!==(L=t[1].side+"")&&A(r,L),1&e&&k!==(k=t[1].reduceOnly+"")&&A(i,k),1&e&&B!==(B=t[1].reason+"")&&A(d,B),1&e&&R!==(R=t[1].asset+"")&&A(w,R),1&e&&z!==(z=t[1].equityBeforeThisDeal+"")&&A(S,z)},d(t){t&&p(e),t&&p(D)}}}function ft(e){let n,s,o,l,r,a,c,i,u,h,d,f,w,b,A,N,S,H,D,F,L,k,B,R=e[0].dealHistory,z=[];for(let t=0;t<R.length;t+=1)z[t]=dt(ht(e,R,t));return{c(){n=x("h2"),s=y("Deal History"),o=$(),l=x("table"),r=x("tr"),a=x("th"),c=y("UTC Time"),i=$(),u=x("th"),h=y("Side"),d=$(),f=x("th"),w=y("Reduce Only"),b=$(),A=x("th"),N=y("Reason"),S=$(),H=x("th"),D=y("Asset"),F=$(),L=x("th"),k=y("Equity Before This Deal"),B=$();for(let t=0;t<z.length;t+=1)z[t].c();this.h()},l(t){n=T(t,"H2",{});var e=E(n);s=P(e,"Deal History"),e.forEach(p),o=I(t),l=T(t,"TABLE",{class:!0});var m=E(l);r=T(m,"TR",{class:!0});var v=E(r);a=T(v,"TH",{class:!0});var g=E(a);c=P(g,"UTC Time"),g.forEach(p),i=I(v),u=T(v,"TH",{class:!0});var x=E(u);h=P(x,"Side"),x.forEach(p),d=I(v),f=T(v,"TH",{class:!0});var y=E(f);w=P(y,"Reduce Only"),y.forEach(p),b=I(v),A=T(v,"TH",{class:!0});var $=E(A);N=P($,"Reason"),$.forEach(p),S=I(v),H=T(v,"TH",{class:!0});var _=E(H);D=P(_,"Asset"),_.forEach(p),F=I(v),L=T(v,"TH",{class:!0});var R=E(L);k=P(R,"Equity Before This Deal"),R.forEach(p),v.forEach(p),B=I(m);for(let t=0;t<z.length;t+=1)z[t].l(m);m.forEach(p),this.h()},h(){_(a,"class","svelte-1x3wihs"),_(u,"class","svelte-1x3wihs"),_(f,"class","svelte-1x3wihs"),_(A,"class","svelte-1x3wihs"),_(H,"class","svelte-1x3wihs"),_(L,"class","svelte-1x3wihs"),_(r,"class","svelte-1x3wihs"),_(l,"class","svelte-1x3wihs")},m(t,e){v(t,n,e),m(n,s),v(t,o,e),v(t,l,e),m(l,r),m(r,a),m(a,c),m(r,i),m(r,u),m(u,h),m(r,d),m(r,f),m(f,w),m(r,b),m(r,A),m(A,N),m(r,S),m(r,H),m(H,D),m(r,F),m(r,L),m(L,k),m(l,B);for(let t=0;t<z.length;t+=1)z[t].m(l,null)},p(t,[e]){if(1&e){let n;for(R=t[0].dealHistory,n=0;n<R.length;n+=1){const s=ht(t,R,n);z[n]?z[n].p(s,e):(z[n]=dt(s),z[n].c(),z[n].m(l,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=R.length}},i:t,o:t,d(t){t&&p(n),t&&p(o),t&&p(l),g(z,t)}}}function mt(t,e,n){let{accountInfo:s}=e;return t.$$set=t=>{"accountInfo"in t&&n(0,s=t.accountInfo)},[s]}class vt extends ut{constructor(t){var e;super(),document.getElementById("svelte-1x3wihs-style")||((e=x("style")).id="svelte-1x3wihs-style",e.textContent="table.svelte-1x3wihs{font-family:arial, sans-serif;border-collapse:collapse;width:100%}td.svelte-1x3wihs,th.svelte-1x3wihs{border:1px solid #dddddd;text-align:left;padding:8px}tr.svelte-1x3wihs:nth-child(even){background-color:#dddddd}",m(document.head,e)),it(this,t,mt,ft,r,{accountInfo:0})}}function pt(t){let e,n,s;function o(e){t[1](e)}let l={};return void 0!==t[0]&&(l.accountInfo=t[0]),e=new vt({props:l}),R.push((()=>ot(e,"accountInfo",o))),{c(){lt(e.$$.fragment)},l(t){rt(e.$$.fragment,t)},m(t,n){at(e,t,n),s=!0},p(t,s){const o={};!n&&1&s&&(n=!0,o.accountInfo=t[0],U((()=>n=!1))),e.$set(o)},i(t){s||(tt(e.$$.fragment,t),s=!0)},o(t){et(e.$$.fragment,t),s=!1},d(t){ct(e,t)}}}function gt(t){let e,n,s,o,l,r,a,c,i,u,h,d,f,g,b,N,S,H,D,F,L,k,B,R,z,C,q,O,M,U,j,K,G,J,Q,V,W,X,nt,st,ot,lt,rt,at,ct,it,ut,ht,dt,ft,mt,vt,gt,xt=t[0].equity.toFixed(2)+"",yt=t[0].avaliableBalance.toFixed(2)+"",$t=t[0].longPositionSize.toFixed(2)+"",wt=t[0].longPositionPNLInPercent.toFixed(2)+"",_t=t[0].shortPositionSize.toFixed(2)+"",Et=t[0].shortPositionPNLInPercent.toFixed(2)+"",bt=t[0].overallUnrealizedPNL.toFixed(2)+"",Tt=void 0!==t[0]&&pt(t);return{c(){e=x("h2"),n=y("General Account Info"),s=$(),o=x("table"),l=x("tr"),r=x("th"),a=y("Equity"),c=$(),i=x("th"),u=y("Available"),h=$(),d=x("th"),f=y("Long Position Size"),g=$(),b=x("th"),N=y("Long Position PNL in %"),S=$(),H=x("th"),D=y("Short Position Size"),F=$(),L=x("th"),k=y("Short Position PNL %"),B=$(),R=x("th"),z=y("O Unr PNL in %"),C=$(),q=x("tr"),O=x("td"),M=y(xt),U=$(),j=x("td"),K=y(yt),G=$(),J=x("td"),Q=y($t),V=$(),W=x("td"),X=y(wt),nt=$(),st=x("td"),ot=y(_t),lt=$(),rt=x("td"),at=y(Et),ct=$(),it=x("td"),ut=y(bt),ht=$(),dt=x("p"),ft=x("br"),mt=$(),Tt&&Tt.c(),vt=w(),this.h()},l(t){e=T(t,"H2",{});var m=E(e);n=P(m,"General Account Info"),m.forEach(p),s=I(t),o=T(t,"TABLE",{class:!0});var v=E(o);l=T(v,"TR",{class:!0});var x=E(l);r=T(x,"TH",{class:!0});var y=E(r);a=P(y,"Equity"),y.forEach(p),c=I(x),i=T(x,"TH",{class:!0});var $=E(i);u=P($,"Available"),$.forEach(p),h=I(x),d=T(x,"TH",{class:!0});var _=E(d);f=P(_,"Long Position Size"),_.forEach(p),g=I(x),b=T(x,"TH",{class:!0});var A=E(b);N=P(A,"Long Position PNL in %"),A.forEach(p),S=I(x),H=T(x,"TH",{class:!0});var Y=E(H);D=P(Y,"Short Position Size"),Y.forEach(p),F=I(x),L=T(x,"TH",{class:!0});var Z=E(L);k=P(Z,"Short Position PNL %"),Z.forEach(p),B=I(x),R=T(x,"TH",{class:!0});var tt=E(R);z=P(tt,"O Unr PNL in %"),tt.forEach(p),x.forEach(p),C=I(v),q=T(v,"TR",{class:!0});var et=E(q);O=T(et,"TD",{class:!0});var pt=E(O);M=P(pt,xt),pt.forEach(p),U=I(et),j=T(et,"TD",{class:!0});var gt=E(j);K=P(gt,yt),gt.forEach(p),G=I(et),J=T(et,"TD",{class:!0});var Pt=E(J);Q=P(Pt,$t),Pt.forEach(p),V=I(et),W=T(et,"TD",{class:!0});var It=E(W);X=P(It,wt),It.forEach(p),nt=I(et),st=T(et,"TD",{class:!0});var At=E(st);ot=P(At,_t),At.forEach(p),lt=I(et),rt=T(et,"TD",{class:!0});var Nt=E(rt);at=P(Nt,Et),Nt.forEach(p),ct=I(et),it=T(et,"TD",{class:!0});var St=E(it);ut=P(St,bt),St.forEach(p),et.forEach(p),v.forEach(p),ht=I(t),dt=T(t,"P",{});var Ht=E(dt);ft=T(Ht,"BR",{}),Ht.forEach(p),mt=I(t),Tt&&Tt.l(t),vt=w(),this.h()},h(){_(r,"class","svelte-1x3wihs"),_(i,"class","svelte-1x3wihs"),_(d,"class","svelte-1x3wihs"),_(b,"class","svelte-1x3wihs"),_(H,"class","svelte-1x3wihs"),_(L,"class","svelte-1x3wihs"),_(R,"class","svelte-1x3wihs"),_(l,"class","svelte-1x3wihs"),_(O,"class","svelte-1x3wihs"),_(j,"class","svelte-1x3wihs"),_(J,"class","svelte-1x3wihs"),_(W,"class","svelte-1x3wihs"),_(st,"class","svelte-1x3wihs"),_(rt,"class","svelte-1x3wihs"),_(it,"class","svelte-1x3wihs"),_(q,"class","svelte-1x3wihs"),_(o,"class","svelte-1x3wihs")},m(t,p){v(t,e,p),m(e,n),v(t,s,p),v(t,o,p),m(o,l),m(l,r),m(r,a),m(l,c),m(l,i),m(i,u),m(l,h),m(l,d),m(d,f),m(l,g),m(l,b),m(b,N),m(l,S),m(l,H),m(H,D),m(l,F),m(l,L),m(L,k),m(l,B),m(l,R),m(R,z),m(o,C),m(o,q),m(q,O),m(O,M),m(q,U),m(q,j),m(j,K),m(q,G),m(q,J),m(J,Q),m(q,V),m(q,W),m(W,X),m(q,nt),m(q,st),m(st,ot),m(q,lt),m(q,rt),m(rt,at),m(q,ct),m(q,it),m(it,ut),v(t,ht,p),v(t,dt,p),m(dt,ft),v(t,mt,p),Tt&&Tt.m(t,p),v(t,vt,p),gt=!0},p(t,[e]){(!gt||1&e)&&xt!==(xt=t[0].equity.toFixed(2)+"")&&A(M,xt),(!gt||1&e)&&yt!==(yt=t[0].avaliableBalance.toFixed(2)+"")&&A(K,yt),(!gt||1&e)&&$t!==($t=t[0].longPositionSize.toFixed(2)+"")&&A(Q,$t),(!gt||1&e)&&wt!==(wt=t[0].longPositionPNLInPercent.toFixed(2)+"")&&A(X,wt),(!gt||1&e)&&_t!==(_t=t[0].shortPositionSize.toFixed(2)+"")&&A(ot,_t),(!gt||1&e)&&Et!==(Et=t[0].shortPositionPNLInPercent.toFixed(2)+"")&&A(at,Et),(!gt||1&e)&&bt!==(bt=t[0].overallUnrealizedPNL.toFixed(2)+"")&&A(ut,bt),void 0!==t[0]?Tt?(Tt.p(t,e),1&e&&tt(Tt,1)):(Tt=pt(t),Tt.c(),tt(Tt,1),Tt.m(vt.parentNode,vt)):Tt&&(Y(),et(Tt,1,1,(()=>{Tt=null})),Z())},i(t){gt||(tt(Tt),gt=!0)},o(t){et(Tt),gt=!1},d(t){t&&p(e),t&&p(s),t&&p(o),t&&p(ht),t&&p(dt),t&&p(mt),Tt&&Tt.d(t),t&&p(vt)}}}function xt(t,e,n){let{accountInfo:s}=e;return t.$$set=t=>{"accountInfo"in t&&n(0,s=t.accountInfo)},[s,function(t){s=t,n(0,s)}]}class yt extends ut{constructor(t){var e;super(),document.getElementById("svelte-1x3wihs-style")||((e=x("style")).id="svelte-1x3wihs-style",e.textContent="table.svelte-1x3wihs{font-family:arial, sans-serif;border-collapse:collapse;width:100%}td.svelte-1x3wihs,th.svelte-1x3wihs{border:1px solid #dddddd;text-align:left;padding:8px}tr.svelte-1x3wihs:nth-child(even){background-color:#dddddd}",m(document.head,e)),it(this,t,xt,gt,r,{accountInfo:0})}}function $t(t){let e,n,s;function o(e){t[2](e)}let l={};return void 0!==t[0]&&(l.accountInfo=t[0]),e=new yt({props:l}),R.push((()=>ot(e,"accountInfo",o))),{c(){lt(e.$$.fragment)},l(t){rt(e.$$.fragment,t)},m(t,n){at(e,t,n),s=!0},p(t,s){const o={};!n&&1&s&&(n=!0,o.accountInfo=t[0],U((()=>n=!1))),e.$set(o)},i(t){s||(tt(e.$$.fragment,t),s=!0)},o(t){et(e.$$.fragment,t),s=!1},d(t){ct(e,t)}}}function wt(t){let e,n,s,o,l,r,a,c,i,u,h,d,f,g=void 0!==t[0]&&$t(t);return{c(){e=x("h1"),n=y("Hello Friend"),s=$(),o=x("h4"),l=y("your APIKey: "),r=y(t[1]),a=$(),c=x("p"),i=$(),u=x("p"),g&&g.c(),h=$(),d=x("link"),this.h()},l(f){e=T(f,"H1",{class:!0});var m=E(e);n=P(m,"Hello Friend"),m.forEach(p),s=I(f),o=T(f,"H4",{});var v=E(o);l=P(v,"your APIKey: "),r=P(v,t[1]),v.forEach(p),a=I(f),c=T(f,"P",{}),E(c).forEach(p),i=I(f),u=T(f,"P",{});var x=E(u);g&&g.l(x),x.forEach(p),h=I(f),d=T(f,"LINK",{href:!0,rel:!0}),this.h()},h(){_(e,"class","svelte-1cxhk4e"),_(d,"href","https://fonts.googleapis.com/css?family=Overpass:100,400"),_(d,"rel","stylesheet")},m(t,p){v(t,e,p),m(e,n),v(t,s,p),v(t,o,p),m(o,l),m(o,r),v(t,a,p),v(t,c,p),v(t,i,p),v(t,u,p),g&&g.m(u,null),v(t,h,p),v(t,d,p),f=!0},p(t,[e]){(!f||2&e)&&A(r,t[1]),void 0!==t[0]?g?(g.p(t,e),1&e&&tt(g,1)):(g=$t(t),g.c(),tt(g,1),g.m(u,null)):g&&(Y(),et(g,1,1,(()=>{g=null})),Z())},i(t){f||(tt(g),f=!0)},o(t){et(g),f=!1},d(t){t&&p(e),t&&p(s),t&&p(o),t&&p(a),t&&p(c),t&&p(i),t&&p(u),g&&g.d(),t&&p(h),t&&p(d)}}}function _t(t,e,n){let s,o;return k((async()=>{const t=new URLSearchParams(window.location.search);n(1,o=t.get("apikey"));const e=`http://65.21.110.40:3001/getAccountInfo/apiKey/${o}`;try{n(0,s=await(await fetch(e)).json()),console.log(s)}catch(t){alert(`I could not get any data for api key ${o}`)}})),[s,o,function(t){s=t,n(0,s)}]}class Et extends ut{constructor(t){var e;super(),document.getElementById("svelte-1cxhk4e-style")||((e=x("style")).id="svelte-1cxhk4e-style",e.textContent="h1.svelte-1cxhk4e{color:#ff3e00;text-transform:uppercase;font-size:4em;font-weight:100}",m(document.head,e)),it(this,t,_t,wt,r,{})}}function bt(t,e,n){const s=t.slice();return s[2]=e[n],s}function Tt(t){let e,n,s=t[2].character+"";return{c(){e=x("span"),n=y(s),this.h()},l(t){e=T(t,"SPAN",{style:!0,class:!0});var o=E(e);n=P(o,s),o.forEach(p),this.h()},h(){N(e,"left",t[2].x+"%"),N(e,"top",t[2].y+"%"),N(e,"transform","scale("+t[2].r+")"),_(e,"class","svelte-5dvyog")},m(t,s){v(t,e,s),m(e,n)},p(t,o){1&o&&s!==(s=t[2].character+"")&&A(n,s),1&o&&N(e,"left",t[2].x+"%"),1&o&&N(e,"top",t[2].y+"%"),1&o&&N(e,"transform","scale("+t[2].r+")")},d(t){t&&p(e)}}}function Pt(e){let n,s=e[0],o=[];for(let t=0;t<s.length;t+=1)o[t]=Tt(bt(e,s,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=w()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);n=w()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);v(t,n,e)},p(t,[e]){if(1&e){let l;for(s=t[0],l=0;l<s.length;l+=1){const r=bt(t,s,l);o[l]?o[l].p(r,e):(o[l]=Tt(r),o[l].c(),o[l].m(n.parentNode,n))}for(;l<o.length;l+=1)o[l].d(1);o.length=s.length}},i:t,o:t,d(t){g(o,t),t&&p(n)}}}function It(t,e,n){let s=["🥳","🎉","✨","💰","💵","🏦","💶","🎩"],o=new Array(8).fill().map(((t,e)=>({character:s[e%s.length],x:100*Math.random(),y:-20-100*Math.random(),r:.1+1*Math.random()}))).sort(((t,e)=>t.r-e.r));return k((()=>{let t;return function e(){t=requestAnimationFrame(e),n(0,o=o.map((t=>(t.y+=.7*t.r,t.y>120&&(t.y=-20),t))))}(),()=>cancelAnimationFrame(t)})),[o]}class At extends ut{constructor(t){var e;super(),document.getElementById("svelte-5dvyog-style")||((e=x("style")).id="svelte-5dvyog-style",e.textContent="body{overflow:hidden}span.svelte-5dvyog{position:absolute;font-size:5vw;user-select:none}",m(document.head,e)),it(this,t,It,Pt,r,{})}}function Nt(t,{delay:n=0,duration:s=400,easing:o=e}={}){const l=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:o,css:t=>"opacity: "+t*l}}function St(e){let n,s,o,l,r,a,c,i,u;return s=new Et({}),c=new At({}),{c(){n=x("main"),lt(s.$$.fragment),o=$(),l=x("p"),r=x("br"),a=$(),lt(c.$$.fragment),this.h()},l(t){n=T(t,"MAIN",{class:!0});var e=E(n);rt(s.$$.fragment,e),o=I(e),l=T(e,"P",{});var i=E(l);r=T(i,"BR",{}),i.forEach(p),a=I(e),rt(c.$$.fragment,e),e.forEach(p),this.h()},h(){_(n,"class","svelte-177t831")},m(t,e){v(t,n,e),at(s,n,null),m(n,o),m(n,l),m(l,r),m(n,a),at(c,n,null),u=!0},p:t,i(t){u||(tt(s.$$.fragment,t),tt(c.$$.fragment,t),M((()=>{i||(i=st(n,Nt,{},!0)),i.run(1)})),u=!0)},o(t){et(s.$$.fragment,t),et(c.$$.fragment,t),i||(i=st(n,Nt,{},!1)),i.run(0),u=!1},d(t){t&&p(n),ct(s),ct(c),t&&i&&i.end()}}}return new class extends ut{constructor(t){var e;super(),document.getElementById("svelte-177t831-style")||((e=x("style")).id="svelte-177t831-style",e.textContent="main.svelte-177t831{text-align:center;padding:1em;max-width:240px;margin:0 auto}@media(min-width: 640px){main.svelte-177t831{max-width:none}}",m(document.head,e)),it(this,t,null,St,r,{})}}({target:document.querySelector("#__snel"),props:{}}),{}})();