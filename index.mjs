// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-escape-regexp-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-regexp@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var n=e,m=r,a=s.isPrimitive,d=t,o=i;var g=function(e,r,s){if(!a(e))throw new TypeError(o("invalid argument. First argument must be a string. Value: `%s`.",e));if(a(r))r=n(r),r=new RegExp(r,"g");else if(!d(r))throw new TypeError(o("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",r));if(!a(s)&&!m(s))throw new TypeError(o("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",s));return e.replace(r,s)};export{g as default};
//# sourceMappingURL=index.mjs.map