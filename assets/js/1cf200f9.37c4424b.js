"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5868],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3206:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const o={title:"redis \u5206\u7247\u96c6\u7fa4",sidebar_label:"redis\u5206\u7247\u96c6\u7fa4"},a=void 0,s={unversionedId:"redis/redis\u5206\u7247\u96c6\u7fa4",id:"redis/redis\u5206\u7247\u96c6\u7fa4",title:"redis \u5206\u7247\u96c6\u7fa4",description:"\u5f53 redis \u9700\u8981\u5b58\u50a8\u5927\u91cf\u6570\u636e\uff0c\u6211\u4eec\u5f80\u5f80\u7531\u4e24\u79cd\u8003\u8651\u65b9\u6848\uff1a",source:"@site/docs-note/redis/5.redis\u5206\u7247\u96c6\u7fa4.md",sourceDirName:"redis",slug:"/redis/redis\u5206\u7247\u96c6\u7fa4",permalink:"/docusaurus/note/redis/redis\u5206\u7247\u96c6\u7fa4",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"redis \u5206\u7247\u96c6\u7fa4",sidebar_label:"redis\u5206\u7247\u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"redis\u54e8\u5175\u673a\u5236",permalink:"/docusaurus/note/redis/redis\u54e8\u5175\u673a\u5236"},next:{title:"emoji",permalink:"/docusaurus/note/demo/emoji"}},l={},c=[{value:"\u7eb5\u5411\u62d3\u5c55",id:"\u7eb5\u5411\u62d3\u5c55",level:2},{value:"\u6a2a\u5411\u62d3\u5c55",id:"\u6a2a\u5411\u62d3\u5c55",level:2}],u={toc:c},p="wrapper";function d(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5f53 redis \u9700\u8981\u5b58\u50a8\u5927\u91cf\u6570\u636e\uff0c\u6211\u4eec\u5f80\u5f80\u7531\u4e24\u79cd\u8003\u8651\u65b9\u6848\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","1\u3001\u7eb5\u5411\u62d3\u5c55\uff1a\u589e\u52a0\u5355\u673a\u914d\u7f6e\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","2\u3001\u6a2a\u5411\u62d3\u5c55\uff1a\u5206\u7247\u96c6\u7fa4\u3002   "),(0,i.kt)("p",null,"\u672c\u6587\u9488\u5bf9\u8fd9\u4e24\u79cd\u65b9\u6848\u8fdb\u884c\u8ba8\u8bba\u548c\u5bf9\u6bd4\u3002"),(0,i.kt)("h2",{id:"\u7eb5\u5411\u62d3\u5c55"},"\u7eb5\u5411\u62d3\u5c55"),(0,i.kt)("p",null,"\u7eb5\u5411\u62d3\u5c55\u5c31\u662f\u589e\u52a0\u5355\u673a\u914d\u7f6e\uff0c\u8fd9\u5e94\u8be5\u662f\u6700\u7b80\u5355\u7684\u65b9\u6848\u4e86\u3002\u6bd4\u5982 2g \u5185\u5b58\u5347\u7ea7\u5230 4g \u5185\u5b58\uff0c\u7136\u540e\u8fd8\u6709 8g\u300116g\u300132g \u7b49\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u6765\u8bb2\uff0c\u5982\u679c 8g \u80fd\u6ee1\u8db3\u9700\u6c42\uff0c\u90a3\u53ef\u4ee5\u76f4\u63a5\u9009\u62e9\u6b64\u65b9\u6848\u3002\u4f46\u662f\u5982\u679c\u9700\u8981\u66f4\u5927\u7684\u5185\u5b58\uff0c\u90a3\u53ef\u80fd\u9700\u8981\u8003\u8651\u6027\u80fd\u65b9\u9762\u7684\u95ee\u9898\u4e86\uff0c\u7279\u522b\u662f\u6301\u4e45\u5316\u65b9\u9762\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u6bd4\u5982\u4e3b\u7ebf\u7a0b fork \u521b\u5efa\u5b50\u8fdb\u7a0b\u65f6\uff0c\u5982\u679c\u5185\u5b58\u4f7f\u7528\u8db3\u591f\u5927\uff0c\u5219\u521b\u5efa\u5b50\u8fdb\u7a0b\u65f6\u9700\u8981\u62f7\u8d1d\u7684\u8d44\u6e90\u5c31\u66f4\u591a\uff0c\u963b\u585e\u7684\u65f6\u95f4\u4e5f\u66f4\u4e45\u3002"),(0,i.kt)("h2",{id:"\u6a2a\u5411\u62d3\u5c55"},"\u6a2a\u5411\u62d3\u5c55"),(0,i.kt)("p",null,"\u6a2a\u5411\u62d3\u5c55\u5c31\u662f\u4f7f\u7528\u591a\u4e2a redis \u624d\u5b58\u50a8\u6570\u636e\u5e76\u63d0\u4f9b\u670d\u52a1\uff0c\u8fd9\u6837\u628a\u4e00\u4e2a\u5927\u7684\u5185\u5b58\u5b9e\u4f8b\uff0c\u62c6\u5206\u5230\u591a\u4e2a\u5c0f\u5185\u5b58\u5b9e\u4f8b\u3002\u95ee\u9898\u5c31\u662f\u5982\u4f55\u7ba1\u7406\u8fd9\u4e9b\u5b9e\u4f8b\u4e86\u3002"),(0,i.kt)("p",null,"redis \u652f\u6301\u5207\u7247\u96c6\u7fa4\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u7ba1\u7406\u591a\u4e2a redis \u5b9e\u4f8b\u4e4b\u95f4\u7684\u6570\u636e\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u539f\u7406\u662f\u91c7\u7528\u54c8\u5e0c\u69fd\uff0c\u6765\u5904\u7406\u6570\u636e\u548c\u5b9e\u4f8b\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002\u4e00\u4e2a\u5207\u7247\u96c6\u7fa4\u4e2d\uff0c\u6709 2**14 = 16384 \u4e2a\u54c8\u5e0c\u69fd\u3002\n\u6bcf\u4e00\u4e2a\u952e\u503c\u5bf9\u90fd\u4f1a\u88ab\u6620\u5c04\u5230\u8fd9\u4e9b\u54c8\u5e0c\u69fd\u4e2d\u3002\u800c\u54c8\u5e0c\u69fd\u53c8\u6620\u5c04\u5230 redis \u5b9e\u4f8b\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5177\u4f53\u7684\u6620\u5c04\u65b9\u6cd5\u4e3a\uff1a\u5bf9 key \u8fdb\u884c crc16 \u8ba1\u7b97\uff0c\u7136\u540e\u5bf9 16384 \u53d6\u6a21\u5373\u53ef\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u800c\u4e14\u96c6\u7fa4\u4e2d\u4efb\u4f55\u4e00\u4e2a\u5b9e\u4f8b\u90fd\u53ef\u4ee5\u67e5\u8be2\u5230\u6570\u636e\uff0c\u8fd9\u5f52\u7ed3\u4e8e\u91cd\u5b9a\u5411\u673a\u5236\uff0c\u5373\u8ba1\u7b97\u51fa\u54c8\u5e0c\u69fd\u4e0d\u5c5e\u4e8e\u81ea\u5df1\u65f6\uff0c\u4f1a\u91cd\u5b9a\u5411\u5230\u76ee\u6807\u5b9e\u4f8b\u5e76\u6267\u884c\u64cd\u4f5c\u3002"))}d.isMDXComponent=!0}}]);