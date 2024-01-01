// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).replace=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var _=String.fromCharCode,x=isNaN,S=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,s,l,f,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,f=0;f<e.length;f++)if(u(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,x(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function $(e){return"string"==typeof e}function F(e){var r,t,n;if(!$(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=O(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var R,C=Object.prototype,I=C.toString,P=C.__defineGetter__,B=C.__defineSetter__,L=C.__lookupGetter__,G=C.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(e,r,t.get),a&&B&&B.call(e,r,t.set),e};var Z=R;function M(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"string"==typeof e}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return N&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var H=U()?function(e){var r,t,n,i,o;if(null==e)return X.call(e);t=e[D],o=D,r=null!=(i=e)&&z.call(i,o);try{e[D]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[D]=t:delete e[D],n}:function(e){return X.call(e)},J=String.prototype.valueOf;var K=U();function Q(e){return"object"==typeof e&&(e instanceof String||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function Y(e){return W(e)||Q(e)}M(Y,"isPrimitive",W),M(Y,"isObject",Q);var ee=/[-\/\\^$*+?.()|[\]{}]/g;var re=/./;function te(e){return"boolean"==typeof e}var ne=Boolean,ie=Boolean.prototype.toString;var oe=U();function ae(e){return"object"==typeof e&&(e instanceof ne||(oe?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ce(e){return te(e)||ae(e)}function ue(){return new Function("return this;")()}M(ce,"isPrimitive",te),M(ce,"isObject",ae);var se="object"==typeof self?self:null,le="object"==typeof window?window:null,fe="object"==typeof global?global:null,pe="object"==typeof globalThis?globalThis:null;var ge=function(e){if(arguments.length){if(!te(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ue()}if(pe)return pe;if(se)return se;if(le)return le;if(fe)return fe;throw new Error("unexpected error. Unable to resolve global object.")}(),de=ge.document&&ge.document.childNodes,ye=Int8Array;function be(){return/^\s*function\s*([^(]*)/i}var he=/^\s*function\s*([^(]*)/i;M(be,"REGEXP",he);var ve=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function we(e){return null!==e&&"object"==typeof e}function me(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=he.exec(n.toString()))return r[1]}return we(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(we,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ve(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(we));var je="function"==typeof re||"object"==typeof ye||"function"==typeof de?function(e){return me(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?me(e).toLowerCase():r};var Ee=RegExp.prototype.exec;var _e=U();function xe(e){return"object"==typeof e&&(e instanceof RegExp||(_e?function(e){try{return Ee.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===H(e)))}return function(e,r,t){if(!W(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));if(W(r))r=new RegExp(function(e){var r,t;if(!W(e))throw new TypeError(F("invalid argument. Must provide a regular expression string. Value: `%s`.",e));if("/"===e[0])for(t=e.length-1;t>=0&&"/"!==e[t];t--);return void 0===t||t<=0?e.replace(ee,"\\$&"):(r=(r=e.substring(1,t)).replace(ee,"\\$&"),e=e[0]+r+e.substring(t))}(r),"g");else if(!xe(r))throw new TypeError(F("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",r));if(!W(t)&&"function"!==je(t))throw new TypeError(F("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return function(e,r,t){return e.replace(r,t)}(e,r,t)}}));
//# sourceMappingURL=index.js.map
