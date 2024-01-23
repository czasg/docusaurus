"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5068],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,d=s["".concat(i,".").concat(m)]||s[m]||g[m]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"golang \u7684 CSP&GMP \u6a21\u578b",authors:["czasg"],tags:["golang"]},l=void 0,p={permalink:"/docusaurus/blog/2022/03/27/golang-GMP\u6a21\u578b",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/03-27-golang-GMP\u6a21\u578b/index.md",source:"@site/blog/2022/03-27-golang-GMP\u6a21\u578b/index.md",title:"golang \u7684 CSP&GMP \u6a21\u578b",description:"CSP",date:"2022-03-27T00:00:00.000Z",formattedDate:"March 27, 2022",tags:[{label:"golang",permalink:"/docusaurus/blog/tags/golang"}],readingTime:4.235,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"golang \u7684 CSP&GMP \u6a21\u578b",authors:["czasg"],tags:["golang"]},prevItem:{title:"golang \u9009\u9879\u6a21\u5f0f",permalink:"/docusaurus/blog/2022/03/28/golang\u9009\u9879\u6a21\u5f0f"},nextItem:{title:"\u8bb0\u4e00\u6b21pg\u8fc1\u79fbk8s\u7684\u5751\u70b9",permalink:"/docusaurus/blog/2022/03/25/\u8bb0\u4e00\u6b21pg\u8fc1\u79fbk8s\u7684\u5751\u70b9"}},i={authorsImageUrls:[void 0]},u=[{value:"CSP",id:"csp",level:2},{value:"GMP",id:"gmp",level:2},{value:"go \u521d\u59cb\u5316\u6d41\u7a0b",id:"go-\u521d\u59cb\u5316\u6d41\u7a0b",level:4},{value:"1.14 \u57fa\u4e8e\u4fe1\u53f7\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6",id:"114-\u57fa\u4e8e\u4fe1\u53f7\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6",level:2}],c={toc:u},s="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"csp"},"CSP"),(0,a.kt)("p",null,"CSP\uff08communicating sequential processes\uff09\uff0c\u662f golang \u63a8\u5d07\u7684\u4e00\u79cd\u5e76\u53d1\u6a21\u5f0f\uff0c\u5176\u4e2d\u6709\u4e00\u53e5\u6bd4\u8f83\u7ecf\u5178\u7684\u8bdd\u662f\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u4ee5\u5171\u4eab\u5185\u5b58\u7684\u65b9\u5f0f\u6765\u901a\u4fe1\uff0c\u76f8\u53cd\uff0c\u5e94\u8be5\u4ee5\u901a\u4fe1\u7684\u65b9\u5f0f\u6765\u5171\u4eab\u5185\u5b58\u3002")),(0,a.kt)("p",null,"\u5728\u5e38\u89c1\u7684\u591a\u7ebf\u7a0b\u5171\u4eab\u5185\u5b58\u7684\u6a21\u5f0f\u4e2d\uff0c\u5f53\u6d89\u53ca\u5230\u591a\u7ebf\u7a0b\u64cd\u4f5c\u5171\u4eab\u6570\u636e\u65f6\uff0c\u4e00\u822c\u9700\u8981\u901a\u8fc7\u52a0\u9501\u6765\u4fdd\u8bc1\u6570\u636e\u548c\u7ebf\u7a0b\u5b89\u5168\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","go \u5219\u5f15\u5165\u4e86 chan \u4fe1\u9053\uff0c\u53ef\u4ee5\u7528\u4e8e\u591a goroutine \u4e4b\u95f4\u7684\u901a\u4fe1\u3002"),(0,a.kt)("h2",{id:"gmp"},"GMP"),(0,a.kt)("p",null,"golang \u6267\u884c\u591a\u4efb\u52a1\u65f6\uff0c\u4f1a\u521b\u5efa\u591a\u4e2a\u7ebf\u7a0b\uff0c\u7136\u540e\u6709\u8c03\u5ea6\u5668\u4f1a\u5c06\u4efb\u52a1\u5355\u5143\u5206\u914d\u7ed9\u7ebf\u7a0b\u6267\u884c\uff0c\u8fd9\u79cd\u65b9\u5f0f\u662f\u4e00\u79cd\u5178\u578b\u7684\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u6a21\u5f0f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"G\uff1agoroutine\uff0c\u6b64\u5904\u6307\u534f\u7a0b\u3002\u5b83\u76f8\u5f53\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u7684\u8fdb\u7a0b\u63a7\u5236\u5757\uff0c\u5305\u542b\uff1a\u5bc4\u5b58\u5668\u3001\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u3001\u51fd\u6570\u6267\u884c\u6307\u4ee4\u7b49\u3002     "),(0,a.kt)("li",{parentName:"ul"},"M\uff1amachine\uff0c\u6b64\u5904\u6307\u5b9e\u9645\u7684\u5185\u6838\u7ebf\u7a0b\uff0c\u7528\u4e8e\u6267\u884c G\u3002    "),(0,a.kt)("li",{parentName:"ul"},"P\uff1aprocessor\uff0c\u6b64\u5904\u6307\u8c03\u5ea6\u5668\uff0c\u662f M \u6240\u9700\u8981\u7684\u4e0a\u4e0b\u6587\u73af\u5883\uff0c\u5185\u90e8\u7ef4\u62a4\u6709\u4e00\u4e2a\u672c\u5730\u961f\u5217\u3002\u5f53 P \u4e2d\u6709\u4efb\u52a1\u65f6\uff0c\u4f1a\u521b\u5efa\u6216\u8005\u5524\u9192 M \u53bb\u5904\u7406\u4efb\u52a1\u3002   "),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u961f\u5217\uff1aP \u7ef4\u62a4\u4e00\u4e2a\u672c\u5730\u961f\u5217\u6765\u5b58\u653e G\uff0c\u65b0\u521b\u5efa\u7684 G \u4f1a\u4f18\u5148\u5b58\u653e\u5728 P \u7684\u672c\u5730\u961f\u5217\uff0c\u5f53\u672c\u5730\u961f\u5217\u6ee1\u540e\uff0c\u4f1a\u653e\u5165\u5230\u5168\u5c40\u961f\u5217\u3002    "),(0,a.kt)("li",{parentName:"ul"},"\u5168\u5c40\u961f\u5217\uff1aM \u6267\u884c\u65f6\u4f1a\u5148\u4ece\u672c\u5730\u961f\u5217\u83b7\u53d6 G\uff0c\u672c\u5730\u6ca1\u6709\u5219\u53bb\u5168\u5c40\u961f\u5217\u83b7\u53d6\uff0c\u5982\u679c\u5168\u5c40\u961f\u5217\u4e5f\u6ca1\u6709\uff0c\u5219\u5c1d\u8bd5\u53bb\u5176\u4ed6 P \u7684\u672c\u5730\u961f\u5217\u53bb\u5077\u53d6\u4e00\u4e9b\u4efb\u52a1\u3002   "),(0,a.kt)("li",{parentName:"ul"},"M0\uff1a\u7a0b\u5e8f\u542f\u52a8\u540e\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u8d1f\u8d23\u542f\u52a8\u8d77\u4e00\u4e2a G0 \u5e76\u6267\u884c\u521d\u59cb\u5316\u64cd\u4f5c\uff0c\u5305\u542b\u521d\u59cb\u5316\u672c\u5730\u961f\u5217\u3001\u5168\u5c40\u961f\u5217\u7b49\uff0c\u542f\u52a8 G0 \u4e4b\u540e M0 \u5c31\u548c\u666e\u901a M \u4e00\u6837\u4e86\u3002"),(0,a.kt)("li",{parentName:"ul"},"G0\uff1a\u6bcf\u521b\u5efa\u4e00\u4e2a M\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a G0\uff0c\u8fd9\u91cc\u7684 G0 \u4ec5\u7528\u4e8e\u8d1f\u8d23\u8c03\u5ea6\u5176\u4ed6\u7684 G\u3002\u6bd4\u5982\u5f53 M \u4ece G1 \u5207\u6362\u81f3 G2\uff0c\u9996\u5148\u5e94\u8be5\u5207\u5230 G0\uff0c\u7136\u540e\u7531 G0 \u5e72\u6389 G1\uff0c\u518d\u628a G2 \u52a0\u8f7d\u8fdb\u6765\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(97820).Z,width:"837",height:"759"}),(0,a.kt)("br",{parentName:"p"}),"\n","1\u3001go \u521b\u5efa G\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","2\u3001\u5c06 G \u4fdd\u5b58\u5728\u672c\u5730\u961f\u5217\uff0c\u82e5\u672c\u5730\u961f\u5217\u6ee1\u4e86\uff0c\u5219\u4fdd\u5b58\u5230\u5168\u5c40\u961f\u5217\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","3\u3001P \u4e0e M \u7ed1\u5b9a\uff0cM \u6267\u884c\u672c\u5730\u961f\u5217\u4efb\u52a1 G\uff0c\u82e5\u672c\u5730\u961f\u5217\u4efb\u52a1\u6267\u884c\u5b8c\u6210\uff0c\u5219\u4ece\u5168\u5c40\u961f\u5217\u83b7\u53d6\u4efb\u52a1\uff0c\u82e5\u5168\u5c40\u961f\u5217\u4e5f\u6ca1\u6709\uff0c\u5219\u4ece\u5176\u4ed6 P \u7684\u672c\u5730\u961f\u5217\u4e2d\u5077\u53d6\u4e00\u534a\u4efb\u52a1\u6765\u6267\u884c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","4\u3001\u82e5 M \u6267\u884c\u671f\u95f4\u53d1\u751f\u7cfb\u7edf\u963b\u585e\uff0c\u6b64\u65f6 M \u4e0e P \u89e3\u7ed1\uff0cP \u5c06\u7533\u8bf7\u521b\u5efa\u65b0\u7684 M \u6216\u8005\u5524\u9192\u4f11\u7720\u7684 M \u91cd\u65b0\u7ed1\u5b9a\u4e0e\u6267\u884c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","5\u3001\u5f53 M \u6062\u590d\u65f6\uff0c\u4f1a\u5c1d\u8bd5\u83b7\u53d6\u4e00\u4e2a\u7a7a\u95f2\u7684 P\uff0c\u5982\u679c\u6ca1\u6709 P \u7a7a\u95f2\uff0cM \u5219\u8fdb\u5165\u4f11\u7720\uff0cG \u4f1a\u653e\u5165\u5230\u5168\u5c40\u961f\u5217\u3002  "),(0,a.kt)("h4",{id:"go-\u521d\u59cb\u5316\u6d41\u7a0b"},"go \u521d\u59cb\u5316\u6d41\u7a0b"),(0,a.kt)("p",null,"1\u3001\u521b\u5efa M0",(0,a.kt)("br",{parentName:"p"}),"\n","2\u3001\u521b\u5efa G0",(0,a.kt)("br",{parentName:"p"}),"\n","3\u3001\u7ed1\u5b9a M0 \u4e0e G0",(0,a.kt)("br",{parentName:"p"}),"\n","4\u3001\u6267\u884c\u521d\u59cb\u5316\u64cd\u4f5c",(0,a.kt)("br",{parentName:"p"}),"\n","5\u3001M0 \u6295\u5165\u4f7f\u7528\uff0c\u5c1d\u8bd5\u4e0e\u7a7a\u95f2 P \u7ed1\u5b9a   "),(0,a.kt)("h2",{id:"114-\u57fa\u4e8e\u4fe1\u53f7\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6"},"1.14 \u57fa\u4e8e\u4fe1\u53f7\u7684\u62a2\u5360\u5f0f\u8c03\u5ea6"),(0,a.kt)("p",null,"\u5f53\u6709\u5927\u91cf G \u4efb\u52a1\uff0c\u4e3a\u4e86\u8ba9\u6bcf\u4e2a\u4efb\u52a1\u90fd\u6709\u65f6\u95f4\u8fd0\u884c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"runtime.main")," \u4f1a\u521b\u5efa\u4e00\u4e2a\u989d\u5916\u7684 M \u6765\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"sysmon")," \u51fd\u6570\uff0c\u6765\u5b9e\u73b0\u76d1\u63a7\u4e0e\u62a2\u5360\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    runtime.GOMAXPROCS(1)\n    go func() {\n        fmt.Println("pass")\n    }\n    for {\n    }\n}\n')),(0,a.kt)("p",null,"\u5728 1.14 \u4e4b\u524d\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u5c06\u4e0d\u4f1a\u8f93\u51fa\u4efb\u4f55\u7ed3\u679c\uff0c\u56e0\u4e3a main \u4f1a\u5360\u7528\u5168\u90e8\u7684\u8ba1\u7b97\u8d44\u6e90\u3002   "),(0,a.kt)("br",null),(0,a.kt)("admonition",{title:"\ud83d\udc47\ud83d\udc47\ud83d\udc47",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d")))}g.isMDXComponent=!0},97820:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gmp-b4344ddfef7df6cef196627cd459e710.png"}}]);