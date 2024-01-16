"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,f=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return r?n.createElement(f,c(c({ref:t},i),{},{components:r})):n.createElement(f,c({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,c[1]=u;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u6570\u636e\u5e93\u662f\u5426\u9002\u5408\u5bb9\u5668\u5316\u90e8\u7f72",authors:["czasg"],tags:["\u6570\u636e\u5e93"]},c=void 0,u={permalink:"/docusaurus/blog/2022/02/22/\u6570\u636e\u5e93\u662f\u5426\u9002\u5408\u5bb9\u5668\u5316\u90e8\u7f72",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/02-22-\u6570\u636e\u5e93\u662f\u5426\u9002\u5408\u5bb9\u5668\u5316\u90e8\u7f72/index.md",source:"@site/blog/2022/02-22-\u6570\u636e\u5e93\u662f\u5426\u9002\u5408\u5bb9\u5668\u5316\u90e8\u7f72/index.md",title:"\u6570\u636e\u5e93\u662f\u5426\u9002\u5408\u5bb9\u5668\u5316\u90e8\u7f72",description:"\u968f\u7740 Kubernetes \u7684\u6d41\u884c\uff0c\u8d8a\u6765\u8d8a\u6765\u7684\u5e94\u7528\u88ab\u6253\u5305\u6210\u955c\u50cf\uff0c\u4f5c\u4e3a\u5bb9\u5668\u90e8\u7f72\u5728 k8s \u4e0a\u3002",date:"2022-02-22T00:00:00.000Z",formattedDate:"February 22, 2022",tags:[{label:"\u6570\u636e\u5e93",permalink:"/docusaurus/blog/tags/\u6570\u636e\u5e93"}],readingTime:4.5,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"\u6570\u636e\u5e93\u662f\u5426\u9002\u5408\u5bb9\u5668\u5316\u90e8\u7f72",authors:["czasg"],tags:["\u6570\u636e\u5e93"]},prevItem:{title:"\u6570\u636e\u5e93\u5355\u8868\u5341\u4ebf\u91cf\u7ea7\u7684\u4f18\u5316\u4e4b\u8def",permalink:"/docusaurus/blog/2022/03/18/\u6570\u636e\u5e93\u5355\u8868\u5341\u4ebf\u91cf\u7ea7\u7684\u4f18\u5316\u4e4b\u8def"},nextItem:{title:"\u8bb0\u4e00\u6b21 golang \u5347\u7ea7\u5bfc\u81f4\u7684 goland \u4e0d\u53ef\u7528",permalink:"/docusaurus/blog/2022/02/17/golang\u5347\u7ea7\u5bfc\u81f4goland\u4e0d\u53ef\u7528"}},l={authorsImageUrls:[void 0]},s=[],i={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u968f\u7740 Kubernetes \u7684\u6d41\u884c\uff0c\u8d8a\u6765\u8d8a\u6765\u7684\u5e94\u7528\u88ab\u6253\u5305\u6210\u955c\u50cf\uff0c\u4f5c\u4e3a\u5bb9\u5668\u90e8\u7f72\u5728 k8s \u4e0a\u3002"),(0,a.kt)("p",null,"\u5728 k8s \u4e2d\uff0cpod \u662f\u6700\u5c0f\u7684\u90e8\u7f72\u5355\u4f4d\uff0c\u5185\u90e8\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u5bb9\u5668\u955c\u50cf\uff0c\u6bcf\u4e00\u4e2a pod \u90fd\u5177\u6709\u6709\u9650\u7684\u751f\u547d\u5468\u671f\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5bf9\u4e8e\u65e0\u72b6\u6001\u670d\u52a1\u6765\u8bf4\uff0c\u7279\u522b\u9002\u5408\u5728 k8s \u4e0a\u8fd0\u884c\uff0c\u56e0\u4e3a\u65e0\u72b6\u6001\u670d\u52a1\uff0c\u662f\u5177\u6709\u5f39\u6027\u7684\uff0c\u53ef\u4ee5\u66f4\u597d\u7684\u5e94\u5bf9 pod \u6269\u7f29\u5bb9\u3001\u91cd\u542f\u7b49\u7279\u6027\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u76f8\u53cd\uff0c\u5bf9\u4e8e\u6709\u72b6\u6001\u670d\u52a1\uff08\u7c7b\u4f3c\u6570\u636e\u5e93\u7b49\uff09\uff0c\u5219\u5b58\u5728\u4e00\u5b9a\u7684\u74f6\u9888\u9650\u5236\u3002"))}m.isMDXComponent=!0}}]);