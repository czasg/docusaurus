"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9437],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,f=m["".concat(c,".").concat(g)]||m[g]||s[g]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"golang interface \u5751\u70b9",authors:["czasg"],tags:["golang"]},c=void 0,u={permalink:"/docusaurus/blog/2021/11/20/golang-interface\u5751\u70b9",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2021/11/20/golang-interface\u5751\u70b9/index.md",source:"@site/blog/2021/11/20/golang-interface\u5751\u70b9/index.md",title:"golang interface \u5751\u70b9",description:"\u5751\u70b9\uff1ainterface == nil",date:"2021-11-20T00:00:00.000Z",formattedDate:"November 20, 2021",tags:[{label:"golang",permalink:"/docusaurus/blog/tags/golang"}],readingTime:1.26,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"Github \u642d\u5efa Docusaurus \u7ad9\u70b9",permalink:"/docusaurus/blog/2021/12/3/Github\u642d\u5efaDocusaurus\u7ad9\u70b9"},nextItem:{title:"golang \u5207\u7247\u5751\u70b9",permalink:"/docusaurus/blog/2021/11/19/golang\u5207\u7247\u5751\u70b9"}},p={authorsImageUrls:[void 0]},s=[{value:"\u5751\u70b9\uff1ainterface == nil",id:"\u5751\u70b9interface--nil",children:[],level:2}],m={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5751\u70b9interface--nil"},"\u5751\u70b9\uff1ainterface == nil"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var v interface{}\nfmt.Println(v == nil)\nv = (*int)(nil)\nfmt.Println(v == nil)\n")),(0,o.kt)("p",null,"\u8fd9\u662f\u4e00\u6bb5\u7b80\u5355\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u6765\u770b\u4e0b\u5b83\u7684\u8f93\u51fa\u7ed3\u679c\uff1a  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"true\nfalse\n")),(0,o.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5751\u70b9\uff0c\u5728 code \u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5e38\u5e38\u8ba4\u4e3a interface \u88ab\u8d4b\u503c\u4e86\u4e00\u4e2a\u7a7a\u503c nil\uff0c\u518d\u505a\u5224\u65ad\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u548c nil \u505a\u5bf9\u6bd4\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u663e\u7136\u8fd9\u662f\u9519\u8bef\u7684\uff0c\u8fd9\u6837\u4f1a\u5f97\u5230\u4e0e\u6211\u4eec\u9884\u671f\u4e0d\u7b26\u7684\u7ed3\u679c\u3002 "),(0,o.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a interface \u5e76\u4e0d\u662f\u4e00\u4e2a\u6307\u9488\u7c7b\u578b\uff0c\u800c\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u7ed3\u6784\u4f53\uff0c\u5185\u90e8\u5305\u542b\u4e86\u4e24\u7c7b\u6570\u636e\u7ed3\u6784\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u7c7b\u578b")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"\u503c"),"\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u5728\u4e0a\u9762\u7684\u5224\u65ad\u4e2d\uff0c\u9700\u8981\u7c7b\u578b\u548c\u503c\u90fd\u4e3a nil \u7684\u662f\u5426\u624d\u4f1a\u5224\u65ad\u6b63\u786e\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e00\u65e6\u8d4b\u4e88\u4e86\u67d0\u4e2a\u7c7b\u578b\u6216\u8005\u503c\uff0c\u6b64\u65f6\u518d\u8fdb\u884c\u5224\u65ad\u5c31\u4f1a\u51fa\u73b0\u4ee4\u4eba\u56f0\u60d1\u7684\u573a\u666f\u3002   "),(0,o.kt)("p",null,"\u9488\u5bf9\u8fd9\u79cd\u573a\u666f\uff0c\u4e00\u822c\u6b63\u786e\u7684\u65b9\u5f0f\u662f\u8c03\u7528 reflect \u53cd\u5c04\u5305\u8fdb\u884c\u5224\u65ad\u3002"),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    "))))}g.isMDXComponent=!0}}]);