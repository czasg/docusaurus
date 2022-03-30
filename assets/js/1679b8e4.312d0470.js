"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3997],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1215:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={title:"golang\u6d4b\u8bd5\u68b3\u7406",authors:["czasg"],tags:["golang"]},c=void 0,u={permalink:"/docusaurus/blog/2022/03/23/golang\u6d4b\u8bd5\u68b3\u7406",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/03-23-golang\u6d4b\u8bd5\u68b3\u7406/index.md",source:"@site/blog/2022/03-23-golang\u6d4b\u8bd5\u68b3\u7406/index.md",title:"golang\u6d4b\u8bd5\u68b3\u7406",description:"\u5355\u5143\u6d4b\u8bd5 flag",date:"2022-03-23T00:00:00.000Z",formattedDate:"March 23, 2022",tags:[{label:"golang",permalink:"/docusaurus/blog/tags/golang"}],readingTime:1.745,truncated:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],prevItem:{title:"make\u548cnew\u4e4b\u95f4\u7684\u533a\u522b",permalink:"/docusaurus/blog/2022/03/24/make\u548cnew\u4e4b\u95f4\u7684\u533a\u522b"},nextItem:{title:"\u8bb0\u4e00\u6b21\u5173\u4e8e httpClient \u7684\u5751\u70b9",permalink:"/docusaurus/blog/2022/03/22/\u8bb0\u4e00\u6b21\u5173\u4e8ehttpClient\u7684\u5751\u70b9"}},p={authorsImageUrls:[void 0]},m=[{value:"\u5355\u5143\u6d4b\u8bd5 flag",id:"\u5355\u5143\u6d4b\u8bd5-flag",children:[{value:"-bench regexp",id:"-bench-regexp",children:[],level:4},{value:"-benchtime t",id:"-benchtime-t",children:[],level:4},{value:"-count n",id:"-count-n",children:[],level:4},{value:"-cover",id:"-cover",children:[],level:4},{value:"-covermode set,count,atomic",id:"-covermode-setcountatomic",children:[],level:4},{value:"-cpu",id:"-cpu",children:[],level:4},{value:"-failfast",id:"-failfast",children:[],level:4},{value:"-timeout",id:"-timeout",children:[],level:4},{value:"-benchmem",id:"-benchmem",children:[],level:4},{value:"-coverprofile cover.out",id:"-coverprofile-coverout",children:[],level:4},{value:"-cpuprofile cpu.out",id:"-cpuprofile-cpuout",children:[],level:4},{value:"-memprofile",id:"-memprofile",children:[],level:4}],level:2}],s={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5355\u5143\u6d4b\u8bd5-flag"},"\u5355\u5143\u6d4b\u8bd5 flag"),(0,l.kt)("h4",{id:"-bench-regexp"},"-bench regexp"),(0,l.kt)("p",null,"\u6267\u884c\u57fa\u51c6\u6d4b\u8bd5\uff0c\u540e\u9762\u53ef\u4ee5\u63a5\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5982\u679c\u9700\u8981\u6267\u884c\u5168\u90e8\u7684\u57fa\u51c6\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"-bench=.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func Benchmark(b *testing.B) {\n    b.ResetTimer()\n    for i := 0; i < b.N; i++ {\n    }\n}\n")),(0,l.kt)("h4",{id:"-benchtime-t"},"-benchtime t"),(0,l.kt)("p",null,"\u57fa\u51c6\u6d4b\u8bd5\u7684\u6301\u7eed\u65f6\u95f4\uff0c\u9ed8\u8ba4\u662f 1s\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"-benchtime=1h30s")),(0,l.kt)("h4",{id:"-count-n"},"-count n"),(0,l.kt)("p",null,"\u57fa\u51c6\u6d4b\u8bd5\u7684\u6267\u884c\u6b21\u6570\uff0c\u9ed8\u8ba4\u4ec5\u6267\u884c\u4e00\u6b21\u3002"),(0,l.kt)("h4",{id:"-cover"},"-cover"),(0,l.kt)("p",null,"\u7528\u4e8e\u5206\u6790\u5e76\u8f93\u51fa\u5355\u5143\u6d4b\u8bd5\u8986\u76d6\u7387\u3002"),(0,l.kt)("h4",{id:"-covermode-setcountatomic"},"-covermode set,count,atomic"),(0,l.kt)("p",null,"\u5355\u5143\u6d4b\u8bd5\u7684\u8986\u76d6\u7387\u5206\u6790\u6a21\u5f0f\u3002\u9ed8\u8ba4\u5206\u6790\u6a21\u5f0f\u662f set\uff0c\u5f53\u4f7f\u7528 -race \u65f6\uff0c\u5219\u5206\u6790\u6a21\u5f0f\u53d8\u4e3a atomic\u3002"),(0,l.kt)("p",null,"set\uff1a\u54ea\u4e00\u884c\u4ee3\u7801\u88ab\u6267\u884c\u4e86\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","count\uff1a\u54ea\u884c\u4ee3\u7801\u88ab\u6267\u884c\u4e86\uff0c\u4e14\u88ab\u6267\u884c\u4e86\u591a\u5c11\u6b21\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","atomic\uff1a\u7c7b\u4f3c count\uff0c\u4f46\u662f\u4f1a\u591a\u7ebf\u7a0b\u5e76\u53d1\u68c0\u6d4b\uff0c\u5b58\u5728\u5e76\u53d1\u51b2\u7a81\u65f6\u4f1a\u62a5\u9519\u3002  "),(0,l.kt)("h4",{id:"-cpu"},"-cpu"),(0,l.kt)("p",null,"\u6307\u5b9a GOMAXPROCS"),(0,l.kt)("h4",{id:"-failfast"},"-failfast"),(0,l.kt)("p",null,"\u5f53\u6d4b\u8bd5\u5931\u8d25\u65f6\u7acb\u5373\u9000\u51fa\u5f53\u524d\u6d4b\u8bd5\uff0c\u800c\u4e0d\u662f\u7ee7\u7eed\u6267\u884c\u5269\u4e0b\u7684\u6d4b\u8bd5\u3002"),(0,l.kt)("h4",{id:"-timeout"},"-timeout"),(0,l.kt)("p",null,"\u5355\u4e2a\u5355\u5143\u6d4b\u8bd5\u6267\u884c\u7684\u6700\u957f\u65f6\u95f4\uff0c\u9ed8\u8ba4\u662f 10 \u5206\u949f"),(0,l.kt)("h4",{id:"-benchmem"},"-benchmem"),(0,l.kt)("p",null,"\u8f93\u51fa\u57fa\u51c6\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u5185\u5b58\u7684\u5206\u914d\u4e0e\u7edf\u8ba1\u3002"),(0,l.kt)("h4",{id:"-coverprofile-coverout"},"-coverprofile cover.out"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u8fc7\u7a0b\u8986\u76d6\u7387\u60c5\u51b5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="\u53ef\u89c6\u5316\u5355\u5143\u6d4b\u8bd5\u8986\u76d6\u7387"',script:!0,title:'"\u53ef\u89c6\u5316\u5355\u5143\u6d4b\u8bd5\u8986\u76d6\u7387"'},"go tool cover -html=cover.out\n")),(0,l.kt)("h4",{id:"-cpuprofile-cpuout"},"-cpuprofile cpu.out"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u8fc7\u7a0b cpu \u8c03\u5ea6\u60c5\u51b5"),(0,l.kt)("h4",{id:"-memprofile"},"-memprofile"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u8fc7\u7a0b\u5185\u5b58\u4f7f\u7528\u60c5\u51b5"),(0,l.kt)("br",null),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg\n",(0,l.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d"))))}d.isMDXComponent=!0}}]);