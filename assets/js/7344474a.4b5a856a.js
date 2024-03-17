"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[580],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),s=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return o.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,y=p["".concat(u,".").concat(d)]||p[d]||f[d]||c;return t?o.createElement(y,a(a({ref:n},l),{},{components:t})):o.createElement(y,a({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const c={title:"Once"},a=void 0,i={unversionedId:"question-bank/go/sync/Once/index",id:"question-bank/go/sync/Once/index",title:"Once",description:"\u4ec0\u4e48\u662fsync.Once",source:"@site/docs/office/question-bank/go/sync/Once/index.md",sourceDirName:"question-bank/go/sync/Once",slug:"/question-bank/go/sync/Once/",permalink:"/docusaurus/docs/office/question-bank/go/sync/Once/",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/question-bank/go/sync/Once/index.md",tags:[],version:"current",frontMatter:{title:"Once"},sidebar:"tutorialSidebar",previous:{title:"\u6e90\u7801\u89e3\u6790",permalink:"/docusaurus/docs/office/question-bank/go/sync/Mutex/\u6e90\u7801\u89e3\u6790"},next:{title:"Pool",permalink:"/docusaurus/docs/office/question-bank/go/sync/Pool/"}},u={},s=[{value:"\u4ec0\u4e48\u662fsync.Once",id:"\u4ec0\u4e48\u662fsynconce",level:3},{value:"Once\u5b9e\u73b0\u539f\u7406",id:"once\u5b9e\u73b0\u539f\u7406",level:3}],l={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u4ec0\u4e48\u662fsynconce"},"\u4ec0\u4e48\u662fsync.Once"),(0,r.kt)("p",null,"Once\u662fGo\u4e2d\u7684\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5e38\u7528\u4e8e\u521d\u59cb\u5316\u64cd\u4f5c\u3002\u5b83\u7684\u7279\u70b9\u662f\u4ec5\u4e14\u53ea\u80fd\u6267\u884c\u4e00\u6b21\u3002"),(0,r.kt)("h3",{id:"once\u5b9e\u73b0\u539f\u7406"},"Once\u5b9e\u73b0\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sync.Once"),"\u5b9e\u73b0\u539f\u7406\u6bd4\u8f83\u7b80\u5355\uff0c\u5b83\u901a\u8fc7\u7ef4\u62a4\u4e00\u4e2a\u72b6\u6001\u53d8\u91cf\u548c\u4e00\u4e2a\u4e92\u65a5\u9501\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u5f53\u72b6\u6001\u662f\u672a\u5b8c\u6210\u65f6\uff0c\u7533\u8bf7\u4e92\u65a5\u9501\u5e76\u6267\u884c\u521d\u59cb\u5316\u51fd\u6570\uff0c\u5e76\u4fee\u6539\u72b6\u6001\u81f3\u5b8c\u6210\u3002\u5bf9\u4e8e\u540c\u6b65\u963b\u585e\u5728\u4e92\u65a5\u9501\u4e2d\u7684\u534f\u7a0b\uff0c\u83b7\u53d6\u5230\u9501\u6743\u9650\u540e\u5224\u65ad\u662f\u5426\u5df2\u7ecf\u5b8c\u6210\uff0c\u5982\u679c\u5df2\u7ecf\u5b8c\u6210\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Once struct {\n    done uint32\n    m    Mutex\n}\n\nfunc (o *Once) Do(f func()) {\n    if atomic.LoadUint32(&o.done) == 0 {\n        // Outlined slow-path to allow inlining of the fast-path.\n        o.doSlow(f)\n    }\n}\n\nfunc (o *Once) doSlow(f func()) {\n    o.m.Lock()\n    defer o.m.Unlock()\n    if o.done == 0 {\n        defer atomic.StoreUint32(&o.done, 1)\n        f()\n    }\n}\n")))}f.isMDXComponent=!0}}]);