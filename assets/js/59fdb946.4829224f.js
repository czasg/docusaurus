"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8505],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,g=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2061:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],u={title:"go mod\u7406\u89e3",authors:["czasg"],tags:["go"]},i=void 0,l={permalink:"/docusaurus/blog/2022/04/07/gomod\u7406\u89e3",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/04-07-gomod\u7406\u89e3/index.md",source:"@site/blog/2022/04-07-gomod\u7406\u89e3/index.md",title:"go mod\u7406\u89e3",description:"\u5982\u679c\u4f60\u642d\u5efa\u8fc7\u65e9\u671f Go \u9879\u76ee\uff0c\u5e94\u8be5\u4f1a\u6bd4\u8f83\u719f\u6089 GOPATH\u3002",date:"2022-04-07T00:00:00.000Z",formattedDate:"April 7, 2022",tags:[{label:"go",permalink:"/docusaurus/blog/tags/go"}],readingTime:.845,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9",permalink:"/docusaurus/blog/2022/05/31/golang\u9ad8IO\u573a\u666f\u4e0b\u7684\u5751\u70b9"},nextItem:{title:"tcmalloc\u7406\u89e3",permalink:"/docusaurus/blog/2022/04/05/tcmalloc\u7406\u89e3"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u642d\u5efa\u8fc7\u65e9\u671f Go \u9879\u76ee\uff0c\u5e94\u8be5\u4f1a\u6bd4\u8f83\u719f\u6089 GOPATH\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5728\u4ee5\u524d\uff0c\u9879\u76ee\u4f9d\u8d56\u4e09\u65b9\u5305\u65f6\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"go get"),"\u5c06\u4e09\u65b9\u4f9d\u8d56\u5e93\u4e0b\u8f7d\u5230 GOPATH\u3002\u8fd9\u5c31\u6d89\u53ca\u5230\u4e00\u4e2a\u7248\u672c\u7ef4\u62a4\u7684\u95ee\u9898\u3002  "),(0,a.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5f15\u5165\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"go mod"),"\u3002"))}f.isMDXComponent=!0}}]);