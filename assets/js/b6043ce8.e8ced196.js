"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),k=o,d=m["".concat(u,".").concat(k)]||m[k]||s[k]||l;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},61259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const l={title:"Volume\u6570\u636e\u5377",sidebar_label:"Volume\u6570\u636e\u5377",slug:"volume"},a=void 0,i={unversionedId:"docker/Volume\u6570\u636e\u5377",id:"docker/Volume\u6570\u636e\u5377",title:"Volume\u6570\u636e\u5377",description:"\u4ec0\u4e48\u662f\u6570\u636e\u5377\uff1f",source:"@site/docs/develop/docker/9.Volume\u6570\u636e\u5377.md",sourceDirName:"docker",slug:"/docker/volume",permalink:"/docusaurus/docs/develop/docker/volume",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/develop/docker/9.Volume\u6570\u636e\u5377.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Volume\u6570\u636e\u5377",sidebar_label:"Volume\u6570\u636e\u5377",slug:"volume"},sidebar:"tutorialSidebar",previous:{title:"Network\u7f51\u7edc",permalink:"/docusaurus/docs/develop/docker/network"},next:{title:"Dockerfile",permalink:"/docusaurus/docs/develop/docker/dockerfile/"}},u={},p=[{value:"\u4ec0\u4e48\u662f\u6570\u636e\u5377\uff1f",id:"\u4ec0\u4e48\u662f\u6570\u636e\u5377",level:3},{value:"\u6570\u636e\u5377\u4f7f\u7528\u65b9\u6cd5",id:"\u6570\u636e\u5377\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"<strong>\u6570\u636e\u5377\u7684\u6302\u8f7d</strong>",id:"\u6570\u636e\u5377\u7684\u6302\u8f7d",level:4},{value:"<strong>\u9884\u5b9a\u4e49\u6570\u636e\u5377</strong>",id:"\u9884\u5b9a\u4e49\u6570\u636e\u5377",level:4},{value:"<strong>\u6570\u636e\u5377\u7684\u7c7b\u578b</strong>",id:"\u6570\u636e\u5377\u7684\u7c7b\u578b",level:4}],c={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u662f\u6570\u636e\u5377"},"\u4ec0\u4e48\u662f\u6570\u636e\u5377\uff1f"),(0,o.kt)("p",null,"\u5728 Docker \u4e2d\uff0c\u6570\u636e\u5377\uff08Volume\uff09\u662f\u4e00\u79cd",(0,o.kt)("strong",{parentName:"p"},"\u7279\u6b8a\u7684\u6587\u4ef6\u76ee\u5f55\u6216\u6587\u4ef6"),"\uff0c\u7528\u4e8e\u5728\u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u4e4b\u95f4\u6301\u4e45\u5316\u5b58\u50a8\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u6570\u636e\u5377\u7684\u4f7f\u7528\u53ef\u4ee5\u89e3\u51b3\u5bb9\u5668\u4e2d\u6570\u636e\u7684",(0,o.kt)("strong",{parentName:"p"},"\u6301\u4e45\u5316\u3001\u6570\u636e\u5171\u4eab\u548c\u5907\u4efd"),"\u7b49\u95ee\u9898\u3002\n\u5b83\u5177\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6301\u4e45\u6027"),"\uff1a\u6570\u636e\u5377\u5728\u5bb9\u5668\u4e4b\u95f4\u662f\u6301\u4e45\u5b58\u5728\u7684\uff0c\u5373\u4f7f\u5bb9\u5668\u88ab\u5220\u9664\uff0c\u6570\u636e\u5377\u4e5f\u4f1a\u4fdd\u7559\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5171\u4eab\u6027"),"\uff1a\u540c\u4e00\u4e2a\u6570\u636e\u5377\u53ef\u4ee5\u540c\u65f6\u88ab\u591a\u4e2a\u5bb9\u5668\u6302\u8f7d\uff0c\u4ece\u800c\u5b9e\u73b0\u5bb9\u5668\u4e4b\u95f4\u7684\u6570\u636e\u5171\u4eab\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u72ec\u7acb\u4e8e\u5bb9\u5668\u751f\u547d\u5468\u671f"),"\uff1a\u6570\u636e\u5377\u4e0d\u4f9d\u8d56\u4e8e\u5bb9\u5668\u7684\u751f\u547d\u5468\u671f\uff0c\u53ef\u4ee5\u5728\u5bb9\u5668\u8fd0\u884c\u6216\u505c\u6b62\u65f6\u5b58\u5728\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u65b9\u4fbf\u5907\u4efd\u548c\u6062\u590d"),"\uff1a\u6570\u636e\u5377\u4e2d\u7684\u6570\u636e\u53ef\u4ee5\u65b9\u4fbf\u5730\u5907\u4efd\u5230\u5bbf\u4e3b\u673a\u6216\u8fdc\u7a0b\u5b58\u50a8\uff0c\u5e76\u5728\u9700\u8981\u65f6\u8fdb\u884c\u6062\u590d\u3002")),(0,o.kt)("p",null,"\u5e38\u7528\u4e8e\u4ee5\u4e0b\u5e94\u7528\u573a\u666f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6301\u4e45\u5316\u5b58\u50a8\u6570\u636e\u5e93\u6587\u4ef6\u548c\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u5171\u4eab\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5e94\u7528\u7a0b\u5e8f\u751f\u6210\u7684\u65e5\u5fd7\u548c\u5176\u4ed6\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u5730\u5907\u4efd\u548c\u8fd8\u539f\u6570\u636e\u3002")),(0,o.kt)("h3",{id:"\u6570\u636e\u5377\u4f7f\u7528\u65b9\u6cd5"},"\u6570\u636e\u5377\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("p",null,"\u6709\u591a\u79cd\u65b9\u5f0f\u53ef\u4ee5\u521b\u5efa\u548c\u4f7f\u7528\u6570\u636e\u5377\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u547d\u4ee4\u884c\u521b\u5efa"),"\uff1a\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"docker volume create"),"\u547d\u4ee4\u6765\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u6570\u636e\u5377\uff0c\u7136\u540e\u53ef\u4ee5\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u5c06\u5176\u6302\u8f7d\u5230\u6307\u5b9a\u8def\u5f84\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Compose"),"\uff1a\u5728Docker Compose\u6587\u4ef6\u4e2d\u5b9a\u4e49\u6570\u636e\u5377\uff0c\u5e76\u5c06\u5176\u4e0e\u5bb9\u5668\u5173\u8054\uff0c\u8fd9\u6837\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up"),"\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa\u6570\u636e\u5377\u5e76\u8fdb\u884c\u6302\u8f7d\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5bb9\u5668\u8fd0\u884c\u65f6\u521b\u5efa"),"\uff1a\u53ef\u4ee5\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"docker run"),"\u547d\u4ee4\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"-v"),"\u53c2\u6570\u76f4\u63a5\u521b\u5efa\u548c\u6302\u8f7d\u6570\u636e\u5377\u3002")),(0,o.kt)("h4",{id:"\u6570\u636e\u5377\u7684\u6302\u8f7d"},(0,o.kt)("strong",{parentName:"h4"},"\u6570\u636e\u5377\u7684\u6302\u8f7d")),(0,o.kt)("p",null,"\u6570\u636e\u5377\u53ef\u4ee5\u5728\u5bb9\u5668\u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\u6302\u8f7d\u5230\u6307\u5b9a\u7684\u8def\u5f84\u3002\u5728Docker\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"-v"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"--mount"),"\u53c2\u6570\u6765\u6302\u8f7d\u6570\u636e\u5377\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -v /host/path:/container/path my_image\n")),(0,o.kt)("p",null,"\u6216\u8005\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"--mount"),"\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --mount type=bind,source=/host/path,target=/container/path my_image\n")),(0,o.kt)("h4",{id:"\u9884\u5b9a\u4e49\u6570\u636e\u5377"},(0,o.kt)("strong",{parentName:"h4"},"\u9884\u5b9a\u4e49\u6570\u636e\u5377")),(0,o.kt)("p",null,"Docker\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9884\u5b9a\u4e49\u7684\u6570\u636e\u5377\uff0c\u7528\u4e8e\u65b9\u4fbf\u5730\u4e0e\u5bb9\u5668\u5171\u4eab\u6570\u636e\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"/var/lib/mysql")),"\uff1a\u7528\u4e8eMySQL\u5bb9\u5668\u7684\u6570\u636e\u76ee\u5f55\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"/var/lib/postgresql/data")),"\uff1a\u7528\u4e8ePostgreSQL\u5bb9\u5668\u7684\u6570\u636e\u76ee\u5f55\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"/var/lib/docker/volumes/")),"\uff1a\u7528\u4e8eDocker\u5f15\u64ce\u521b\u5efa\u7684\u533f\u540d\u6570\u636e\u5377\u7684\u9ed8\u8ba4\u4f4d\u7f6e\u3002")),(0,o.kt)("h4",{id:"\u6570\u636e\u5377\u7684\u7c7b\u578b"},(0,o.kt)("strong",{parentName:"h4"},"\u6570\u636e\u5377\u7684\u7c7b\u578b")),(0,o.kt)("p",null,"Docker\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u5377\uff0c\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4e3b\u673a\u6302\u8f7d\uff08Host-mounted\uff09"),"\uff1a\u5c06\u5bbf\u4e3b\u673a\u7684\u76ee\u5f55\u76f4\u63a5\u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\uff0c\u5bb9\u5668\u4e2d\u7684\u4fee\u6539\u4f1a\u76f4\u63a5\u53cd\u6620\u5230\u5bbf\u4e3b\u673a\u4e0a\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u533f\u540d\u5377"),"\uff1a\u7531Docker\u5f15\u64ce\u81ea\u52a8\u751f\u6210\u7684\u6570\u636e\u5377\uff0c\u7528\u4e8e\u5bb9\u5668\u95f4\u6570\u636e\u5171\u4eab\uff0c\u4f46\u4e0d\u6613\u8bc6\u522b\u548c\u7ba1\u7406\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5177\u540d\u5377"),"\uff1a\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"li"},"docker volume create"),"\u521b\u5efa\u7684\u5177\u6709\u540d\u79f0\u7684\u6570\u636e\u5377\uff0c\u6613\u4e8e\u7ba1\u7406\u548c\u8bc6\u522b\u3002")))}s.isMDXComponent=!0}}]);