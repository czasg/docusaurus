"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8291],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>N});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=u(t),m=r,N=k["".concat(o,".").concat(m)]||k[m]||c[m]||a;return t?l.createElement(N,i(i({ref:n},d),{},{components:t})):l.createElement(N,i({ref:n},d))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[k]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var l=t(87462),r=(t(67294),t(3905));const a={title:"\u5e38\u7528\u6307\u4ee4",sidebar_label:"\u5e38\u7528\u6307\u4ee4",slug:"cmd"},i=void 0,p={unversionedId:"docker/dockerfile/\u5e38\u7528\u6307\u4ee4",id:"docker/dockerfile/\u5e38\u7528\u6307\u4ee4",title:"\u5e38\u7528\u6307\u4ee4",description:"\u6700\u65b0 Dockerfile \u6307\u4ee4\u89c1\u5b98\u65b9\u6587\u6863",source:"@site/docs/develop/docker/15.dockerfile/3.\u5e38\u7528\u6307\u4ee4.md",sourceDirName:"docker/15.dockerfile",slug:"/docker/dockerfile/cmd",permalink:"/docusaurus/docs/develop/docker/dockerfile/cmd",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/develop/docker/15.dockerfile/3.\u5e38\u7528\u6307\u4ee4.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5e38\u7528\u6307\u4ee4",sidebar_label:"\u5e38\u7528\u6307\u4ee4",slug:"cmd"},sidebar:"tutorialSidebar",previous:{title:"Dockerfile",permalink:"/docusaurus/docs/develop/docker/dockerfile/"},next:{title:"\u591a\u9636\u6bb5\u7f16\u8bd1",permalink:"/docusaurus/docs/develop/docker/dockerfile/multi-compile"}},o={},u=[{value:"FROM",id:"from",level:3},{value:"MAINTAINER\uff08\u5df2\u5f03\u7528\uff09 / LABEL",id:"maintainer\u5df2\u5f03\u7528--label",level:3},{value:"RUN",id:"run",level:3},{value:"CMD",id:"cmd",level:3},{value:"ENTRYPOINT",id:"entrypoint",level:3},{value:"EXPOSE",id:"expose",level:3},{value:"ENV",id:"env",level:3},{value:"ADD / COPY",id:"add--copy",level:3},{value:"VOLUME",id:"volume",level:3},{value:"WORKDIR",id:"workdir",level:3},{value:"USER",id:"user",level:3},{value:"ARG",id:"arg",level:3},{value:"ONBUILD",id:"onbuild",level:3}],d={toc:u},k="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(k,(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6700\u65b0 Dockerfile \u6307\u4ee4\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder"},"\u5b98\u65b9\u6587\u6863")),(0,r.kt)("h3",{id:"from"},"FROM"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FROM"),"\u6307\u4ee4\u7528\u4e8e\u6307\u5b9a\u7528\u4f5c\u57fa\u7840\u7684Docker\u955c\u50cf\uff0c\u540e\u7eed\u7684\u6307\u4ee4\u90fd\u4f1a\u5728\u8be5\u955c\u50cf\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u6784\u5efa\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FROM ubuntu:latest"),"\u8868\u793a\u4ee5\u6700\u65b0\u7248\u7684Ubuntu\u4f5c\u4e3a\u57fa\u7840\u955c\u50cf\u3002")),(0,r.kt)("h3",{id:"maintainer\u5df2\u5f03\u7528--label"},"MAINTAINER\uff08\u5df2\u5f03\u7528\uff09 / LABEL"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MAINTAINER"),"\u6307\u4ee4\u7528\u4e8e\u8bbe\u7f6e\u955c\u50cf\u7684\u4f5c\u8005\u4fe1\u606f\uff0c\u4f46\u5728Docker 1.13\u7248\u672c\u540e\u5df2\u88ab",(0,r.kt)("inlineCode",{parentName:"p"},"LABEL"),"\u6307\u4ee4\u53d6\u4ee3\uff0c\n",(0,r.kt)("inlineCode",{parentName:"p"},"LABEL"),"\u6307\u4ee4\u7528\u4e8e\u8bbe\u7f6e\u955c\u50cf\u7684\u5143\u6570\u636e\uff0c\u5305\u62ec\u4f5c\u8005\u3001\u7248\u672c\u3001\u63cf\u8ff0\u7b49\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'LABEL maintainer="John Doe <john.doe@example.com>"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'LABEL version="1.0" description="This is a custom Docker image."'))),(0,r.kt)("h3",{id:"run"},"RUN"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RUN"),"\u6307\u4ee4\u7528\u4e8e\u5728Docker\u955c\u50cf\u6784\u5efa\u8fc7\u7a0b\u4e2d\u6267\u884c\u547d\u4ee4\uff0c\u5e38\u7528\u4e8e\u5b89\u88c5\u8f6f\u4ef6\u5305\u3001\u66f4\u65b0\u7cfb\u7edf\u7b49\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RUN apt-get update && apt-get install -y some-package"),"\u8868\u793a\u5728\u955c\u50cf\u4e2d\u6267\u884c\u66f4\u65b0\u548c\u5b89\u88c5\u8f6f\u4ef6\u5305\u7684\u547d\u4ee4\u3002")),(0,r.kt)("h3",{id:"cmd"},"CMD"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CMD"),"\u6307\u4ee4\u7528\u4e8e\u5b9a\u4e49\u5bb9\u5668\u542f\u52a8\u540e\u9ed8\u8ba4\u8981\u6267\u884c\u7684\u547d\u4ee4\uff0c\u6bcf\u4e2aDockerfile\u53ea\u80fd\u6709\u4e00\u4e2aCMD\u6307\u4ee4\uff0c\u5982\u679c\u6709\u591a\u4e2a\uff0c\n\u5219\u53ea\u6709\u6700\u540e\u4e00\u4e2aCMD\u6307\u4ee4\u4f1a\u751f\u6548\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'CMD ["python", "app.py"]'),"\u8868\u793a\u5bb9\u5668\u542f\u52a8\u540e\u4f1a\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"python app.py"),"\u547d\u4ee4\u3002")),(0,r.kt)("h3",{id:"entrypoint"},"ENTRYPOINT"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"\u6307\u4ee4\u7528\u4e8e\u8bbe\u7f6e\u5bb9\u5668\u542f\u52a8\u65f6\u8981\u6267\u884c\u7684\u547d\u4ee4\u6216\u7a0b\u5e8f\uff0c\u4e0eCMD\u4e0d\u540c\u7684\u662f\uff0c\u4f7f\u7528ENTRYPOINT\u5b9a\u4e49\u7684\u547d\u4ee4\u4e0d\u4f1a\u88ab\u8986\u76d6\uff0c\n\u800c\u662f\u4f5c\u4e3a\u4e3b\u8981\u6267\u884c\u7684\u547d\u4ee4\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'ENTRYPOINT ["python", "app.py"]'),"\u8868\u793a\u5bb9\u5668\u542f\u52a8\u540e\u4f1a\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"python app.py"),"\u547d\u4ee4\u3002")),(0,r.kt)("h3",{id:"expose"},"EXPOSE"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EXPOSE"),"\u6307\u4ee4\u7528\u4e8e\u58f0\u660e\u5bb9\u5668\u5728\u8fd0\u884c\u65f6\u4f1a\u76d1\u542c\u7684\u7aef\u53e3\u53f7\uff0c\u4f46\u5e76\u4e0d\u4f1a\u81ea\u52a8\u5c06\u4e3b\u673a\u7684\u7aef\u53e3\u6620\u5c04\u5230\u5bb9\u5668\u7684\u7aef\u53e3\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EXPOSE 80"),"\u8868\u793a\u5bb9\u5668\u4f1a\u76d1\u542c80\u7aef\u53e3\u3002")),(0,r.kt)("h3",{id:"env"},"ENV"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENV"),"\u6307\u4ee4\u7528\u4e8e\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u8fd9\u4e9b\u53d8\u91cf\u53ef\u4ee5\u5728\u5bb9\u5668\u5185\u7684\u5176\u4ed6\u6307\u4ee4\u4e2d\u4f7f\u7528\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENV MY_VAR=my_value"),"\u8868\u793a\u8bbe\u7f6e\u4e86\u540d\u4e3aMY_VAR\u7684\u73af\u5883\u53d8\u91cf\uff0c\u5176\u503c\u4e3amy_value\u3002")),(0,r.kt)("h3",{id:"add--copy"},"ADD / COPY"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ADD"),"\u6307\u4ee4\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"COPY"),"\u6307\u4ee4\u90fd\u7528\u4e8e\u5c06\u4e3b\u673a\u4e2d\u7684\u6587\u4ef6\u590d\u5236\u5230\u5bb9\u5668\u5185\u90e8\uff0c\u4f46ADD\u6307\u4ee4\u652f\u6301\u66f4\u591a\u529f\u80fd\uff0c\n\u6bd4\u5982\u8fdc\u7a0bURL\u7684\u6587\u4ef6\u4e0b\u8f7d\u548c\u81ea\u52a8\u89e3\u538b\u7f29\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cCOPY\u66f4\u5e38\u7528\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"COPY app.py /app/"),"\u8868\u793a\u5c06\u4e3b\u673a\u4e2d\u7684app.py\u6587\u4ef6\u590d\u5236\u5230\u5bb9\u5668\u5185\u7684/app/\u76ee\u5f55\u3002")),(0,r.kt)("h3",{id:"volume"},"VOLUME"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VOLUME"),"\u6307\u4ee4\u7528\u4e8e\u58f0\u660e\u5bb9\u5668\u4e2d\u7528\u4e8e\u5b58\u50a8\u6301\u4e45\u5316\u6570\u636e\u7684\u6302\u8f7d\u70b9\uff0c\u53ef\u4ee5\u5c06\u4e3b\u673a\u7684\u76ee\u5f55\u6216\u8005\u5176\u4ed6\u5bb9\u5668\u7684\u6570\u636e\u5377\u6302\u8f7d\u5230\u8fd9\u4e2a\u70b9\u4e0a\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VOLUME /data"),"\u8868\u793a\u5728\u5bb9\u5668\u5185\u521b\u5efa\u4e00\u4e2a\u6302\u8f7d\u70b9/data\u3002")),(0,r.kt)("h3",{id:"workdir"},"WORKDIR"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u6307\u4ee4\u7528\u4e8e\u8bbe\u7f6e\u5bb9\u5668\u4e2d\u7684\u5de5\u4f5c\u76ee\u5f55\uff0c\u7c7b\u4f3c\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"cd"),"\u547d\u4ee4\u3002\u5f53\u5728\u5bb9\u5668\u5185\u6267\u884c\u547d\u4ee4\u65f6\uff0c\u4f1a\u5728\u5de5\u4f5c\u76ee\u5f55\u4e0b\u8fdb\u884c\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WORKDIR /app"),"\u8868\u793a\u5c06\u5bb9\u5668\u7684\u5de5\u4f5c\u76ee\u5f55\u8bbe\u7f6e\u4e3a/app\u3002")),(0,r.kt)("h3",{id:"user"},"USER"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"USER"),"\u6307\u4ee4\u7528\u4e8e\u8bbe\u7f6e\u5bb9\u5668\u4e2d\u6267\u884c\u547d\u4ee4\u7684\u7528\u6237\u3002\u901a\u5e38\u7528\u4e8e\u6307\u5b9a\u975eroot\u7528\u6237\u6765\u8fd0\u884c\u5bb9\u5668\u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u589e\u52a0\u5bb9\u5668\u7684\u5b89\u5168\u6027\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"USER nobody"),"\u8868\u793a\u5728\u5bb9\u5668\u4e2d\u4ee5nobody\u7528\u6237\u8eab\u4efd\u6267\u884c\u547d\u4ee4\u3002")),(0,r.kt)("h3",{id:"arg"},"ARG"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ARG"),"\u6307\u4ee4\u7528\u4e8e\u5b9a\u4e49\u6784\u5efa\u65f6\u53ef\u4f20\u9012\u7ed9\u955c\u50cf\u7684\u53c2\u6570\uff0c\u6784\u5efa\u65f6\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"--build-arg"),"\u9009\u9879\u4f20\u9012\u53c2\u6570\u3002\u5b83\u5141\u8bb8\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u7075\u6d3b\u5730\u4f20\u9012\u53d8\u91cf\u503c\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ARG VERSION=latest"),"\u8868\u793a\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3aVERSION\u7684\u53c2\u6570\uff0c\u9ed8\u8ba4\u503c\u4e3alatest\u3002")),(0,r.kt)("h3",{id:"onbuild"},"ONBUILD"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ONBUILD"),"\u6307\u4ee4\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a\u89e6\u53d1\u5668\uff0c\u5f53\u8fd9\u4e2a\u955c\u50cf\u88ab\u7528\u4f5c\u5176\u4ed6\u955c\u50cf\u7684\u57fa\u7840\u955c\u50cf\u65f6\uff0c\u89e6\u53d1\u5668\u4e2d\u7684\u547d\u4ee4\u5c06\u88ab\u5ef6\u8fdf\u6267\u884c\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ONBUILD ADD . /app"),"\u8868\u793a\u5f53\u5f53\u524d\u955c\u50cf\u88ab\u7528\u4f5c\u5176\u4ed6\u955c\u50cf\u7684\u57fa\u7840\u955c\u50cf\u65f6\uff0c\u5c06\u4f1a\u590d\u5236\u5f53\u524d\u76ee\u5f55\u7684\u6240\u6709\u6587\u4ef6\u5230/app\u76ee\u5f55\u3002")),(0,r.kt)("p",null,"\u8fd9\u4e5f\u610f\u5473\u7740\u5728\u6784\u5efa\u4e00\u4e2a\u57fa\u7840\u955c\u50cf\u65f6\uff0cONBUILD\u6307\u4ee4\u4e2d\u7684\u547d\u4ee4\u4e0d\u4f1a\u7acb\u5373\u6267\u884c\uff0c\u800c\u662f\u5728\u5176\u4ed6\u955c\u50cf\u4ee5\u8be5\u57fa\u7840\u955c\u50cf\u4e3a\u57fa\u7840\u8fdb\u884c\u6784\u5efa\u65f6\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ONBUILD"),"\u6307\u4ee4\u53ef\u4ee5\u5c06\u4e00\u4e9b\u901a\u7528\u7684\u64cd\u4f5c\u548c\u914d\u7f6e\u653e\u5728\u57fa\u7840\u955c\u50cf\u4e2d\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u548c\u914d\u7f6e\u5728\u6784\u5efa\u6d3e\u751f\u955c\u50cf\u65f6\u53ef\u4ee5\u88ab\u91cd\u590d\u4f7f\u7528\uff0c\u4ece\u800c\u7b80\u5316\u6d3e\u751f\u955c\u50cf\u7684\u6784\u5efa\u8fc7\u7a0b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"ONBUILD"),"\u901a\u5e38\u7528\u4e8e\u521b\u5efa\u901a\u7528\u7684\u6a21\u677f\u955c\u50cf\uff0c\u8ba9\u5176\u4ed6\u5f00\u53d1\u4eba\u5458\u6216\u56e2\u961f\u5728\u8fd9\u4e2a\u57fa\u7840\u955c\u50cf\u4e0a\u6784\u5efa\u81ea\u5df1\u7684\u5e94\u7528\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ONBUILD"),"\u6307\u4ee4\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u7b80\u5355\u7684Python\u5e94\u7528\uff0c\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my_app/\n|-- Dockerfile\n|-- app.py\n|-- requirements.txt\n")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u57fa\u7840\u955c\u50cf\uff0c\u7528\u4e8e\u8fd0\u884cPython\u5e94\u7528\uff0c\u5e76\u4e14\u5728\u8fd9\u4e2a\u57fa\u7840\u955c\u50cf\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ONBUILD"),"\u6307\u4ee4\u3002\u57fa\u7840\u955c\u50cf\u7684Dockerfile\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# \u57fa\u4e8ePython\u5b98\u65b9\u955c\u50cf\u4f5c\u4e3a\u57fa\u7840\u955c\u50cf\nFROM python:3.9-slim\n\n# \u8bbe\u7f6e\u5de5\u4f5c\u76ee\u5f55\nWORKDIR /app\n\n# \u5b9a\u4e49ONBUILD\u89e6\u53d1\u7684\u64cd\u4f5c\nONBUILD COPY requirements.txt .\nONBUILD RUN pip install --no-cache-dir -r requirements.txt\nONBUILD COPY app.py .\n\n# \u5b9a\u4e49\u9ed8\u8ba4\u6267\u884c\u547d\u4ee4\nCMD ["python", "app.py"]\n\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0a\u8ff0\u57fa\u7840\u955c\u50cf\u6765\u521b\u5efa\u4e00\u4e2a\u6d3e\u751f\u955c\u50cf\uff0c\u5e76\u5728\u6d3e\u751f\u955c\u50cf\u4e2d\u53ea\u9700\u63d0\u4f9b\u81ea\u5df1\u7684\u5e94\u7528\u4ee3\u7801\u3002\u6d3e\u751f\u955c\u50cf\u7684Dockerfile\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# \u4f7f\u7528\u4e0a\u8ff0\u57fa\u7840\u955c\u50cf\u4f5c\u4e3a\u57fa\u7840\u955c\u50cf\nFROM my_base_image\n\n# \u590d\u5236\u81ea\u5df1\u7684\u5e94\u7528\u4ee3\u7801\u5230\u5bb9\u5668\u4e2d\nCOPY my_app_code /app\n\n# \u5b9a\u4e49\u81ea\u5df1\u7684\u5e94\u7528\u6267\u884c\u547d\u4ee4\nCMD ["python", "my_app_code.py"]\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u6d3e\u751f\u955c\u50cf\u4e2d\uff0c\u6211\u4eec\u6ca1\u6709\u518d\u5305\u542b\u5b89\u88c5\u4f9d\u8d56\u548c\u590d\u5236",(0,r.kt)("inlineCode",{parentName:"p"},"app.py"),"\u6587\u4ef6\u7684\u6b65\u9aa4\u3002\u8fd9\u662f\u56e0\u4e3a\u5728\u57fa\u7840\u955c\u50cf\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ONBUILD"),"\u6307\u4ee4\u5df2\u7ecf\u5305\u542b\u4e86\u8fd9\u4e9b\u64cd\u4f5c\u3002\u5f53\u6784\u5efa\u6d3e\u751f\u955c\u50cf\u65f6\uff0c\u57fa\u7840\u955c\u50cf\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ONBUILD"),"\u6307\u4ee4\u4f1a\u88ab\u6267\u884c\uff0c\u5b89\u88c5\u4f9d\u8d56\u5e76\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"app.py"),"\u6587\u4ef6\u590d\u5236\u5230\u6d3e\u751f\u955c\u50cf\u4e2d\u3002"),(0,r.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u5730\u6784\u5efa\u6d3e\u751f\u955c\u50cf\u6765\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u81ea\u5df1\u5e94\u7528\u4ee3\u7801\u7684\u5b8c\u6574\u955c\u50cf\uff0c\u800c\u4e0d\u9700\u8981\u91cd\u590d\u57fa\u7840\u955c\u50cf\u4e2d\u7684\u64cd\u4f5c\u3002\u8fd9\u6837\u7684\u6a21\u677f\u955c\u50cf\u5728\u56e2\u961f\u534f\u4f5c\u548c\u590d\u7528\u955c\u50cf\u65f6\u975e\u5e38\u6709\u7528\u3002"))}c.isMDXComponent=!0}}]);