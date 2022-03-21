"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8667],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8744:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"RAID \u72ec\u7acb\u78c1\u76d8\u5197\u4f59\u9635\u5217",authors:["czasg"],tags:["\u8ba1\u7b97\u673a\u57fa\u7840"]},p=void 0,l={permalink:"/docusaurus/blog/2021/12/24/raid\u521d\u8bc6",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2021/12-24-raid\u521d\u8bc6/index.md",source:"@site/blog/2021/12-24-raid\u521d\u8bc6/index.md",title:"RAID \u72ec\u7acb\u78c1\u76d8\u5197\u4f59\u9635\u5217",description:"\u72ec\u7acb\u78c1\u76d8\u5197\u4f59\u9635\u5217 RAID\uff08redundant array of independent disks\uff09\u6280\u672f",date:"2021-12-24T00:00:00.000Z",formattedDate:"December 24, 2021",tags:[{label:"\u8ba1\u7b97\u673a\u57fa\u7840",permalink:"/docusaurus/blog/tags/\u8ba1\u7b97\u673a\u57fa\u7840"}],readingTime:2.965,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"nginx \u914d\u7f6e\u8bf4\u660e",permalink:"/docusaurus/blog/2022/01/12/nginx\u914d\u7f6e\u8bf4\u660e"},nextItem:{title:"\u521d\u6b65\u4e86\u89e3 k8s \u8d44\u6e90\u914d\u989d",permalink:"/docusaurus/blog/2021/12/23/k8s\u8d44\u6e90\u914d\u989d"}},u={authorsImageUrls:[void 0]},s=[{value:"RAID 0",id:"raid-0",children:[],level:2},{value:"RAID 1",id:"raid-1",children:[],level:2},{value:"RAID 10",id:"raid-10",children:[],level:2},{value:"RAID 5",id:"raid-5",children:[],level:2},{value:"RAID 6",id:"raid-6",children:[],level:2}],d={toc:s};function m(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u72ec\u7acb\u78c1\u76d8\u5197\u4f59\u9635\u5217 RAID\uff08redundant array of independent disks\uff09\u6280\u672f",(0,i.kt)("br",{parentName:"p"}),"\n","\u662f\u5c06\u591a\u5757\u78c1\u76d8\u901a\u8fc7\u67d0\u79cd\u534f\u8bae\u7ba1\u7406\u8d77\u6765\uff0c\u4f7f\u5176\u5171\u540c\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u4ece\u800c\u63d0\u5347\u6027\u80fd\u3002"),(0,i.kt)("p",null,"\u5e38\u89c1 RAID \u6709\u4e94\u79cd\uff1aRAID 0\u3001RAID 1\u3001RAID 10\u3001RAID 5\u3001RAID 6\u3002"),(0,i.kt)("h2",{id:"raid-0"},"RAID 0"),(0,i.kt)("p",null,"RAID 0 \u662f\u5c06\u4e00\u4e2a\u6587\u4ef6\u7684\u6570\u636e\u5206\u6210 N \u7247\uff0c\u540c\u65f6\u5411 N \u4e2a\u78c1\u76d8\u5199\u5165\uff0c\u8fd9\u6837\u5355\u4e2a\u6587\u4ef6\u5c31\u53ef\u4ee5\u5b58\u50a8\u5728 N \u4e2a\u78c1\u76d8\u4e0a\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u7406\u8bba\u4e0a\u901a\u8fc7 RAID 0\uff0c\u5355\u6587\u4ef6\u5bb9\u91cf\u53ef\u4ee5\u63d0\u5347 N \u500d\uff0c\u8bfb\u5199\u901f\u5ea6\u4e5f\u53ef\u4ee5\u63d0\u5347 N \u500d\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u4f46\u662f RAID 0 \u53ef\u80fd\u63d0\u5347\u6587\u4ef6\u635f\u574f\u7684\u98ce\u9669\uff0c\u56e0\u4e3a\u4efb\u4f55\u4e00\u4e2a\u78c1\u76d8\u635f\u574f\uff0c\u90fd\u5c06\u5bfc\u81f4\u6570\u636e\u4e0d\u5b8c\u6574\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:n(1828).Z})),(0,i.kt)("h2",{id:"raid-1"},"RAID 1"),(0,i.kt)("p",null,"RAID 1 \u662f\u540c\u65f6\u5f80\u4e24\u5757\u78c1\u76d8\u4e0a\u5199\u6570\u636e\uff0c\u5176\u4e2d\u4e00\u5757\u7528\u6237\u6570\u636e\u5907\u4efd\u3002\u8fd9\u6837\u53ea\u8981\u4e0d\u662f\u78c1\u76d8\u5168\u90e8\u635f\u574f\uff0c\u90a3\u4e48\u6587\u4ef6\u6570\u636e\u5c31\u4e0d\u4f1a\u4e22\u5931\uff0c\u6587\u4ef6\u7684\u53ef\u7528\u6027\u5927\u5927\u63d0\u5347\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u4f46\u662f\u53ef\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u5c31\u964d\u4f4e\u4e00\u534a\u4e86\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:n(6899).Z})),(0,i.kt)("h2",{id:"raid-10"},"RAID 10"),(0,i.kt)("p",null,"RAID 10 \u662f\u7ed3\u5408\u4e86 RAID 1 \u548c RAID 0\uff0c\u5c06\u591a\u5757\u786c\u76d8\u8fdb\u884c\u4e24\u4e24\u5206\u7ec4\u3002\u6587\u4ef6\u6570\u636e\u88ab\u5206\u6210\u4e86 N \u4efd\uff0c\u6bcf\u4e2a\u7ec4\u5199\u5165\u4e00\u4efd\uff0c\u5e76\u4e14\u6bcf\u4e2a\u5206\u7ec4\u7684\u6570\u636e\u90fd\u6709\u4e00\u4efd\u5907\u4efd\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u8fd9\u6837\u4e0d\u4ec5\u63d0\u5347\u4e86\u6587\u4ef6\u5b58\u50a8\u7684\u5bb9\u91cf\u548c\u6027\u80fd\uff0c\u4e5f\u63d0\u9ad8\u4e86\u6587\u4ef6\u7684\u53ef\u7528\u6027\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u4f46\u4e0d\u53ef\u907f\u514d\u7684\u548c RAID 1 \u4e00\u6837\uff0c\u78c1\u76d8\u6574\u4f53\u5b58\u50a8\u5229\u7528\u53ea\u6709 50% \u4e86\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:n(8929).Z})),(0,i.kt)("h2",{id:"raid-5"},"RAID 5"),(0,i.kt)("p",null,"RAID 5 \u9488\u5bf9 RAID 1 \u548c RAID 10 \u4e2d\u78c1\u76d8\u6d6a\u8d39\u7684\u60c5\u51b5\u8fdb\u884c\u4e86\u4f18\u5316\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5c06\u6570\u636e\u5206\u6210 N - 1 \u4efd\uff0c\u518d\u5229\u7528\u8fd9 N - 1 \u4efd\u6570\u636e\u8fdb\u884c\u4f4d\u8fd0\u7b97\uff0c\u8ba1\u7b97\u4e00\u7247\u6821\u9a8c\u6570\u636e\uff0c\u7136\u540e\u5c06\u8fd9 N \u7247\u6570\u636e\u5199\u5165 N \u4e2a\u78c1\u76d8\u4e2d\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u8fd9\u6837\u4efb\u4f55\u4e00\u4e2a\u78c1\u76d8\u635f\u574f\uff0c\u90fd\u53ef\u4ee5\u5229\u7528\u6821\u9a8c\u6570\u636e\u8fdb\u884c\u6062\u590d\uff0c\u78c1\u76d8\u5229\u7528\u7387\u4e5f\u63d0\u9ad8\u5230 (N-1)/N  "),(0,i.kt)("p",null,"\u867d\u7136 RAID 5 \u53ef\u4ee5\u89e3\u51b3\u4e00\u5757\u78c1\u76d8\u635f\u574f\u540e\u4fee\u590d\u7684\u573a\u666f\uff0c\u4f46\u662f\u4e24\u5757\u78c1\u76d8\u635f\u574f\uff0c\u5c31\u4ecd\u7136\u4f1a\u51fa\u73b0\u6570\u636e\u4e22\u5931\u7684\u60c5\u51b5\u3002   "),(0,i.kt)("p",null,"\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\uff0c\u4f7f\u7528\u6700\u591a\u7684\u8fd8\u662f RAID 5."),(0,i.kt)("h2",{id:"raid-6"},"RAID 6"),(0,i.kt)("p",null,"\u9488\u5bf9 RAID 5 \u4e2d\u53ef\u80fd\u51fa\u73b0\u7684\u4e24\u5757\u78c1\u76d8\u635f\u574f\u7684\u573a\u666f\uff0c\u5f15\u5165\u4e86\u4e24\u79cd\u4f4d\u8fd0\u7b97\u8ba1\u7b97\u548c\u5b58\u50a8\u6570\u636e\uff0c\u8fd9\u6837\u5373\u4f7f\u4e24\u5757\u78c1\u76d8\u635f\u574f\uff0c\u4ecd\u7136\u662f\u53ef\u4ee5\u5f97\u5230\u4fee\u590d\u7684\u3002"),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    "))))}m.isMDXComponent=!0},1828:function(e,t,n){t.Z=n.p+"assets/images/raid-0-a5168c5847ccc32c497a3889f13dca23.png"},6899:function(e,t,n){t.Z=n.p+"assets/images/raid-1-c505b2458f60664dc52a52d9e8c94cee.png"},8929:function(e,t,n){t.Z=n.p+"assets/images/raid-10-32305ed150f7861e3b5b1b67d601ee9b.png"}}]);