"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5363],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,d=m["".concat(u,".").concat(g)]||m[g]||s[g]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"gRPC\u539f\u7406",authors:["czasg"],tags:["gRPC"]},u=void 0,l={permalink:"/docusaurus/blog/2022/06/18/gRPC\u539f\u7406",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/06-18-gRPC\u539f\u7406/index.md",source:"@site/blog/2022/06-18-gRPC\u539f\u7406/index.md",title:"gRPC\u539f\u7406",description:"RPC \u662f Remote Procedure Call \u7684\u7f29\u5199\uff0c\u5373\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528\u3002",date:"2022-06-18T00:00:00.000Z",formattedDate:"June 18, 2022",tags:[{label:"gRPC",permalink:"/docusaurus/blog/tags/g-rpc"}],readingTime:1.13,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],nextItem:{title:"\u57fa\u4e8edocker\u642d\u5efagitlan-runner",permalink:"/docusaurus/blog/2022/06/17/\u57fa\u4e8edocker\u642d\u5efagitlan-runner"}},p={authorsImageUrls:[void 0]},s=[{value:"gRPC \u7279\u70b9",id:"grpc-\u7279\u70b9",children:[],level:2},{value:"gRPC\u4e0e\u9ad8\u6027\u80fd",id:"grpc\u4e0e\u9ad8\u6027\u80fd",children:[],level:2}],m={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"RPC \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Remote Procedure Call")," \u7684\u7f29\u5199\uff0c\u5373",(0,o.kt)("strong",{parentName:"p"},"\u8fdc\u7a0b\u8fc7\u7a0b\u8c03\u7528"),"\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e00\u822c RPC \u6846\u67b6\u4f1a\u5c4f\u853d\u5e95\u5c42\u7684\u5e8f\u5217\u5316\u65b9\u5f0f\u548c\u4f20\u8f93\u65b9\u5f0f\uff0c\u8ba9\u670d\u52a1\u8c03\u7528\u8005\u53ef\u4ee5\u50cf\u8c03\u7528\u672c\u5730\u63a5\u53e3\u4e00\u6837\u8c03\u7528\u8fdc\u7a0b\u7684\u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u4e1a\u754c\u4e3b\u6d41\u7684 RPC \u6846\u67b6\u4e3b\u8981\u6709\uff1a",(0,o.kt)("br",{parentName:"p"}),"\n","1\u3001Google \u7684 gRPC\uff0c\u57fa\u4e8e HTTP2 \u5b9e\u73b0\uff0c\u662f\u652f\u6301\u591a\u8bed\u8a00\u7684 RPC \u6846\u67b6\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","2\u3001\u963f\u91cc\u7684 Dubbo\uff0c\u5e95\u5c42\u7531 RPC \u5b9e\u73b0\uff0c\u662f\u53ef\u4ee5\u7528\u4e8e\u5b9e\u73b0\u5fae\u670d\u52a1\u6cbb\u7406\u7684\u5206\u5e03\u5f0f\u670d\u52a1\u6846\u67b6\u3002   "),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u5b66\u4e60 gRPC \u7684\u76f8\u5173\u539f\u7406\u3002  "),(0,o.kt)("h2",{id:"grpc-\u7279\u70b9"},"gRPC \u7279\u70b9"),(0,o.kt)("p",null,"\u8bf4\u5230 gRPC \u6709\u4ec0\u4e48\u7279\u70b9\uff0c\u6211\u4eec\u7b2c\u4e00\u53cd\u5e94\u5c31\u662f\uff1aGoogle \u51fa\u54c1\uff0c\u5fc5\u5c5e\u7cbe\u54c1~\ud83d\ude03   "),(0,o.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0cgRPC \u8fd8\u662f\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},"\u57fa\u4e8eHTTP2\u7684\u3001\u652f\u6301\u591a\u8bed\u8a00\u7684\u3001\u9ad8\u6027\u80fd\u7684\u3001\u9762\u5411\u670d\u52a1\u7aef\u548c\u79fb\u52a8\u7aef"),"\u7684RPC\u6846\u67b6\u3002"),(0,o.kt)("h2",{id:"grpc\u4e0e\u9ad8\u6027\u80fd"},"gRPC\u4e0e\u9ad8\u6027\u80fd"),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,o.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d"))))}g.isMDXComponent=!0}}]);