"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7014],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,k=c["".concat(u,".").concat(d)]||c[d]||p[d]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2529:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return m},assets:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"\u521d\u6b65\u4e86\u89e3 k8s \u8d44\u6e90\u914d\u989d",authors:["czasg"],tags:["k8s"]},u=void 0,m={permalink:"/docusaurus/blog/2021/12/23/k8s\u8d44\u6e90\u914d\u989d",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2021/12-23-k8s\u8d44\u6e90\u914d\u989d/index.md",source:"@site/blog/2021/12-23-k8s\u8d44\u6e90\u914d\u989d/index.md",title:"\u521d\u6b65\u4e86\u89e3 k8s \u8d44\u6e90\u914d\u989d",description:"\x3c!--",date:"2021-12-23T00:00:00.000Z",formattedDate:"December 23, 2021",tags:[{label:"k8s",permalink:"/docusaurus/blog/tags/k-8-s"}],readingTime:3.64,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"RAID \u72ec\u7acb\u78c1\u76d8\u5197\u4f59\u9635\u5217",permalink:"/docusaurus/blog/2021/12/24/raid\u521d\u8bc6"},nextItem:{title:"\u8bb0\u4e00\u6b21 golang cmd \u6a21\u5757\u5bfc\u81f4\u7684\u8fdb\u7a0b\u6cc4\u6f0f",permalink:"/docusaurus/blog/2021/12/22/golang-cmd\u6a21\u5757\u5bfc\u81f4\u7684\u8fdb\u7a0b\u6cc4\u6f0f"}},s={authorsImageUrls:[void 0]},p=[{value:"\u8d44\u6e90\u914d\u989d ResourceQuota",id:"\u8d44\u6e90\u914d\u989d-resourcequota",children:[],level:2},{value:"requests/limits",id:"requestslimits",children:[],level:2},{value:"\u5e38\u4f7f\u7528\u7684\u914d\u989d\u7c7b\u578b",id:"\u5e38\u4f7f\u7528\u7684\u914d\u989d\u7c7b\u578b",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7528\u4e00\u53f0\u670d\u52a1\u5668\u540c\u65f6\u8dd1\u591a\u4e2a\u4efb\u52a1\u65f6\uff0c\u6700\u5e38\u53d1\u751f\u7684\u4e8b\u6545\u5c31\u662f\u8d44\u6e90\u62a2\u5360\u95ee\u9898\u3002\u6bd4\u5982\u7aef\u53e3\u3001cpu\u3001\u5185\u5b58\u3001\u5b58\u50a8\u7b49\u90fd\u53ef\u80fd\u4f1a\u53d1\u751f\u51b2\u7a81\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u800c k8s \u4f5c\u4e3a\u5bb9\u5668\u7f16\u6392\u5de5\u5177\uff0c\u5219\u63d0\u4f9b\u4e86\u8d44\u6e90\u914d\u989d\u6765\u907f\u514d\u8fd9\u7c7b\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u8d44\u6e90\u914d\u989d-resourcequota"},"\u8d44\u6e90\u914d\u989d ResourceQuota"),(0,l.kt)("p",null,"\u8d44\u6e90\u914d\u989d\u7528\u4e8e\u58f0\u660e\u547d\u540d\u7a7a\u95f4\u4e2d\u6240\u6709 pod \u7684\u6700\u7ec8\u8d44\u6e90\u60c5\u51b5\uff0c\u4e00\u65e6\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528\u4e86 ResourceQuota\uff0c\u5219\u90e8\u7f72 pod \u65f6\u5fc5\u987b\u8bbe\u5b9a\u8bf7\u6c42\u503c\uff08request\uff09\u548c\u7ea6\u675f\u503c\uff08limit\uff09\uff0c\u5426\u5219\u914d\u989d\u7cfb\u7edf\u5c06\u62d2\u7edd pod \u7684\u521b\u5efa\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u8d44\u6e90\u914d\u989d\u5728 k8s \u96c6\u7fa4\u4e2d\u9ed8\u8ba4\u662f\u652f\u6301\u7684\uff0c\u5f53\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u5b58\u5728\u4e00\u4e2a ResourceQuota \u5bf9\u8c61\u65f6\uff0c\u8be5\u547d\u540d\u7a7a\u95f4\u7684\u8d44\u6e90\u914d\u989d\u5c31\u662f\u5f00\u542f\u7684\u3002   "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="\u8d44\u6e90\u914d\u989d\uff1aResourceQuota.yaml"',title:'"\u8d44\u6e90\u914d\u989d\uff1aResourceQuota.yaml"'},'apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: demo\nspec:\n  hard:\n    requests.cpu: "1"\n    requests.memory: 1Gi\n    limits.cpu: "2"\n    limits.memory: 2Gi\n')),(0,l.kt)("p",null,"\u6b64\u914d\u7f6e\u8868\u793a\uff1a "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5bb9\u5668\u5fc5\u987b\u6709 memory\u3001cpu \u7684\u8bf7\u6c42\u548c\u9650\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u5bb9\u5668\u7684 memory \u8bf7\u6c42\u603b\u548c\u4e0d\u80fd\u8d85\u8fc7 1 GiB\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u5bb9\u5668\u7684 memory \u9650\u5236\u603b\u548c\u4e0d\u80fd\u8d85\u8fc7 2 GiB\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u5bb9\u5668\u7684 cpu \u8bf7\u6c42\u603b\u548c\u4e0d\u80fd\u8d85\u8fc7 1 cpu\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u5bb9\u5668\u7684 cpu \u9650\u5236\u603b\u548c\u4e0d\u80fd\u8d85\u8fc7 2 cpu\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="\u90e8\u7f72\u793a\u4f8b\uff1apod.yaml"',title:'"\u90e8\u7f72\u793a\u4f8b\uff1apod.yaml"'},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: demo\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    resources:\n      limits:\n        cpu: "200m"\n        memory: "400Mi"\n      requests:\n        cpu: "100m"\n        memory: "200Mi"\n')),(0,l.kt)("h2",{id:"requestslimits"},"requests/limits"),(0,l.kt)("p",null,"requests \u8868\u793a\u8bf7\u6c42\u503c\uff0c\u800c limits \u5219\u8868\u793a\u7ea6\u675f\u503c\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e00\u822c\u60c5\u51b5\u4e0b requests \u662f\u5c0f\u4e8e limits \u7684\uff0c\u8fd9\u91cc\u6d89\u53ca\u5230\u670d\u52a1\u8d28\u91cf\u7b49\u7ea7\u6982\u5ff5\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1\u8d28\u91cf\u7b49\u7ea7"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Guaranteed\uff08\u5b8c\u5168\u53ef\u9760\u7684\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"pod \u4e2d\u5168\u90e8\u5bb9\u5668\u914d\u7f6e\u4e86\u8d44\u6e90\u914d\u989d\uff0c\u4e14 requests == limits\uff0c\u6216\u8005\u53ea\u8bbe\u7f6e\u4e86 limits\uff0c\u6b64\u65f6\u9ed8\u8ba4 requests \u7b49\u4e8e limits\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Burstable\uff08\u5f39\u6027\u6ce2\u52a8\u3001\u8f83\u53ef\u9760\u7684\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"pod \u4e2d\u90e8\u5206\u5bb9\u5668\u914d\u7f6e\u4e86 requests \u548c limits\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BestEffort\uff08\u5c3d\u529b\u800c\u4e3a\u3001\u4e0d\u592a\u53ef\u9760\u7684\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"pod \u4e2d\u5bb9\u5668\u672a\u914d\u7f6e requests \u548c limits\u3002")))),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u914d\u7f6e\u4e86 requests \u8bf7\u6c42\u503c\uff0c\u90a3\u4e48\u90e8\u7f72\u65f6\uff0c\u76ee\u6807\u8282\u70b9\u9700\u8981\u62e5\u6709\u591a\u4f59\u8be5\u8bf7\u6c42\u503c\u7684\u7a7a\u95f2\u8d44\u6e90\uff0c\u624d\u53ef\u4ee5\u90e8\u7f72\u6b64\u670d\u52a1\u3002\u5982\u679c\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684\u8282\u70b9\uff0c\u90a3\u4e48\u8be5\u670d\u52a1\u5c06\u65e0\u6cd5\u90e8\u7f72\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5f53\u6211\u4eec\u672a\u914d\u7f6e limits \u7ea6\u675f\u503c\u65f6\uff0climits \u9ed8\u8ba4\u5c31\u662f\u5f53\u524d\u8282\u70b9\u7684\u8d44\u6e90\u4e0a\u9650\u3002   "),(0,l.kt)("h2",{id:"\u5e38\u4f7f\u7528\u7684\u914d\u989d\u7c7b\u578b"},"\u5e38\u4f7f\u7528\u7684\u914d\u989d\u7c7b\u578b"),(0,l.kt)("p",null,"\u8d44\u6e90\u914d\u989d\u7684\u79cd\u7c7b\u6709\u5f88\u591a\uff0c\u6700\u5e38\u4f7f\u7528\u7684\u914d\u989d\u4e3b\u8981\u6709\u4e09\u7c7b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cpu\uff1a\u4e2d\u592e\u5904\u7406\u5668"),(0,l.kt)("li",{parentName:"ul"},"memory\uff1a\u5185\u5b58"),(0,l.kt)("li",{parentName:"ul"},"ephemeral-storage\uff1a\u5b58\u50a8")),(0,l.kt)("p",null,"\u5927\u90e8\u5206\u8d44\u6e90\u7c7b\u578b\u90fd\u53ef\u4ee5\u901a\u8fc7\u6807\u51c6\u7684\u6a21\u677f\u8fdb\u884c\u914d\u989d\u8bbe\u7f6e\uff0c\u5982\uff1a  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count/<resource>.<group>"),"\uff1a\u7528\u4e8e\u975e\u6838\u5fc3 core \u7ec4\u7684\u8d44\u6e90"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count/<resource>"),"\uff1a\u7528\u4e8e\u6838\u5fc3\u7ec4\u7684\u8d44\u6e90")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u989d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count/pods"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u8be5\u547d\u540d\u7a7a\u95f4\u4e2d\u5141\u8bb8\u5b58\u5728\u7684\u975e\u7ec8\u6b62\u72b6\u6001\u7684 pod \u603b\u6570\u4e0a\u9650\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count/services"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u8be5\u547d\u540d\u7a7a\u95f4\u4e2d\u5141\u8bb8\u5b58\u5728\u7684 service \u603b\u6570\u4e0a\u9650\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count/configmaps"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u8be5\u547d\u540d\u7a7a\u95f4\u4e2d\u5141\u8bb8\u5b58\u5728\u7684 configmaps \u603b\u6570\u4e0a\u9650\u3002")))),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    "))))}d.isMDXComponent=!0}}]);