"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u8bb0\u4e00\u6b21\u5173\u4e8e httpClient \u7684\u5751\u70b9",authors:["czasg"],tags:["golang"]},o=void 0,i={permalink:"/docusaurus/blog/2022/03/22/\u8bb0\u4e00\u6b21\u5173\u4e8ehttpClient\u7684\u5751\u70b9",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/03-22-\u8bb0\u4e00\u6b21\u5173\u4e8ehttpClient\u7684\u5751\u70b9/index.md",source:"@site/blog/2022/03-22-\u8bb0\u4e00\u6b21\u5173\u4e8ehttpClient\u7684\u5751\u70b9/index.md",title:"\u8bb0\u4e00\u6b21\u5173\u4e8e httpClient \u7684\u5751\u70b9",description:"\u5751\u70b9\uff1aDefaultClient \u65e0\u8d85\u65f6",date:"2022-03-22T00:00:00.000Z",formattedDate:"March 22, 2022",tags:[{label:"golang",permalink:"/docusaurus/blog/tags/golang"}],readingTime:1.48,hasTruncateMarker:!0,authors:[{name:"Czasg",title:"\u9648\u5927\u54e5",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],frontMatter:{title:"\u8bb0\u4e00\u6b21\u5173\u4e8e httpClient \u7684\u5751\u70b9",authors:["czasg"],tags:["golang"]},prevItem:{title:"golang\u6d4b\u8bd5\u68b3\u7406",permalink:"/docusaurus/blog/2022/03/23/golang\u6d4b\u8bd5\u68b3\u7406"},nextItem:{title:"\u6570\u636e\u5e93\u5355\u8868\u5341\u4ebf\u91cf\u7ea7\u7684\u4f18\u5316\u4e4b\u8def",permalink:"/docusaurus/blog/2022/03/18/\u6570\u636e\u5e93\u5355\u8868\u5341\u4ebf\u91cf\u7ea7\u7684\u4f18\u5316\u4e4b\u8def"}},u={authorsImageUrls:[void 0]},p=[{value:"\u5751\u70b9\uff1aDefaultClient \u65e0\u8d85\u65f6",id:"\u5751\u70b9defaultclient-\u65e0\u8d85\u65f6",level:2},{value:"\u5751\u70b9\uff1aDefaultClient \u957f\u8fde\u63a5\u53d7\u9650",id:"\u5751\u70b9defaultclient-\u957f\u8fde\u63a5\u53d7\u9650",level:2},{value:"DefaultMaxIdleConnsPerHost",id:"defaultmaxidleconnsperhost",level:4},{value:"KeepAlive",id:"keepalive",level:4}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5751\u70b9defaultclient-\u65e0\u8d85\u65f6"},"\u5751\u70b9\uff1aDefaultClient \u65e0\u8d85\u65f6"),(0,a.kt)("p",null,"go \u9ed8\u8ba4\u7684 httpClient \u4e0d\u5305\u542b\u8d85\u65f6\u65f6\u95f4\uff0c\u4e0d\u50cf\u5176\u4ed6\u8bed\u8a00\u53ef\u80fd\u4f1a\u6709\u9ed8\u8ba4\u7684\u8d85\u65f6\u65f6\u95f4\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e00\u822c\u5c3d\u91cf\u5c11\u7528\u9ed8\u8ba4\u7684 http.DefaultClient\uff0c\u672a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u52a0\u4e0a\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang",metastring:'title="\u914d\u7f6e\u8d85\u65f6\u65f6\u95f4"',title:'"\u914d\u7f6e\u8d85\u65f6\u65f6\u95f4"'},"client := &http.Client{\n    Timeout: time.Second * 10,\n}\n")),(0,a.kt)("h2",{id:"\u5751\u70b9defaultclient-\u957f\u8fde\u63a5\u53d7\u9650"},"\u5751\u70b9\uff1aDefaultClient \u957f\u8fde\u63a5\u53d7\u9650"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var DefaultTransport RoundTripper = &Transport{\n    Proxy: ProxyFromEnvironment,\n    DialContext: (&net.Dialer{\n        Timeout:   30 * time.Second,\n        KeepAlive: 30 * time.Second,\n    }).DialContext,\n    ForceAttemptHTTP2:     true,\n    MaxIdleConns:          100,\n    IdleConnTimeout:       90 * time.Second,\n    TLSHandshakeTimeout:   10 * time.Second,\n    ExpectContinueTimeout: 1 * time.Second,\n}\n\n// DefaultMaxIdleConnsPerHost is the default value of Transport's\n// MaxIdleConnsPerHost.\nconst DefaultMaxIdleConnsPerHost = 2\n")),(0,a.kt)("h4",{id:"defaultmaxidleconnsperhost"},"DefaultMaxIdleConnsPerHost"),(0,a.kt)("p",null,"DefaultMaxIdleConnsPerHost \u8868\u793a\u5ba2\u6237\u7aef\u5bf9\u6bcf\u4e2a\u4e3b\u673a\u670d\u52a1\u4fdd\u7559\u7684\u6700\u5927\u7a7a\u95f2\u8fde\u63a5\u6570\u3002  "),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\u53ef\u4ee5\u770b\u5230\uff0chttp.DefaultClient \u914d\u7f6e\u6709 DefaultMaxIdleConnsPerHost\uff0c\u503c\u4e3a 2\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8868\u793a\u5ba2\u6237\u7aef\u5bf9\u6bcf\u4e2a\u4e3b\u673a\u670d\u52a1\u4fdd\u7559\u7684\u6700\u5927\u7a7a\u95f2\u8fde\u63a5\u6570\u4e3a 2\uff0c\u6240\u4ee5\u5f53\u6211\u4eec\u6709\u8f83\u591a\u957f\u8fde\u63a5\u573a\u666f\u65f6\uff0chttp.DefaultClient \u53ef\u80fd\u4f1a\u5e72\u6389\u5176\u4ed6\u957f\u8fde\u63a5\uff0c\u4ec5\u4fdd\u7559\u4e24\u4e2a\u3002"),(0,a.kt)("h4",{id:"keepalive"},"KeepAlive"),(0,a.kt)("p",null,"KeepAlive \u8868\u793a\u957f\u8fde\u63a5\u5b58\u6d3b\u65f6\u95f4\u3002  "),(0,a.kt)("p",null,"\u6b64\u5904\u9ed8\u8ba4\u4e3a 30s\uff0c\u5728\u67d0\u4e9b\u538b\u529b\u6d4b\u8bd5\u573a\u666f\u4e0b\u53ef\u80fd\u4f1a\u5bfc\u81f4 socket \u8fde\u63a5\u88ab\u8017\u5c3d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="\u914d\u7f6e\u5b58\u6d3b\u65f6\u95f4 24h \u6848\u4f8b"',title:'"\u914d\u7f6e\u5b58\u6d3b\u65f6\u95f4',"24h":!0,'\u6848\u4f8b"':!0},"client := &http.Client{\n    Transport: &http.Transport{\n        DialContext: (&net.Dialer{\n            KeepAlive: time.Hour * 24,\n        }).DialContext,\n    },\n}\n")))}d.isMDXComponent=!0}}]);