"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9103],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"gRPC \u8d1f\u8f7d\u5747\u8861",authors:["czasg"],tags:["grpc"]},p=void 0,c={permalink:"/docusaurus/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2021/12-13-gRPC\u8d1f\u8f7d\u5747\u8861/index.md",source:"@site/blog/2021/12-13-gRPC\u8d1f\u8f7d\u5747\u8861/index.md",title:"gRPC \u8d1f\u8f7d\u5747\u8861",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 k8s \u73af\u5883\u4e0b gRPC \u670d\u52a1\u5728\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u65f6\u9047\u5230\u7684\u95ee\u9898\u548c\u89e3\u51b3\u601d\u8def\u3002",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"grpc",permalink:"/docusaurus/blog/tags/grpc"}],readingTime:6.505,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"\u5b57\u7b26\u7f16\u7801",permalink:"/docusaurus/blog/2021/12/15/\u5b57\u7b26\u7f16\u7801"},nextItem:{title:"gRPC \u539f\u7406\u53ca\u4f7f\u7528",permalink:"/docusaurus/blog/2021/12/12/gRPC\u539f\u7406"}},s={authorsImageUrls:[void 0]},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[],level:2},{value:"gRPC \u8d1f\u8f7d\u5747\u8861 - \u7528\u6237\u4fa7",id:"grpc-\u8d1f\u8f7d\u5747\u8861---\u7528\u6237\u4fa7",children:[],level:2},{value:"gRPC \u8d1f\u8f7d\u5747\u8861 - \u670d\u52a1\u4fa7",id:"grpc-\u8d1f\u8f7d\u5747\u8861---\u670d\u52a1\u4fa7",children:[],level:2},{value:"\u65b9\u6848\u9009\u62e9",id:"\u65b9\u6848\u9009\u62e9",children:[],level:2}],d={toc:m};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 k8s \u73af\u5883\u4e0b gRPC \u670d\u52a1\u5728\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u65f6\u9047\u5230\u7684\u95ee\u9898\u548c\u89e3\u51b3\u601d\u8def\u3002"),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"\u6211\u4eec\u7684 gRPC \u5e94\u7528\u6700\u521d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"DaemonSet")," \u7c7b\u578b\u7684\u8d44\u6e90\u5bf9\u8c61\u90e8\u7f72\u5728 k8s \u4e0a\u3002\u901a\u8fc7\u6807\u7b7e\u914d\u7f6e\uff0c\u4f7f\u5f97\u5355\u53f0 Node \u8282\u70b9\u4ec5\u90e8\u7f72\u4e00\u4e2a pod \u5e94\u7528\u3002\n\u800c gRPC \u5e94\u7528\u5219\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort Service")," \u7684\u65b9\u5f0f\u5bf9\u5916\u66b4\u9732\u670d\u52a1\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\u76f4\u63a5\u5bf9\u5916\u66b4\u9732\u56fa\u5b9a IP \u63d0\u4f9b\u670d\u52a1\uff0c\u4e1a\u52a1\u6d41\u91cf\u5168\u90e8\u6253\u5230\u5355\u53f0\u5bbf\u4e3b\u673a\u4e0a\uff0c\u6240\u4ee5\u4e5f\u4e0d\u5b58\u5728\u8d1f\u8f7d\u5747\u8861\u7684\u8bf4\u6cd5\u3002"),(0,i.kt)("p",null,"\u968f\u7740\u4e1a\u52a1\u538b\u529b\u9010\u6e10\u589e\u5927\uff0c\u5355\u70b9\u63d0\u4f9b\u7684\u80fd\u529b\u5df2\u9010\u6e10\u8fbe\u5230\u6781\u9650\uff0c\u6211\u4eec\u91c7\u7528\u6c34\u5e73\u62d3\u5c55\u7684\u65b9\u5f0f\uff0c\u90e8\u7f72\u4e86\u591a\u53f0\u5355\u8282\u70b9\u670d\u52a1\u3002\u4e5f\u7b97\u6682\u65f6\u6297\u4f4f\u4e86\u538b\u529b\u3002\u4f46\u968f\u540e\u7684\u66b4\u9732\u7684\u95ee\u9898\uff0c\u4e5f\u8ba9\u6211\u4eec\u88ab\u8feb\u9009\u62e9\u4e86\u91cd\u6784\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e3a\u4ec0\u4e48\u9009\u62e9\u91cd\u6784")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e1a\u52a1\u6301\u7eed\u62d3\u5c55\uff0c\u5f15\u5165\u591a\u8282\u70b9\u7684\u95ee\u9898\u4e5f\u9010\u6e10\u66b4\u9732\u51fa\u6765\uff0c\u5f53\u524d\u670d\u52a1\u67b6\u6784\u4e0b\uff0c\u591a\u8282\u70b9\u4e4b\u95f4\u7684\u6570\u636e\u4e00\u81f4\u6027\u5b8c\u5168\u4e0d\u80fd\u4fdd\u8bc1\uff0c\u4eba\u5de5\u8fd0\u7ef4\u7b80\u76f4\u4e0d\u8981\u592a\u6076\u5fc3\uff0c\u65e0\u5948\u53ea\u80fd\u91cd\u6784\u3002\u8fd9\u91cc\u6211\u4eec\u4e0d\u9488\u5bf9\u6b64\u5c55\u5f00\u3002  "))),(0,i.kt)("p",null,"\u670d\u52a1\u6539\u9020\u5347\u7ea7\u5b8c\u6bd5\u540e\uff0c\u5b8c\u5168\u517c\u5bb9\u5386\u53f2 gRPC \u63a5\u53e3\uff0c\u5728 k8s \u7684\u914d\u7f6e\u4e0a\u4e5f\u6709\u90e8\u5206\u6539\u52a8\uff0c\u4ee5\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"DaemontSet")," \u8d44\u6e90\u53d8\u66f4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," \u8d44\u6e90\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort Service")," \u8d44\u6e90\u5219\u53d8\u66f4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP Service")," \u8d44\u6e90\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u9879\u76ee\u6b63\u5f0f\u8fdb\u5165\u5230\u4e86\u63d0\u6d4b\u9636\u6bb5\u3002"),(0,i.kt)("p",null,"\u529f\u80fd\u4e0a\u57fa\u672c\u6ca1\u6709\u592a\u5927\u7684\u95ee\u9898\uff0c\u6bd5\u7adf\u5f15\u7528\u4e86\u76f8\u540c\u7684 gRPC \u63a5\u53e3\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u95ee\u9898\u4e3b\u8981\u51fa\u73b0\u5728\u4e86\u8d1f\u8f7d\u5747\u8861\u4e0a\uff0c\u5728\u591a\u526f\u672c\u7684\u573a\u666f\u4e0b\uff0c\u53d1\u751f\u4e86\u4e25\u91cd\u7684\u6d41\u91cf\u503e\u659c\uff0c\u5177\u4f53\u8868\u73b0\u5c31\u662f\u67d0\u4e2a\u526f\u672c\u7684\u538b\u529b\u975e\u5e38\u9ad8\uff0c\u800c\u5176\u4ed6\u526f\u672c\u7684\u538b\u529b\u5f88\u5c0f\uff0c\u8fdb\u800c\u5bfc\u81f4\u670d\u52a1\u6574\u4f53\u5f02\u5e38\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u7b80\u5355\u5206\u6790")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"gRPC \u662f\u57fa\u4e8e HTTP2.0 \u5b9e\u73b0\u7684\u957f\u8fde\u63a5\uff0c\u4e14\u9ed8\u8ba4\u6ca1\u6709\u8d85\u65f6\uff0c\u8fd9\u79cd\u957f\u8fde\u63a5\u80fd\u591f\u5927\u91cf\u51cf\u5c11 TCP \u8fde\u63a5\u7ba1\u7406\u6240\u5e26\u6765\u7684\u5f00\u9500\uff0c\u4f46\u4e5f\u7834\u574f\u4e86\u6807\u51c6\u7684\u8fde\u63a5\u7ea7\u7684\u8d1f\u8f7d\u5747\u8861\u3002\u56e0\u4e3a\u8fde\u63a5\u5df2\u7ecf\u5efa\u7acb\u4e14\u4e0d\u65ad\u5f00\uff0c\u6240\u4ee5\u4e5f\u65e0\u6cd5\u518d\u8fdb\u4e00\u6b65\u8d1f\u8f7d\u5747\u8861\u4e86\u3002  "),(0,i.kt)("p",{parentName:"div"},"\u90a3\u4e48\u518d\u56de\u5230\u4e0a\u8ff0\u573a\u666f\uff0c\u663e\u7136\u5c31\u662f\u5ba2\u6237\u7aef\u4e0e\u67d0\u4e2a\u5177\u4f53\u7684\u670d\u52a1\u5efa\u7acb\u4e86\u957f\u8fde\u63a5\uff0c\u800c\u8fde\u63a5\u53c8\u4e0d\u4f1a\u65ad\u5f00\uff0c\u4ece\u800c\u5bfc\u81f4\u4e86\u6301\u7eed\u7684\u6d41\u91cf\u503e\u659c\u95ee\u9898\u3002"))),(0,i.kt)("p",null,"\u9009\u62e9\u6709\u6548\u7684 gRPC \u8d1f\u8f7d\u5747\u8861\u65b9\u6848\uff0c\u662f\u89e3\u51b3\u6211\u4eec\u5f53\u524d\u95ee\u9898\u7684\u6838\u5fc3\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u89e3\u51b3\u7684\u65b9\u6cd5\u6709\u591a\u79cd\uff0c\u6211\u4eec\u4e3b\u8981\u5c06\u5176\u5206\u4e3a\uff1a  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u4fa7\u7684\u8d1f\u8f7d\u5747\u8861"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u4fa7\u7684\u8d1f\u8f7d\u5747\u8861")),(0,i.kt)("h2",{id:"grpc-\u8d1f\u8f7d\u5747\u8861---\u7528\u6237\u4fa7"},"gRPC \u8d1f\u8f7d\u5747\u8861 - \u7528\u6237\u4fa7"),(0,i.kt)("p",null,"\u7528\u6237\u4fa7\u7684 gRPC \u8d1f\u8f7d\u5747\u8861\uff0c\u662f\u901a\u8fc7 DNS\uff0c\u4f7f\u7528\u6237\u89e3\u6790\u51fa\u5168\u90e8\u7684 gRPC \u670d\u52a1\u5730\u5740\uff0c\u7136\u540e\u7528\u6237\u81ea\u5df1\u5b9e\u73b0\u8d1f\u8f7d\u7b56\u7565\u3002\n\u6700\u7b80\u5355\u7684\u7b56\u7565\u5c31\u662f\u4e0e\u6bcf\u4e2a\u670d\u52a1\u5efa\u7acb gRPC \u8fde\u63a5\uff0c\u7136\u540e\u8f6e\u8be2\u8bbf\u95ee\uff0c\u5b9e\u73b0 rr \u8d1f\u8f7d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9161).Z})),(0,i.kt)("p",null,"\u8be5\u65b9\u6848\u5b9e\u65bd\u8d77\u6765\u6bd4\u8f83\u5bb9\u6613\uff0c\u4f46\u5bf9\u4e8e\u7528\u6237\u4fa7\u6709\u4e00\u5b9a\u7684\u8981\u6c42\u3002\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b89\u5168\u65b9\u9762\uff0c\u8981\u8003\u8651\u7528\u6237\u7684\u53ef\u9760\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u7b56\u7565\uff0c\u89e3\u6790 DNS \u867d\u6709\u73b0\u6210\u7684\u65b9\u6848\uff0c\u4f46\u662f\u5e38\u89c4\u65b9\u6848\u4e00\u822c\u65e0\u6cd5\u63a2\u77e5\u5230\u540e\u7eed\u65b0\u521b\u5efa\u7684\u670d\u52a1\uff0c\u6240\u4ee5\u9700\u8981\u8bbe\u8ba1\u66f4\u65b0\u7b56\u7565\u3002")),(0,i.kt)("h2",{id:"grpc-\u8d1f\u8f7d\u5747\u8861---\u670d\u52a1\u4fa7"},"gRPC \u8d1f\u8f7d\u5747\u8861 - \u670d\u52a1\u4fa7"),(0,i.kt)("p",null,"\u670d\u52a1\u4fa7\u7684 gRPC \u8d1f\u8f7d\u5747\u8861\uff0c\u9700\u8981\u5f15\u5165\u4e00\u4e2a\u8d1f\u8f7d\u5747\u8861\u4ee3\u7406\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Load Balancer"),"\uff0c\n\u7528\u6237\u5411 LB \u53d1\u8d77 RPC \u8bf7\u6c42\uff0c\u7136\u540e\u7531\u8be5 LB \u5c06 RPC \u5206\u914d\u5230\u4e00\u4e2a\u53ef\u7528\u7684\u540e\u7aef\u670d\u52a1\u5668\u4e0a\uff0c\n\u7531\u8be5\u670d\u52a1\u5668\u63d0\u4f9b gRPC \u670d\u52a1\uff0c\u5e76\u5c06\u8d1f\u8f7d\u60c5\u51b5\u62a5\u544a\u7ed9 LB\uff0c\u8fdb\u4e00\u6b65\u8865\u5168 LB \u7684\u8d1f\u8f7d\u4fe1\u606f\u3002\n",(0,i.kt)("img",{src:n(126).Z})),(0,i.kt)("p",null,"\u5728\u8be5\u65b9\u6848\u4e2d\uff0c\u8d1f\u8f7d\u5747\u8861\u7531 LB \u7edf\u4e00\u7ba1\u7406\uff0c\u6709\u4e00\u5b9a\u7684\u5b9e\u65bd\u96be\u5ea6\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u9664\u975e\u80fd\u627e\u5230\u9ad8 star \u7684\u5f00\u6e90\u9879\u76ee\uff0c\u4e0d\u7136\u5f00\u53d1\u4e0e\u8fd0\u7ef4\u5c31\u662f\u4e00\u7b14\u4e0d\u5c0f\u7684\u6295\u5165\u3002"),(0,i.kt)("h2",{id:"\u65b9\u6848\u9009\u62e9"},"\u65b9\u6848\u9009\u62e9"),(0,i.kt)("p",null,"\u8003\u8651\u5230\u5b9e\u65bd\u96be\u5ea6\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u7528\u6237\u4fa7\u7684\u8d1f\u8f7d\u5747\u8861\u65b9\u5f0f\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u9996\u5148\u8981\u89e3\u51b3 DNS \u7684\u89e3\u6790\u4e0e\u8d1f\u8f7d"),"\uff0c\u8fd9\u4e00\u5757\uff0c\u5b98\u65b9\u5df2\u7ecf\u5c01\u88c5\u4e86 gRPC SDK\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u5347\u7ea7 SDK \u5373\u53ef\u5b9e\u73b0\u8be5\u529f\u80fd\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5176\u6b21\u5c31\u662f\u670d\u52a1\u53d1\u73b0\u8fd9\u4e00\u5757\u4e86"),"\u3002\u89e3\u51b3\u7684\u65b9\u6848\u4e5f\u6709\u4e24\u79cd\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","1\u3001\u670d\u52a1\u7aef\u5b9e\u73b0\uff1aMaxConnectionAge\u3002\u5b9a\u671f\u65ad\u5f00\u8fde\u63a5\uff0c\u4ece\u800c\u89e6\u53d1\u5ba2\u6237\u7aef\u91cd\u89e3\u6790\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","2\u3001\u5ba2\u6237\u7aef\u5b9e\u73b0\uff1aKubeResolver\u3002\u5ba2\u6237\u7aef\u63a5\u5165 k8s api \u4ece\u800c\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u3002   "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"MaxConnectionAge")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"MaxConnectionAge \u662f gRPC \u670d\u52a1\u7aef\u7684\u53c2\u6570\uff0c\u7528\u4e8e\u6307\u5b9a\u957f\u8fde\u63a5\u6700\u5927\u4fdd\u6301\u65f6\u95f4\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u914d\u7f6e\u8be5\u53c2\u6570\u4f1a\u4f7f\u5f97\u957f\u8fde\u63a5\u53d8\u6210\u201c\u77ed\u201d\u8fde\u63a5\uff0c\u6545\u6027\u80fd\u4f1a\u6709\u4e00\u5b9a\u7684\u964d\u4f4e\u3002"),(0,i.kt)("p",{parentName:"div"},"\u8be5\u65b9\u6848\u7684\u539f\u7406\u662f\uff0c\u901a\u8fc7\u5b9a\u671f\u91ca\u653e\u8fde\u63a5\uff0c\u4f7f\u5f97\u5ba2\u6237\u7aef\u91cd\u65b0\u89e3\u6790 DNS \u83b7\u53d6\u6700\u65b0\u7684\u670d\u52a1\u5730\u5740\u3002"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"KubeResolver")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8be5\u65b9\u6848\u7684\u539f\u7406\u662f\u901a\u8fc7\u76d1\u542c k8s \u7684 api \u8d44\u6e90\u72b6\u6001\uff0c\u5b9e\u65f6\u83b7\u53d6 gRPC \u670d\u52a1\u8d44\u6e90\u4fe1\u606f\uff0c\u4ece\u800c\u5b9e\u73b0\u68c0\u6d4b\u66f4\u65b0\u3002"))),(0,i.kt)("p",null,"\u7efc\u5408\u8003\u8651\u540e\uff0c\u6700\u7ec8\u9009\u62e9\u4e86 MaxConnectionAge \u65b9\u6848\uff0c\u56e0\u4e3a\u6b64\u65b9\u6848\u4ec5\u4ec5\u901a\u8fc7\u9002\u914d\u53c2\u6570\u5c31\u53ef\u4ee5\u5b8c\u6210\u9884\u671f\u529f\u80fd\uff0c\u867d\u7136\u7565\u663e\u50f5\u786c\uff0c\u4f46\u5b9e\u9645\u4e0a\u6548\u679c\u8fd8\u4e0d\u9519\u3002"),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    "))))}u.isMDXComponent=!0},9161:function(e,t,n){t.Z=n.p+"assets/images/client-load-balancer-1a9f6252b1ac5acc0894bbbcf73094f8.png"},126:function(e,t,n){t.Z=n.p+"assets/images/server-load-balancer-6f95677aa715fccbc4fff53fb1fb59ea.png"}}]);