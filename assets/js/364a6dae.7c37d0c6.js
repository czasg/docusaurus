"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[149],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u8bfb\u5199\u9501"},i=void 0,u={unversionedId:"question-bank/go/sync/RWMutex/index",id:"question-bank/go/sync/RWMutex/index",title:"\u8bfb\u5199\u9501",description:"\u8bf7\u4ecb\u7ecd\u5b9e\u73b0\u539f\u7406",source:"@site/docs/office/question-bank/go/sync/RWMutex/index.md",sourceDirName:"question-bank/go/sync/RWMutex",slug:"/question-bank/go/sync/RWMutex/",permalink:"/docusaurus/docs/office/question-bank/go/sync/RWMutex/",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/question-bank/go/sync/RWMutex/index.md",tags:[],version:"current",frontMatter:{title:"\u8bfb\u5199\u9501"},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docusaurus/docs/office/question-bank/go/sync/Pool/"},next:{title:"WaitGroup",permalink:"/docusaurus/docs/office/question-bank/go/sync/WaitGroup/"}},c={},s=[{value:"\u8bf7\u4ecb\u7ecd\u5b9e\u73b0\u539f\u7406",id:"\u8bf7\u4ecb\u7ecd\u5b9e\u73b0\u539f\u7406",level:3},{value:"\u7533\u8bf7\u8bfb\u9501",id:"\u7533\u8bf7\u8bfb\u9501",level:4},{value:"\u7533\u8bf7\u5199\u9501",id:"\u7533\u8bf7\u5199\u9501",level:4}],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u8bf7\u4ecb\u7ecd\u5b9e\u73b0\u539f\u7406"},"\u8bf7\u4ecb\u7ecd\u5b9e\u73b0\u539f\u7406"),(0,o.kt)("p",null,"\u8bfb\u5199\u9501\u5e95\u5c42\u662f\u57fa\u4e8e\u4e92\u65a5\u9501\u548c\u4fe1\u53f7\u91cf\u5b9e\u73b0\u7684\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u7ef4\u62a4\u4e86\u8bfb\u9501\u603b\u91cf\u548c\u7b49\u5f85\u6570\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type RWMutex struct {\n    w           Mutex        // held if there are pending writers\n    writerSem   uint32       // semaphore for writers to wait for completing readers\n    readerSem   uint32       // semaphore for readers to wait for completing writers\n    readerCount atomic.Int32 // number of pending readers\n    readerWait  atomic.Int32 // number of departing readers\n}\n")),(0,o.kt)("h4",{id:"\u7533\u8bf7\u8bfb\u9501"},"\u7533\u8bf7\u8bfb\u9501"),(0,o.kt)("p",null,"\u7533\u8bf7\u8bfb\u9501\u65f6\u4f1a\u5c1d\u8bd5\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"readerCount"),"\u8bfb\u9501\u603b\u91cf\u4e0a\u52a01\uff0c\u5f53\u8fd4\u56de\u503c\u4e3a\u8d1f\u6570\u65f6\uff0c\u8868\u793a\u6709\u5199\u9501\u6b63\u5728\u7533\u8bf7\uff0c\u56e0\u6b64\u963b\u585e\u7b49\u5f85\u5199\u9501\u91ca\u653e\u3002\n\u8fd9\u4e2a\u8fc7\u7a0b\u65f6\u901a\u8fc7\u76d1\u542c\u8bfb\u9501\u4fe1\u53f7\u91cf\u5b9e\u73b0\u7684\u3002"),(0,o.kt)("h4",{id:"\u7533\u8bf7\u5199\u9501"},"\u7533\u8bf7\u5199\u9501"),(0,o.kt)("p",null,"\u7533\u8bf7\u5199\u9501\u65f6\u4f1a\u5148\u4f7f\u7528\u4e92\u65a5\u9501\uff0c\u7136\u540e\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"readerCount"),"\u8bfb\u9501\u603b\u91cf\u7f6e\u4e3a\u6700\u5927\u7684\u8d1f\u6570\uff0c\u786e\u4fdd\u4e0d\u4f1a\u6709\u8bfb\u9501\u80fd\u591f\u7533\u8bf7\uff0c\u4ece\u800c\u5b9e\u73b0\u4e86\u5199\u9501\u4f18\u5148\u3002\n\u7136\u540e\u5982\u679c\u8bfb\u9501\u7b49\u5f85\u91cf\u5927\u4e8e0\uff0c\u8868\u793a\u4ecd\u7136\u6709\u8bfb\u9501\u6b63\u5728\u5360\u7528\uff0c\u90a3\u4e48\u8fd9\u65f6\u8bfb\u9501\u4f1a\u76d1\u542c\u5199\u9501\u4fe1\u53f7\u91cf\uff0c\u7b49\u5f85\u8bfb\u9501\u91ca\u653e\u3002"))}d.isMDXComponent=!0}}]);