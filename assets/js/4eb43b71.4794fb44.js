"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9178],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),g=a,f=m["".concat(p,".").concat(g)]||m[g]||s[g]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2886:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return g}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"golang \u5173\u4e8e\u7ee7\u627f\u7684\u5751\u70b9",authors:["czasg"],tags:["golang"]},p=void 0,u={permalink:"/docusaurus/blog/2021/11/18/golang\u7ee7\u627f\u7684\u5751\u70b9",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2021/11/18/golang\u7ee7\u627f\u7684\u5751\u70b9/index.md",source:"@site/blog/2021/11/18/golang\u7ee7\u627f\u7684\u5751\u70b9/index.md",title:"golang \u5173\u4e8e\u7ee7\u627f\u7684\u5751\u70b9",description:"\u51c6\u786e\u6765\u8bf4\uff0cgolang \u6ca1\u6709\u7ee7\u627f\uff0c\u800c\u662f\u7ec4\u5408\u3002",date:"2021-11-18T00:00:00.000Z",formattedDate:"November 18, 2021",tags:[{label:"golang",permalink:"/docusaurus/blog/tags/golang"}],readingTime:.92,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"Github \u642d\u5efa Docusaurus \u7ad9\u70b9",permalink:"/docusaurus/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9"},nextItem:{title:"python \u57fa\u7840\u6570\u636e\u7c7b\u578b\u4e2d\u9690\u85cf\u7684\u77e5\u8bc6\u70b9",permalink:"/docusaurus/blog/2021/11/3/python\u57fa\u7840\u6570\u636e\u7c7b\u578b"}},c={authorsImageUrls:[void 0]},s=[],m={toc:s};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u51c6\u786e\u6765\u8bf4\uff0cgolang \u6ca1\u6709\u7ee7\u627f\uff0c\u800c\u662f\u7ec4\u5408\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\ntype People struct{}\n\nfunc (p People) Hello() {\n    fmt.Println("hello")\n    p.CallName()\n}\n\nfunc (p People) CallName() {\n    fmt.Println("my name is people")\n}\n\ntype Man struct {\n    People\n}\n\nfunc (m Man) CallName() {\n    fmt.Println("my name is man")\n}\n\nfunc main() {\n    (Man{}).Hello()\n}\n')),(0,o.kt)("p",null,"\u8be5\u4ee3\u7801\u6700\u7ec8\u8f93\u51fa\u7684\u90fd\u662f\u7ed3\u6784\u4f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"People")," \u5b9a\u4e49\u7684\u65b9\u6cd5\uff0c\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"p.CallName()")," \u65b9\u6cd5\u53ea\u4f1a\u8c03\u7528\u81ea\u5df1\u6216\u8005\u7ec4\u5408\u8fc7\u6765\u7684\u65b9\u6cd5\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u8fd9\u79cd\u901a\u8fc7\u533f\u540d\u7ec4\u5408\u7684\u65b9\u5f0f\uff0c\u88ab\u7ec4\u5408\u7684\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"p"},"People")," \u6240\u5305\u542b\u7684\u65b9\u6cd5\u867d\u7136\u5347\u7ea7\u6210\u4e86\u5916\u90e8\u7c7b\u578b ",(0,o.kt)("inlineCode",{parentName:"p"},"Teacher")," \u8fd9\u4e2a\u7ec4\u5408\u7c7b\u578b\u7684\u65b9\u6cd5\uff0c\u4f46\u63a5\u53d7\u8c03\u7528\u7684\u65f6\u5019\u5e76\u6ca1\u6709\u53d1\u751f\u53d8\u5316\u3002"),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    "))))}g.isMDXComponent=!0}}]);