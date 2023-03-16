"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2577],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"redis\u6307\u6807\u5c0f\u7ed3",authors:["czasg"],tags:["redis"]},i=void 0,o={permalink:"/docusaurus/blog/2022/04/02/redis\u6307\u6807\u5c0f\u7ed3",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/04-02-redis\u6307\u6807\u5c0f\u7ed3/index.md",source:"@site/blog/2022/04-02-redis\u6307\u6807\u5c0f\u7ed3/index.md",title:"redis\u6307\u6807\u5c0f\u7ed3",description:"\u672c\u6587\u5b66\u4e60\u603b\u7ed3\u4e0b redis \u5e38\u7528\u7684\u89c2\u6d4b\u6307\u6807\uff0c\u5305\u62ec\uff1a\u6027\u80fd\u6307\u6807\u3001\u5185\u5b58\u6307\u6807\u7b49\u3002",date:"2022-04-02T00:00:00.000Z",formattedDate:"April 2, 2022",tags:[{label:"redis",permalink:"/docusaurus/blog/tags/redis"}],readingTime:1.565,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"redis\u6307\u6807\u5c0f\u7ed3",authors:["czasg"],tags:["redis"]},prevItem:{title:"tcmalloc\u7406\u89e3",permalink:"/docusaurus/blog/2022/04/05/tcmalloc\u7406\u89e3"},nextItem:{title:"\u8bb0\u4e00\u6b21 redis \u67e5\u8be2 \u5f02\u5e38",permalink:"/docusaurus/blog/2022/04/01/\u8bb0\u4e00\u6b21redis\u67e5\u8be2\u5f02\u5e38"}},s={authorsImageUrls:[void 0]},p=[{value:"\u6027\u80fd\u6307\u6807",id:"\u6027\u80fd\u6307\u6807",level:2},{value:"\u5185\u5b58\u6307\u6807",id:"\u5185\u5b58\u6307\u6807",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u5b66\u4e60\u603b\u7ed3\u4e0b redis \u5e38\u7528\u7684\u89c2\u6d4b\u6307\u6807\uff0c\u5305\u62ec\uff1a\u6027\u80fd\u6307\u6807\u3001\u5185\u5b58\u6307\u6807\u7b49\u3002"),(0,a.kt)("h2",{id:"\u6027\u80fd\u6307\u6807"},"\u6027\u80fd\u6307\u6807"),(0,a.kt)("p",null,"redis \u4f5c\u4e3a\u9ad8\u6027\u80fd\u7f13\u5b58\u670d\u52a1\uff0c\u5176\u6027\u80fd\u6307\u6807\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u89c2\u6d4b\u70b9\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"latency"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e73\u5747\u54cd\u5e94\u65f6\u95f4\u3002\u8be5\u6570\u636e\u65e0\u6cd5\u4ece info \u4e2d\u83b7\u53d6\uff0c\u9700\u8981\u4f7f\u7528 redis-cli \u52a0\u6307\u5b9a\u53c2\u6570\u3002eg\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"redis-cli --latency"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"instantaneous_ops_per_sec"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u79d2\u5904\u7406\u7684\u547d\u4ee4\u603b\u6570\uff0c\u53ef\u4ee5\u5728 info stats \u4e2d\u83b7\u53d6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hit rate"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u547d\u4e2d\u7387\u3002\u8be5\u503c\u65e0\u6cd5\u76f4\u63a5\u83b7\u53d6\uff0c\u9700\u8981\u901a\u8fc7\u8ba1\u7b97\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"keyspace_hits /\uff08keyspace_hits + keyspace_misses\uff09"))))),(0,a.kt)("h2",{id:"\u5185\u5b58\u6307\u6807"},"\u5185\u5b58\u6307\u6807"),(0,a.kt)("p",null,"redis \u4f5c\u4e3a\u5e38\u89c1\u5185\u5b58\u6570\u636e\u5e93\uff0c\u5176\u5185\u5b58\u6307\u6807\u4e5f\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u89c2\u6d4b\u70b9\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"used_memory"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u4f7f\u7528\u91cf\uff0c\u53ef\u4ee5\u5728 info memory \u4e2d\u83b7\u53d6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mem_fragmentation_ratio"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7cfb\u7edf\u5206\u914d\u7684\u5185\u5b58\u548c redis \u8bf7\u6c42\u7684\u5185\u5b58\u7684\u6bd4\u7387\u3002\u8ba1\u7b97\u65b9\u5f0f\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"mem_fragmentation_ratio = used_memory_rss / used_memory"),"\u3002\u8be5\u6307\u6807\u53ef\u4ee5\u7528\u4e8e\u89c2\u6d4b redis \u670d\u52a1\u5668\u7684\u5185\u5b58\u788e\u7247\u7387\u3002\u8be5\u503c\u5927\u4e8e1\uff0c\u8868\u793a\u5b58\u5728\u5185\u5b58\u788e\u7247\uff0c\u6bd4\u59821.5\uff0c\u5219\u8868\u793a50%\u662f\u5185\u5b58\u788e\u7247\u3002\u82e5\u8be5\u503c\u5c0f\u4e8e1\uff0c\u5219\u8868\u793aredis\u5185\u5b58\u5206\u914d\u8d85\u51fa\u4e86\u7269\u7406\u5185\u5b58\uff0c\u64cd\u4f5c\u7cfb\u7edf\u6b63\u5728\u8fdb\u884c\u5185\u5b58\u4ea4\u6362\u3002")))),(0,a.kt)("br",null),(0,a.kt)("admonition",{title:"\ud83d\udc47\ud83d\udc47\ud83d\udc47",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,a.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d")))}m.isMDXComponent=!0}}]);