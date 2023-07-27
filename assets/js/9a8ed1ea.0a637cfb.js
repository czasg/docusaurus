"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=r.createContext({}),p=function(e){var t=r.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(k.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,k=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,s=u["".concat(k,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(s,l(l({ref:t},c),{},{components:n})):r.createElement(s,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Network\u7f51\u7edc",sidebar_label:"Network\u7f51\u7edc",slug:"network"},l=void 0,i={unversionedId:"docker/Network\u7f51\u7edc",id:"docker/Network\u7f51\u7edc",title:"Network\u7f51\u7edc",description:"\u4ec0\u4e48\u662fDocker\u7f51\u7edc\uff1f",source:"@site/docs/develop/docker/8.Network\u7f51\u7edc.md",sourceDirName:"docker",slug:"/docker/network",permalink:"/docusaurus/docs/develop/docker/network",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/develop/docker/8.Network\u7f51\u7edc.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Network\u7f51\u7edc",sidebar_label:"Network\u7f51\u7edc",slug:"network"},sidebar:"tutorialSidebar",previous:{title:"Image\u955c\u50cf",permalink:"/docusaurus/docs/develop/docker/image"},next:{title:"Volume\u6570\u636e\u5377",permalink:"/docusaurus/docs/develop/docker/volume"}},k={},p=[{value:"\u4ec0\u4e48\u662fDocker\u7f51\u7edc\uff1f",id:"\u4ec0\u4e48\u662fdocker\u7f51\u7edc",level:3},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981Docker\u7f51\u7edc\uff1f",id:"\u4e3a\u4ec0\u4e48\u9700\u8981docker\u7f51\u7edc",level:3},{value:"\u7f51\u7edc\u7c7b\u578b",id:"\u7f51\u7edc\u7c7b\u578b",level:3},{value:"\u5173\u952e\u6280\u672f",id:"\u5173\u952e\u6280\u672f",level:3},{value:"\u540c\u7f51\u7edc\u4e0b\u5bb9\u5668\u901a\u4fe1",id:"\u540c\u7f51\u7edc\u4e0b\u5bb9\u5668\u901a\u4fe1",level:4},{value:"\u4e0d\u540c\u7f51\u7edc\u4e0b\u5bb9\u5668\u901a\u4fe1",id:"\u4e0d\u540c\u7f51\u7edc\u4e0b\u5bb9\u5668\u901a\u4fe1",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662fdocker\u7f51\u7edc"},"\u4ec0\u4e48\u662fDocker\u7f51\u7edc\uff1f"),(0,a.kt)("p",null,"\u5728 Docker \u4e2d\uff0c\u7f51\u7edc\uff08Network\uff09\u662f\u4e00\u79cd\u7528\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u5bb9\u5668\u95f4\u901a\u4fe1\u7684\u673a\u5236"),"\u3002"),(0,a.kt)("p",null,"Docker \u7f51\u7edc\u5141\u8bb8\u521b\u5efa\u865a\u62df\u7f51\u7edc\uff0c\u5bb9\u5668\u53ef\u4ee5\u8fde\u63a5\u5230\u8fd9\u4e9b\u865a\u62df\u7f51\u7edc\uff0c\u5e76\u901a\u8fc7\u7f51\u7edc\u8fdb\u884c\u901a\u4fe1\uff0c\u4e5f\u53ef\u4ee5\u4e0e\u5916\u90e8\u7f51\u7edc\u8fdb\u884c\u8fde\u63a5\u3002"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981docker\u7f51\u7edc"},"\u4e3a\u4ec0\u4e48\u9700\u8981Docker\u7f51\u7edc\uff1f"),(0,a.kt)("p",null,"Docker \u7f51\u7edc\u7684\u5b58\u5728\u89e3\u51b3\u4e86\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5bb9\u5668\u4e4b\u95f4\u901a\u4fe1"),"\uff1aDocker \u7f51\u7edc\u5141\u8bb8\u5728\u540c\u4e00\u4e3b\u673a\u4e0a\u7684\u5bb9\u5668\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\uff0c\u5bb9\u5668\u53ef\u4ee5\u901a\u8fc7\u865a\u62df\u7f51\u7edc\u76f4\u63a5\u76f8\u4e92\u8bbf\u95ee\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8de8\u4e3b\u673a\u901a\u4fe1"),"\uff1aDocker \u7f51\u7edc\u53ef\u4ee5\u8fde\u63a5\u5230\u591a\u53f0\u4e3b\u673a\uff0c\u4f7f\u5f97\u5206\u5e03\u5f0f\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5bb9\u5668\u53ef\u4ee5\u5728\u4e0d\u540c\u4e3b\u673a\u4e0a\u901a\u4fe1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9694\u79bb\u6027"),"\uff1a\u4e0d\u540c\u7684\u7f51\u7edc\u53ef\u4ee5\u9694\u79bb\u5bb9\u5668\uff0c\u4f7f\u5f97\u5bb9\u5668\u53ea\u80fd\u4e0e\u5176\u6240\u5728\u7f51\u7edc\u4e2d\u7684\u5176\u4ed6\u5bb9\u5668\u901a\u4fe1\uff0c\u63d0\u9ad8\u4e86\u5b89\u5168\u6027\u3002")),(0,a.kt)("h3",{id:"\u7f51\u7edc\u7c7b\u578b"},"\u7f51\u7edc\u7c7b\u578b"),(0,a.kt)("p",null,"Docker \u652f\u6301\u591a\u79cd\u7f51\u7edc\u7c7b\u578b\uff0c\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6865\u63a5\u7f51\u7edc\uff08Bridge Network\uff09"),"\uff1a\u8fd9\u662f Docker \u7684\u9ed8\u8ba4\u7f51\u7edc\u7c7b\u578b\u3002\u6865\u63a5\u7f51\u7edc\u4e3a\u6bcf\u4e2a\u5bb9\u5668\u5206\u914d\u4e00\u4e2a\u672c\u5730IP\uff0c\u5e76\u5c06\u5b83\u4eec\u8fde\u63a5\u5230\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"docker0"),"\u7684\u865a\u62df\u7f51\u6865\u3002\u5bb9\u5668\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u7f51\u6865\u76f8\u4e92\u901a\u4fe1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e3b\u673a\u7f51\u7edc\uff08Host Network\uff09"),"\uff1a\u5bb9\u5668\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u540c\u4e00\u4e2a\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0c\u8fd9\u4f7f\u5f97\u5bb9\u5668\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5bbf\u4e3b\u673a\u7684\u7f51\u7edc\u63a5\u53e3\u3002\u8fd9\u79cd\u7f51\u7edc\u7c7b\u578b\u9002\u7528\u4e8e\u9700\u8981\u6700\u5927\u6027\u80fd\u548c\u7f51\u7edc\u900f\u660e\u5ea6\u7684\u573a\u666f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8986\u76d6\u7f51\u7edc\uff08Overlay Network\uff09"),"\uff1a\u8986\u76d6\u7f51\u7edc\u5141\u8bb8\u5728\u591a\u53f0\u4e3b\u673a\u4e0a\u521b\u5efa\u4e00\u4e2a\u903b\u8f91\u7f51\u7edc\uff0c\u5bb9\u5668\u53ef\u4ee5\u8fde\u63a5\u5230\u8fd9\u4e2a\u903b\u8f91\u7f51\u7edc\uff0c\u5b9e\u73b0\u8de8\u4e3b\u673a\u901a\u4fe1\uff0c\u9002\u7528\u4e8e\u5206\u5e03\u5f0f\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Macvlan\u7f51\u7edc"),"\uff1aMacvlan\u7f51\u7edc\u5141\u8bb8\u5bb9\u5668\u5177\u6709\u81ea\u5df1\u7684MAC\u5730\u5740\uff0c\u8fd9\u4f7f\u5f97\u5bb9\u5668\u53ef\u4ee5\u5728\u7f51\u7edc\u4e2d\u8868\u73b0\u5f97\u50cf\u771f\u5b9e\u7684\u7269\u7406\u8bbe\u5907\uff0c\u9002\u7528\u4e8e\u4e00\u4e9b\u7279\u5b9a\u7684\u7f51\u7edc\u573a\u666f\u3002")),(0,a.kt)("h3",{id:"\u5173\u952e\u6280\u672f"},"\u5173\u952e\u6280\u672f"),(0,a.kt)("p",null,"Docker \u5173\u952e\u6280\u672f\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker0"),(0,a.kt)("li",{parentName:"ul"},"veth pair")),(0,a.kt)("p",null,"\u4e0b\u9762\u901a\u8fc7\u4e00\u4e2a\u5b9e\u9645\u7684\u4f8b\u5b50\u6765\u4ecb\u7ecd Docker \u7f51\u7edc\u5e95\u5c42\u539f\u7406\u3002"),(0,a.kt)("p",null,'\u5047\u8bbe\u6211\u4eec\u6709\u4e24\u4e2aDocker\u5bb9\u5668\uff0c\u5b83\u4eec\u5206\u522b\u662f"container1"\u548c"container2"\u3002\u6211\u4eec\u5c06\u4f7f\u7528',(0,a.kt)("inlineCode",{parentName:"p"},"docker run"),"\u547d\u4ee4\u6765\u521b\u5efa\u8fd9\u4e24\u4e2a\u5bb9\u5668\uff0c\u5e76\u89c2\u5bdf\u5b83\u4eec\u5728\u5e95\u5c42\u7f51\u7edc\u4e0a\u662f\u5982\u4f55\u8fde\u63a5\u7684\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa container1 \u5bb9\u5668")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --name container1 alpine /bin/sh\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa container2 \u5bb9\u5668")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --name container2 alpine /bin/sh\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86\u4e24\u4e2a Docker \u5bb9\u5668\u3002\u6211\u4eec\u5c06\u67e5\u770b\u5b83\u4eec\u7684\u7f51\u7edc\u914d\u7f6e\u548c\u5e95\u5c42\u539f\u7406\u3002"),(0,a.kt)("p",null,'\u9996\u5148\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b"container1"\u5bb9\u5668\u7684\u7f51\u7edc\u914d\u7f6e\uff1a'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec container1 ip addr show\n")),(0,a.kt)("p",null,"\u8fd9\u4f1a\u663e\u793a\u7c7b\u4f3c\u4ee5\u4e0b\u5185\u5bb9\u7684\u7f51\u7edc\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n     ...\n13: eth0@if14: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default\n    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n    inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u6765\u89e3\u91ca\u4e00\u4e0b\u4e0a\u9762\u7684\u8f93\u51fa\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lo"),"\uff1a\u4ee3\u8868\u56de\u73af\u63a5\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"eth0@if14"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"eth0"),"\u662f\u5bb9\u5668\u5185\u90e8\u7684\u7f51\u7edc\u63a5\u53e3\u540d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"if14"),"\u662f\u8be5\u63a5\u53e3\u7684\u7d22\u5f15\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"link/ether 02:42:ac:11:00:02"),"\uff1a\u5bb9\u5668\u5185\u90e8\u63a5\u53e3\u7684MAC\u5730\u5740\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inet 172.17.0.2/16"),"\uff1a\u5bb9\u5668\u5185\u90e8\u63a5\u53e3\u7684IP\u5730\u5740\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"lo"),"\uff08Loopback Interface\uff09\uff1a\n",(0,a.kt)("inlineCode",{parentName:"p"},"lo"),"\u662fLinux\u7cfb\u7edf\u4e2d\u7684\u56de\u73af\u63a5\u53e3\uff0c\u4e5f\u88ab\u79f0\u4e3a\u56de\u73af\u7f51\u7edc\u63a5\u53e3\u3002\u5b83\u662f\u5728\u672c\u5730\u4e3b\u673a\u4e0a\u8fdb\u884c\u7f51\u7edc\u901a\u4fe1\u7684\u865a\u62df\u63a5\u53e3\u3002\u56de\u73af\u63a5\u53e3\u7684IP\u5730\u5740\u901a\u5e38\u88ab\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"\uff0c\u662f\u672c\u5730\u4e3b\u673a\u81ea\u8eab\u7684\u5730\u5740\u3002\u56de\u73af\u63a5\u53e3\u7528\u4e8e\u5728\u672c\u5730\u4e3b\u673a\u4e0a\u8fdb\u884c\u7f51\u7edc\u901a\u4fe1\uff0c\u800c\u4e0d\u9700\u8981\u901a\u8fc7\u7269\u7406\u7f51\u7edc\u8bbe\u5907\u4f20\u8f93\u6570\u636e\u3002\u8fd9\u5bf9\u4e8e\u672c\u5730\u4e3b\u673a\u4e0a\u7684\u8fdb\u7a0b\u8fdb\u884c\u81ea\u6211\u901a\u4fe1\u548c\u6d4b\u8bd5\u975e\u5e38\u6709\u7528\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"eth0"),"\uff1a\n",(0,a.kt)("inlineCode",{parentName:"p"},"eth0"),"\u662fLinux\u7cfb\u7edf\u4e2d\u7684\u7269\u7406\u4ee5\u592a\u7f51\u63a5\u53e3\u7684\u547d\u540d\u3002\u5728Docker\u5bb9\u5668\u4e2d\uff0c\u6bcf\u4e2a\u5bb9\u5668\u90fd\u6709\u81ea\u5df1\u7684\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0c\u56e0\u6b64\u6bcf\u4e2a\u5bb9\u5668\u90fd\u4f1a\u6709\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"eth0"),"\u7684\u7f51\u7edc\u63a5\u53e3\u3002\u8fd9\u4e2a\u7f51\u7edc\u63a5\u53e3\u8fde\u63a5\u5230Docker\u7f51\u7edc\u6865",(0,a.kt)("inlineCode",{parentName:"p"},"docker0"),"\uff0c\u4ece\u800c\u4f7f\u5bb9\u5668\u80fd\u591f\u4e0e\u5176\u4ed6\u5bb9\u5668\u6216\u5bbf\u4e3b\u673a\u8fdb\u884c\u901a\u4fe1\u3002\u901a\u8fc7\u8fd9\u4e2a\u63a5\u53e3\uff0c\u5bb9\u5668\u53ef\u4ee5\u63a5\u6536\u6765\u81ea",(0,a.kt)("inlineCode",{parentName:"p"},"docker0"),"\u7f51\u7edc\u6865\u548c\u5176\u4ed6\u5bb9\u5668\u7684\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u53d1\u9001\u56de\u7ed9\u5b83\u4eec\u3002"))),(0,a.kt)("p",{parentName:"admonition"},"\u5728Docker\u5bb9\u5668\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"eth0"),"\u662f\u9ed8\u8ba4\u7684\u7f51\u7edc\u63a5\u53e3\uff0c\u7528\u4e8e\u8fde\u63a5\u5bb9\u5668\u4e0eDocker\u7f51\u7edc\u3002\u5f53\u5bb9\u5668\u542f\u52a8\u65f6\uff0cDocker\u4f1a\u4e3a\u6bcf\u4e2a\u5bb9\u5668\u521b\u5efa\u4e00\u4e2aveth\u5bf9\uff0c\u5176\u4e2d\u4e00\u4e2a\u7aef\u53e3\u8fde\u63a5\u5230\u5bb9\u5668\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"eth0"),"\uff0c\u53e6\u4e00\u4e2a\u7aef\u53e3\u8fde\u63a5\u5230\u5bbf\u4e3b\u673a\u7684Docker\u7f51\u7edc\u6865",(0,a.kt)("inlineCode",{parentName:"p"},"docker0"),"\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u5bb9\u5668\u80fd\u591f\u5728\u5bbf\u4e3b\u673a\u548c\u5176\u4ed6\u5bb9\u5668\u4e4b\u95f4\u8fdb\u884c\u7f51\u7edc\u901a\u4fe1\u3002")),(0,a.kt)("p",null,'\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u67e5\u770b"container2"\u5bb9\u5668\u7684\u7f51\u7edc\u914d\u7f6e\uff1a'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec container2 ip addr show\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n     ...\n13: eth0@if14: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default\n    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n    inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0\n       valid_lft forever preferred_lft forever\n")),(0,a.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u6ce8\u610f\u5230\uff0c\u4e24\u4e2a\u5bb9\u5668\u7684",(0,a.kt)("strong",{parentName:"p"},"MAC\u5730\u5740\u76f8\u540c\uff0c\u4f46IP\u5730\u5740\u4e0d\u540c"),"\u3002"),(0,a.kt)("admonition",{title:"MAC\u5730\u5740\u76f8\u540c",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u540c\u4e00\u4e3b\u673a\u4e0a\uff0c\u4e0d\u540c\u5bb9\u5668\u5171\u4eab\u5bbf\u4e3b\u673a\u7684\u7f51\u7edc\u8bbe\u5907\uff0c\u5982Docker\u7f51\u7edc\u6865docker0\u3002\u56e0\u6b64\uff0c\u5b83\u4eec\u7684\u7f51\u7edc\u63a5\u53e3\uff08eth0\uff09\u7684MAC\u5730\u5740\u76f8\u540c\u3002\u8fd9\u662f\u56e0\u4e3a\u5728\u5bbf\u4e3b\u673a\u7684\u7f51\u7edc\u5c42\u9762\u4e0a\uff0c\u5b83\u4eec\u901a\u8fc7veth\u5bf9\u4e0edocker0\u76f8\u8fde\uff0c\u5171\u4eab\u76f8\u540c\u7684\u7f51\u7edc\u6808\u548cMAC\u5730\u5740\u3002\u8fd9\u79cd\u5171\u4eab\u4e0d\u4f1a\u5bfc\u81f4\u51b2\u7a81\uff0c\u56e0\u4e3a\u5b83\u4eec\u5728\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u5185\u90e8\u7684\u9694\u79bb\u786e\u4fdd\u4e86\u5b83\u4eec\u4e4b\u95f4\u7684\u72ec\u7acb\u6027\u3002")),(0,a.kt)("admonition",{title:"IP\u5730\u5740\u4e0d\u540c",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53Docker\u5b88\u62a4\u8fdb\u7a0b\u5728\u542f\u52a8\u5bb9\u5668\u65f6\uff0c\u5b83\u4f1a\u4e3a\u6bcf\u4e2a\u5bb9\u5668\u5206\u914d\u4e00\u4e2a\u552f\u4e00\u7684IP\u5730\u5740\u3002\u8fd9\u4e9bIP\u5730\u5740\u662f\u4eceDocker\u5b88\u62a4\u8fdb\u7a0b\u7ba1\u7406\u7684\u79c1\u6709IP\u5730\u5740\u6bb5\u4e2d\u52a8\u6001\u5206\u914d\u7684\uff08\u4f8b\u5982\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528172.17.0.0/16\u7f51\u6bb5\uff09\u3002\u56e0\u6b64\uff0c\u4e24\u4e2a\u5bb9\u5668\u53ef\u4ee5\u6709\u4e0d\u540c\u7684IP\u5730\u5740\uff0c\u4ece\u800c\u4f7f\u5b83\u4eec\u80fd\u591f\u5728\u540c\u4e00\u4e3b\u673a\u4e0a\u76f8\u4e92\u901a\u4fe1\u800c\u4e0d\u4f1a\u53d1\u751f\u51b2\u7a81\u3002")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u6765\u4e86\u89e3veth\u5bf9\u7684\u6982\u5ff5\u3002\u5728\u4e0a\u8ff0\u4e24\u4e2a\u5bb9\u5668\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"eth0@if14"),"\u63a5\u53e3\u5b9e\u9645\u4e0a\u662f\u7531\u4e00\u4e2aveth\u5bf9\u8fde\u63a5\u7684\u3002veth\u5bf9\u662fLinux\u5185\u6838\u4e2d\u7684\u865a\u62df\u7f51\u7edc\u8bbe\u5907\uff0c\u5b83\u4eec\u4ee5\u5bf9\u7684\u65b9\u5f0f\u5b58\u5728\uff0c\u4e00\u4e2a\u7aef\u53e3\u8fde\u63a5\u5230\u5bb9\u5668\u5185\u90e8\uff0c\u53e6\u4e00\u4e2a\u7aef\u53e3\u8fde\u63a5\u5230\u5bbf\u4e3b\u673a\u7684Docker\u7f51\u7edc\u6865",(0,a.kt)("inlineCode",{parentName:"p"},"docker0"),"\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ip link show"),"\u547d\u4ee4\uff0c\u6211\u4eec\u53ef\u4ee5\u67e5\u770b\u5b83\u4eec\u7684\u5b58\u5728\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ip link show\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n14: veth25c0@if13: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default\n    link/ether fe:29:21:df:0f:0a brd ff:ff:ff:ff:ff:ff link-netnsid 1\n15: veth33c7@if13: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default\n    link/ether 82:0c:ad:4a:f8:7a brd ff:ff:ff:ff:ff:ff link-netnsid 2\n...\n")),(0,a.kt)("p",null,"\u5728\u4e0a\u8ff0\u8f93\u51fa\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"veth25c0"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"veth33c7"),"\u5c31\u662fveth\u5bf9\u7684\u4e00\u90e8\u5206\u3002\u5b83\u4eec\u4e0eDocker\u7f51\u7edc\u6865",(0,a.kt)("inlineCode",{parentName:"p"},"docker0"),"\u76f8\u8fde\uff0c\u5e76\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"link-netnsid"),"\u6307\u793a\u8fde\u63a5\u5230\u76f8\u5e94\u7684\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,'\u56e0\u6b64\uff0c"container1"\u548c"container2"\u5b9e\u9645\u4e0a\u901a\u8fc7\u8fd9\u4e24\u4e2aveth\u5bf9\u4e0e',(0,a.kt)("inlineCode",{parentName:"p"},"docker0"),"\u6865\u76f8\u8fde\uff0c\u5e76\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"docker0"),"\u6865\u8fde\u63a5\u5230\u5bbf\u4e3b\u673a\u7684\u7f51\u7edc\u3002"),(0,a.kt)("h4",{id:"\u540c\u7f51\u7edc\u4e0b\u5bb9\u5668\u901a\u4fe1"},"\u540c\u7f51\u7edc\u4e0b\u5bb9\u5668\u901a\u4fe1"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u6848\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\u5728\u540c\u7f51\u7edc\u73af\u5883\u4e0b\uff0c\u4e0d\u540c\u5bb9\u5668\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7\uff08docker0\uff09\u7f51\u6865\u8fdb\u884c\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"\u6b64\u65f6\uff0c\u8be5\u7f51\u7edc\u4e0b\u7684\u5bb9\u5668IP\u5730\u5740\u4e0d\u540c\uff0cMAC\u5730\u5740\u76f8\u540c\uff0c\u76f8\u4e92\u4e4b\u95f4\u53ef\u4ee5\u901a\u4fe1\u3002"),(0,a.kt)("h4",{id:"\u4e0d\u540c\u7f51\u7edc\u4e0b\u5bb9\u5668\u901a\u4fe1"},"\u4e0d\u540c\u7f51\u7edc\u4e0b\u5bb9\u5668\u901a\u4fe1"),(0,a.kt)("p",null,"\u5728\u4e0d\u540c\u7684\u7f51\u7edc\u4e0b\uff0c\u6bcf\u4e00\u4e2a\u7f51\u7edc\u90fd\u6709\u7c7b\u4f3c\u7684 docker0 \u7f51\u6865\uff0c\u5728\u4e0d\u540c\u7f51\u7edc\u4e0b\u8fd0\u884c\u7684\u5bb9\u5668\uff0c\u4e5f\u90fd\u901a\u8fc7 veth\u5bf9\u6280\u672f\u548c\u7f51\u6865\u6253\u901a\u3002"),(0,a.kt)("p",null,"\u7406\u8bba\u4e0a\u4e0d\u540c\u7f51\u7edc\u4e4b\u95f4\u7684\u5bb9\u5668\u662f\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u7684\uff0c\u4f46\u53d7\u9650\u4e8e\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u6280\u672f\u7684\u9694\u79bb\u6027\uff0c\u4e0d\u540c\u7f51\u7edc\u4e4b\u95f4\u7684\u7f51\u6865\uff0c\u662f\u65e0\u6cd5\u4e92\u76f8\u53d1\u73b0\u7684\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u8981\u5b9e\u73b0\u4e0d\u540c\u7f51\u54af\u4e0b\u7684\u5bb9\u5668\u901a\u4fe1\uff0c\u5e94\u8be5\u91c7\u53d6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u5171\u4eab\u7f51\u7edc"),"\uff1a\n\u901a\u8fc7\u5c06\u5bb9\u5668\u8fde\u63a5\u5230\u591a\u4e2a\u7f51\u7edc\uff0c\u5305\u62ec\u4e0d\u540c\u7684\u7f51\u7edc\uff0c\u4f7f\u5f97\u5b83\u4eec\u53ef\u4ee5\u5728\u591a\u4e2a\u7f51\u7edc\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5728Docker\u547d\u4ee4\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"--network"),"\u9009\u9879\u8fde\u63a5\u591a\u4e2a\u7f51\u7edc\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("p",{parentName:"li"},"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u7f51\u7edcnetwork1\u548cnetwork2\ndocker network create network1\ndocker network create network2\n\n# \u5728network1\u4e2d\u521b\u5efa\u5bb9\u5668container1\ndocker run -d --name container1 --network network1 your_image\n\n# \u5728network2\u4e2d\u521b\u5efa\u5bb9\u5668container2\uff0c\u5e76\u8fde\u63a5\u5230network1\ndocker run -d --name container2 --network network2 --network network1 your_image\n")),(0,a.kt)("p",{parentName:"li"},"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\u8fde\u63a5\u5230\u4e86\u4e24\u4e2a\u7f51\u7edc",(0,a.kt)("inlineCode",{parentName:"p"},"network1"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"network2"),"\uff0c\u8fd9\u6837\u5b83\u5c31\u53ef\u4ee5\u548c\u8fd9\u4e24\u4e2a\u7f51\u7edc\u4e2d\u7684\u5bb9\u5668\u901a\u4fe1\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7f51\u7edc"),"\uff1a\n\u4f7f\u7528Docker\u7684\u81ea\u5b9a\u4e49\u7f51\u7edc\u529f\u80fd\uff0c\u5c06\u9700\u8981\u901a\u4fe1\u7684\u5bb9\u5668\u8fde\u63a5\u5230\u540c\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7f51\u7edc\u4e2d\uff0c\u4ece\u800c\u4f7f\u5b83\u4eec\u5904\u4e8e\u76f8\u540c\u7684\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u4fe1\u3002"),(0,a.kt)("p",{parentName:"li"},"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u81ea\u5b9a\u4e49\u7f51\u7edcmynetwork\ndocker network create mynetwork\n\n# \u5728mynetwork\u4e2d\u521b\u5efa\u5bb9\u5668container1\u548ccontainer2\ndocker run -d --name container1 --network mynetwork your_image\ndocker run -d --name container2 --network mynetwork your_image\n")),(0,a.kt)("p",{parentName:"li"},"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"container1"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"container2"),"\u90fd\u8fde\u63a5\u5230\u4e86\u540c\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7f51\u7edc",(0,a.kt)("inlineCode",{parentName:"p"},"mynetwork"),"\uff0c\u5b83\u4eec\u5904\u4e8e\u76f8\u540c\u7684\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\uff0c\u56e0\u6b64\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u901a\u4fe1\u3002"))))}d.isMDXComponent=!0}}]);