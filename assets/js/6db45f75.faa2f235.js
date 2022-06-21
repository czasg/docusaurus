"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9654],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1452:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={title:"redis \u5206\u5e03\u5f0f\u9501",authors:["czasg"],tags:["redis"]},c=void 0,s={permalink:"/docusaurus/blog/2022/06/21/redis\u5206\u5e03\u5f0f\u9501",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/06-21-redis\u5206\u5e03\u5f0f\u9501/index.md",source:"@site/blog/2022/06-21-redis\u5206\u5e03\u5f0f\u9501/index.md",title:"redis \u5206\u5e03\u5f0f\u9501",description:"\x3c!--",date:"2022-06-21T00:00:00.000Z",formattedDate:"June 21, 2022",tags:[{label:"redis",permalink:"/docusaurus/blog/tags/redis"}],readingTime:.95,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],nextItem:{title:"PEP8 \u89c4\u8303",permalink:"/docusaurus/blog/2022/06/20/pep8\u89c4\u8303"}},l={authorsImageUrls:[void 0]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5e76\u53d1\u573a\u666f\u4e0b\u7684",(0,o.kt)("strong",{parentName:"p"},"\u9501\u673a\u5236"),"\uff0c\u5176\u5b9e\u5c31\u662f\u7528\u6765\u4fdd\u62a4\u4e0d\u540c\u7ebf\u7a0b\u5bf9",(0,o.kt)("strong",{parentName:"p"},"\u5171\u4eab\u8d44\u6e90"),"\u7684\u8bbf\u95ee\uff0c\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u7a0b\u5e8f\u6309\u9884\u8bbe\u7684\u903b\u8f91\u6267\u884c\u3002",(0,o.kt)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u9501"),"\u4e5f\u662f\u4e00\u6837\u7684\u539f\u7406\uff0c\u5b83\u662f\u7528\u4e8e\u5206\u5e03\u5f0f\u7cfb\u7edf\u5e76\u53d1\u573a\u666f\u4e0b\u8bbf\u95ee\u5171\u4eab\u8d44\u6e90\u7684\u4e00\u79cd\u9501\u673a\u5236\u3002   "),(0,o.kt)("p",null,"\u4e00\u628a\u5408\u683c\u7684\u5206\u5e03\u5f0f\u9501\uff0c\u5e94\u8be5\u81f3\u5c11\u5177\u5907\u4ee5\u4e0b\u7279\u5f81\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e92\u65a5\u6027\uff1a\u4efb\u610f\u65f6\u523b\uff0c\u53ea\u6709\u4e00\u4e2a\u5ba2\u6237\u7aef\u6301\u6709\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8d85\u65f6\u673a\u5236\uff1a\u6301\u6709\u9501\u5e76\u8d85\u65f6\u65f6\uff0c\u53ef\u4ee5\u81ea\u52a8\u91ca\u653e\uff0c\u907f\u514d\u6b7b\u9501\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u5168\u6027\uff1a\u5728\u672a\u8d85\u65f6\u573a\u666f\u4e0b\uff0c\u9501\u53ea\u80fd\u88ab\u6301\u6709\u8005\u91ca\u653e")),(0,o.kt)("p",null,"\u6b63\u6587\u5728\u6b64\u5904"),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,o.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d"))))}d.isMDXComponent=!0}}]);