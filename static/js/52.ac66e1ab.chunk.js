(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[52],{1535:function(t,e,n){"use strict";n.r(e),n.d(e,"getClientSideQuote",(function(){return S}));var r=n(111),o=n.n(r),a=n(60),i=n.n(a),s=n(5),u=n(395),c=n(10),d=n.n(c),l=n(263),m=n(45);n(1),n(165),n(44),n(30),n(16),n(125),n(182),n(243),n(337),n(28),n(693),n(255),n(641),n(163),n(164),n(197),n(226),n(139),n(602),n(316),n(645),n(84),n(23),n(266),n(256),n(391),n(392),n(308),n(284),n(254),n(330),n(486),n(652),n(478),n(479),n(415),n(654),n(480),n(282),n(112);function p(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e,n){var r,o=n.quote,a=n.quoteGasAdjusted,i=n.route,s=n.estimatedGasUsed,c=n.estimatedGasUsedQuoteToken,d=n.estimatedGasUsedUSD,f=n.gasPriceWei,y=n.methodParameters,h=n.blockNumber,b=[],g=p(i);try{for(g.s();!(r=g.n()).done;){var v=r.value,I=v.amount,k=v.quote,S=v.tokenPath;if(v.protocol===m.Protocol.V3){for(var w=v.route.pools,q=[],O=0;O<w.length;O++){var j=w[O],A=S[O],E=S[O+1],x=void 0;0===O&&(x=Object(l.e)(t)?I.quotient.toString():k.quotient.toString());var U=void 0;O===w.length-1&&(U=Object(l.e)(t)?k.quotient.toString():I.quotient.toString()),q.push({type:"v3-pool",tokenIn:{chainId:A.chainId,decimals:A.decimals,address:A.address,symbol:A.symbol},tokenOut:{chainId:E.chainId,decimals:E.decimals,address:E.address,symbol:E.symbol},fee:j.fee.toString(),liquidity:j.liquidity.toString(),sqrtRatioX96:j.sqrtRatioX96.toString(),tickCurrent:j.tickCurrent.toString(),amountIn:x,amountOut:U})}b.push(q)}else if(v.protocol===m.Protocol.V2){for(var D=v.route.pairs,C=[],P=0;P<D.length;P++){var T=D[P],G=S[P],Q=S[P+1],R=void 0;0===P&&(R=Object(l.e)(t)?I.quotient.toString():k.quotient.toString());var N=void 0;P===D.length-1&&(N=Object(l.e)(t)?k.quotient.toString():I.quotient.toString());var W=T.reserve0,B=T.reserve1;C.push({type:"v2-pool",tokenIn:{chainId:G.chainId,decimals:G.decimals,address:G.address,symbol:G.symbol},tokenOut:{chainId:Q.chainId,decimals:Q.decimals,address:Q.address,symbol:Q.symbol},reserve0:{token:{chainId:W.currency.wrapped.chainId,decimals:W.currency.wrapped.decimals,address:W.currency.wrapped.address,symbol:W.currency.wrapped.symbol},quotient:W.quotient.toString()},reserve1:{token:{chainId:B.currency.wrapped.chainId,decimals:B.currency.wrapped.decimals,address:B.currency.wrapped.address,symbol:B.currency.wrapped.symbol},quotient:B.quotient.toString()},amountIn:R,amountOut:N})}b.push(C)}}}catch(J){g.e(J)}finally{g.f()}return{methodParameters:y,blockNumber:h.toString(),amount:e.quotient.toString(),amountDecimals:e.toExact(),quote:o.quotient.toString(),quoteDecimals:o.toExact(),quoteGasAdjusted:a.quotient.toString(),quoteGasAdjustedDecimals:a.toExact(),gasUseEstimateQuote:c.quotient.toString(),gasUseEstimateQuoteDecimals:c.toExact(),gasUseEstimate:s.toString(),gasUseEstimateUSD:d.toExact(),gasPriceWei:f.toString(),route:b,routeString:Object(u.f)(i)}}var h=Object.values(u.b).filter((function(t){return Number.isInteger(t)}));function b(t){return Boolean(t&&h.includes(t))}var g=new WeakMap;function v(t,e){var n=g.get(e);if(n)return n;var r=new u.a({chainId:t,provider:e});return g.set(e,r),r}function I(t,e,n){return k.apply(this,arguments)}function k(){return(k=o()(i.a.mark((function t(e,n,r){var o,a,u,c,m,p,f,h,b,g;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.tradeType,a=e.tokenIn,u=e.tokenOut,c=e.amount,m=new s.Token(a.chainId,a.address,a.decimals,a.symbol),p=new s.Token(u.chainId,u.address,u.decimals,u.symbol),f=Object(l.e)(o)?m:p,h=Object(l.e)(o)?p:m,b=s.CurrencyAmount.fromRawAmount(f,d.a.BigInt(c)),t.next=8,n.route(b,h,o,void 0,r);case 8:if(g=t.sent){t.next=11;break}throw new Error("Failed to generate client side quote from ".concat(m.symbol," to ").concat(p.symbol));case 11:return t.abrupt("return",{data:y(o,b,g)});case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t,e,n){return w.apply(this,arguments)}function w(){return(w=o()(i.a.mark((function t(e,n,r){var o,a,s,u,c,d,l,m,p,f,y;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.tokenInAddress,a=e.tokenInChainId,s=e.tokenInDecimals,u=e.tokenInSymbol,c=e.tokenOutAddress,d=e.tokenOutChainId,l=e.tokenOutDecimals,m=e.tokenOutSymbol,p=e.amount,f=e.tradeType,b(a)){t.next=3;break}throw new Error("Router does not support this token's chain (chainId: ".concat(a,")."));case 3:return y=v(a,n),t.abrupt("return",I({tradeType:f,chainId:a,tokenIn:{address:o,chainId:a,decimals:s,symbol:u},tokenOut:{address:c,chainId:d,decimals:l,symbol:m},amount:p},y,r));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=52.ac66e1ab.chunk.js.map