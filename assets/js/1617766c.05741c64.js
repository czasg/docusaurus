"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6246],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(a),k=n,N=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return a?r.createElement(N,i(i({ref:t},s),{},{components:a})):r.createElement(N,i({ref:t},s))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},27938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={title:"es"},i=void 0,p={unversionedId:"question-bank/others/es",id:"question-bank/others/es",title:"es",description:"\u4ec0\u4e48\u662fElasticsearch",source:"@site/docs/office/question-bank/others/es.md",sourceDirName:"question-bank/others",slug:"/question-bank/others/es",permalink:"/docusaurus/docs/office/question-bank/others/es",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/question-bank/others/es.md",tags:[],version:"current",frontMatter:{title:"es"},sidebar:"tutorialSidebar",previous:{title:"casbin",permalink:"/docusaurus/docs/office/question-bank/others/casbin"},next:{title:"\u6545\u969c\u6392\u67e5",permalink:"/docusaurus/docs/office/question-bank/others/troubleshoot/"}},o={},u=[{value:"\u4ec0\u4e48\u662fElasticsearch",id:"\u4ec0\u4e48\u662felasticsearch",level:3},{value:"ES\u7684\u4e3b\u8981\u7ec4\u4ef6\u662f\u4ec0\u4e48",id:"es\u7684\u4e3b\u8981\u7ec4\u4ef6\u662f\u4ec0\u4e48",level:3},{value:"ES\u5982\u4f55\u5b58\u50a8\u6570\u636e",id:"es\u5982\u4f55\u5b58\u50a8\u6570\u636e",level:3},{value:"\u4ec0\u4e48\u662fALias",id:"\u4ec0\u4e48\u662falias",level:3},{value:"ES\u4e00\u6b21\u67e5\u8be2\u4f1a\u53d1\u751f\u4ec0\u4e48",id:"es\u4e00\u6b21\u67e5\u8be2\u4f1a\u53d1\u751f\u4ec0\u4e48",level:3},{value:"\u5982\u4f55\u7406\u89e3ES\u7684\u8fd1\u5b9e\u65f6\u641c\u7d22",id:"\u5982\u4f55\u7406\u89e3es\u7684\u8fd1\u5b9e\u65f6\u641c\u7d22",level:3}],s={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u4ec0\u4e48\u662felasticsearch"},"\u4ec0\u4e48\u662fElasticsearch"),(0,n.kt)("p",null,"Elasticsearch\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u641c\u7d22\u5f15\u64ce\uff0c\u7528\u4e8e\u5168\u6587\u68c0\u7d22\u3001\u5206\u6790\u548c\u53ef\u89c6\u5316\u5927\u89c4\u6a21\u6570\u636e\u3002\u5b83\u63d0\u4f9b\u4e86\u7b80\u5355\u7684RESTful API\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u7c7b\u578b\u7684\u6570\u636e\u641c\u7d22\u5e94\u7528\u3002"),(0,n.kt)("h3",{id:"es\u7684\u4e3b\u8981\u7ec4\u4ef6\u662f\u4ec0\u4e48"},"ES\u7684\u4e3b\u8981\u7ec4\u4ef6\u662f\u4ec0\u4e48"),(0,n.kt)("p",null,"Elasticsearch\uff08ES\uff09\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u641c\u7d22\u5f15\u64ce\u548c\u6570\u636e\u5206\u6790\u5f15\u64ce\uff0c\u5176\u4e3b\u8981\u7ec4\u4ef6\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8282\u70b9\uff08Node\uff09\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8282\u70b9\u662fElasticsearch\u96c6\u7fa4\u7684\u57fa\u672c\u5355\u5143\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8282\u70b9\u662f\u4e00\u4e2a\u8fd0\u884c\u7684Elasticsearch\u5b9e\u4f8b\uff0c\u8d1f\u8d23\u5b58\u50a8\u6570\u636e\u3001\u6267\u884c\u641c\u7d22\u548c\u5206\u6790\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u7531\u591a\u4e2a\u8282\u70b9\u7ec4\u6210\uff0c\u53ef\u4ee5\u6c34\u5e73\u6269\u5c55\uff0c\u63d0\u9ad8\u6027\u80fd\u548c\u5bb9\u91cf\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u7d22\u5f15\uff08Index\uff09\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u662f\u6587\u6863\u7684\u903b\u8f91\u5bb9\u5668\uff0c\u7c7b\u4f3c\u4e8e\u5173\u7cfb\u6570\u636e\u5e93\u4e2d\u7684\u8868\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u6863\u88ab\u7d22\u5f15\u5230\u7279\u5b9a\u7684\u7d22\u5f15\u4e2d\uff0c\u6bcf\u4e2a\u7d22\u5f15\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u6587\u6863\uff0c\u5b9a\u4e49\u4e86\u6587\u6863\u7684\u6570\u636e\u7ed3\u6784\u548c\u914d\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u53ef\u4ee5\u5206\u4e3a\u591a\u4e2a\u5206\u7247\uff0c\u7528\u4e8e\u5206\u5e03\u6570\u636e\u548c\u63d0\u9ad8\u6027\u80fd\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6587\u6863\uff08Document\uff09\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6587\u6863\u662f\u7d22\u5f15\u4e2d\u7684\u57fa\u672c\u6570\u636e\u5355\u5143\uff0c\u4ee5JSON\u683c\u5f0f\u8868\u793a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6587\u6863\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u6807\u8bc6\u7b26\u8fdb\u884c\u68c0\u7d22\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u6863\u5305\u542b\u4e86\u5b57\u6bb5\u548c\u5bf9\u5e94\u7684\u503c\uff0c\u7c7b\u4f3c\u4e8e\u5173\u7cfb\u6570\u636e\u5e93\u4e2d\u7684\u884c\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5206\u7247\uff08Shard\uff09\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5206\u7247\u662f\u7d22\u5f15\u7684\u7269\u7406\u5212\u5206\uff0c\u7528\u4e8e\u5206\u5e03\u6570\u636e\u5728\u96c6\u7fa4\u7684\u4e0d\u540c\u8282\u70b9\u4e0a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7d22\u5f15\u53ef\u4ee5\u88ab\u5212\u5206\u4e3a\u4e00\u4e2a\u6216\u591a\u4e2a\u4e3b\u5206\u7247\uff0c\u6bcf\u4e2a\u4e3b\u5206\u7247\u53ef\u4ee5\u6709\u82e5\u5e72\u4e2a\u526f\u672c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u7247\u7684\u5b58\u5728\u63d0\u9ad8\u4e86\u641c\u7d22\u6027\u80fd\u3001\u5bb9\u9519\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5012\u6392\u7d22\u5f15\uff08Inverted Index\uff09\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5012\u6392\u7d22\u5f15\u662fElasticsearch\u4e2d\u7528\u4e8e\u5b9e\u73b0\u9ad8\u6548\u6587\u672c\u641c\u7d22\u7684\u6838\u5fc3\u6570\u636e\u7ed3\u6784\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b83\u5c06\u6587\u6863\u4e2d\u7684\u6bcf\u4e2a\u8bcd\u9879\u6620\u5c04\u5230\u5305\u542b\u8fd9\u4e9b\u8bcd\u9879\u7684\u6587\u6863\u5217\u8868\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5012\u6392\u7d22\u5f15\u4f7f\u5f97Elasticsearch\u80fd\u591f\u5feb\u901f\u5b9a\u4f4d\u5305\u542b\u7279\u5b9a\u8bcd\u9879\u7684\u6587\u6863\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u67e5\u8be2\uff08Query\uff09\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u662f\u7528\u4e8e\u4eceElasticsearch\u4e2d\u68c0\u7d22\u6587\u6863\u7684\u641c\u7d22\u6761\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u53ef\u4ee5\u5305\u62ec\u7b80\u5355\u7684\u6761\u4ef6\uff0c\u5982\u5339\u914d\u7279\u5b9a\u8bcd\u9879\uff0c\u4e5f\u53ef\u4ee5\u662f\u590d\u6742\u7684\u5e03\u5c14\u67e5\u8be2\u3001\u8303\u56f4\u67e5\u8be2\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"Elasticsearch\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u67e5\u8be2DSL\uff08Domain-Specific Language\uff09\u6765\u652f\u6301\u5404\u79cd\u67e5\u8be2\u9700\u6c42\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u805a\u5408\uff08Aggregation\uff09\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u805a\u5408\u662f\u7528\u4e8e\u5bf9\u641c\u7d22\u7ed3\u679c\u8fdb\u884c\u6570\u636e\u5206\u6790\u7684\u673a\u5236\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b83\u53ef\u4ee5\u63d0\u4f9b\u5404\u79cd\u7edf\u8ba1\u4fe1\u606f\uff0c\u5982\u603b\u548c\u3001\u5e73\u5747\u503c\u3001\u6700\u5927\u503c\u3001\u6700\u5c0f\u503c\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u805a\u5408\u53ef\u4ee5\u7528\u4e8e\u6784\u5efa\u590d\u6742\u7684\u6570\u636e\u5206\u6790\u548c\u53ef\u89c6\u5316\u5e94\u7528\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6620\u5c04\uff08Mapping\uff09\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6620\u5c04\u5b9a\u4e49\u4e86\u7d22\u5f15\u4e2d\u6bcf\u4e2a\u5b57\u6bb5\u7684\u6570\u636e\u7c7b\u578b\u548c\u5c5e\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b83\u544a\u8bc9Elasticsearch\u5982\u4f55\u5b58\u50a8\u548c\u5904\u7406\u6587\u6863\u4e2d\u7684\u5404\u4e2a\u5b57\u6bb5\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6620\u5c04\u53ef\u4ee5\u662f\u9690\u5f0f\u7684\uff08\u52a8\u6001\u6620\u5c04\uff09\u6216\u663e\u5f0f\u7684\uff08\u9759\u6001\u6620\u5c04\uff09\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\uff08Cluster\uff09\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u662f\u7531\u591a\u4e2a\u8282\u70b9\u7ec4\u6210\u7684Elasticsearch\u73af\u5883\uff0c\u534f\u540c\u5de5\u4f5c\u4ee5\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u9ad8\u53ef\u7528\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u53ef\u4ee5\u901a\u8fc7\u4e3b\u8282\u70b9\u548c\u6570\u636e\u8282\u70b9\u7684\u89d2\u8272\u6765\u5206\u5de5\uff0c\u4e3b\u8282\u70b9\u8d1f\u8d23\u7ba1\u7406\u96c6\u7fa4\u72b6\u6001\uff0c\u6570\u636e\u8282\u70b9\u8d1f\u8d23\u5b58\u50a8\u548c\u5904\u7406\u6570\u636e\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u4e3b\u8282\u70b9\uff08Master Node\uff09\u548c\u6570\u636e\u8282\u70b9\uff08Data Node\uff09\uff1a")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8282\u70b9\u8d1f\u8d23\u7ba1\u7406\u96c6\u7fa4\u72b6\u6001\u3001\u8fdb\u884c\u7d22\u5f15\u7684\u521b\u5efa\u548c\u5220\u9664\u7b49\u7ba1\u7406\u4efb\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6570\u636e\u8282\u70b9\u5b58\u50a8\u5b9e\u9645\u7684\u7d22\u5f15\u6570\u636e\uff0c\u5e76\u6267\u884c\u641c\u7d22\u548c\u5206\u6790\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u540c\u65f6\u62c5\u4efb\u4e3b\u8282\u70b9\u548c\u6570\u636e\u8282\u70b9\u7684\u89d2\u8272\uff0c\u4e5f\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u5176\u4e2d\u4e00\u79cd\u3002")))),(0,n.kt)("h3",{id:"es\u5982\u4f55\u5b58\u50a8\u6570\u636e"},"ES\u5982\u4f55\u5b58\u50a8\u6570\u636e"),(0,n.kt)("p",null,"ES\u5728\u5206\u5e03\u5f0f\u73af\u5883\u4e2d\u5de5\u4f5c\uff0c\u7d22\u5f15\u662f\u903b\u8f91\u5b58\u50a8\u5bf9\u8c61\uff0c\u7c7b\u4f3c\u4e8e\u5173\u7cfb\u578b\u5b58\u50a8\u6570\u636e\u5e93\u4e2d\u7684\u8868\u3002"),(0,n.kt)("p",null,"\u540c\u4e00\u4e2a\u903b\u8f91\u7d22\u5f15\u4f1a\u6309\u65e5\u671f\u8fdb\u884c\u5212\u5206\uff0c\u8fd9\u6837\u53ef\u4ee5\u65b9\u4fbf\u6309\u65f6\u95f4\u8303\u56f4\u8fdb\u884c\u67e5\u8be2\u3002\u6bd4\u5982\u65e5\u5fd7\u7d22\u5f15\u53ef\u4ee5\u662f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"log-20240101"),(0,n.kt)("li",{parentName:"ul"},"log-20240102")),(0,n.kt)("p",null,"\u5728\u4e00\u4e2a\u7269\u7406\u7d22\u5f15\u4e2d\uff0c\u4f1a\u6839\u636e\u914d\u7f6e\u8fdb\u884c\u5206\u7247\uff0c\u6bcf\u4e00\u4e2a\u5206\u7247\u90fd\u4f1a\u5b58\u50a8\u90e8\u5206\u7269\u7406\u6570\u636e\u3002\u5206\u7247\u5305\u62ec\u4e3b\u5206\u7247\u548c\u5907\u4efd\u5206\u7247\uff0c\u6bcf\u4e00\u4e2a\u5206\u7247\u7531\u4e00\u4e2a\u81f3\u591a\u4e2a\u5206\u6bb5\u7ec4\u6210\uff0c\u8fd9\u4e9b\u5206\u6bb5\u8bb0\u5f55\u6709\u6587\u6863\u6570\u636e\uff0c\u6587\u6863\u6570\u636e\u4ee5JSON\u5f62\u5f0f\u5b58\u50a8\uff0c\u540c\u65f6\u6587\u6863\u4e5f\u662fES\u4e2d\u57fa\u672c\u6570\u636e\u5355\u5143\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\uff0c\u7d22\u5f15\u662f\u6587\u6863\u7684\u903b\u8f91\u96c6\u5408\uff0c\u5206\u7247\u662f\u7d22\u5f15\u7684\u7269\u7406\u5212\u5206\u3002"),(0,n.kt)("h3",{id:"\u4ec0\u4e48\u662falias"},"\u4ec0\u4e48\u662fALias"),(0,n.kt)("p",null,"Alias\u662fES\u4e2d\u7d22\u5f15\u7684\u522b\u540d\uff0c\u901a\u8fc7\u6307\u5b9a\u522b\u540d\uff0c\u53ef\u4ee5\u7b80\u5316\u7d22\u5f15\u7684\u7ef4\u62a4\u3002"),(0,n.kt)("h3",{id:"es\u4e00\u6b21\u67e5\u8be2\u4f1a\u53d1\u751f\u4ec0\u4e48"},"ES\u4e00\u6b21\u67e5\u8be2\u4f1a\u53d1\u751f\u4ec0\u4e48"),(0,n.kt)("p",null,"ES\u662f\u5de5\u4f5c\u5728\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u7684\uff0c\u67e5\u8be2\u524d\u9700\u8981\u6307\u5b9a\u7d22\u5f15\u53ca\u67e5\u8be2\u6761\u4ef6\u3002\u5728\u5b58\u50a8\u9636\u6bb5\uff0cES\u4f1a\u5c06\u7d22\u5f15\u5212\u5206\u6210\u591a\u4e2a\u5206\u7247\uff0c\u5e76\u5c06\u4ed6\u4eec\u5206\u5e03\u5728\u5404\u4e2a\u8282\u70b9\u4e0a\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\uff0c\u67e5\u8be2\u8bf7\u6c42\u4f1a\u5206\u53d1\u7ed9\u5404\u4e2a\u8282\u70b9\u670d\u52a1\uff0c\u8282\u70b9\u4f1a\u57fa\u4e8e\u67e5\u8be2\u6761\u4ef6\u5c06\u8bf7\u6c42\u5b9a\u4f4d\u5230\u76f8\u5173\u7684\u5206\u7247\u4e0a\uff0c\u6700\u7ec8\u5c06\u7ed3\u679c\u5408\u5e76\u8fd4\u56de\u7ed9\u7528\u6237\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u7406\u89e3es\u7684\u8fd1\u5b9e\u65f6\u641c\u7d22"},"\u5982\u4f55\u7406\u89e3ES\u7684\u8fd1\u5b9e\u65f6\u641c\u7d22"),(0,n.kt)("p",null,"\u5728ELK\u4e2d\uff0c\u670d\u52a1\u7aef\u7684\u65e5\u5fd7\u8f93\u51fa\u540e\uff0c\u53ef\u4ee5\u5f88\u5feb\u7684\u88abES\u6536\u96c6\u5e76\u5728Kibana\u4e0a\u8fdb\u884c\u5c55\u793a\u3002\u8fd9\u5c31\u662fES\u7684\u8fd1\u5b9e\u65f6\u641c\u7d22\u529f\u80fd\uff0c\u6240\u4ee5\u8fd9\u91cc\u7684\u8fd1\u5b9e\u65f6\u5e76\u4e0d\u662f\u7edd\u5bf9\u7684\u5b9e\u65f6\uff0c\u800c\u662f\u6709\u51e0\u79d2\u5230\u51e0\u5206\u949f\u7684\u5ef6\u8fdf\u3002"),(0,n.kt)("p",null,"\u5f53\u6574\u4f53\u6765\u770b\u901f\u5ea6\u662f\u5f88\u5feb\u7684\uff0c\u8fd9\u91cc\u6d89\u53ca\u5230\u7d22\u5f15\u7f13\u5b58\u7684\u5237\u65b0\u3002\u5373\u5f53\u4e34\u65f6\u5b58\u50a8\u533a\u57df\uff0c\u5b9e\u65f6\u7684\u6587\u6863\u4f1a\u88ab\u5199\u5165\u5230\u6b64\u533a\u57df\uff0c\u5f53\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u540e\u4f1a\u89e6\u53d1\u5237\u76d8\uff0c\u6b64\u65f6\u6587\u6863\u6570\u636e\u4f1a\u88ab\u5237\u65b0\u5230\u78c1\u76d8\u4e0a\u7684\u5206\u6bb5\u4e2d\u3002"))}m.isMDXComponent=!0}}]);