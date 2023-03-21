"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),a=r(6010),i=r(2802),c=r(9960),o=r(3919),l=r(5999);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",u.cardContainer)},r)}function p(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u.cardTitle),title:i},r," ",i),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",u.cardDescription),title:c},c))}function d(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905)),i=r(2991);const c={title:"\u62db\u8058\u6307\u5357"},o=void 0,l={unversionedId:"recruit-guide/index",id:"recruit-guide/index",title:"\u62db\u8058\u6307\u5357",description:"\u4e00\u4e2a\u516c\u53f8\u5728\u53d1\u5c55\u58ee\u5927\u8fc7\u7a0b\u4e2d\uff0c\u62db\u8058\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u73af\u8282\u3002\u540c\u65f6\u4e5f\u662f\u8fd9\u5bb6\u516c\u53f8\u5bf9\u5916\u8f93\u51fa\u4f01\u4e1a\u5f62\u8c61\u7684\u771f\u5b9e\u5ba3\u4f20\u3002",source:"@site/docs/recruit-guide/index.md",sourceDirName:"recruit-guide",slug:"/recruit-guide/",permalink:"/docusaurus/docs/recruit-guide/",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/recruit-guide/index.md",tags:[],version:"current",frontMatter:{title:"\u62db\u8058\u6307\u5357"},sidebar:"defaultSidebar",previous:{title:"\u5168\u666f\u56fe",permalink:"/docusaurus/docs/rabbitmq/rabbitmq"},next:{title:"\u6c9f\u901a\u6280\u5de7",permalink:"/docusaurus/docs/recruit-guide/communicate-skill"}},u={},s=[{value:"\u76ee\u5f55\u7d22\u5f15",id:"\u76ee\u5f55\u7d22\u5f15",level:4}],p={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e00\u4e2a\u516c\u53f8\u5728\u53d1\u5c55\u58ee\u5927\u8fc7\u7a0b\u4e2d\uff0c\u62db\u8058\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u73af\u8282\u3002\u540c\u65f6\u4e5f\u662f\u8fd9\u5bb6\u516c\u53f8\u5bf9\u5916\u8f93\u51fa\u4f01\u4e1a\u5f62\u8c61\u7684\u771f\u5b9e\u5ba3\u4f20\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u521a\u597d\u4e5f\u662f\u4e00\u4e2a\u9762\u8bd5\u5b98\uff0c\u90a3\u8fd9\u4e5f\u662f\u4f60\u9009\u62e9\u5c0f\u4f19\u4f34\u7684\u91cd\u8981\u73af\u8282\ud83d\ude00~",(0,a.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\uff0c\u5236\u5b9a\u4e00\u5957\u62db\u8058\u6807\u51c6\u5c06\u662f\u62db\u8058\u8fc7\u7a0b\u4e2d\u975e\u5e38\u5173\u952e\u7684\u4e00\u6b65\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e0b\u9762\u6211\u4ee5\u9762\u8bd5\u5b98\u7684\u89d2\u5ea6\uff0c\u6574\u7406\u4e86\u4e00\u4e9b\u5efa\u8bae\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4e2a\u4eba\u5236\u5b9a\u62db\u8058\u6807\u51c6\uff1a"),(0,a.kt)("p",null,"\u5728\u62db\u8058\u524d\uff0c\u6211\u4eec\u4f5c\u4e3a\u9700\u6c42\u65b9\uff0c\u8981\u660e\u786e\u81ea\u5df1\u5230\u5e95\u9700\u8981\u4ec0\u4e48\u7c7b\u578b\u7684\u4eba\u624d\uff0c\u7136\u540e\u4ece\u81ea\u5df1\u7684\u9700\u6c42\u51fa\u53d1\u8fdb\u884c\u5c42\u5c42\u62c6\u89e3\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u62c6\u89e3\u7ef4\u5ea6\u5305\u62ec\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u62db\u8058\u804c\u4f4d\u3001\u804c\u8d23\u3001\u804c\u7ea7\uff0c\u5c97\u4f4d\u6280\u80fd\u3001\u80fd\u529b"),"\u7b49\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u6709\u4e00\u4e9b\u8001\u65e7",(0,a.kt)("inlineCode",{parentName:"p"},"PHP"),"\u7cfb\u7edf\u9700\u8981\u8fc1\u79fb\u6539\u9020\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"Go/Java"),"\uff0c\u7136\u540e\u56e0\u4e3a\u662f\u8001\u65e7\u7cfb\u7edf\uff0c\u6240\u4ee5\u53ef\u80fd\u5728\u6280\u672f\u4e0a\u4e0d\u4f1a\u6709\u592a\u591a\u6311\u6218\uff0c\u66f4\u591a\u7684\u662f\u5bf9\u5386\u53f2\u5751\u70b9\u7684\u6311\u6218\u3002"),(0,a.kt)("p",null,"\u4ece\u8fd9\u4e2a\u70b9\u51fa\u53d1\uff0c\u90a3\u6211\u53ef\u80fd\u5c31\u9700\u8981\u8fd9\u6837\u4e00\u4f4d\u540c\u5b66\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u804c\u4f4d\uff1a\u540e\u7aef"),(0,a.kt)("li",{parentName:"ul"},"\u804c\u8d23\uff1a\u8d1f\u8d23\u8001\u65e7\u7cfb\u7edf\u653b\u575a\u4e0e\u6539\u9020\ud83d\ude02~"),(0,a.kt)("li",{parentName:"ul"},"\u6280\u80fd\uff1a\u719f\u6089PHP\uff08\u5fc5\u987b\uff09\u3001Go/Java\uff08\u4e86\u89e3\u6216\u6709\u610f\u5411\u8f6c\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5e74\u9650\uff1a3\u5e74\u7ecf\u9a8c\u5de6\u53f3"),(0,a.kt)("li",{parentName:"ul"},"\u6027\u683c\uff1a\u504f\u6c89\u7a33\uff0c\u6709\u8010\u5fc3")),(0,a.kt)("p",null,"\u7136\u540e\u4e0d\u540c\u6307\u6807\u4e4b\u95f4\u4e5f\u662f\u5b58\u5728\u6bd4\u91cd\u7684\u3002\u6bd4\u5982\u4ee5\u8fd9\u4e2a\u6539\u9020\u4e8b\u9879\u4e3a\u4f8b\uff0c\u5982\u679c\u786e\u5b9e\u6ca1\u6709\u592a\u591a\u5728\u6280\u672f\u65b9\u9762\u7684\u6311\u6218\uff0c\n\u90a3\u4e48\u6280\u672f\u4e0e\u6027\u683c\u4e4b\u95f4\u5c31\u53ef\u4ee5\u9002\u5f53\u8c03\u6574\u4e3a\u56db\u516d\u5360\u6bd4\uff0c\u5373\u6280\u672f\u65b9\u9762\u5360\u6bd4\u56db\u5c42\uff0c\u6027\u683c\u65b9\u9762\u5360\u6bd4\u516d\u5c42\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u9762\u8bd5\u7684\u65f6\u5019\u4e5f\u53ef\u4ee5\u57fa\u4e8e\u6bd4\u91cd\u9002\u5f53\u8c03\u6574\u95ee\u9898\uff0c\u5982\u679c\u9047\u5230\u7279\u522b\u6709\u773c\u7f18\u7684\u540c\u5b66\uff0c\u5c31\u76f4\u63a5\u8981\u4e86\u5427\ud83d\ude0d~"),(0,a.kt)("h4",{id:"\u76ee\u5f55\u7d22\u5f15"},"\u76ee\u5f55\u7d22\u5f15"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);