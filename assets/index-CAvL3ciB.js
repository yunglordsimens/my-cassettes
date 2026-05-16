import{c as u}from"./iframe-SPdtdknn.js";var a={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function R(){if(c)return o;c=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function x(v,n,r){var s=null;if(r!==void 0&&(s=""+r),n.key!==void 0&&(s=""+n.key),"key"in n){r={};for(var i in n)i!=="key"&&(r[i]=n[i])}else r=n;return n=r.ref,{$$typeof:t,type:v,key:s,ref:n!==void 0?n:null,props:r}}return o.Fragment=e,o.jsx=x,o.jsxs=x,o}var f;function _(){return f||(f=1,a.exports=R()),a.exports}var E=_();const l={},d=u.createContext(l);function m(t){const e=u.useContext(d);return u.useMemo(function(){return typeof t=="function"?t(e):{...e,...t}},[e,t])}function p(t){let e;return t.disableParentContext?e=typeof t.components=="function"?t.components(l):t.components||l:e=m(t.components),u.createElement(d.Provider,{value:e},t.children)}const j=Object.freeze(Object.defineProperty({__proto__:null,MDXProvider:p,useMDXComponents:m},Symbol.toStringTag,{value:"Module"}));export{j as i,E as j,m as u};
