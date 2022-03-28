"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3252],{3905:function(n,t,e){e.d(t,{Zo:function(){return s},kt:function(){return f}});var r=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var c=r.createContext({}),p=function(n){var t=r.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},s=function(n){var t=p(n.components);return r.createElement(c.Provider,{value:t},n.children)},l={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,s=u(n,["components","mdxType","originalType","parentName"]),g=p(e),f=o,m=g["".concat(c,".").concat(f)]||g[f]||l[f]||a;return e?r.createElement(m,i(i({ref:t},s),{},{components:e})):r.createElement(m,i({ref:t},s))}));function f(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var a=e.length,i=new Array(a);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=n,u.mdxType="string"==typeof n?n:o,i[1]=u;for(var p=2;p<a;p++)i[p]=e[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}g.displayName="MDXCreateElement"},5687:function(n,t,e){e.r(t),e.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return l},default:function(){return f}});var r=e(7462),o=e(3366),a=(e(7294),e(3905)),i=["components"],u={title:"golang \u9009\u9879\u6a21\u5f0f",authors:["czasg"],tags:["golang"]},c=void 0,p={permalink:"/docusaurus/blog/2022/03/28/golang\u9009\u9879\u6a21\u5f0f",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/03-28-golang\u9009\u9879\u6a21\u5f0f/index.md",source:"@site/blog/2022/03-28-golang\u9009\u9879\u6a21\u5f0f/index.md",title:"golang \u9009\u9879\u6a21\u5f0f",description:"\u5728 golang \u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u8fd9\u4e48\u4e00\u79cd\u95ee\u9898\uff1a\u53c2\u6570\u8fc7\u591a\uff0c\u5f53\u5e0c\u671b\u5c06\u53c2\u6570\u914d\u7f6e\u6210\u53ef\u9009\u7684\u6a21\u5f0f\u3002",date:"2022-03-28T00:00:00.000Z",formattedDate:"March 28, 2022",tags:[{label:"golang",permalink:"/docusaurus/blog/tags/golang"}],readingTime:1.21,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],nextItem:{title:"golang \u7684 CSP&GMP \u6a21\u578b",permalink:"/docusaurus/blog/2022/03/27/golang-GMP\u6a21\u578b"}},s={authorsImageUrls:[void 0]},l=[],g={toc:l};function f(n){var t=n.components,e=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 golang \u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u8fd9\u4e48\u4e00\u79cd\u95ee\u9898\uff1a\u53c2\u6570\u8fc7\u591a\uff0c\u5f53\u5e0c\u671b\u5c06\u53c2\u6570\u914d\u7f6e\u6210\u53ef\u9009\u7684\u6a21\u5f0f\u3002    "),(0,a.kt)("p",null,"\u5728\u5176\u4ed6\u8bed\u8a00\u4e2d\u6709\u4e0d\u540c\u7684\u89e3\u51b3\u65b9\u6cd5\uff0c\u6bd4\u5982 python \u5c31\u652f\u6301\u9ed8\u8ba4\u53c2\u6570\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u5904\u7406\u8fd9\u4e2a\u95ee\u9898\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5728 golang \u4e2d\u4e5f\u6709\u4e00\u79cd\u9009\u9879\u6a21\u5f0f\uff0c\u53ef\u4ee5\u6bd4\u8f83\u53cb\u597d\u7684\u5904\u7406\u8fd9\u7c7b\u95ee\u9898\u3002   "),(0,a.kt)("p",null,"\u9009\u9879\u6a21\u5f0f\u7684\u4e3b\u8981\u6d41\u7a0b\u662f\uff1a\u521d\u59cb\u5316\u4e00\u4e2a\u9ed8\u8ba4\u53c2\u6570\uff0c\u7136\u540e\u63d0\u4f9b\u53ef\u53d8\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u9488\u5bf9\u6027\u7684\u4fee\u6539\u6b64\u9ed8\u8ba4\u53c2\u6570\uff0c\u6700\u7ec8\u5f97\u5230\u76ee\u6807\u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type MyFuncOption func(options *MyFuncOptions)\n\nfunc WithOptionStr1(str1 string) MyFuncOption {\n    return func(options *MyFuncOptions) {\n        options.optionStr1 = str1\n    }\n}\n\nfunc WithOptionInt1(int1 int) MyFuncOption {\n    return func(options *MyFuncOptions) {\n        options.optionInt1 = int1\n    }\n}\n\nfunc WithOptionStr2AndInt2(str2 string, int2 int) MyFuncOption {\n    return func(options *MyFuncOptions) {\n        options.optionStr2 = str2\n        options.optionInt2 = int2\n    }\n}\n\nfunc NewIns(options ...MyFuncOption) {\n    defaultOptions := Options{}\n    for _, f := range options {\n        f(&defaultOptions)\n    }\n}\n")),(0,a.kt)("br",null),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,a.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d"))))}f.isMDXComponent=!0}}]);