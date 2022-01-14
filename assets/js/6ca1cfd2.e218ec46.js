"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[352],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7544:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={title:"nginx \u914d\u7f6e\u8bf4\u660e",authors:["czasg"],tags:["nginx"]},u=void 0,p={permalink:"/docusaurus/blog/2022/1/12/nginx\u914d\u7f6e\u8bf4\u660e",editUrl:"https://github.com/czasg/docusaurus/edit/main/blog/2022/1/12/nginx\u914d\u7f6e\u8bf4\u660e/index.md",source:"@site/blog/2022/1/12/nginx\u914d\u7f6e\u8bf4\u660e/index.md",title:"nginx \u914d\u7f6e\u8bf4\u660e",description:"\u8bb0\u5f55\u4e00\u4e0b nginx \u5e38\u89c1\u914d\u7f6e\u8bf4\u660e\u548c\u90e8\u7f72\u6a21\u677f\uff08docker\u3001k8s\uff09\u3002",date:"2022-01-12T00:00:00.000Z",formattedDate:"January 12, 2022",tags:[{label:"nginx",permalink:"/docusaurus/blog/tags/nginx"}],readingTime:3.89,truncated:!0,authors:[{name:"Czasg",title:"Maintainer of Site",url:"https://github.com/czasg",imageURL:"https://github.com/czasg.png",key:"czasg"}],nextItem:{title:"\u57fa\u4e8e gRPC \u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861",permalink:"/docusaurus/blog/2021/12/13/gRPC\u8d1f\u8f7d\u5747\u8861"}},c={authorsImageUrls:[void 0]},s=[{value:"nginx \u5e38\u7528\u6307\u4ee4",id:"nginx-\u5e38\u7528\u6307\u4ee4",children:[],level:2},{value:"nginx \u6838\u5fc3\u6a21\u5757",id:"nginx-\u6838\u5fc3\u6a21\u5757",children:[{value:"\u4e3b\u6a21\u5757",id:"\u4e3b\u6a21\u5757",children:[],level:3},{value:"\u4e8b\u4ef6\u6a21\u5757",id:"\u4e8b\u4ef6\u6a21\u5757",children:[],level:3},{value:"HTTP \u6a21\u5757",id:"http-\u6a21\u5757",children:[{value:"location \u8def\u7531\u5339\u914d\u89c4\u5219\u53ca\u987a\u5e8f",id:"location-\u8def\u7531\u5339\u914d\u89c4\u5219\u53ca\u987a\u5e8f",children:[],level:4},{value:"upstream \u8d1f\u8f7d\u5747\u8861\u7b56\u7565",id:"upstream-\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",children:[],level:4},{value:"http \u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u53c2\u6570\u914d\u7f6e",id:"http-\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u53c2\u6570\u914d\u7f6e",children:[],level:4},{value:"mirror",id:"mirror",children:[],level:4}],level:3}],level:2},{value:"nginx \u5e38\u89c1\u90e8\u7f72",id:"nginx-\u5e38\u89c1\u90e8\u7f72",children:[],level:2}],m={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8bb0\u5f55\u4e00\u4e0b nginx \u5e38\u89c1\u914d\u7f6e\u8bf4\u660e\u548c\u90e8\u7f72\u6a21\u677f\uff08docker\u3001k8s\uff09\u3002"),(0,i.kt)("h2",{id:"nginx-\u5e38\u7528\u6307\u4ee4"},"nginx \u5e38\u7528\u6307\u4ee4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"-c\uff1a\u7528\u4e8e\u6307\u5b9a\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"-t\uff1a\u7528\u4e8e\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u53ef\u7528"),(0,i.kt)("li",{parentName:"ul"},"-s\uff1a\u7528\u4e8e\u53d1\u9001\u4fe1\u53f7\uff0c\u5305\u62ec\uff1astop, quit, reopen, reload\u3002eg\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"nginx -s reload"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="\u6307\u5b9a\u5e76\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u662f\u5426\u6b63\u786e"',script:!0,title:'"\u6307\u5b9a\u5e76\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u662f\u5426\u6b63\u786e"'},"nginx -t -c ./nginx.conf\n")),(0,i.kt)("h2",{id:"nginx-\u6838\u5fc3\u6a21\u5757"},"nginx \u6838\u5fc3\u6a21\u5757"),(0,i.kt)("p",null,"nginx \u7684\u6838\u5fc3\u6a21\u5757\u4e3b\u8981\u6709\u4e09\u4e2a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u6a21\u5757\uff1a\u7ba1\u7406 nginx \u57fa\u672c\u529f\u80fd\u7684\u6a21\u5757"),(0,i.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u6a21\u5757\uff1a\u7ba1\u7406 nginx \u5904\u7406\u8fde\u63a5\u8bf7\u6c42\u7684\u6a21\u5757"),(0,i.kt)("li",{parentName:"ul"},"HTTP \u6a21\u5757\uff1a\u7ba1\u7406 nginx \u5904\u7406 http \u8bf7\u6c42\u7684\u6a21\u5757")),(0,i.kt)("h3",{id:"\u4e3b\u6a21\u5757"},"\u4e3b\u6a21\u5757"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"user  nginx;  # \u7528\u6237\npid  /var/run/nginx.pid;  # \u8fdb\u7a0bID\nworker_processes  auto;  # \u5de5\u4f5c\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u6307\u5b9a\u5177\u4f53\u6570\u5b57\nerror_log  /var/log/nginx/error.log notice;  # \u6307\u5b9a\u65e5\u5fd7\u548c\u9519\u8bef\u7ea7\u522b\uff0c\u5305\u542b\uff1adebug\u3001info\u3001notice\u3001warn\u3001error\u3001crit\n\nworker_cpu_affinity  none;  # \u7528\u4e8e\u7ed1\u5b9a worker \u8fdb\u7a0b\u4e0e cpu\n")),(0,i.kt)("h3",{id:"\u4e8b\u4ef6\u6a21\u5757"},"\u4e8b\u4ef6\u6a21\u5757"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"events {\n    worker_connections  1024;  # \u6bcf\u4e2a\u5de5\u4f5c\u8fdb\u7a0b\u6700\u5927\u94fe\u63a5\u6570\u3002\u4e58\u4ee5 worker_processes \u5c31\u662f\u8be5 nginx \u670d\u52a1\u7684\u6700\u5927\u8fde\u63a5\u6570\n}\n")),(0,i.kt)("h3",{id:"http-\u6a21\u5757"},"HTTP \u6a21\u5757"),(0,i.kt)("h4",{id:"location-\u8def\u7531\u5339\u914d\u89c4\u5219\u53ca\u987a\u5e8f"},"location \u8def\u7531\u5339\u914d\u89c4\u5219\u53ca\u987a\u5e8f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"="),": \u7cbe\u786e\u5339\u914d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"^~"),": \u4f18\u5148\u524d\u7f00\u5339\u914d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~"),": \u6b63\u5219\u5339\u914d\uff0c\u533a\u5206\u5927\u5c0f\u5199"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~*"),": \u6b63\u5219\u5339\u914d\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"!~"),": \u6b63\u5219\u5339\u914d\uff0c\u533a\u5206\u5927\u5c0f\u5199"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"!~*"),": \u6b63\u5219\u5339\u914d\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/route"),": \u666e\u901a\u524d\u7f00\u5339\u914d"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/"),": \u901a\u7528\u5339\u914d")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u7cbe\u786e\u5339\u914d > \u4f18\u5148\u524d\u7f00\u5339\u914d > \u6b63\u5219\u5339\u914d > \u666e\u901a\u524d\u7f00\u5339\u914d > \u901a\u7528\u5339\u914d")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"http {\n    server {\n        # \u4f18\u5148\u5339\u914d\u4f9d\u6b21\u5f80\u4e0b\n        location = /route { return 200; }\n        location ^~ /route { return 201; }\n        location ~ ^/route { return 202; }\n        location /route { return 203; }\n        location / { return 204; }\n    }\n}\n")),(0,i.kt)("h4",{id:"upstream-\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"},"upstream \u8d1f\u8f7d\u5747\u8861\u7b56\u7565"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8f6e\u8be2\uff1a\u5728\u6bcf\u4e2a\u670d\u52a1\u4e4b\u95f4\u8f6e\u8be2\u8bf7\u6c42"),(0,i.kt)("li",{parentName:"ul"},"weight\uff1a\u6309\u6307\u5b9a\u6743\u91cd\u6bd4\u4f8b\u5728\u670d\u52a1\u4e4b\u95f4\u8bf7\u6c42\uff0c\u9ed8\u8ba4 weight \u4e3a 1"),(0,i.kt)("li",{parentName:"ul"},"ip_hash\uff1a\u6309\u7167\u8bf7\u6c42 IP \u8ba1\u7b97 Hash\uff0c\u4fdd\u8bc1\u6bcf\u6b21\u8bf7\u6c42\u90fd\u8bbf\u95ee\u540c\u4e00\u4e2a\u670d\u52a1"),(0,i.kt)("li",{parentName:"ul"},"fair\uff1a\u6309\u7167\u540e\u7aef\u7684\u54cd\u5e94\u65f6\u95f4\u6765\u5206\u914d\uff08\u4e09\u65b9\u63d2\u4ef6\u5b9e\u73b0\uff09")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"http {\n    # \u8d1f\u8f7d\u5747\u8861\n    upstream serverName {\n        # ip_hash;  # \u6307\u5b9a ip_hash \u8d1f\u8f7d\u5747\u8861\u7b56\u7565\n        server 10.251.10.10:8080 weight=2;  # \u6307\u5b9a\u6743\u91cd\u6bd4\u4f8b\n        server 10.251.10.10:8081 down;  # down \u8868\u793a\u670d\u52a1\u4e0b\u7ebf\n        server 10.251.10.10:8082;\n        server 10.251.10.10:8083 backup;  # backup \u8868\u793a\u5907\u7528\uff0c\u5f53\u5176\u4ed6\u673a\u5668 down \u6216\u8005\u538b\u529b\u6bd4\u8f83\u5927\u65f6\uff0c\u6d41\u91cf\u4f1a\u8d70\u5230\u6b64\u670d\u52a1\n        # fair;  # \u6307\u5b9a fair \u8d1f\u8f7d\u5747\u8861\u7b56\u7565\n    }\n\n    server {\n        listen  80;  # \u76d1\u542c\u7aef\u53e3\n        server_name  _;  # \u4e0d\u542f\u7528\u57df\u540d\n\n        location / {\n            proxy_pass  http://serverName;  # \u6307\u5b9a upstream \u540d\u5b57\u5373\u53ef\n        }\n    }\n}\n")),(0,i.kt)("h4",{id:"http-\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u53c2\u6570\u914d\u7f6e"},"http \u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u53c2\u6570\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"http {\n    server {\n        # \u5ba2\u6237\u7aef\n        client_body_buffer_size  8k;  # \u8bf7\u6c42\u7f13\u5b58\u5927\u5c0f\uff08\u8d85\u8fc7\u5219\u5b58\u50a8\u5230\u4e34\u65f6\u6587\u4ef6\u4e2d\uff09\n        client_max_body_size  0;  # \u6570\u636e\u6700\u5927\u4f20\u8f93\u9650\u5236\n    \n        # \u670d\u52a1\u7aef\n        proxy_connect_timeout  60s;  # \u4e0e\u540e\u7aef\u670d\u52a1\u5efa\u7acb\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\n        proxy_send_timeout  60s;  # \u5411\u540e\u7aef\u4f20\u8f93\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\n        proxy_read_timeout  60s;  # \u4ece\u540e\u7aef\u8bfb\u53d6\u54cd\u5e94\u7684\u8d85\u65f6\u65f6\u95f4\n        proxy_buffering off;\n        proxy_request_buffering off\n\n        location / {\n            proxy_pass  http://serverName;\n        }\n    }\n}\n")),(0,i.kt)("h4",{id:"mirror"},"mirror"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"http {\n    server {\n        location /mirror {\n            mirror  /internal;  # mirror \u5b9e\u73b0\u6d41\u91cf\u62f7\u8d1d\n            proxy_pass  http://serverName;\n        }\n        location /internal {\n            internal;  # \u8868\u793a\u4ec5\u88ab\u5185\u90e8\u8bf7\u6c42\u53d1\u73b0\n            proxy_pass  http://serverName;  # \u6307\u5b9a upstream \u540d\u5b57\u5373\u53ef\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"nginx-\u5e38\u89c1\u90e8\u7f72"},"nginx \u5e38\u89c1\u90e8\u7f72"),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\ud83d\udc47\ud83d\udc47\ud83d\udc47")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u672c\u6587\u4f5c\u8005:")," Czasg",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"\u7248\u6743\u58f0\u660e:")," \u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u54e6~\ud83d\udc6e\u200d    "))))}d.isMDXComponent=!0}}]);