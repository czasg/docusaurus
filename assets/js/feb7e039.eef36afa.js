"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),g=a,d=s["".concat(i,".").concat(g)]||s[g]||m[g]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},82917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"golang\u5185\u5b58\u7ba1\u7406",authors:["czasg"],tags:["\u672a\u5b9a\u4e49"]},l=void 0,p={permalink:"/docusaurus/blog/2021/12/27/golang\u5185\u5b58\u7ba1\u7406",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2021/12-27-golang\u5185\u5b58\u7ba1\u7406/index.md",source:"@site/blog/2021/12-27-golang\u5185\u5b58\u7ba1\u7406/index.md",title:"golang\u5185\u5b58\u7ba1\u7406",description:"golang \u7684 GC \u4e00\u76f4\u662f\u5927\u5bb6\u8bdf\u75c5\u6700\u591a\u7684\u8bdd\u9898\u4e4b\u4e00\u3002\u4e0b\u9762\u662f golang \u4e0d\u540c\u7248\u672c\u4e4b\u4e2d\u6709\u4e00\u4e9b\u91cd\u8981\u6539\u8fdb\uff1a",date:"2021-12-27T00:00:00.000Z",formattedDate:"December 27, 2021",tags:[{label:"\u672a\u5b9a\u4e49",permalink:"/docusaurus/blog/tags/\u672a\u5b9a\u4e49"}],readingTime:2.6,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"golang\u5185\u5b58\u7ba1\u7406",authors:["czasg"],tags:["\u672a\u5b9a\u4e49"]},prevItem:{title:"nginx \u914d\u7f6e\u8bf4\u660e",permalink:"/docusaurus/blog/2022/01/12/nginx\u914d\u7f6e\u8bf4\u660e"},nextItem:{title:"python\u5185\u5b58\u7ba1\u7406",permalink:"/docusaurus/blog/2021/12/26/python\u5185\u5b58\u7ba1\u7406"}},i={authorsImageUrls:[void 0]},u=[{value:"\u4e09\u8272\u6807\u8bb0\u6cd5",id:"\u4e09\u8272\u6807\u8bb0\u6cd5",level:2},{value:"\u6807\u8bb0\u8d77\u59cb\u9636\u6bb5",id:"\u6807\u8bb0\u8d77\u59cb\u9636\u6bb5",level:4},{value:"\u6807\u8bb0\u9636\u6bb5",id:"\u6807\u8bb0\u9636\u6bb5",level:4},{value:"\u6807\u8bb0\u7ec8\u6b62\u9636\u6bb5",id:"\u6807\u8bb0\u7ec8\u6b62\u9636\u6bb5",level:4},{value:"\u6e05\u9664\u9636\u6bb5",id:"\u6e05\u9664\u9636\u6bb5",level:4},{value:"\u8c03\u4f18\uff1a\u907f\u514d\u5728GC\u671f\u95f4\u5f15\u5165\u8017\u65f6\u64cd\u4f5c",id:"\u8c03\u4f18\u907f\u514d\u5728gc\u671f\u95f4\u5f15\u5165\u8017\u65f6\u64cd\u4f5c",level:2}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"golang \u7684 GC \u4e00\u76f4\u662f\u5927\u5bb6\u8bdf\u75c5\u6700\u591a\u7684\u8bdd\u9898\u4e4b\u4e00\u3002\u4e0b\u9762\u662f golang \u4e0d\u540c\u7248\u672c\u4e4b\u4e2d\u6709\u4e00\u4e9b\u91cd\u8981\u6539\u8fdb\uff1a  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v1.1 STW"),(0,a.kt)("li",{parentName:"ul"},"v1.3 Mark STW\uff0cSweep \u5e76\u884c"),(0,a.kt)("li",{parentName:"ul"},"v1.5 \u4e09\u8272\u6807\u8bb0\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"v1.8 hybrid write barrier")),(0,a.kt)("h2",{id:"\u4e09\u8272\u6807\u8bb0\u6cd5"},"\u4e09\u8272\u6807\u8bb0\u6cd5"),(0,a.kt)("p",null,"\u4e09\u8272\u6807\u8bb0\u6cd5\uff0c\u5c31\u662f\u5c06\u5bf9\u8c61\u6309\u72b6\u6001\u5206\u4e3a\u4e09\u7c7b\uff0c\u5e76\u5206\u4e3a\u8d4b\u4e88\u4e09\u79cd\u989c\u8272\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n","1\u3001",(0,a.kt)("strong",{parentName:"p"},"\u767d\u8272\u5bf9\u8c61"),"\uff08\u53ef\u80fd\u6b7b\u4ea1\uff09\uff1a\u672a\u88ab\u56de\u6536\u5668\u8bbf\u95ee\u5230\u7684\u5bf9\u8c61\u3002\u6240\u6709\u5bf9\u8c61\u5728\u8d77\u59cb\u9636\u6bb5\u5747\u4e3a\u767d\u8272\uff0c\u5728\u56de\u6536\u7ed3\u675f\u540e\u767d\u8272\u5bf9\u8c61\u88ab\u56de\u6536\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","2\u3001",(0,a.kt)("strong",{parentName:"p"},"\u7070\u8272\u5bf9\u8c61"),"\uff08\u4e2d\u95f4\u6001\uff09\uff1a\u5df2\u88ab\u56de\u6536\u5668\u8bbf\u95ee\u5230\u7684\u5bf9\u8c61\u3002\u4f46\u53ef\u80fd\u5b58\u5728\u6307\u5411\u5176\u4ed6\u5bf9\u8c61\u7684\u5f15\u7528\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","3\u3001",(0,a.kt)("strong",{parentName:"p"},"\u9ed1\u8272\u5bf9\u8c61"),"\uff08\u786e\u5b9a\u5b58\u6d3b\uff09\uff1a\u5df2\u88ab\u56de\u6536\u5668\u8bbf\u95ee\u5230\u7684\u5bf9\u8c61\uff0c\u4e14\u4e0d\u5b58\u5728\u6307\u5411\u5176\u4ed6\u5bf9\u8c61\u7684\u5f15\u7528\u3002    "),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u5728 v1.8 \u7248\u672c\u91cd\u8fd8\u5f15\u5165",(0,a.kt)("strong",{parentName:"p"},"\u5199\u5c4f\u969c"),"\u7684\u6982\u5ff5\uff1a\u5728 GC \u6267\u884c\u671f\u95f4\uff0c\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u4f1a\u88ab\u9ed8\u8ba4\u8d4b\u4e88\u7070\u8272\u5bf9\u8c61\uff0c\u4ee5\u4fbf\u5783\u573e\u56de\u6536\u7684\u6b63\u5e38\u6267\u884c\u3002"),(0,a.kt)("h4",{id:"\u6807\u8bb0\u8d77\u59cb\u9636\u6bb5"},"\u6807\u8bb0\u8d77\u59cb\u9636\u6bb5"),(0,a.kt)("p",null,"1\u3001STW",(0,a.kt)("br",{parentName:"p"}),"\n","2\u3001\u786e\u5b9a GC ROOT\uff0c\u5e76\u5c06\u5176\u7f6e\u4e3a\u7070\u8272",(0,a.kt)("br",{parentName:"p"}),"\n","3\u3001\u5f15\u5165\u5199\u5c4f\u969c  "),(0,a.kt)("h4",{id:"\u6807\u8bb0\u9636\u6bb5"},"\u6807\u8bb0\u9636\u6bb5"),(0,a.kt)("p",null,"1\u3001\u6807\u8bb0\u4e0e\u4e1a\u52a1\u5e76\u884c"),(0,a.kt)("h4",{id:"\u6807\u8bb0\u7ec8\u6b62\u9636\u6bb5"},"\u6807\u8bb0\u7ec8\u6b62\u9636\u6bb5"),(0,a.kt)("p",null,"1\u3001STW",(0,a.kt)("br",{parentName:"p"}),"\n","2\u3001\u79fb\u9664\u5199\u5c4f\u969c"),(0,a.kt)("h4",{id:"\u6e05\u9664\u9636\u6bb5"},"\u6e05\u9664\u9636\u6bb5"),(0,a.kt)("p",null,"1\u3001\u56de\u6536\u767d\u8272\u5bf9\u8c61"),(0,a.kt)("p",null,"\u4e09\u8272\u6807\u8bb0\u6cd5\uff0c\u5927\u5927\u51cf\u5c11\u4e86 GC \u7684 STW \u65f6\u95f4\uff0c\u4f7f\u5f97\u6807\u8bb0\u9636\u6bb5\u4e0e\u4e1a\u52a1\u5e76\u884c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5f15\u5165\u5199\u5c4f\u969c\uff0c\u4f7f\u5f97\u7a0b\u5e8f\u5728 GC \u671f\u95f4\u4f1a\u6709\u989d\u5916\u7684\u6027\u80fd\u6d88\u8017\u3002  "),(0,a.kt)("admonition",{title:"\u9003\u9038\u5206\u6790",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7528\u6765\u5728\u7f16\u8bd1\u9636\u6bb5\u786e\u8ba4\u5bf9\u8c61\u7684\u5185\u5b58\u662f\u5206\u914d\u5230\u5806\u4e2d\u8fd8\u662f\u5206\u914d\u5230\u6808\u4e2d\u3002")),(0,a.kt)("h2",{id:"\u8c03\u4f18\u907f\u514d\u5728gc\u671f\u95f4\u5f15\u5165\u8017\u65f6\u64cd\u4f5c"},"\u8c03\u4f18\uff1a\u907f\u514d\u5728GC\u671f\u95f4\u5f15\u5165\u8017\u65f6\u64cd\u4f5c"),(0,a.kt)("p",null,"\u80cc\u666f\uff1a\u5e0c\u671b\u6536\u96c6\u7ebf\u4e0a GC \u65e5\u5fd7\uff0c\u4ee5\u4fbf\u7528\u4e8e\u540e\u7eed\u5206\u6790\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5b9e\u73b0\uff1a\u5f00\u542f GODEBUG=gctrace=1\uff0c\u5e76\u5c06\u8f93\u51fa\u6d41\u6307\u5411\u67d0\u6587\u4ef6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5bfc\u81f4\uff1a\u76d1\u63a7\u663e\u793a\uff0c\u7ebf\u4e0a\u4e1a\u52a1\u5fc5\u5b9a\u95f4\u9694\u6027\u6296\u52a8\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u539f\u56e0\uff1aGC \u65e5\u5fd7\u8f93\u51fa\u5c5e\u4e8e STW \u671f\u95f4\uff0c\u539f\u672c STW \u57fa\u4e8e\u5185\u5b58\u5b8c\u6210\uff0c\u4f46\u73b0\u5728\u5f3a\u884c\u5f15\u5165\u78c1\u76d8 IO\uff0c\u5bfc\u81f4\u5806\u7a0b\u5e8f\u9020\u6210\u6027\u80fd\u5f71\u54cd\u3002   "),(0,a.kt)("br",null),(0,a.kt)("admonition",{title:"\ud83d\udc47\ud83d\udc47\ud83d\udc47",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d")))}m.isMDXComponent=!0}}]);