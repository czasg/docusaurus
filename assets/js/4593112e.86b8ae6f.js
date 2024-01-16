"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"GMP"},i=void 0,l={unversionedId:"question-bank/go/GMP/index",id:"question-bank/go/GMP/index",title:"GMP",description:"\u8c03\u5ea6\u6d41\u7a0b",source:"@site/docs/office/question-bank/go/GMP/index.md",sourceDirName:"question-bank/go/GMP",slug:"/question-bank/go/GMP/",permalink:"/docusaurus/docs/office/question-bank/go/GMP/",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/question-bank/go/GMP/index.md",tags:[],version:"current",frontMatter:{title:"GMP"},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/docusaurus/docs/office/question-bank/go/"},next:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/docusaurus/docs/office/question-bank/go/data-struct/"}},u={},c=[{value:"\u8c03\u5ea6\u6d41\u7a0b",id:"\u8c03\u5ea6\u6d41\u7a0b",level:3},{value:"work-stealing\u673a\u5236",id:"work-stealing\u673a\u5236",level:3},{value:"hand-off\u673a\u5236",id:"hand-off\u673a\u5236",level:3},{value:"\u534f\u4f5c\u5f0f\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6",id:"\u534f\u4f5c\u5f0f\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6",level:3},{value:"\u57fa\u4e8e\u4fe1\u53f7\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6",id:"\u57fa\u4e8e\u4fe1\u53f7\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6",level:3},{value:"GMP\u8c03\u5ea6\u8fc7\u7a0b\u4e2d\u5b58\u5728\u90a3\u4e9b\u963b\u585e\u70b9",id:"gmp\u8c03\u5ea6\u8fc7\u7a0b\u4e2d\u5b58\u5728\u90a3\u4e9b\u963b\u585e\u70b9",level:3},{value:"\u672c\u5730\u961f\u5217\u957f\u5ea6",id:"\u672c\u5730\u961f\u5217\u957f\u5ea6",level:3}],s={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u8c03\u5ea6\u6d41\u7a0b"},"\u8c03\u5ea6\u6d41\u7a0b"),(0,o.kt)("h3",{id:"work-stealing\u673a\u5236"},"work-stealing\u673a\u5236"),(0,o.kt)("h3",{id:"hand-off\u673a\u5236"},"hand-off\u673a\u5236"),(0,o.kt)("h3",{id:"\u534f\u4f5c\u5f0f\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6"},"\u534f\u4f5c\u5f0f\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6"),(0,o.kt)("h3",{id:"\u57fa\u4e8e\u4fe1\u53f7\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6"},"\u57fa\u4e8e\u4fe1\u53f7\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6"),(0,o.kt)("h3",{id:"gmp\u8c03\u5ea6\u8fc7\u7a0b\u4e2d\u5b58\u5728\u90a3\u4e9b\u963b\u585e\u70b9"},"GMP\u8c03\u5ea6\u8fc7\u7a0b\u4e2d\u5b58\u5728\u90a3\u4e9b\u963b\u585e\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7f51\u7edcIO\u3001\u6587\u4ef6IO"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u9053"),(0,o.kt)("li",{parentName:"ul"},"\u9501")),(0,o.kt)("h3",{id:"\u672c\u5730\u961f\u5217\u957f\u5ea6"},"\u672c\u5730\u961f\u5217\u957f\u5ea6"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u4e3a256"))}p.isMDXComponent=!0}}]);