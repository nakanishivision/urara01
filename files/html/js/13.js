(globalThis.webpackChunk_flippingbook_publication=globalThis.webpackChunk_flippingbook_publication||[]).push([[13],{1976:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=1,i=65535,s=4,o=setInterval((function(){r=r+1&i}),1e3/s|0);function a(e){var t=s*(e||5),n=[0],o=1,a=r-1&i;return function(e){var h=r-a&i;for(h>t&&(h=t),a=r;h--;)o===t&&(o=0),n[o]=n[0===o?t-1:o-1],o++;e&&(n[o-1]+=e);var u=n[o-1],l=n.length<t?0:n[o===t?0:o];return n.length<s?u:(u-l)*s/n.length}}o.unref&&o.unref();class h{constructor(e,t=1e3){this.length=parseInt(e,10)||0,this.transferred=0,this.speed=0,this.streamSpeed=a(this.speed||5e3),this.initial=!1,this.emitDelay=t,this.eventStart=0,this.percentage=0}getRemainingBytes(){return parseInt(this.length,10)-parseInt(this.transferred,10)}getEta(){return this.length>=this.transferred?this.getRemainingBytes()/this.speed*1e9:0}flow(e,t){const n=e.length;if(this.transferred+=n,this.speed=this.streamSpeed(n),this.percentage=Math.round(this.transferred/this.length*100),this.initial||(this.eventStart=Date.now(),this.initial=!0),this.length>=this.transferred||Date.now()-this.eventStart>this.emitDelay){this.eventStart=Date.now();const e={total:this.length,transferred:this.transferred,speed:this.speed,eta:this.getEta()};this.length&&(e.remaining=this.getRemainingBytes(),e.percentage=this.percentage),t(e)}}}function u(){return"undefined"!=typeof Response&&"undefined"!=typeof ReadableStream}function l({defaultSize:e=0,emitDelay:t=10,onProgress:n=(()=>null),onComplete:r=(()=>null),onError:i=(()=>null)}){return function(s){if(!u())return s;const{body:o,headers:a,status:l}=s,c=a.get("content-length")||e,p=new h(c,t),f=o.getReader(),d=new ReadableStream({start(e){function t(){f.read().then((({done:i,value:s})=>{if(i)return r({}),void e.close();s&&p.flow(s,n),e.enqueue(s),t()})).catch((e=>{i(e)}))}t()}});return new Response(d,{headers:a,status:l})}}},466:function(e){var t;t=function(){"use strict";var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(e){return"function"==typeof e}function r(e){return t(e)?"array":typeof e}function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function s(e,t){return null!=e&&"object"==typeof e&&t in e}function o(e,t){return null!=e&&"object"!=typeof e&&e.hasOwnProperty&&e.hasOwnProperty(t)}var a=RegExp.prototype.test;function h(e,t){return a.call(e,t)}var u=/\S/;function l(e){return!h(u,e)}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function p(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return c[e]}))}var f=/\s*/,d=/\s+/,g=/\s*=/,v=/\s*\}/,w=/#|\^|\/|>|\{|&|=|!/;function y(e,n){if(!e)return[];var r,s,o,a=!1,h=[],u=[],c=[],p=!1,y=!1,x="",S=0;function R(){if(p&&!y)for(;c.length;)delete u[c.pop()];else c=[];p=!1,y=!1}function T(e){if("string"==typeof e&&(e=e.split(d,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);r=new RegExp(i(e[0])+"\\s*"),s=new RegExp("\\s*"+i(e[1])),o=new RegExp("\\s*"+i("}"+e[1]))}T(n||E.tags);for(var U,C,j,I,P,D,V=new k(e);!V.eos();){if(U=V.pos,j=V.scanUntil(r))for(var _=0,O=j.length;_<O;++_)l(I=j.charAt(_))?(c.push(u.length),x+=I):(y=!0,a=!0,x+=" "),u.push(["text",I,U,U+1]),U+=1,"\n"===I&&(R(),x="",S=0,a=!1);if(!V.scan(r))break;if(p=!0,C=V.scan(w)||"name",V.scan(f),"="===C?(j=V.scanUntil(g),V.scan(g),V.scanUntil(s)):"{"===C?(j=V.scanUntil(o),V.scan(v),V.scanUntil(s),C="&"):j=V.scanUntil(s),!V.scan(s))throw new Error("Unclosed tag at "+V.pos);if(P=">"==C?[C,j,U,V.pos,x,S,a]:[C,j,U,V.pos],S++,u.push(P),"#"===C||"^"===C)h.push(P);else if("/"===C){if(!(D=h.pop()))throw new Error('Unopened section "'+j+'" at '+U);if(D[1]!==j)throw new Error('Unclosed section "'+D[1]+'" at '+U)}else"name"===C||"{"===C||"&"===C?y=!0:"="===C&&T(j)}if(R(),D=h.pop())throw new Error('Unclosed section "'+D[1]+'" at '+V.pos);return m(b(u))}function b(e){for(var t,n,r=[],i=0,s=e.length;i<s;++i)(t=e[i])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function m(e){for(var t,n=[],r=n,i=[],s=0,o=e.length;s<o;++s)switch((t=e[s])[0]){case"#":case"^":r.push(t),i.push(t),r=t[4]=[];break;case"/":i.pop()[5]=t[2],r=i.length>0?i[i.length-1][4]:n;break;default:r.push(t)}return n}function k(e){this.string=e,this.tail=e,this.pos=0}function x(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function S(){this.cache={}}k.prototype.eos=function(){return""===this.tail},k.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},k.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},x.prototype.push=function(e){return new x(e,this)},x.prototype.lookup=function(e){var t,r=this.cache;if(r.hasOwnProperty(e))t=r[e];else{for(var i,a,h,u=this,l=!1;u;){if(e.indexOf(".")>0)for(i=u.view,a=e.split("."),h=0;null!=i&&h<a.length;)h===a.length-1&&(l=s(i,a[h])||o(i,a[h])),i=i[a[h++]];else i=u.view[e],l=s(u.view,e);if(l){t=i;break}u=u.parent}r[e]=t}return n(t)&&(t=t.call(this.view)),t},S.prototype.clearCache=function(){this.cache={}},S.prototype.parse=function(e,t){var n=this.cache,r=e+":"+(t||E.tags).join(":"),i=n[r];return null==i&&(i=n[r]=y(e,t)),i},S.prototype.render=function(e,t,n,r){var i=this.parse(e,r),s=t instanceof x?t:new x(t,void 0);return this.renderTokens(i,s,n,e,r)},S.prototype.renderTokens=function(e,t,n,r,i){for(var s,o,a,h="",u=0,l=e.length;u<l;++u)a=void 0,"#"===(o=(s=e[u])[0])?a=this.renderSection(s,t,n,r):"^"===o?a=this.renderInverted(s,t,n,r):">"===o?a=this.renderPartial(s,t,n,i):"&"===o?a=this.unescapedValue(s,t):"name"===o?a=this.escapedValue(s,t):"text"===o&&(a=this.rawValue(s)),void 0!==a&&(h+=a);return h},S.prototype.renderSection=function(e,r,i,s){var o=this,a="",h=r.lookup(e[1]);function u(e){return o.render(e,r,i)}if(h){if(t(h))for(var l=0,c=h.length;l<c;++l)a+=this.renderTokens(e[4],r.push(h[l]),i,s);else if("object"==typeof h||"string"==typeof h||"number"==typeof h)a+=this.renderTokens(e[4],r.push(h),i,s);else if(n(h)){if("string"!=typeof s)throw new Error("Cannot use higher-order sections without the original template");null!=(h=h.call(r.view,s.slice(e[3],e[5]),u))&&(a+=h)}else a+=this.renderTokens(e[4],r,i,s);return a}},S.prototype.renderInverted=function(e,n,r,i){var s=n.lookup(e[1]);if(!s||t(s)&&0===s.length)return this.renderTokens(e[4],n,r,i)},S.prototype.indentPartial=function(e,t,n){for(var r=t.replace(/[^ \t]/g,""),i=e.split("\n"),s=0;s<i.length;s++)i[s].length&&(s>0||!n)&&(i[s]=r+i[s]);return i.join("\n")},S.prototype.renderPartial=function(e,t,r,i){if(r){var s=n(r)?r(e[1]):r[e[1]];if(null!=s){var o=e[6],a=e[5],h=e[4],u=s;return 0==a&&h&&(u=this.indentPartial(s,h,o)),this.renderTokens(this.parse(u,i),t,r,u)}}},S.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},S.prototype.escapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return E.escape(n)},S.prototype.rawValue=function(e){return e[1]};var E={name:"mustache.js",version:"3.2.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,to_html:void 0,Scanner:void 0,Context:void 0,Writer:void 0},R=new S;return E.clearCache=function(){return R.clearCache()},E.parse=function(e,t){return R.parse(e,t)},E.render=function(e,t,n,i){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+r(e)+'" was given as the first argument for mustache#render(template, view, partials)');return R.render(e,t,n,i)},E.to_html=function(e,t,r,i){var s=E.render(e,t,r);if(!n(i))return s;i(s)},E.escape=p,E.Scanner=k,E.Context=x,E.Writer=S,E},e.exports=t()}}]);