"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||g[f]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,c[1]=u;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={title:"gRPC \u539f\u7406\u53ca\u4f7f\u7528",authors:["czasg"],tags:["gRPC"]},c=void 0,u={permalink:"/docusaurus/blog/2021/12/12/gRPC\u539f\u7406",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2021/12-12-gRPC\u539f\u7406/index.md",source:"@site/blog/2021/12-12-gRPC\u539f\u7406/index.md",title:"gRPC \u539f\u7406\u53ca\u4f7f\u7528",description:"\x3c!--",date:"2021-12-12T00:00:00.000Z",formattedDate:"December 12, 2021",tags:[{label:"gRPC",permalink:"/docusaurus/blog/tags/g-rpc"}],readingTime:8.945,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"gRPC \u539f\u7406\u53ca\u4f7f\u7528",authors:["czasg"],tags:["gRPC"]},prevItem:{title:"gRPC \u8d1f\u8f7d\u5747\u8861",permalink:"/docusaurus/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861"},nextItem:{title:"\u5173\u4e8e\u526f\u4e1a\u7684\u4e00\u4e9b\u601d\u8003",permalink:"/docusaurus/blog/2021/12/10/\u5173\u4e8e\u526f\u4e1a\u7684\u4e00\u4e9b\u601d\u8003"}},l={authorsImageUrls:[void 0]},i=[],s={toc:i},p="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"gRPC \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u3001\u8de8\u5e73\u53f0\u7684\u5f00\u6e90 RPC \u6846\u67b6\u3002"),(0,o.kt)("p",null,"\u7531 Google \u5f00\u6e90\uff0c\u652f\u6301\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00\u3002\u5b83\u4f7f\u7528 Protocol Buffers \u4f5c\u4e3a\u63a5\u53e3\u5b9a\u4e49\u8bed\u8a00\uff0c\u53ef\u4ee5\u751f\u6210\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u7684\u4ee3\u7801\uff0c\n\u4f7f\u5f97\u8de8\u8bed\u8a00\u3001\u8de8\u5e73\u53f0\u7684\u670d\u52a1\u8c03\u7528\u53d8\u5f97\u66f4\u52a0\u7b80\u5355\u548c\u9ad8\u6548\u3002"))}g.isMDXComponent=!0}}]);