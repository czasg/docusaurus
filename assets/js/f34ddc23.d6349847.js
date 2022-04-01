"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9887],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},385:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={title:"\u8bb0\u4e00\u6b21 redis \u67e5\u8be2 \u5f02\u5e38",authors:["czasg"],tags:["redis"]},s=void 0,c={permalink:"/docusaurus/blog/2022/04/01/\u8bb0\u4e00\u6b21redis\u67e5\u8be2\u5f02\u5e38",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/04-01-\u8bb0\u4e00\u6b21redis\u67e5\u8be2\u5f02\u5e38/index.md",source:"@site/blog/2022/04-01-\u8bb0\u4e00\u6b21redis\u67e5\u8be2\u5f02\u5e38/index.md",title:"\u8bb0\u4e00\u6b21 redis \u67e5\u8be2 \u5f02\u5e38",description:"\u4eca\u5929\u9047\u5230\u4e00\u4e2a\u8be1\u5f02\u7684\u4e8b\u60c5\uff0c\u6709\u4e00\u4e2a\u57fa\u4e8e redis \u63d0\u4f9b\u9ad8\u6027\u80fd\u67e5\u8be2\u7684\u670d\u52a1\uff0c\u5728\u975e\u9ad8\u5cf0\u671f\u65f6\u5c45\u7136\u5927\u91cf\u62a5\u9519\u3002",date:"2022-04-01T00:00:00.000Z",formattedDate:"April 1, 2022",tags:[{label:"redis",permalink:"/docusaurus/blog/tags/redis"}],readingTime:2.405,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],nextItem:{title:"golang \u9009\u9879\u6a21\u5f0f",permalink:"/docusaurus/blog/2022/03/28/golang\u9009\u9879\u6a21\u5f0f"}},l={authorsImageUrls:[void 0]},u=[{value:"\u9519\u8bef\u5206\u6790",id:"\u9519\u8bef\u5206\u6790",children:[],level:2},{value:"\u95ee\u9898\u5206\u6790",id:"\u95ee\u9898\u5206\u6790",children:[],level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[],level:2}],d={toc:u};function m(e){var t=e.components,p=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4eca\u5929\u9047\u5230\u4e00\u4e2a\u8be1\u5f02\u7684\u4e8b\u60c5\uff0c\u6709\u4e00\u4e2a\u57fa\u4e8e redis \u63d0\u4f9b\u9ad8\u6027\u80fd\u67e5\u8be2\u7684\u670d\u52a1\uff0c\u5728\u975e\u9ad8\u5cf0\u671f\u65f6\u5c45\u7136\u5927\u91cf\u62a5\u9519\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u4e3a\u4ec0\u4e48\u8bf4\u8be1\u5f02\u5462\uff0c\u56e0\u4e3a\u62a5\u9519\u5185\u5bb9\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"redis: connection pool timeout"),"\u3002\u800c\u8fd9\u4e2a\u670d\u52a1\u7684\u67e5\u8be2\u573a\u666f\u53ca\u5176\u7b80\u5355\uff0c\u53ea\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"mget")," \u4e24\u79cd\uff0c\u62a5\u8fd9\u4e2a\u9519\u5c31\u610f\u5473\u7740 redis \u67e5\u8be2\u6027\u80fd\u4e0d\u8db3\uff1f",(0,i.kt)("br",{parentName:"p"}),"\n","\u672c\u6587\u8bb0\u5f55\u4e00\u4e0b\u6392\u67e5\u95ee\u9898\u7684\u8fc7\u7a0b\u3002",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:n(1948).Z})),(0,i.kt)("h2",{id:"\u9519\u8bef\u5206\u6790"},"\u9519\u8bef\u5206\u6790"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"redis: connection pool timeout")," \u662f\u8fde\u63a5\u6c60\u8d85\u65f6\uff0c\u8fd9\u79cd\u95ee\u9898\u53d1\u751f\u7684\u573a\u666f\u4e00\u822c\u662f\u7531\u4e8e\u67d0\u4e2a\u64cd\u4f5c\u8fc7\u4e8e\u8017\u65f6\uff0c\u5bfc\u81f4 redis \u963b\u585e\uff0c\u4ece\u800c\u5bfc\u81f4\u5176\u4ed6\u67e5\u8be2\u62a5\u9519\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u4f46\u5728\u8fd9\u4e2a\u573a\u666f\u4e2d\uff0c\u8fd9\u79cd\u5206\u6790\u4e0d\u9002\u7528\uff0c\u56e0\u4e3a\u64cd\u4f5c\u53ea\u6709\u7b80\u5355\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," \u548c \u5c0f\u91cf\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"mget"),"\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5177\u4f53\u95ee\u9898\u9700\u8981\u8fdb\u4e00\u6b65\u5206\u6790\u3002"),(0,i.kt)("h2",{id:"\u95ee\u9898\u5206\u6790"},"\u95ee\u9898\u5206\u6790"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u670d\u52a1\u5f53\u65f6\u7684\u5e76\u53d1\u538b\u529b\u5728 3w QPS\u5de6\u53f3\uff0credis \u4e0d\u5e94\u8be5\u5b58\u5728\u6297\u4e0d\u4f4f\u7684\u95ee\u9898\u3002\u7ffb\u4e86\u4e0b\u62a5\u9519\u65f6\u95f4\u70b9\u7684\u4e0a\u4e0b\u6587\u65e5\u5fd7\uff0c\u786e\u5b9e\u53d1\u73b0\u4e86\u4e00\u4e9b\u95ee\u9898\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:n(1393).Z}),(0,i.kt)("br",{parentName:"p"}),"\n","\u7bad\u5934\u65f6\u95f4\u6bb5\uff0c\u5373\u572842\u5206\u523044\u5206\u4e4b\u95f4\uff0c\u521a\u597d\u5c31\u662f redis \u67e5\u8be2\u62a5\u9519\u7684\u65f6\u95f4\u6bb5\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u8bf4\u660e\u5c31\u662f42\u5206\u7684\u540c\u6b65\u884c\u4e3a\uff0c\u5f71\u54cd\u5230\u4e86 redis \u7684\u67e5\u8be2\u6027\u80fd\u3002   "),(0,i.kt)("p",null,"\u901a\u8fc7\u6392\u67e5\u53d1\u73b0\uff0c\u8fd9\u4e2a\u670d\u52a1\u6709\u70b9\u7279\u6b8a\uff0c\u662f\u4ee5 daemon \u7684\u5f62\u5f0f\u90e8\u7f72\u5728 k8s \u4e0a\uff0c\u4e14\u5355 pod \u72ec\u5360\u8282\u70b9\u3002pod \u5185\u53c8\u5305\u542b redis \u548c postgres \u7b49\u591a\u4e2a\u670d\u52a1\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u8fdb\u4e00\u6b65\u6392\u67e5\u4e86\u89e3\u5230\uff0c\u56e0\u4e3a\u8d44\u6e90\u6709\u9650\uff0c\u6240\u4ee5\u6ca1\u52a0\u8d44\u6e90\u914d\u989d\uff0c\u907f\u514d\u670d\u52a1\u90e8\u7f72\u4e0d\u4e0a\u53bb\u3002\u56e0\u6b64\uff0c\u5b58\u5728\u67d0\u65f6\u523b\u7684",(0,i.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u503e\u659c"),"\u5bfc\u81f4\u5176\u4f59\u670d\u52a1\u4e0d\u53ef\u7528\u3002"),(0,i.kt)("p",null,"\u8fd9\u7c7b\u95ee\u9898\u5176\u5b9e\u5728\u7269\u7406\u673a\u4e0a\u7ecf\u5e38\u53d1\u751f\uff0c\u6ca1\u60f3\u5230\u8fd9\u6b21\u6362\u4e86\u79cd\u5f62\u5f0f\u53d1\u751f\u5728\u4e86 k8s \u4e0a\u9762\u3002    "),(0,i.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"1\u3001\u589e\u52a0\u673a\u5668\u8d44\u6e90\uff0c\u5efa\u8bae 4c \u5347\u7ea7 8c\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","2\u3001\u589e\u52a0\u8d44\u6e90\u914d\u989d\u3002   "),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,i.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d"))))}m.isMDXComponent=!0},1948:function(e,t,n){t.Z=n.p+"assets/images/1.1-4bc31816ef539655bfe098ea5f783376.png"},1393:function(e,t,n){t.Z=n.p+"assets/images/1.2-de83c2983f5b33486ca20d81f846071f.png"}}]);