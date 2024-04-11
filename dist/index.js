"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=s(function(q,n){
var o=require('@stdlib/utils-escape-regexp-string/dist'),g=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/assert-is-string/dist').isPrimitive,m=require('@stdlib/assert-is-regexp/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist'),p=require('@stdlib/string-base-replace/dist');function v(e,r,i){if(!t(e))throw new TypeError(u('1PJ3F',e));if(t(r))r=new RegExp(o(r),"g");else if(!m(r))throw new TypeError(u('1PJAT',r));if(!t(i)&&!g(i))throw new TypeError(u('1PJAU',i));return p(e,r,i)}n.exports=v
});var f=a();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
