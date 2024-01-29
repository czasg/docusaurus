"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u5207\u7247"},c=void 0,i={unversionedId:"question-bank/go/data-struct/slice/index",id:"question-bank/go/data-struct/slice/index",title:"\u5207\u7247",description:"\u4ec0\u4e48\u662f\u5207\u7247",source:"@site/docs/office/question-bank/go/data-struct/slice/index.md",sourceDirName:"question-bank/go/data-struct/slice",slug:"/question-bank/go/data-struct/slice/",permalink:"/docusaurus/docs/office/question-bank/go/data-struct/slice/",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/question-bank/go/data-struct/slice/index.md",tags:[],version:"current",frontMatter:{title:"\u5207\u7247"},sidebar:"tutorialSidebar",previous:{title:"rune",permalink:"/docusaurus/docs/office/question-bank/go/data-struct/rune/"},next:{title:"erros",permalink:"/docusaurus/docs/office/question-bank/go/errs"}},u={},s=[{value:"\u4ec0\u4e48\u662f\u5207\u7247",id:"\u4ec0\u4e48\u662f\u5207\u7247",level:3},{value:"\u5207\u7247\u548c\u6570\u7ec4\u4e4b\u95f4\u6709\u4ec0\u4e48\u533a\u522b",id:"\u5207\u7247\u548c\u6570\u7ec4\u4e4b\u95f4\u6709\u4ec0\u4e48\u533a\u522b",level:3},{value:"slice:n:n\u662f\u4ec0\u4e48\u610f\u601d",id:"slicenn\u662f\u4ec0\u4e48\u610f\u601d",level:3}],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u662f\u5207\u7247"},"\u4ec0\u4e48\u662f\u5207\u7247"),(0,o.kt)("p",null,"\u5728Go\u4e2d\uff0c\u5207\u7247\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b9e\u73b0\u4e86\u52a8\u6001\u6570\u7ec4\u7684\u80fd\u529b\u3002\n\u5e76\u4e14\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u5207\u7247\u64cd\u4f5c\u6765\u52a8\u6001\u7684\u622a\u53d6\u5143\u7d20\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5207\u7247\u3002"),(0,o.kt)("h3",{id:"\u5207\u7247\u548c\u6570\u7ec4\u4e4b\u95f4\u6709\u4ec0\u4e48\u533a\u522b"},"\u5207\u7247\u548c\u6570\u7ec4\u4e4b\u95f4\u6709\u4ec0\u4e48\u533a\u522b"),(0,o.kt)("h3",{id:"slicenn\u662f\u4ec0\u4e48\u610f\u601d"},"slice","[:n:n]","\u662f\u4ec0\u4e48\u610f\u601d"),(0,o.kt)("p",null,"\u5728\u5207\u7247\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u901a\u8fc7\u6307\u5b9a\u7d22\u5f15\u4e0b\u6807\u6765\u622a\u53d6\u5207\u7247\uff0c\u4ece\u800c\u83b7\u5f97\u4e00\u4e2a\u65b0\u7684\u5207\u7247\u3002"),(0,o.kt)("p",null,"\u5176\u4e2d\u5e38\u7528\u7684\u6709\u4e24\u4e2a\u4e0b\u6807\uff0c\u5206\u522b\u8868\u793a\uff1a\u5207\u7247\u7684\u8d77\u59cb\u4f4d\u7f6e\uff08\u5305\u542b\uff09\u548c\u7ed3\u675f\u4f4d\u7f6e\uff08\u4e0d\u5305\u542b\uff09\u3002\u7136\u540e\uff0c\u5207\u7247\u8fd8\u652f\u6301\u7b2c\u4e09\u4e2a\u4e0b\u6807\uff0c\u8868\u793a\u65b0\u5207\u7247\u7684\u6700\u5927\u5bb9\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"source := []int{1, 2, 3, 4, 5}\n\n// \u521b\u5efa\u4e00\u4e2a\u5207\u7247\uff0c\u8d77\u59cb\u7d22\u5f15\u4e3a0\uff0c\u7ed3\u675f\u7d22\u5f15\u4e3a3\uff0c\u6700\u5927\u5bb9\u91cf\u4e3a3\nnewSource := source[:3:3]\n")))}d.isMDXComponent=!0}}]);