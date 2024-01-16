"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6277],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={title:"GC"},a=void 0,c={unversionedId:"question-bank/go/gc/index",id:"question-bank/go/gc/index",title:"GC",description:"\u4e09\u8272\u6807\u8bb0\u6cd5",source:"@site/docs/office/question-bank/go/gc/index.md",sourceDirName:"question-bank/go/gc",slug:"/question-bank/go/gc/",permalink:"/docusaurus/docs/office/question-bank/go/gc/",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/question-bank/go/gc/index.md",tags:[],version:"current",frontMatter:{title:"GC"},sidebar:"tutorialSidebar",previous:{title:"\u5207\u7247",permalink:"/docusaurus/docs/office/question-bank/go/data-struct/slice/"},next:{title:"\u5b9e\u6218\u7ec3\u4e60",permalink:"/docusaurus/docs/office/question-bank/go/practice/"}},l={},u=[{value:"\u4e09\u8272\u6807\u8bb0\u6cd5",id:"\u4e09\u8272\u6807\u8bb0\u6cd5",level:3},{value:"\u5199\u5c4f\u969c",id:"\u5199\u5c4f\u969c",level:3},{value:"\u8bfb\u5c4f\u969c",id:"\u8bfb\u5c4f\u969c",level:3},{value:"\u63d2\u5165\u5199\u5c4f\u969c",id:"\u63d2\u5165\u5199\u5c4f\u969c",level:3},{value:"\u5220\u9664\u5199\u5c4f\u969c",id:"\u5220\u9664\u5199\u5c4f\u969c",level:3},{value:"\u6df7\u5408\u5199\u5c4f\u969c",id:"\u6df7\u5408\u5199\u5c4f\u969c",level:3},{value:"GC\u89e6\u53d1\u673a\u5236",id:"gc\u89e6\u53d1\u673a\u5236",level:3},{value:"Go\u4e2d\u4e00\u6b21\u5b8c\u6574\u7684GC\u6d41\u7a0b",id:"go\u4e2d\u4e00\u6b21\u5b8c\u6574\u7684gc\u6d41\u7a0b",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4e09\u8272\u6807\u8bb0\u6cd5"},"\u4e09\u8272\u6807\u8bb0\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u767d"),(0,o.kt)("li",{parentName:"ul"},"\u7070"),(0,o.kt)("li",{parentName:"ul"},"\u9ed1")),(0,o.kt)("h3",{id:"\u5199\u5c4f\u969c"},"\u5199\u5c4f\u969c"),(0,o.kt)("p",null,"\u5199\u5c4f\u969c\u662fGo GC\u8fc7\u7a0b\u4e2d\u7684\u4e00\u79cd\u7528\u4e8e\u5e76\u53d1\u6807\u8bb0\u6e05\u9664\u7684\u4fdd\u62a4\u673a\u5236\u3002"),(0,o.kt)("p",null,"\u5728\u5e76\u53d1\u6807\u8bb0\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u4e8e\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728\u521a\u597d\u9519\u8fc7\u6807\u8bb0\u7684\u60c5\u51b5\uff0c\u8fd9\u56de\u5bfc\u81f4\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u88ab\u7acb\u5373\u56de\u6536\u7684\u98ce\u9669\u3002"),(0,o.kt)("p",null,"\u5199\u5c4f\u969c\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\uff0c\u5728\u5783\u573e\u56de\u6536\u8fc7\u7a0b\u4e2d\uff0c\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4f1a\u88ab\u6807\u8bb0\u4e3a\u810f\u5bf9\u8c61\uff0c\u5e76\u6700\u540e\u5c06\u5176\u8f6c\u5316\u4e3a\u7070\u8272"),(0,o.kt)("h3",{id:"\u8bfb\u5c4f\u969c"},"\u8bfb\u5c4f\u969c"),(0,o.kt)("h3",{id:"\u63d2\u5165\u5199\u5c4f\u969c"},"\u63d2\u5165\u5199\u5c4f\u969c"),(0,o.kt)("h3",{id:"\u5220\u9664\u5199\u5c4f\u969c"},"\u5220\u9664\u5199\u5c4f\u969c"),(0,o.kt)("h3",{id:"\u6df7\u5408\u5199\u5c4f\u969c"},"\u6df7\u5408\u5199\u5c4f\u969c"),(0,o.kt)("h3",{id:"gc\u89e6\u53d1\u673a\u5236"},"GC\u89e6\u53d1\u673a\u5236"),(0,o.kt)("h3",{id:"go\u4e2d\u4e00\u6b21\u5b8c\u6574\u7684gc\u6d41\u7a0b"},"Go\u4e2d\u4e00\u6b21\u5b8c\u6574\u7684GC\u6d41\u7a0b"))}d.isMDXComponent=!0}}]);