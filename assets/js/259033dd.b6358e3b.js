"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1551],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>N});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),k=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},o=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),m=k(l),c=r,N=m["".concat(p,".").concat(c)]||m[c]||d[c]||a;return l?n.createElement(N,i(i({ref:t},o),{},{components:l})):n.createElement(N,i({ref:t},o))}));function N(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[m]="string"==typeof e?e:r,i[1]=u;for(var k=2;k<a;k++)i[k]=l[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},5067:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>k});var n=l(7462),r=(l(7294),l(3905));const a={title:"Go \u9898\u5e93"},i=void 0,u={unversionedId:"recruit-guide/golang",id:"recruit-guide/golang",title:"Go \u9898\u5e93",description:"\u6211\u6709\u8475\u82b1\u5b9d\u5178\u4f60\u8981\u4e0d\u8981\ud83d\ude02",source:"@site/docs/recruit-guide/2.golang.md",sourceDirName:"recruit-guide",slug:"/recruit-guide/golang",permalink:"/docusaurus/docs/recruit-guide/golang",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/recruit-guide/2.golang.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Go \u9898\u5e93"},sidebar:"defaultSidebar",previous:{title:"\u6c9f\u901a\u6280\u5de7",permalink:"/docusaurus/docs/recruit-guide/communicate-skill"},next:{title:"Python \u9898\u5e93",permalink:"/docusaurus/docs/recruit-guide/python"}},p={},k=[{value:"\u5982\u4f55\u7406\u89e3\u534f\u7a0b",id:"\u5982\u4f55\u7406\u89e3\u534f\u7a0b",level:3},{value:"\u5982\u4f55\u5b9e\u73b0\u679a\u4e3e",id:"\u5982\u4f55\u5b9e\u73b0\u679a\u4e3e",level:3},{value:"\u5982\u4f55\u7c7b\u578b\u8f6c\u5316",id:"\u5982\u4f55\u7c7b\u578b\u8f6c\u5316",level:3},{value:"\u7a7a\u7ed3\u6784\u4f53\u6709\u4ec0\u4e48\u7279\u70b9",id:"\u7a7a\u7ed3\u6784\u4f53\u6709\u4ec0\u4e48\u7279\u70b9",level:3},{value:"\u5207\u7247\u6269\u5bb9\u673a\u5236",id:"\u5207\u7247\u6269\u5bb9\u673a\u5236",level:3},{value:"\u5982\u4f55\u9ad8\u6548\u5730\u62fc\u63a5\u5b57\u7b26\u4e32",id:"\u5982\u4f55\u9ad8\u6548\u5730\u62fc\u63a5\u5b57\u7b26\u4e32",level:3},{value:"\u4ec0\u4e48\u573a\u666f\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732",id:"\u4ec0\u4e48\u573a\u666f\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732",level:3},{value:"\u4ec0\u4e48\u573a\u666f\u4f1a\u5bfc\u81f4\u534f\u7a0b\u6cc4\u9732",id:"\u4ec0\u4e48\u573a\u666f\u4f1a\u5bfc\u81f4\u534f\u7a0b\u6cc4\u9732",level:3},{value:"new\u4e0emake\u7684\u533a\u522b",id:"new\u4e0emake\u7684\u533a\u522b",level:3},{value:"int\u7c7b\u578b\u5360\u51e0\u4e2a\u5b57\u8282",id:"int\u7c7b\u578b\u5360\u51e0\u4e2a\u5b57\u8282",level:3},{value:"\u4ecb\u7ecdUnicode\u7f16\u7801\u4e0erune\u7c7b\u578b",id:"\u4ecb\u7ecdunicode\u7f16\u7801\u4e0erune\u7c7b\u578b",level:2},{value:"\u503c\u4f20\u9012\u548c\u5f15\u7528\u4f20\u9012",id:"\u503c\u4f20\u9012\u548c\u5f15\u7528\u4f20\u9012",level:3},{value:"\u7ed3\u6784\u4f53\u6253\u5370 %v %+v %#v",id:"\u7ed3\u6784\u4f53\u6253\u5370-v-v-v",level:3},{value:"\u4ec0\u4e48\u662f\u9003\u9038\u5206\u6790",id:"\u4ec0\u4e48\u662f\u9003\u9038\u5206\u6790",level:3},{value:"GC\u673a\u5236",id:"gc\u673a\u5236",level:3},{value:"GMP\u6a21\u578b",id:"gmp\u6a21\u578b",level:3},{value:"\u7ed3\u6784\u4f53\u5982\u4f55\u8f93\u51fa\u65e5\u5fd7",id:"\u7ed3\u6784\u4f53\u5982\u4f55\u8f93\u51fa\u65e5\u5fd7",level:3},{value:"\u5751\u70b9-\u4e2d\u6587\u957f\u5ea6\u8ba1\u7b97",id:"\u5751\u70b9-\u4e2d\u6587\u957f\u5ea6\u8ba1\u7b97",level:3},{value:"\u5751\u70b9-slice",id:"\u5751\u70b9-slice",level:3},{value:"\u5751\u70b9-defer",id:"\u5751\u70b9-defer",level:3},{value:"\u5751\u70b9-for range",id:"\u5751\u70b9-for-range",level:3},{value:"\u5751\u70b9-\u5bf9\u6bd4interface",id:"\u5751\u70b9-\u5bf9\u6bd4interface",level:3}],o={toc:k},m="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6211\u6709\u8475\u82b1\u5b9d\u5178\u4f60\u8981\u4e0d\u8981\ud83d\ude02"),(0,r.kt)("h3",{id:"\u5982\u4f55\u7406\u89e3\u534f\u7a0b"},"\u5982\u4f55\u7406\u89e3\u534f\u7a0b"),(0,r.kt)("p",null,"\u534f\u7a0b\uff08Goroutine\uff09\u662f\u7528\u6237\u6001\u8f7b\u91cf\u7ea7\u7ebf\u7a0b\u3002\u76f8\u6bd4\u4e8e\u7ebf\u7a0b\uff0c\u5b83\u7684\u8c03\u5ea6\u5b8c\u5168\u5728\u7528\u6237\u6001\uff0c\u6240\u4ee5\u4f1a\u5927\u5927\u51cf\u5c11\u7cfb\u7edf\u8c03\u5ea6\u7684\u5f00\u9500\u3002"),(0,r.kt)("p",null,"\u5728Go\u4e2d\uff0c\u53ea\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," \u5173\u952e\u5b57\u5c31\u53ef\u4ee5\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u534f\u7a0b\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a Goroutine \u4f1a\u4ee5\u4e00\u4e2a\u5f88\u5c0f\u7684\u6808\u542f\u52a8\uff0c\u5927\u6982\u53ea\u9700\u8981\u82b1\u8d39 2~4KB \u7684\u5185\u5b58\uff0c\u56e0\u6b64\u53ef\u4ee5\u8f7b\u6613\u5b9e\u73b0\u6210\u5343\u4e0a\u4e07\u4e2a Goroutine \u540c\u65f6\u542f\u52a8\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5982\u4f55\u5b9e\u73b0\u679a\u4e3e"},"\u5982\u4f55\u5b9e\u73b0\u679a\u4e3e"),(0,r.kt)("p",null,"\u57fa\u4e8e iota \u5b9e\u73b0\u679a\u4e3e\uff0c\u9ed8\u8ba4\u4ece0\u5f00\u59cb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    B = 1 << (10 * iota)\n    KiB \n    MiB\n    GiB\n    TiB\n    PiB\n    EiB\n)\n")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5982\u4f55\u7c7b\u578b\u8f6c\u5316"},"\u5982\u4f55\u7c7b\u578b\u8f6c\u5316"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," \u7c7b\u578b\u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"interface.(type)")," \u8fdb\u884c\u7c7b\u578b\u8f6c\u5316\u3002\n\u8fd9\u79cd\u5c5e\u4e8e\u5f3a\u5236\u7c7b\u578b\u8f6c\u5316\uff0c\u8f6c\u5316\u4e0d\u540c\u7c7b\u578b\u503c\u65f6\u662f\u4f1a\u62a5\u9519\u7684\uff0c\u6240\u4ee5\u8fd8\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"_, ok = interface.(type)")," \u8fd4\u56de\u4e24\u4e2a\u53c2\u6570\uff0c\n\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5e03\u5c14\u7c7b\u578b\uff0c\u7528\u4e8e\u5224\u65ad\u662f\u5426\u6b63\u786e\u8f6c\u5316\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," \u7ed3\u6784\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," \u7a7a\u503c\u6765\u58f0\u660e\u8f6c\u5316\u7c7b\u578b\u3002\u4e00\u822c\u7528\u4e8e\u5224\u65ad\u7ed3\u6784\u4f53\u662f\u5426\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," \u63a5\u53e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Interface interface{}\n\ntype Struct struct {}\n\nvar _ Interface = (*Struct)(nil)\n")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u7a7a\u7ed3\u6784\u4f53\u6709\u4ec0\u4e48\u7279\u70b9"},"\u7a7a\u7ed3\u6784\u4f53\u6709\u4ec0\u4e48\u7279\u70b9"),(0,r.kt)("p",null,"\u7a7a\u7ed3\u6784\u4f53",(0,r.kt)("inlineCode",{parentName:"p"},"struct{}"),"\u672c\u8eab\u4e0d\u5360\u4efb\u4f55\u7a7a\u95f4\uff0c\u4e5f\u4e0d\u4f1a\u5206\u914d\u5185\u5b58\uff0c\u5e38\u7528\u4e8e\u5360\u4f4d\u7b26\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5207\u7247\u6269\u5bb9\u673a\u5236"},"\u5207\u7247\u6269\u5bb9\u673a\u5236"),(0,r.kt)("p",null,"Go1.18 \u4e4b\u524d\u5207\u7247\u7684\u6269\u5bb9\u662f\u4ee5 1024 \u4e3a\u4e34\u754c\u70b9\uff0c\u5373\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53\u5bb9\u91cf\u5c0f\u4e8e 1024 \u65f6\uff0c\u6269\u5bb9\u4e00\u500d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u5bb9\u91cf\u5927\u4e8e 1024 \u65f6\uff0c\u6269\u5bb9\u56db\u5206\u4e4b\u4e00\u3002")),(0,r.kt)("p",null,"Go1.18\u5f00\u59cb\u5f15\u5165\u4e86\u66f4\u5e73\u6ed1\u7684\u673a\u5236\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5982\u4f55\u9ad8\u6548\u5730\u62fc\u63a5\u5b57\u7b26\u4e32"},"\u5982\u4f55\u9ad8\u6548\u5730\u62fc\u63a5\u5b57\u7b26\u4e32"),(0,r.kt)("p",null,'strings.Join \u2248 strings.Builder > bytes.Buffer > "+" > fmt.Sprintf'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"strings.Builder"),"\uff1a",(0,r.kt)("strong",{parentName:"li"},"\u57fa\u4e8e\u6307\u9488\u4e0e\u5207\u7247"),"\uff0c\u76f4\u63a5\u628a[]byte\u8f6c\u6362\u4e3astring\uff0c\u4ece\u800c",(0,r.kt)("strong",{parentName:"li"},"\u907f\u514d\u53d8\u91cf\u62f7\u8d1d"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"strings.Join"),"\uff1a\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"strings.Builder"),"\uff0c\u4e14\u4f18\u5316\u4e86\u5207\u7247\u7a7a\u95f4\u6027\u80fd\u66f4\u9ad8\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+"),"\uff1a\u4f1a\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u904d\u5386\uff0c\u8ba1\u7b97\u5e76",(0,r.kt)("strong",{parentName:"li"},"\u5f00\u8f9f\u4e00\u4e2a\u65b0\u7684\u7a7a\u95f4"),"\u6765\u5b58\u50a8\u539f\u6765\u7684\u4e24\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fmt.Sprintf"),"\uff1a",(0,r.kt)("strong",{parentName:"li"},"\u57fa\u4e8e\u53cd\u5c04\u5b9e\u73b0"),"\uff0c\u6709\u4e00\u5b9a\u6027\u80fd\u635f\u8017\u3002")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u4ec0\u4e48\u573a\u666f\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732"},"\u4ec0\u4e48\u573a\u666f\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732"),(0,r.kt)("p",null,"Go \u662f\u4e00\u79cd\u81ea\u5e26\u5185\u5b58\u7ba1\u7406\uff08GC\uff09\u673a\u5236\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u8fd9\u610f\u5473\u7740\u901a\u5e38\u6211\u4eec\u4e0d\u9700\u8981\u624b\u52a8\u7ba1\u7406\u5185\u5b58\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u4ecd\u7136\u6709\u4e9b\u60c5\u51b5\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732\u3002\u4e00\u822c\u5185\u5b58\u6cc4\u9732\u573a\u666f\u5927\u6982\u7387\u662f\u8d44\u6e90\u7ba1\u7406\u4e0d\u5f53\uff0c\u6216\u8005\u7b97\u6cd5\u5b9e\u73b0\u5bfc\u81f4\u7684\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u91ca\u653e\u8d44\u6e90\uff1a\u4f8b\u5982\u6253\u5f00\u6587\u4ef6\u3001\u7f51\u7edc\u8fde\u63a5\u7b49\u8d44\u6e90\uff0c\u4f46\u6ca1\u6709\u53ca\u65f6\u7684\u5173\u95ed\u3002\u90a3\u8fd9\u4e9b\u8d44\u6e90\u4f1a\u4e00\u76f4\u5360\u7528\u5185\u5b58\uff0c\u8fdb\u800c\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5927\u91cf\u5b57\u7b26\u4e32\u62fc\u63a5\uff1a\u5728 Go \u4e2d\u5b57\u7b26\u4e32\u662f\u4e0d\u53ef\u53d8\u5bf9\u8c61\u3002\u56e0\u6b64\u6bcf\u6b21\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u62fc\u63a5\u64cd\u4f5c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\u3002\u4e00\u65e6\u5728\u67d0\u4e2a\u5faa\u73af\u4e2d\u8fdb\u884c\u5927\u91cf\u5b57\u7b26\u4e32\u62fc\u63a5\u64cd\u4f5c\uff0c\u5c06\u521b\u5efa\u5927\u91cf\u4e34\u65f6\u5b57\u7b26\u4e32\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732\u3002\u4e00\u822c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"string.Builder")," \u89e3\u51b3\u3002")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u4ec0\u4e48\u573a\u666f\u4f1a\u5bfc\u81f4\u534f\u7a0b\u6cc4\u9732"},"\u4ec0\u4e48\u573a\u666f\u4f1a\u5bfc\u81f4\u534f\u7a0b\u6cc4\u9732"),(0,r.kt)("p",null,"Go \u534f\u7a0b\u6cc4\u9732\u662f\u6307\u534f\u7a0b\u542f\u52a8\u540e\uff0c\u65e0\u6cd5\u88ab\u53ca\u65f6\u6b63\u786e\u5730\u5173\u95ed\u6216\u91ca\u653e\uff0c\u4ece\u800c\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732\u6216\u5176\u4ed6\u8d44\u6e90\u6cc4\u9732\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u53ef\u80fd\u5bfc\u81f4 Go \u534f\u7a0b\u6cc4\u9732\u7684\u573a\u666f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u534f\u7a0b\u65e0\u6cd5\u6b63\u5e38\u9000\u51fa\uff1a\u5f53\u4e00\u4e2a\u534f\u7a0b\u88ab\u542f\u52a8\u540e\uff0c\u5982\u679c\u6ca1\u6709\u88ab\u6b63\u786e\u5173\u95ed\u6216\u6ca1\u6709\u5728\u9002\u5f53\u7684\u65f6\u5019\u9000\u51fa\uff0c\u90a3\u4e48\u8be5\u534f\u7a0b\u4f1a\u4e00\u76f4\u5b58\u5728\u5e76\u5360\u636e\u8d44\u6e90\uff0c\u8fdb\u800c\u5bfc\u81f4\u8d44\u6e90\u6cc4\u9732\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u534f\u7a0b\u4e4b\u95f4\u7684\u5faa\u73af\u5f15\u7528\uff1a\u5f53\u591a\u4e2a\u534f\u7a0b\u4e4b\u95f4\u5f62\u6210\u5faa\u73af\u5f15\u7528\u65f6\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u53ef\u80fd\u5bfc\u81f4\u65e0\u6cd5\u91ca\u653e\u76f8\u5173\u8d44\u6e90\uff0c\u4ece\u800c\u5bfc\u81f4\u6cc4\u9732\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u64cd\u4f5c\u8d85\u65f6\u6216\u963b\u585e\uff1a\u5f53\u4e00\u4e2a\u534f\u7a0b\u6267\u884c\u4e00\u4e2a\u7f51\u7edc\u64cd\u4f5c\u65f6\uff0c\u5982\u679c\u8be5\u64cd\u4f5c\u8d85\u65f6\u6216\u88ab\u963b\u585e\uff0c\u90a3\u4e48\u8be5\u534f\u7a0b\u53ef\u80fd\u4f1a\u4e00\u76f4\u5b58\u5728\uff0c\u5bfc\u81f4\u6cc4\u9732\u3002")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"new\u4e0emake\u7684\u533a\u522b"},"new\u4e0emake\u7684\u533a\u522b"),(0,r.kt)("p",null,"\u9996\u5148\u662f\u5206\u914d\u5bf9\u8c61\u4e0a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"new")," \u7528\u4e8e\u5206\u914d\u4efb\u4f55\u7c7b\u578b\u7684\u5185\u5b58\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make")," \u53ea\u80fd\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"slice /map / chan")," \u7684\u521d\u59cb\u5316\u3002")),(0,r.kt)("p",null,"\u5176\u6b21\u662f\u8fd4\u56de\u7c7b\u578b\u4e0d\u540c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"new")," \u8fd4\u56de\u7684\u6307\u9488\u6307\u5411\u5206\u914d\u7684\u5185\u5b58\u7a7a\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"make")," \u8fd4\u56de\u4e00\u4e2a\u5df2\u7ecf\u521d\u59cb\u5316\u7684\u5f15\u7528\u7c7b\u578b\u3002")),(0,r.kt)("p",null,"\u7b80\u5355\u8bf4\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u7528\u4e8e\u5206\u914d\u5185\u5b58\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u5185\u5b58\u5730\u5740\u7684\u6307\u9488\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"make")," \u53ef\u7528\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"slice/map/chan"),"\u7684\u521d\u59cb\u5316\uff0c\u8fd4\u56de\u7684\u662f\u76f8\u5173\u7684\u5f15\u7528\u3002  "),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"int\u7c7b\u578b\u5360\u51e0\u4e2a\u5b57\u8282"},"int\u7c7b\u578b\u5360\u51e0\u4e2a\u5b57\u8282"),(0,r.kt)("p",null,"int\u7c7b\u578b\u901a\u5e38\u5360\u636e4\u5404\u5b57\u8282\u6216\u80058\u5404\u5b57\u8282\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u662f32\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0cint\u7c7b\u578b\u7684\u5927\u5c0f\u5c31\u662f4\u5b57\u8282\u3002   "),(0,r.kt)("p",null,"\u5982\u679c\u662f64\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0cint\u7c7b\u578b\u7684\u5927\u5c0f\u5c31\u662f8\u4e2a\u5b57\u8282\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u4ecb\u7ecdunicode\u7f16\u7801\u4e0erune\u7c7b\u578b"},"\u4ecb\u7ecdUnicode\u7f16\u7801\u4e0erune\u7c7b\u578b"),(0,r.kt)("p",null,"Unicode \u662f\u4e00\u79cd\u5b57\u7b26\u7f16\u7801\u6807\u51c6\uff0c\u5b83\u4e3a\u4e16\u754c\u4e0a\u7684\u6240\u6709\u5b57\u7b26\u5206\u914d\u4e86\u552f\u4e00\u7684\u6570\u5b57\u6807\u8bc6\uff0c\u5e76\u89c4\u5b9a\u4e86\u8fd9\u4e9b\u7801\u70b9\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u65b9\u5f0f\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u540c\u65f6\uff0cUnicode \u4e5f\u662f\u4e00\u4e2a\u591a\u5b57\u8282\u7f16\u7801\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5b57\u7b26\u7684\u7f16\u7801\u957f\u5ea6\u53ef\u4ee5\u662f 1 \u5230 4 \u4e2a\u5b57\u8282\u3002"),(0,r.kt)("p",null,"rune \u7c7b\u578b\u662f Go \u4e2d 32 \u4f4d\u7684 Unicode \u5b57\u7b26\u7f16\u7801\u503c\u3002\u5b83\u53ef\u4ee5\u8868\u793a\u4efb\u4f55 Unicode \u5b57\u7b26\uff0c\u5305\u62ec ASCII \u548c\u4e2d\u6587\u7b49\u3002"),(0,r.kt)("p",null,"\u5728 Go \u4e2d\uff0c\u5b57\u7b26\u4e32\u9ed8\u8ba4\u662f\u4ee5 UTF-8 \u7f16\u7801\u5b58\u50a8\u7684\uff0c\u5373\u53ef\u4ee5\u7406\u89e3\u4e3a\u5b57\u7b26\u4e32\u662f\u7531\u4e00\u7cfb\u5217 Unicode \u5b57\u7b26\u7ec4\u6210\u7684\u3002\n\u800c UTF-8 \u662f Unicode \u7684\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0crune \u7c7b\u578b\u662f Go \u4e2d\u8868\u793a Unicode \u5b57\u7b26\u7684\u5e38\u7528\u7c7b\u578b\u4e4b\u4e00\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u503c\u4f20\u9012\u548c\u5f15\u7528\u4f20\u9012"},"\u503c\u4f20\u9012\u548c\u5f15\u7528\u4f20\u9012"),(0,r.kt)("p",null,"\u5728 Go \u4e2d\uff0c\u51fd\u6570\u53c2\u6570\u4f20\u9012\u53ef\u4ee5\u662f\u503c\u4f20\u9012\u6216\u5f15\u7528\u4f20\u9012\u3002"),(0,r.kt)("p",null,"\u5f53\u53c2\u6570\u901a\u8fc7\u503c\u4f20\u9012\u4f20\u9012\u7ed9\u51fd\u6570\u65f6\uff0c\u51fd\u6570\u5c06\u4f1a\u5bf9\u53c2\u6570\u7684\u4e00\u4e2a\u526f\u672c\u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u4e0d\u4f1a\u5f71\u54cd\u539f\u59cb\u53c2\u6570\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u5f53\u53c2\u6570\u901a\u8fc7\u5f15\u7528\u7c7b\u578b\u4f20\u9012\u7ed9\u51fd\u6570\u65f6\uff0c\u51fd\u6570\u63a5\u6536\u8be5\u53d8\u91cf\u7684\u5730\u5740\uff0c\u5e76\u4f7f\u7528\u8be5\u5730\u5740\u64cd\u4f5c\u53d8\u91cf\u3002\n\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u51fd\u6570\u4fee\u6539\u4e86\u8be5\u53d8\u91cf\u7684\u503c\uff0c\u5219\u539f\u59cb\u53d8\u91cf\u7684\u503c\u4e5f\u4f1a\u53d7\u5230\u5f71\u54cd\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u7ed3\u6784\u4f53\u6253\u5370-v-v-v"},"\u7ed3\u6784\u4f53\u6253\u5370 %v %+v %#v"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"%v\uff1a\u8f93\u51fa\u7ed3\u6784\u4f53\u5404\u6210\u5458\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"%+v\uff1a\u8f93\u51fa\u7ed3\u6784\u4f53\u5404\u6210\u5458\u7684\u540d\u79f0\u548c\u503c"),(0,r.kt)("li",{parentName:"ul"},"%#v\uff1a\u8f93\u51fa\u7ed3\u6784\u4f53\u540d\u79f0\u548c\u7ed3\u6784\u4f53\u5404\u6210\u5458\u7684\u540d\u79f0\u4e0e\u503c")),(0,r.kt)("h3",{id:"\u4ec0\u4e48\u662f\u9003\u9038\u5206\u6790"},"\u4ec0\u4e48\u662f\u9003\u9038\u5206\u6790"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9003\u9038\u5206\u6790"),"\u662f\u7528\u4e8e\u5206\u6790\u53d8\u91cf\u58f0\u660e\u5468\u671f\u7684\u6280\u672f\u3002"),(0,r.kt)("p",null,"\u5728 Go \u4e2d\uff0c\u6bcf\u4e2a\u53d8\u91cf\u90fd\u5206\u914d\u5230\u5806\u6216\u8005\u6808\u4e0a\u3002\u9003\u9038\u5206\u6790\u7528\u4e8e\u786e\u5b9a\u53d8\u91cf\u662f\u5426\u4ece\u5806\u9003\u9038\u5230\u6808\u4e0a\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e00\u65e6\u53d8\u91cf\u9003\u9038\u5230\u6808\u4e0a\uff0c\u5219\u9700\u8981\u8fdb\u884c\u989d\u5916\u7684\u5185\u5b58\u5206\u914d\u548c\u5783\u573e\u56de\u6536\uff0c\u8fd9\u6837\u4f1a\u5bf9\u6027\u80fd\u4ea7\u751f\u4e00\u5b9a\u5f71\u54cd\u3002   "),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u9003\u9038\u5206\u6790\u662f Go \u4e2d\u4e00\u9879\u91cd\u8981\u7684\u4f18\u5316\u6280\u672f\uff0c\u53ef\u4ee5\u63d0\u9ad8 Go \u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u6548\u7387\u3002"),(0,r.kt)("p",null,"Go \u8bed\u8a00\u7684\u9003\u9038\u5206\u6790\u53ef\u4ee5\u901a\u8fc7\u5728\u7f16\u8bd1\u65f6\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"-gcflags=-m")," \u6807\u5fd7\u6765\u542f\u7528\u3002\neg\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"go build -gcflags '-m -m -l' xxx.go")),(0,r.kt)("p",null,"\u4e00\u822c\u9003\u9038\u7684\u573a\u666f\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u5927\u5c0f\u4e0d\u786e\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u7c7b\u578b\u4e0d\u786e\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u5206\u914d\u5185\u5b58\u8d85\u8fc7\u7528\u6237\u6808\u6700\u5927\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u66b4\u9732\u7ed9\u4e86\u5916\u90e8\u6307\u9488")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gc\u673a\u5236"},"GC\u673a\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go1.3 \u91c7\u7528\u6807\u8bb0\u6e05\u9664\u6cd5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u9636\u6bb5\uff1a\u4ece\u6839\u5bf9\u8c61\u51fa\u53d1\u5bfb\u627e\u5e76\u6807\u8bb0\u6240\u6709\u5b58\u6d3b\u7684\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u6e05\u695a\u9636\u6bb5\uff1a\u904d\u5386\u5806\u4e2d\u7684\u5bf9\u8c61\uff0c\u56de\u6536\u672a\u6807\u8bb0\u7684\u5bf9\u8c61\uff0c\u5e76\u52a0\u5165\u7a7a\u95f2\u94fe\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u7b80\u5355"),(0,r.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u6027\u80fd\u635f\u8017\u5927\uff0c\u9700\u8981STW"))),(0,r.kt)("li",{parentName:"ul"},"Go1.5 \u91c7\u7528\u4e09\u8272\u6807\u8bb0\u6cd5\uff0c\u5c06\u5bf9\u8c61\u6807\u8bb0\u4e3a\u767d\u8272\uff0c\u7070\u8272\u6216\u9ed1\u8272",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u767d\u8272\uff1a\u4e0d\u786e\u8ba4\u5bf9\u8c61\uff08\u9ed8\u8ba4\u8272\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u7070\u8272\uff1a\u5b58\u6d3b\u5bf9\u8c61\uff0c\u5b50\u5bf9\u8c61\u5f85\u786e\u8ba4"),(0,r.kt)("li",{parentName:"ul"},"\u9ed1\u8272\uff1a\u5df2\u786e\u8ba4\u7684\u5b58\u6d3b\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u6d41\u7a0b\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u5f00\u59cb\u65f6\uff0c\u5148\u5c06\u6240\u6709\u5bf9\u8c61\u52a0\u5165\u767d\u8272\u96c6\u5408\uff08\u9700\u8981STW\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9996\u5148\u5c06\u6839\u5bf9\u8c61\u6807\u8bb0\u4e3a\u7070\u8272\uff0c\u7136\u540e\u5c06\u4e00\u4e2a\u5bf9\u8c61\u4ece\u7070\u8272\u96c6\u5408\u53d6\u51fa\uff0c\u904d\u5386\u5176\u5b50\u5bf9\u8c61\uff0c\u653e\u5165\u7070\u8272\u96c6\u5408\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u540c\u65f6\u5c06\u53d6\u51fa\u7684\u5bf9\u8c61\u653e\u5165\u9ed1\u8272\u96c6\u5408\uff0c\u76f4\u5230\u7070\u8272\u96c6\u5408\u4e3a\u7a7a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u540e\u7684\u767d\u8272\u96c6\u5408\u5bf9\u8c61\u5c31\u662f\u9700\u8981\u6e05\u7406\u7684\u5bf9\u8c61\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u4f18\u7f3a\u70b9\uff1a\u5982\u679c\u5bf9\u8c61\u7684\u5f15\u7528\u88ab\u7528\u6237\u4fee\u6539\u4e86\uff0c\u90a3\u4e48\u4e4b\u524d\u7684\u6807\u8bb0\u5c31\u65e0\u6548\u4e86\u3002\u56e0\u6b64Go\u91c7\u7528\u4e86\u5199\u5c4f\u969c\u6280\u672f\uff0c\u5f53\u5bf9\u8c61\u65b0\u589e\u6216\u8005\u66f4\u65b0\u4f1a\u5c06\u5176\u7740\u8272\u4e3a\u7070\u8272\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u5b8c\u6574\u7684GC\u5206\u4e3a\u56db\u4e2a\u9636\u6bb5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u51c6\u5907\u6807\u8bb0\uff08\u9700\u8981STW\uff09\uff0c\u5f00\u542f\u5199\u5c4f\u969c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u6807\u8bb0"),(0,r.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u7ed3\u675f\uff08STW\uff09\uff0c\u5173\u95ed\u5199\u5c4f\u969c"),(0,r.kt)("li",{parentName:"ul"},"\u6e05\u7406\uff08\u5e76\u53d1\uff09"))))),(0,r.kt)("li",{parentName:"ul"},"Go1.8 \u91c7\u7528\u4e09\u8272\u6807\u8bb0\u6cd5+\u6df7\u5408\u5199\u5c4f\u969c\u3002\u4f18\u5316\u63d2\u5165\u5199\u5c4f\u969c\u548c\u5220\u9664\u5199\u5c4f\u969c\u5728\u7ed3\u675f\u65f6\u9700\u8981STW\u6765\u91cd\u65b0\u626b\u63cf\u6808\u5e26\u6765\u6027\u80fd\u74f6\u9888",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GC\u5f00\u59cb\u65f6\uff0c\u5c06\u6808\u4e0a\u7684\u5168\u90e8\u5bf9\u8c61\u6807\u8bb0\u4e3a\u9ed1\u8272\uff08\u4e0d\u9700\u8981\u4e8c\u6b21\u626b\u63cf\uff0c\u65e0\u9700STW\uff09\uff1b"),(0,r.kt)("li",{parentName:"ul"},"GC\u671f\u95f4\uff0c\u4efb\u4f55\u6808\u4e0a\u521b\u5efa\u7684\u65b0\u5bf9\u8c61\u5747\u4e3a\u9ed1\u8272"),(0,r.kt)("li",{parentName:"ul"},"\u88ab\u5220\u9664\u5f15\u7528\u7684\u5bf9\u8c61\u6807\u8bb0\u4e3a\u7070\u8272"),(0,r.kt)("li",{parentName:"ul"},"\u88ab\u6dfb\u52a0\u5f15\u7528\u7684\u5bf9\u8c61\u6807\u8bb0\u4e3a\u7070\u8272")))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gmp\u6a21\u578b"},"GMP\u6a21\u578b"),(0,r.kt)("p",null,"Go \u7684 GMP \u6a21\u578b\u662f",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u79cd\u7528\u4e8e\u5b9e\u73b0\u5e76\u53d1\u7684\u6a21\u578b"),"\u3002\u5b83\u5305\u542b\u4e09\u79cd\u4e0d\u540c\u7684\u89d2\u8272\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"G\uff08Goroutine\uff09\uff1aGoroutine \u662f Go \u8bed\u8a00\u4e2d\u7684\u8f7b\u91cf\u7ea7\u7ebf\u7a0b\uff0c\u4e5f\u662f\u6b64\u5e76\u53d1\u6a21\u578b\u4e2d\u7684\u6700\u5c0f\u8c03\u5ea6\u5355\u4f4d\u3002"),(0,r.kt)("li",{parentName:"ul"},"M\uff08Machine\uff09\uff1aMachine \u662f Go \u8bed\u8a00\u4e2d\u7684\u6267\u884c\u7ebf\u7a0b\u3002\u5b83\u8d1f\u8d23\u8fd0\u884c Goroutine\u3002"),(0,r.kt)("li",{parentName:"ul"},"P\uff08Processor\uff09\uff1aProcessor \u662f Go \u8bed\u8a00\u4e2d\u7684\u5904\u7406\u5668\u3002\u5b83\u8d1f\u8d23\u7ba1\u7406\u4e00\u7ec4 M \u5e76\u5c06 G \u5206\u914d\u7ed9\u5b83\u4eec\u8fd0\u884c\u3002\u6bcf\u4e00\u4e2a P \u90fd\u7ef4\u62a4\u6709\u672c\u5730\u961f\u5217\uff0c\u6b64\u5916\u8fd8\u5171\u4eab\u4e00\u4e2a\u5168\u5c40\u961f\u5217\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u961f\u5217\uff1a\u5f53\u524d P \u72ec\u4eab\uff0c\u7528\u4e8e\u5b58\u50a8\u5f53\u524d\u6b63\u5728\u6267\u884c\u6216\u7b49\u5f85\u6267\u884c\u7684 G\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5168\u5c40\u961f\u5217\uff1a\u6240\u6709 P \u5171\u4eab\uff0c\u7528\u4e8e\u5b58\u50a8\u7b49\u5f85\u6267\u884c\u7684 G\u3002")))),(0,r.kt)("p",null,"\u5728 GMP \u6a21\u578b\u4e2d\uff0c\u5f53\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," \u6307\u4ee4\u521b\u5efa\u4e00\u4e2a Goroutine \u65f6\uff0c\u5b83\u4f1a\u88ab\u653e\u5165\u5f53\u524d\u7ebf\u7a0b\u7684\u672c\u5730\u961f\u5217\u3002\u5f53\u672c\u5730\u961f\u5217\u4e2d Goroutine \u6570\u91cf\u8fbe\u5230\u4e00\u5b9a\u7a0b\u5ea6\uff0c\n\u6216\u8005\u67d0\u4e2a Goroutine \u6267\u884c\u65f6\u95f4\u8fc7\u957f\u65f6\uff0c\u4f1a\u89e6\u53d1\u5f53\u524d\u7ebf\u7a0b\u4e3b\u52a8\u5c06\u672c\u5730\u961f\u5217\u4e2d\u4e00\u90e8\u5206 Goroutine \u79fb\u52a8\u5230\u5168\u5c40\u961f\u5217\u4e2d\u3002"),(0,r.kt)("p",null,"\u5f53\u672c\u5730\u961f\u5217\u4e3a\u7a7a\u65f6\uff0cP \u4f1a\u4ece\u5168\u5c40\u961f\u5217\u4e2d\u83b7\u53d6 Goroutine\uff0c\u5c06\u5176\u52a0\u5165\u5230\u81ea\u5df1\u7684\u672c\u5730\u961f\u5217\u4e2d\u6267\u884c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u5168\u5c40\u961f\u5217\u4e3a\u7a7a\uff0cP \u4f1a\u4ece\u5176\u4ed6 P \u4e2d\u6309\u7167 stealing \u7b97\u6cd5\u5077\u53d6\u4e00\u5b9a\u4efb\u52a1\u6267\u884c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u5176\u4ed6 P \u5747\u65e0\u4efb\u52a1\uff0c\u90a3\u4e48\u7ebf\u7a0b\u4f1a\u8fdb\u5165\u4f11\u7720\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u4e2a\u4eba\u8ba4\u4e3a GMP \u6a21\u578b\u7684\u6700\u5927\u4eae\u70b9\uff0c\u662f\u5728\u7528\u6237\u6001\u5b8c\u6210\u4e86\u6240\u6709\u4efb\u52a1\u7684\u8c03\u5ea6\uff0c\u76f8\u6bd4\u8f83\u4e8e\u591a\u7ebf\u7a0b\u6a21\u578b\uff0c\u5927\u5927\u51cf\u5c11\u4e86\u5185\u6838\u6001\u7ebf\u7a0b\u8c03\u5ea6\u7684\u5f00\u9500\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u7ed3\u6784\u4f53\u5982\u4f55\u8f93\u51fa\u65e5\u5fd7"},"\u7ed3\u6784\u4f53\u5982\u4f55\u8f93\u51fa\u65e5\u5fd7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"%v\uff1a\u8f93\u51fa\u7ed3\u6784\u4f53\u5404\u6210\u5458\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"%+v\uff1a\u8f93\u51fa\u7ed3\u6784\u4f53\u5404\u6210\u5458\u7684\u540d\u79f0\u548c\u503c"),(0,r.kt)("li",{parentName:"ul"},"%#v\uff1a\u8f93\u51fa\u7ed3\u6784\u4f53\u540d\u79f0\u548c\u7ed3\u6784\u4f53\u5404\u6210\u5458\u7684\u540d\u79f0\u4e0e\u503c")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5751\u70b9-\u4e2d\u6587\u957f\u5ea6\u8ba1\u7b97"},"\u5751\u70b9-\u4e2d\u6587\u957f\u5ea6\u8ba1\u7b97"),(0,r.kt)("p",null,"\u5728 Go \u4e2d\uff0c\u5b57\u7b26\u4e32\u5e95\u5c42\u4f7f\u7528\u7684 byte \u5e8f\u5217\u5b58\u50a8\uff0c\u800c byte \u4ec5\u5360\u636e\u4e00\u4e2a\u5b57\u8282\uff0c\u4e00\u4e9b\u4e2d\u6587\u5b57\u7b26\u5219\u9700\u8981\u5360\u636e 2~4 \u4e2a\u5b57\u8282\u3002\n\u6545\u6211\u4eec\u76f4\u63a5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"len(string)")," \u51fd\u6570\u8ba1\u7b97\u4e00\u4e2a\u5b57\u7b26\u4e32\u957f\u5ea6\u65f6\uff0c\u4f1a\u5f97\u5230\u610f\u60f3\u4e0d\u5230\u7684\u7ed3\u679c\uff0c\u56e0\u4e3a\u5b9e\u9645\u7edf\u8ba1\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"[]byte")," \u7684\u957f\u5ea6\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5305\u542b\u4e2d\u6587\u7684\u5b57\u7b26\u4e32\uff0c\u7edf\u8ba1\u65b9\u6cd5\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u5316\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"[]rune")," \u7c7b\u578b\u5728\u8ba1\u7b97\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"utf8.RuneCountInString(string)")," \u6765\u83b7\u53d6\u957f\u5ea6\u3002")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5751\u70b9-slice"},"\u5751\u70b9-slice"),(0,r.kt)("p",null,"slice \u5e95\u5c42\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5728\u53d1\u9001\u6269\u5bb9\u524d\uff0c\u5207\u7247\u4f1a\u590d\u7528\u540c\u4e00\u4e2a\u5e95\u5c42\u6570\u7ec4\uff0c\u6240\u4ee5\u53ef\u80fd\u5b58\u5728\u591a\u4e2a\u5207\u7247\u76f8\u4e92\u4fee\u6539\u6570\u636e\u7684\u5751\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5751\u70b9-defer"},"\u5751\u70b9-defer"),(0,r.kt)("p",null,"defer \u662f Go \u7684\u4e00\u5927\u7279\u8272\uff0c\u4e5f\u53eb\u5ef6\u8fdf\u51fd\u6570\u3002\u5176\u7279\uff08\u5751\uff09\u70b9\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u540e\u8fdb\u5148\u51fa"),(0,r.kt)("li",{parentName:"ul"},"\u5165\u53c2\u5728\u6267\u884c\u65f6\u786e\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"\u5177\u540d\u53c2\u6570\uff0c\u53ef\u4ee5\u88ab\u5ef6\u8fdf\u51fd\u6570\u4fee\u6539",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u975e\u5177\u540d\u8fd4\u56de\uff0c\u4f1a\u521b\u5efa\u4e34\u65f6\u53d8\u91cf\u5b58\u50a8\u7ed3\u679c"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5177\u540d\u53c2\u6570\u8fd4\u56de\uff0c\u5219\u4e0d\u4f1a\u521b\u5efa\u4e34\u65f6\u53d8\u91cf")))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5751\u70b9-for-range"},"\u5751\u70b9-for range"),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"for range"),"\uff0c\u5176\u7279\uff08\u5751\uff09\u70b9\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u526f\u672c\u3002\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"for range")," \u8fd4\u56de\u7684\u503c\u5e76\u4e0d\u662f\u539f\u59cb\u6570\u636e\uff0c\u800c\u662f\u526f\u672c\uff0c\u5bf9\u4e8e\u9700\u8981\u4fee\u6539\u6570\u636e\u7684\u573a\u666f\uff0c\u76f4\u63a5\u4fee\u6539\u526f\u672c\u662f\u4e0d\u751f\u6548\u7684\uff0c\u800c\u9700\u8981\u76f4\u63a5\u64cd\u4f5c\u539f\u59cb\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," \u5360\u4f4d\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5faa\u73af\u53d8\u91cf\u91cd\u590d\u5f15\u7528\u3002\u64cd\u4f5c\u6307\u9488\u7c7b\u578b\u6570\u636e\u65f6\u8981\u989d\u5916\u5c0f\u5fc3\u3002")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5751\u70b9-\u5bf9\u6bd4interface"},"\u5751\u70b9-\u5bf9\u6bd4interface"),(0,r.kt)("p",null,"interface \u5e95\u5c42\u7ed3\u6784\u5305\u542b\u503c\u7c7b\u578b\u548c\u6307\u9488\u3002\u4e0d\u7528\u7c7b\u578b\u7684\u503c\u505a\u5bf9\u6bd4\uff0c\u53ef\u80fd\u4f1a\u6709\u610f\u60f3\u4e0d\u5230\u7684\u7ed3\u679c\u3002"))}d.isMDXComponent=!0}}]);