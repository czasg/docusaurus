"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2287],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||g[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={title:"golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9",authors:["czasg"],tags:["go"]},l=void 0,p={permalink:"/docusaurus/blog/2022/05/31/golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/05-31-golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9/index.md",source:"@site/blog/2022/05-31-golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9/index.md",title:"golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9",description:"\u8ba1\u7b97\u673a\u7a0b\u5e8f\u573a\u666f\u53ef\u5206\u4e3a\u8ba1\u7b97\u5bc6\u96c6\u578b\u548cIO\u5bc6\u96c6\u578b\u3002\u8ba1\u7b97\u5bc6\u96c6\u578b\uff0c\u5373CPU\u5360\u7528\u8f83\u9ad8\u7684\u7a0b\u5e8f\uff0c\u4e00\u822c\u7c7b\u4f3cAI\u7b97\u6cd5\u7b49\u3002IO\u5bc6\u96c6\u578b\u5219\u5305\u62ec\u78c1\u76d8IO\u548c\u7f51\u7edcIO\u7b49\u3002",date:"2022-05-31T00:00:00.000Z",formattedDate:"May 31, 2022",tags:[{label:"go",permalink:"/docusaurus/blog/tags/go"}],readingTime:1.245,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9",authors:["czasg"],tags:["go"]},prevItem:{title:"Go Http\u6a21\u5757\u5751\u70b9",permalink:"/docusaurus/blog/2022/06/05/golanghttp\u6a21\u5757"},nextItem:{title:"go mod\u7406\u89e3",permalink:"/docusaurus/blog/2022/04/07/gomod\u7406\u89e3"}},c={authorsImageUrls:[void 0]},i=[],u={toc:i},s="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8ba1\u7b97\u673a\u7a0b\u5e8f\u573a\u666f\u53ef\u5206\u4e3a\u8ba1\u7b97\u5bc6\u96c6\u578b\u548cIO\u5bc6\u96c6\u578b\u3002\u8ba1\u7b97\u5bc6\u96c6\u578b\uff0c\u5373CPU\u5360\u7528\u8f83\u9ad8\u7684\u7a0b\u5e8f\uff0c\u4e00\u822c\u7c7b\u4f3cAI\u7b97\u6cd5\u7b49\u3002IO\u5bc6\u96c6\u578b\u5219\u5305\u62ec\u78c1\u76d8IO\u548c\u7f51\u7edcIO\u7b49\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Go \u7684\u534f\u7a0b\uff0c\u5929\u7136\u652f\u6301\u5e76\u53d1\u573a\u666f\uff0c\u5bf9\u4e8e\u8ba1\u7b97\u5bc6\u96c6\u578b\u548cIO\u5bc6\u96c6\u578b\u90fd\u6bd4\u8f83\u53cb\u597d\u3002\u4f46\u662f\u9ad8\u78c1\u76d8IO\u573a\u666f\u4f1a\u6709\u70b9\u95ee\u9898\uff0c\u4f7f\u7528\u4e0d\u5f53\u8fd8\u53ef\u80fd\u9020\u6210\u5751\u70b9\u3002"),(0,o.kt)("p",null,"\u7f51\u7edcIO\u5c5e\u4e8e",(0,o.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u9a71\u52a8"),"\u578b\uff0c\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u56de\u8c03\u5b9e\u73b0\u5f02\u6b65\u5316\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u78c1\u76d8IO\u7684 read/write \u90fd\u662f\u540c\u6b65IO\uff0c\u662f\u963b\u585e\u4e8b\u4ef6\uff0c\u9700\u8981\u540c\u6b65\u7b49\u5f85\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u78c1\u76d8IO\u4f1a\u9020\u6210Go\u7684\u7ebf\u7a0b\u963b\u585e\uff0c\u800cGo\u57fa\u4e8eGMP\u6a21\u578b\uff0c\u5f53M\u963b\u585e\u7684\u65f6\u5019\uff0c\u4f1a\u91cd\u65b0\u521b\u5efa\u65b0\u7684M\u6765\u6267\u884cG\u4efb\u52a1\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u5f53\u7c7b\u4f3c\u4efb\u52a1\u8db3\u591f\u591a\u65f6\uff0c\u4f1a\u9020\u6210Go\u7684M\u66b4\u6da8\uff0c\u8d85\u8fc71w\u4ee5\u540e\uff0c\u4f1a\u88ab\u6740\u6389\u3002"),(0,o.kt)("br",null),(0,o.kt)("admonition",{title:"\ud83d\udc47\ud83d\udc47\ud83d\udc47",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d")))}g.isMDXComponent=!0}}]);