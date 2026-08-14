"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var d=l(function(x,s){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),p=require('@stdlib/ndarray-base-order/dist'),u=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),c=require('@stdlib/blas-base-dspr/dist').ndarray;function g(e){var r,t,a,i;return i=e[0],a=e[1],t=q(e[2]),r=q(e[3]),c(p(a),t,o(i,0),r,n(i),u(i,0),v(i),n(a),u(a,0),v(a)),a}s.exports=g
});var f=d();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
