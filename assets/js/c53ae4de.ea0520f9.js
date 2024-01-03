"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2785],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),k=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=k(e.components);return o.createElement(a.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},s=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=k(t),s=n,f=d["".concat(a,".").concat(s)]||d[s]||p[s]||c;return t?o.createElement(f,l(l({ref:r},u),{},{components:t})):o.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=s;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var k=2;k<c;k++)l[k]=t[k];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},615:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>k});var o=t(7462),n=(t(7294),t(3905));const c={title:"Docker \u9898\u5e93",sidebar_label:"Docker \u9898\u5e93",slug:"docker",description:"Docker \u9898\u5e93"},l=void 0,i={unversionedId:"interview-guide/docker\u9898\u5e93",id:"interview-guide/docker\u9898\u5e93",title:"Docker \u9898\u5e93",description:"Docker \u9898\u5e93",source:"@site/docs/office/interview-guide/20.docker\u9898\u5e93.md",sourceDirName:"interview-guide",slug:"/interview-guide/docker",permalink:"/docusaurus/docs/office/interview-guide/docker",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/interview-guide/20.docker\u9898\u5e93.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Docker \u9898\u5e93",sidebar_label:"Docker \u9898\u5e93",slug:"docker",description:"Docker \u9898\u5e93"},sidebar:"tutorialSidebar",previous:{title:"Kafka \u9898\u5e93",permalink:"/docusaurus/docs/office/interview-guide/kafka"},next:{title:"K8S \u9898\u5e93",permalink:"/docusaurus/docs/office/interview-guide/k8s"}},a={},k=[{value:"Docker \u662f\u4ec0\u4e48\uff1f",id:"docker-\u662f\u4ec0\u4e48",level:3},{value:"Docker \u6709\u4ec0\u4e48\u4f18\u70b9\uff1f",id:"docker-\u6709\u4ec0\u4e48\u4f18\u70b9",level:3},{value:"Docker \u5bb9\u5668\u548c\u865a\u62df\u673a\u6709\u4ec0\u4e48\u533a\u522b\uff1f",id:"docker-\u5bb9\u5668\u548c\u865a\u62df\u673a\u6709\u4ec0\u4e48\u533a\u522b",level:3},{value:"\u5982\u4f55\u6784\u5efa Docker \u955c\u50cf\uff1f",id:"\u5982\u4f55\u6784\u5efa-docker-\u955c\u50cf",level:3},{value:"\u5982\u4f55\u8fd0\u884c Docker \u5bb9\u5668\uff1f",id:"\u5982\u4f55\u8fd0\u884c-docker-\u5bb9\u5668",level:3},{value:"\u5982\u4f55\u7ba1\u7406 Docker \u5bb9\u5668\uff1f",id:"\u5982\u4f55\u7ba1\u7406-docker-\u5bb9\u5668",level:3},{value:"\u5982\u4f55\u5b9e\u73b0\u5bb9\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\uff1f",id:"\u5982\u4f55\u5b9e\u73b0\u5bb9\u5668\u4e4b\u95f4\u7684\u901a\u4fe1",level:3},{value:"\u5982\u4f55\u5728\u5bb9\u5668\u4e2d\u5b58\u50a8\u6570\u636e\uff1f",id:"\u5982\u4f55\u5728\u5bb9\u5668\u4e2d\u5b58\u50a8\u6570\u636e",level:3},{value:"Docker\u7684\u6838\u5fc3\u6280\u672f\u662f\u4ec0\u4e48",id:"docker\u7684\u6838\u5fc3\u6280\u672f\u662f\u4ec0\u4e48",level:3},{value:"\u5982\u4f55\u7406\u89e3Docker\u955c\u50cf",id:"\u5982\u4f55\u7406\u89e3docker\u955c\u50cf",level:3},{value:"\u5982\u4f55\u7406\u89e3Docker\u7f51\u7edc",id:"\u5982\u4f55\u7406\u89e3docker\u7f51\u7edc",level:3},{value:"\u591a\u9636\u6bb5\u7f16\u8bd1",id:"\u591a\u9636\u6bb5\u7f16\u8bd1",level:3}],u={toc:k},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Docker \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5bb9\u5668\u5316\u5e73\u53f0\uff0c\u5b83\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u5c06\u5e94\u7528\u7a0b\u5e8f\u53ca\u5176\u4f9d\u8d56\u9879\u6253\u5305\u5728\u8f7b\u91cf\u7ea7\u7684\u5bb9\u5668\u4e2d\uff0c\u4ee5\u4fbf\u5728\u4e0d\u540c\u7684\u73af\u5883\u4e2d\u8f7b\u677e\u90e8\u7f72\u548c\u8fd0\u884c\u3002Docker \u63d0\u4f9b\u4e86\u4e00\u79cd\u6807\u51c6\u5316\u7684\u65b9\u5f0f\u6765\u6784\u5efa\u3001\u90e8\u7f72\u548c\u7ba1\u7406\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.kt)("h3",{id:"docker-\u662f\u4ec0\u4e48"},"Docker \u662f\u4ec0\u4e48\uff1f"),(0,n.kt)("p",null,"   Docker \u662f\u4e00\u4e2a\u5bb9\u5668\u5316\u5e73\u53f0\uff0c\u5b83\u5141\u8bb8\u5c06\u5e94\u7528\u7a0b\u5e8f\u53ca\u5176\u4f9d\u8d56\u9879\u6253\u5305\u5728\u8f7b\u91cf\u7ea7\u7684\u5bb9\u5668\u4e2d\uff0c\u4ee5\u4fbf\u5728\u4e0d\u540c\u7684\u73af\u5883\u4e2d\u8f7b\u677e\u90e8\u7f72\u548c\u8fd0\u884c\u3002"),(0,n.kt)("h3",{id:"docker-\u6709\u4ec0\u4e48\u4f18\u70b9"},"Docker \u6709\u4ec0\u4e48\u4f18\u70b9\uff1f"),(0,n.kt)("p",null,"   Docker \u7684\u4f18\u70b9\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u79fb\u690d\u6027\uff1aDocker \u5bb9\u5668\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u57fa\u7840\u8bbe\u65bd\u4e0a\u8fd0\u884c\uff0c\u65e0\u9700\u4fee\u6539\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027\uff1aDocker \u5bb9\u5668\u63d0\u4f9b\u4e86\u4e00\u81f4\u7684\u8fd0\u884c\u73af\u5883\uff0c\u65e0\u8bba\u5728\u5f00\u53d1\u73af\u5883\u8fd8\u662f\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5e94\u7528\u7a0b\u5e8f\u90fd\u80fd\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u8fd0\u884c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9694\u79bb\u6027\uff1aDocker \u5bb9\u5668\u63d0\u4f9b\u4e86\u8fdb\u7a0b\u7ea7\u7684\u9694\u79bb\uff0c\u6bcf\u4e2a\u5bb9\u5668\u90fd\u6709\u81ea\u5df1\u7684\u6587\u4ef6\u7cfb\u7edf\u3001\u7f51\u7edc\u548c\u8d44\u6e90\u9650\u5236\uff0c\u907f\u514d\u4e86\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u51b2\u7a81\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u6548\u6027\uff1aDocker \u5bb9\u5668\u542f\u52a8\u901f\u5ea6\u5feb\uff0c\u8d44\u6e90\u5360\u7528\u5c11\uff0c\u53ef\u4ee5\u5728\u540c\u4e00\u53f0\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u591a\u4e2a\u5bb9\u5668\uff0c\u63d0\u9ad8\u4e86\u8d44\u6e90\u5229\u7528\u7387\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7248\u672c\u63a7\u5236\uff1aDocker \u5bb9\u5668\u53ef\u4ee5\u4f7f\u7528\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u8fdb\u884c\u7ba1\u7406\uff0c\u65b9\u4fbf\u8ddf\u8e2a\u548c\u56de\u6eda\u5e94\u7528\u7a0b\u5e8f\u7684\u53d8\u66f4\u3002")),(0,n.kt)("h3",{id:"docker-\u5bb9\u5668\u548c\u865a\u62df\u673a\u6709\u4ec0\u4e48\u533a\u522b"},"Docker \u5bb9\u5668\u548c\u865a\u62df\u673a\u6709\u4ec0\u4e48\u533a\u522b\uff1f"),(0,n.kt)("p",null,"   Docker \u5bb9\u5668\u548c\u865a\u62df\u673a\u7684\u4e3b\u8981\u533a\u522b\u5728\u4e8e\u865a\u62df\u5316\u7684\u5c42\u6b21\u4e0d\u540c\u3002\u865a\u62df\u673a\u662f\u5728\u786c\u4ef6\u7ea7\u522b\u4e0a\u8fdb\u884c\u865a\u62df\u5316\uff0c\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883\uff0c\u6bcf\u4e2a\u865a\u62df\u673a\u90fd\u6709\u81ea\u5df1\u7684\u5185\u6838\u548c\u7cfb\u7edf\u8d44\u6e90\u3002\u800c Docker \u5bb9\u5668\u662f\u5728\u64cd\u4f5c\u7cfb\u7edf\u7ea7\u522b\u4e0a\u8fdb\u884c\u865a\u62df\u5316\uff0c\u5171\u4eab\u5bbf\u4e3b\u673a\u7684\u5185\u6838\u548c\u7cfb\u7edf\u8d44\u6e90\uff0c\u5bb9\u5668\u5185\u7684\u5e94\u7528\u7a0b\u5e8f\u53ea\u770b\u5230\u81ea\u5df1\u7684\u6587\u4ef6\u7cfb\u7edf\u548c\u8d44\u6e90\u9650\u5236\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u6784\u5efa-docker-\u955c\u50cf"},"\u5982\u4f55\u6784\u5efa Docker \u955c\u50cf\uff1f"),(0,n.kt)("p",null,"   \u6784\u5efa Docker \u955c\u50cf\u7684\u5e38\u7528\u65b9\u6cd5\u662f\u4f7f\u7528 Dockerfile\uff0c\u5b83\u662f\u4e00\u4e2a\u63cf\u8ff0\u5982\u4f55\u6784\u5efa\u955c\u50cf\u7684\u6587\u672c\u6587\u4ef6\u3002Dockerfile \u5305\u542b\u4e00\u7cfb\u5217\u6307\u4ee4\uff0c\u7528\u4e8e\u6307\u5b9a\u57fa\u7840\u955c\u50cf\u3001\u5b89\u88c5\u4f9d\u8d56\u9879\u3001\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u7b49\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"docker build")," \u547d\u4ee4\u6839\u636e Dockerfile \u6784\u5efa\u955c\u50cf\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u8fd0\u884c-docker-\u5bb9\u5668"},"\u5982\u4f55\u8fd0\u884c Docker \u5bb9\u5668\uff1f"),(0,n.kt)("p",null,"   \u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"docker run")," \u547d\u4ee4\u8fd0\u884c Docker \u5bb9\u5668\uff0c\u8be5\u547d\u4ee4\u63a5\u53d7\u955c\u50cf\u540d\u79f0\u6216 ID \u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u53ef\u4ee5\u6307\u5b9a\u5bb9\u5668\u7684\u8fd0\u884c\u53c2\u6570\uff0c\u5982\u7aef\u53e3\u6620\u5c04\u3001\u73af\u5883\u53d8\u91cf\u7b49\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u7ba1\u7406-docker-\u5bb9\u5668"},"\u5982\u4f55\u7ba1\u7406 Docker \u5bb9\u5668\uff1f"),(0,n.kt)("p",null,"   \u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"docker container")," \u547d\u4ee4\u7ba1\u7406 Docker \u5bb9\u5668\uff0c\u5305\u62ec\u67e5\u770b\u5bb9\u5668\u5217\u8868\u3001\u542f\u52a8\u3001\u505c\u6b62\u3001\u5220\u9664\u5bb9\u5668\u7b49\u64cd\u4f5c\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u5b9e\u73b0\u5bb9\u5668\u4e4b\u95f4\u7684\u901a\u4fe1"},"\u5982\u4f55\u5b9e\u73b0\u5bb9\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\uff1f"),(0,n.kt)("p",null,"   \u5bb9\u5668\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u8fdb\u884c\u901a\u4fe1\uff0c\u53ef\u4ee5\u4f7f\u7528 Docker \u7684\u7f51\u7edc\u529f\u80fd\u6765\u5b9e\u73b0\u5bb9\u5668\u4e4b\u95f4\u7684\u8fde\u63a5\u3002Docker \u63d0\u4f9b\u4e86\u591a\u79cd\u7f51\u7edc\u6a21\u5f0f\uff0c\u5982 bridge\u3001host\u3001overlay \u7b49\uff0c\u53ef\u4ee5\u6839\u636e\u5177\u4f53\u9700\u6c42\u9009\u62e9\u5408\u9002\u7684\u7f51\u7edc\u6a21\u5f0f\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u5728\u5bb9\u5668\u4e2d\u5b58\u50a8\u6570\u636e"},"\u5982\u4f55\u5728\u5bb9\u5668\u4e2d\u5b58\u50a8\u6570\u636e\uff1f"),(0,n.kt)("p",null,"   \u5bb9\u5668\u4e2d\u7684\u6570\u636e\u53ef\u4ee5\u5b58\u50a8\u5728\u5bb9\u5668\u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff0c\u4f46\u5bb9\u5668\u7684\u751f\u547d\u5468\u671f\u662f\u77ed\u6682\u7684\uff0c\u5f53\u5bb9\u5668\u505c\u6b62\u6216\u5220\u9664\u65f6\uff0c\u6570\u636e\u4e5f\u4f1a\u88ab\u5220\u9664\u3002\u4e3a\u4e86\u6301\u4e45\u5316\u5b58\u50a8\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 Docker \u7684\u6570\u636e\u5377\u6216\u7ed1\u5b9a\u6302\u8f7d\u529f\u80fd\uff0c\u5c06\u5bb9\u5668\u4e2d\u7684\u6570\u636e\u5b58\u50a8\u5728\u5bbf\u4e3b\u673a\u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\u3002"),(0,n.kt)("h3",{id:"docker\u7684\u6838\u5fc3\u6280\u672f\u662f\u4ec0\u4e48"},"Docker\u7684\u6838\u5fc3\u6280\u672f\u662f\u4ec0\u4e48"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CGroup\uff1a\u7528\u4e8e\u9650\u5236\u548c\u63a7\u5236\u8fdb\u7a0b\u7ec4\uff08Process Group\uff09\u5bf9\u7cfb\u7edf\u8d44\u6e90\u7684\u4f7f\u7528\u3002\u4f8b\u5982 CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8 I/O\u3001\u7f51\u7edc\u5e26\u5bbd\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"Namespace\uff1a\u7528\u4e8e\u9694\u79bb\u8fdb\u7a0b\u8d44\u6e90\u3002"),(0,n.kt)("li",{parentName:"ul"},"UnionFS\uff1a\u7528\u4e8e\u6784\u5efa\u955c\u50cf\u7684\u5206\u5c42\u7ed3\u6784\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Docker \u955c\u50cf\u7531\u591a\u4e2a\u53ea\u8bfb\u5c42\uff08Layer\uff09\u7ec4\u6210\uff0c\u6bcf\u4e2a\u5c42\u90fd\u5305\u542b\u4e86\u6587\u4ef6\u548c\u6587\u4ef6\u7cfb\u7edf\u7684\u53d8\u66f4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5f53\u5728\u5f53\u524d\u955c\u50cf\u57fa\u7840\u4e0a\u6784\u5efa\u65b0\u955c\u50cf\u7684\u65f6\u5019\uff0c\u4f1a\u5728\u5f53\u524d\u57fa\u7840\u955c\u50cf\u4e0a\u6dfb\u52a0\u65b0\u7684\u5c42\uff0c\u800c\u4e0d\u662f\u590d\u5236\u6574\u4e2a\u5c42\u3002\u4ece\u800c\u5b9e\u73b0\u4f18\u96c5\u7684\u590d\u7528\u3002")))),(0,n.kt)("h3",{id:"\u5982\u4f55\u7406\u89e3docker\u955c\u50cf"},"\u5982\u4f55\u7406\u89e3Docker\u955c\u50cf"),(0,n.kt)("h3",{id:"\u5982\u4f55\u7406\u89e3docker\u7f51\u7edc"},"\u5982\u4f55\u7406\u89e3Docker\u7f51\u7edc"),(0,n.kt)("h3",{id:"\u591a\u9636\u6bb5\u7f16\u8bd1"},"\u591a\u9636\u6bb5\u7f16\u8bd1"),(0,n.kt)("p",null,"\u591a\u9636\u6bb5\u7f16\u8bd1\u662fdocker\u6784\u5efa\u4e2d\u7684\u4e00\u79cd\u6280\u672f\uff0c\u652f\u6301\u5728dockerfile\u4e2d\u8fdb\u884c\u591a\u4e2a\u9636\u6bb5\u7684\u6784\u5efa\u6765\u6784\u6210\u6700\u7ec8\u7684\u955c\u50cf\u3002"),(0,n.kt)("p",null,"\u597d\u5904\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5927\u5927\u51cf\u5c11\u955c\u50cf\u4f53\u79ef\u3002\u907f\u514d\u4e34\u65f6\u6570\u636e\u6216\u8005\u7f16\u8bd1\u9636\u6bb5\u7684\u6570\u636e\u9020\u6210\u955c\u50cf\u4f53\u79ef\u8fc7\u5927\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u907f\u514d\u6e90\u7801\u6cc4\u9732")))}p.isMDXComponent=!0}}]);