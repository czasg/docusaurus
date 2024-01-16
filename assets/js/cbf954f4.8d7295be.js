"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2265],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(b,u(u({ref:t},s),{},{components:r})):n.createElement(b,u({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,u[1]=o;for(var p=2;p<l;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87319:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u6b7b\u4fe1\u961f\u5217",sidebar_label:"\u6b7b\u4fe1\u961f\u5217",slug:"dead-letter-queue"},u=void 0,o={unversionedId:"rabbitmq/\u6b7b\u4fe1\u961f\u5217",id:"rabbitmq/\u6b7b\u4fe1\u961f\u5217",title:"\u6b7b\u4fe1\u961f\u5217",description:"\u6b7b\u4fe1\u961f\u5217\uff08Dead Letter Queue\uff0c\u7b80\u79f0 DLQ\uff09\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u961f\u5217\uff0c\u7528\u4e8e\u63a5\u6536\u5176\u4ed6\u961f\u5217\u4e2d\u7684\u6b7b\u4fe1\uff08Dead Letter\uff09\u6d88\u606f\u3002",source:"@site/docs/develop/rabbitmq/4.\u6b7b\u4fe1\u961f\u5217.md",sourceDirName:"rabbitmq",slug:"/rabbitmq/dead-letter-queue",permalink:"/docusaurus/docs/develop/rabbitmq/dead-letter-queue",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/develop/rabbitmq/4.\u6b7b\u4fe1\u961f\u5217.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u6b7b\u4fe1\u961f\u5217",sidebar_label:"\u6b7b\u4fe1\u961f\u5217",slug:"dead-letter-queue"},sidebar:"tutorialSidebar",previous:{title:"\u6d88\u606f\u786e\u8ba4",permalink:"/docusaurus/docs/develop/rabbitmq/message-confirm"},next:{title:"Redis",permalink:"/docusaurus/docs/develop/redis/"}},i={},p=[],s={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6b7b\u4fe1\u961f\u5217\uff08Dead Letter Queue\uff0c\u7b80\u79f0 DLQ\uff09\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u961f\u5217\uff0c\u7528\u4e8e\u63a5\u6536\u5176\u4ed6\u961f\u5217\u4e2d\u7684\u6b7b\u4fe1\uff08Dead Letter\uff09\u6d88\u606f\u3002\n\u6b7b\u4fe1\u6d88\u606f\u901a\u5e38\u662f\u6307\u65e0\u6cd5\u88ab\u6d88\u8d39\u8005\u6210\u529f\u5904\u7406\u7684\u6d88\u606f\uff0c\u5bfc\u81f4\u8be5\u6d88\u606f\u65e0\u6cd5\u88ab\u6b63\u786e\u6d88\u8d39\u5e76\u4ece\u539f\u59cb\u961f\u5217\u4e2d\u79fb\u9664\u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u4ee5\u4e0b\u60c5\u51b5\u4f1a\u5bfc\u81f4\u6d88\u606f\u6210\u4e3a\u6b7b\u4fe1\u6d88\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6d88\u606f\u88ab\u62d2\u7edd"),"\uff1a\u6d88\u8d39\u8005\u62d2\u7edd\u5904\u7406\u6d88\u606f\uff0c\u5e76\u4e14\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"requeue=false"),"\uff0c\u5bfc\u81f4\u6d88\u606f\u4e0d\u4f1a\u91cd\u65b0\u56de\u5230\u539f\u59cb\u961f\u5217\uff0c\u4ece\u800c\u6210\u4e3a\u6b7b\u4fe1\u6d88\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6d88\u606f\u8fc7\u671f"),"\uff1a\u5982\u679c\u6d88\u606f\u8bbe\u7f6e\u4e86\u8fc7\u671f\u65f6\u95f4\uff0c\u5f53\u6d88\u606f\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u8d85\u8fc7\u5176\u8fc7\u671f\u65f6\u95f4\u65f6\uff0c\u4f1a\u6210\u4e3a\u6b7b\u4fe1\u6d88\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u961f\u5217\u8fbe\u5230\u6700\u5927\u957f\u5ea6"),"\uff1a\u5982\u679c\u961f\u5217\u8bbe\u7f6e\u4e86\u6700\u5927\u957f\u5ea6\u9650\u5236\uff0c\u5e76\u4e14\u961f\u5217\u5df2\u6ee1\uff0c\u65b0\u7684\u6d88\u606f\u5c06\u88ab\u4e22\u5f03\u6216\u6210\u4e3a\u6b7b\u4fe1\u6d88\u606f\u3002")),(0,a.kt)("p",null,"\u4ee5 Python \u4e3a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="\u58f0\u660e\u666e\u901a\u961f\u5217\uff0c\u5e76\u8bbe\u7f6e\u6b7b\u4fe1\u961f\u5217\u53c2\u6570"',title:'"\u58f0\u660e\u666e\u901a\u961f\u5217\uff0c\u5e76\u8bbe\u7f6e\u6b7b\u4fe1\u961f\u5217\u53c2\u6570"'},"channel.queue_declare(\n    queue='my_queue',\n    arguments={\n        'x-dead-letter-exchange': '',\n        'x-dead-letter-routing-key': 'dead_letters',\n    }\n)\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u58f0\u660e\u4e86\u4e00\u4e2a\u540d\u4e3a my_queue \u7684\u666e\u901a\u961f\u5217\uff0c\u5e76\u8bbe\u7f6e\u4e86\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x-dead-letter-exchange"),"\uff1a\u6307\u5b9a\u6b7b\u4fe1\u961f\u5217\u7684",(0,a.kt)("strong",{parentName:"li"},"\u4ea4\u6362\u673a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x-dead-letter-routing-key"),"\uff1a\u6307\u5b9a\u6b7b\u4fe1\u961f\u5217\u7684",(0,a.kt)("strong",{parentName:"li"},"\u8def\u7531\u952e"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="\u58f0\u660e\u6b7b\u4fe1\u961f\u5217"',title:'"\u58f0\u660e\u6b7b\u4fe1\u961f\u5217"'},"channel.queue_declare(queue='dead_letters')\n")),(0,a.kt)("p",null,"\u63a5\u7740\uff0c\u6211\u4eec\u58f0\u660e\u4e86\u540d\u4e3a dead_letters \u7684\u6b7b\u4fe1\u961f\u5217\u3002\u81f3\u6b64\uff0c\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u6b7b\u4fe1\u961f\u5217\u7684\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u5f80 my_queue \u63a8\u9001\u4e00\u6761\u6d88\u606f\u6570\u636e\u5e76\u6307\u5b9a5s\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u7b495s\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u770b\u5230\u8fd9\u6761\u6d88\u606f\u8fdb\u5165\u5230\u4e86\u6b7b\u4fe1\u961f\u5217\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"channel.basic_publish(\n    exchange='',\n    routing_key='my_queue',\n    body='test',\n    properties=pika.BasicProperties(expiration=5000),\n)\n")),(0,a.kt)("p",null,"\u73b0\u5728\u56de\u8fc7\u5934\u6765\u6574\u7406\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u6240\u8c13\u7684\u6b7b\u4fe1\u961f\u5217\u5176\u5b9e\u5c31\u662f\u4e00\u79cd\u6bd4\u8f83\u7279\u6b8a\u7684\u961f\u5217\u3002\n\u6211\u4eec\u751a\u81f3\u53ef\u4ee5\u76f4\u63a5\u628a\u6b7b\u4fe1\u961f\u5217\u5f53\u666e\u901a\u961f\u5217\u6765\u4f7f\u7528\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6b7b\u4fe1\u961f\u5217\u4f1a\u81ea\u52a8\u63a5\u53d7\u6b7b\u4fe1\u6d88\u606f\u3002\n\u6240\u4ee5\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e00\u822c\u4e0d\u4e3b\u52a8\u5f80\u91cc\u9762\u63a8\u9001\u6570\u636e\u3002"))}d.isMDXComponent=!0}}]);