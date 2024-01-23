"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(n),d=a,m=g["".concat(p,".").concat(d)]||g[d]||s[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"gRPC"},o=void 0,i={unversionedId:"question-bank/net/grpc/index",id:"question-bank/net/grpc/index",title:"gRPC",description:"\u4ec0\u4e48\u662fgRPC",source:"@site/docs/office/question-bank/net/grpc/index.md",sourceDirName:"question-bank/net/grpc",slug:"/question-bank/net/grpc/",permalink:"/docusaurus/docs/office/question-bank/net/grpc/",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/office/question-bank/net/grpc/index.md",tags:[],version:"current",frontMatter:{title:"gRPC"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc",permalink:"/docusaurus/docs/office/question-bank/net/"},next:{title:"HTTP",permalink:"/docusaurus/docs/office/question-bank/net/http/"}},p={},u=[{value:"\u4ec0\u4e48\u662fgRPC",id:"\u4ec0\u4e48\u662fgrpc",level:3},{value:"\u4ec0\u4e48\u662fHTTP2",id:"\u4ec0\u4e48\u662fhttp2",level:3},{value:"\u4ec0\u4e48\u662fprotobuf",id:"\u4ec0\u4e48\u662fprotobuf",level:3},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981gRPC",id:"\u4e3a\u4ec0\u4e48\u9700\u8981grpc",level:3},{value:"\u4ec0\u4e48\u662fgRPC\u8d1f\u8f7d\u5747\u8861",id:"\u4ec0\u4e48\u662fgrpc\u8d1f\u8f7d\u5747\u8861",level:3},{value:"\u4e2d\u95f4\u4ef6\u53d1\u73b0",id:"\u4e2d\u95f4\u4ef6\u53d1\u73b0",level:4},{value:"\u670d\u52a1\u7aef\u8d85\u65f6",id:"\u670d\u52a1\u7aef\u8d85\u65f6",level:4},{value:"gRPC\u72b6\u6001\u7801",id:"grpc\u72b6\u6001\u7801",level:3}],c={toc:u},g="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662fgrpc"},"\u4ec0\u4e48\u662fgRPC"),(0,a.kt)("p",null,"gRPC\u662fgoogle\u5f00\u6e90\u7684\u9ad8\u6027\u80fdRPC\u6846\u67b6\u3002\u540c\u65f6\u4ed6\u4e5f\u662f\u4e00\u79cd\u652f\u6301\u8de8\u8bed\u8a00\u3001\u8de8\u5e73\u53f0\u4e4b\u95f4\u8c03\u7528\u7684RPC\u6846\u67b6\u3002"),(0,a.kt)("p",null,"\u60f3\u6bd4\u4e8e\u4f20\u7edf\u7684RPC\u6846\u67b6\uff0cgRPC\u662f\u57fa\u4e8eHTTP2\u548cprotobuf\u5b9e\u73b0\u7684\uff0c\u56e0\u6b64\u5728\u6027\u80fd\u548c\u517c\u5bb9\u6027\u4e0a\u4f1a\u6bd4\u8f83\u4f18\u79c0\u3002"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662fhttp2"},"\u4ec0\u4e48\u662fHTTP2"),(0,a.kt)("p",null,"HTTP2\u662f\u5728HTTP1.1\u7684\u57fa\u7840\u4e0a\u5b9e\u73b0\u4e86\u98a0\u8986\u6027\u7684\u91cd\u6784\u3002"),(0,a.kt)("p",null,"\u4f20\u7edf\u7684HTTP\u662f\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\u3002\u800cHTTP2\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7531\u6587\u672c\u6539\u7528\u4e8c\u8fdb\u5236\u5e27\u4f20\u8f93\uff0c\u56e0\u6b64\u53ef\u4ee5\u89e3\u51b3\u963b\u585e\u95ee\u9898\uff0c\u540c\u65f6\u652f\u6301\u5e76\u53d1\u4f20\u8f93"),(0,a.kt)("li",{parentName:"ul"},"\u5934\u90e8\u538b\u7f29\uff0c\u5173\u952e\u5b57\u6539\u6620\u5c04\uff0c\u51cf\u5c11\u5934\u90e8\u4f53\u79ef")),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662fprotobuf"},"\u4ec0\u4e48\u662fprotobuf"),(0,a.kt)("p",null,"protobuf\u662fgoogle\u5f00\u6e90\u7684\u9ad8\u6027\u80fd\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u673a\u5236\u3002\n\u5b83\u5b9a\u4e49\u4e86\u72ec\u7acb\u4e8e\u7f16\u7a0b\u8bed\u8a00\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5e76\u652f\u6301\u901a\u8fc7gRPC\u6a21\u677f\u4e00\u952e\u81ea\u52a8\u751f\u6210\u4ee3\u7801\u3002\u56e0\u6b64\u5728\u517c\u5bb9\u6027\u548c\u8de8\u5e73\u53f0\u6027\u4e0a\u6709\u8f83\u597d\u7684\u8868\u73b0\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\u5b83\u901a\u8fc7\u4e8c\u8fdb\u5236\u5e8f\u5217\u5316\u683c\u5f0f\u548c\u4e00\u4e9b\u5173\u952e\u5b57\u6620\u5c04\uff0c\u53ef\u4ee5\u5927\u5e45\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u4f53\u79ef\uff0c\u63d0\u5347\u6548\u7387\u3002"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981grpc"},"\u4e3a\u4ec0\u4e48\u9700\u8981gRPC"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662fgrpc\u8d1f\u8f7d\u5747\u8861"},"\u4ec0\u4e48\u662fgRPC\u8d1f\u8f7d\u5747\u8861"),(0,a.kt)("p",null,"gRPC\u662f\u4e00\u4e2a\u957f\u8fde\u63a5\uff0c\u56e0\u6b64gRPC\u8d1f\u8f7d\u5747\u8861\u672c\u8d28\u5c31\u662f\u957f\u8fde\u63a5\u7684\u8d1f\u8f7d\u5747\u8861\u3002"),(0,a.kt)("p",null,"\u4e0d\u7ba1\u662f\u957f\u8fde\u63a5\u8fd8\u662f\u65e0\u72b6\u6001\u8bf7\u6c42\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u6700\u5e38\u7528\u7684\u7b56\u7565\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"round_robin"),"\u8f6e\u8be2\u3002\u4e5f\u5c31\u662f\u5728\u957f\u8fde\u63a5\u4e2d\uff0c\u5047\u8bbe\u5ba2\u6237\u7aef\u5efa\u7acb\u4e86\u4e24\u4e2a\u957f\u8fde\u63a5\uff0c\u90a3\u4e48\u8f6e\u8be2\u7b56\u7565\u5c31\u662f\u6bcf\u4e2a\u957f\u8fde\u63a5\u5404\u8bf7\u6c42\u4e00\u6b21\uff0c\u4ece\u800c\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\u6709\u4e00\u4e2a\u96be\u70b9\uff0c\u5c31\u662f\u5982\u4f55\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u548c\u8d1f\u8f7d\u5747\u8861\u3002\u56e0\u6b64gRPC\u662f\u957f\u8fde\u63a5\uff0c\u8fde\u63a5\u5efa\u7acb\u540e\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u662f\u4e0d\u4f1a\u53bb\u91cd\u65b0\u5efa\u7acb\u8fde\u63a5\u7684\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u65e0\u72b6\u6001\u8bf7\u6c42\u4e2d\uff0c\u6a2a\u5411\u6269\u5bb9\u548c\u670d\u52a1\u53d1\u73b0\u662f\u5f88\u7b80\u5355\u7684\uff0c\u53ea\u9700\u8981\u66f4\u6539\u7f51\u5173\u914d\u7f6e\u7ed3\u8bba\u3002\u4f46\u5728gRPC\u957f\u8fde\u63a5\u4e2d\uff0c\u5219\u9700\u8981\u4e00\u4e9b\u7279\u6b8a\u7684\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u6700\u5e38\u89c1\u7684\u65b9\u5f0f\u5c31\u662f\u901a\u8fc7\u4e2d\u95f4\u4ef6\u5b9e\u73b0"),(0,a.kt)("h4",{id:"\u4e2d\u95f4\u4ef6\u53d1\u73b0"},"\u4e2d\u95f4\u4ef6\u53d1\u73b0"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u7c7b\u4f3cetcd\u4e2d\u95f4\u4ef6\u6765\u5b9e\u73b0\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0\u3002\u8fd9\u6837\uff0c\u5f53\u65b0\u7684\u670d\u52a1\u5668\u52a0\u5165\u6216\u79bb\u5f00\u65f6\uff0cetcd\u4f1a\u901a\u77e5gRPC\u5ba2\u6237\u7aef\u66f4\u65b0\u670d\u52a1\u5668\u5217\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n    "time"\n\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/balancer/roundrobin"\n    "google.golang.org/grpc/resolver"\n    pb "path/to/your/grpc/proto"\n    etcdresolver "github.com/grpc-ecosystem/grpc-resolvers/etcd"\n)\n\nfunc main() {\n    etcdAddress := "your-etcd-address"\n    r := etcdresolver.NewBuilder([]string{etcdAddress})\n\n    resolver.Register(r) // \u6ce8\u518c etcd resolver\n\n    conn, err := grpc.Dial(\n        "etcd:///kvdb",\n        grpc.WithInsecure(),\n        grpc.WithBalancerName(roundrobin.Name), // "round_robin"\n    )\n    if err != nil {\n        log.Fatalf("Failed to dial: %v", err)\n    }\n    defer conn.Close()\n}\n')),(0,a.kt)("h4",{id:"\u670d\u52a1\u7aef\u8d85\u65f6"},"\u670d\u52a1\u7aef\u8d85\u65f6"),(0,a.kt)("p",null,"\u901a\u8fc7\u6307\u5b9a\u670d\u52a1\u7aef\u6700\u5927\u5b58\u6d3b\u65f6\u95f4\uff0c\u4ece\u800c\u89e6\u53d1\u5ba2\u6237\u7aef\u8fde\u63a5\u65ad\u5f00\u91cd\u63a5\u3002\u8fd9\u6837\u901a\u8fc7\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u5c31\u5b9e\u73b0\u4e86\u670d\u52a1\u53d1\u73b0\u548c\u8d1f\u8f7d\u5747\u8861\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n    option := []grpc.ServerOption{\n        grpc.KeepaliveParams(keepalive.ServerParameters{\n            MaxConnectionAge: time.Second * 60,\n        }),\n    }\n    gRPCServer := grpc.NewServer(option...)\n}\n")),(0,a.kt)("h3",{id:"grpc\u72b6\u6001\u7801"},"gRPC\u72b6\u6001\u7801"),(0,a.kt)("p",null,"\u5728gRPC\u4e2d\uff0c\u72b6\u6001\u7801\u662f\u6307\u5728\u8c03\u7528\u8fdc\u7a0b\u8fc7\u7a0b\u65f6\u8fd4\u56de\u7684\u4e00\u4e2a\u6570\u5b57\uff0c\u7528\u4e8e\u8868\u793a\u8c03\u7528\u7684\u7ed3\u679c\u6216\u9519\u8bef\u72b6\u6001\u3002"),(0,a.kt)("p",null,"gRPC\u72b6\u6001\u7801\u6309\u7167\u4e00\u5b9a\u7684\u89c4\u8303\u5b9a\u4e49\uff0c\u4e0d\u540c\u7684\u72b6\u6001\u7801\u4ee3\u8868\u4e0d\u540c\u7684\u610f\u4e49\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684gRPC\u72b6\u6001\u7801\u53ca\u5176\u542b\u4e49\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OK (0):")," \u8868\u793a\u8c03\u7528\u6210\u529f\u5b8c\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CANCELLED (1):")," \u8868\u793a\u8c03\u7528\u56e0\u4e3a\u88ab\u8c03\u7528\u65b9\u53d6\u6d88\u800c\u5931\u8d25\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UNKNOWN (2):")," \u8868\u793a\u8c03\u7528\u56e0\u4e3a\u672a\u77e5\u7684\u9519\u8bef\u800c\u5931\u8d25\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"INVALID_ARGUMENT (3):")," \u8868\u793a\u8c03\u7528\u56e0\u4e3a\u63d0\u4f9b\u7684\u53c2\u6570\u65e0\u6548\u800c\u5931\u8d25\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DEADLINE_EXCEEDED (4):")," \u8868\u793a\u8c03\u7528\u56e0\u4e3a\u8d85\u8fc7\u4e86\u622a\u6b62\u65f6\u95f4\u800c\u5931\u8d25\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NOT_FOUND (5):")," \u8868\u793a\u8bf7\u6c42\u7684\u8d44\u6e90\u672a\u627e\u5230\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ALREADY_EXISTS (6):")," \u8868\u793a\u8bf7\u6c42\u7684\u8d44\u6e90\u5df2\u7ecf\u5b58\u5728\uff0c\u901a\u5e38\u7528\u4e8e\u521b\u5efa\u8d44\u6e90\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PERMISSION_DENIED (7):")," \u8868\u793a\u6ca1\u6709\u8db3\u591f\u7684\u6743\u9650\u6267\u884c\u6307\u5b9a\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RESOURCE_EXHAUSTED (8):")," \u8868\u793a\u8d44\u6e90\u5df2\u7ecf\u7528\u5c3d\uff0c\u4f8b\u5982\u5728\u670d\u52a1\u5668\u4e0a\u7684\u5e76\u53d1\u8fde\u63a5\u6570\u8d85\u8fc7\u4e86\u9650\u5236\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FAILED_PRECONDITION (9):")," \u8868\u793a\u8c03\u7528\u7684\u5148\u51b3\u6761\u4ef6\u4e0d\u6ee1\u8db3\uff0c\u901a\u5e38\u662f\u7531\u4e8e\u8d44\u6e90\u72b6\u6001\u4e0d\u5339\u914d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ABORTED (10):")," \u8868\u793a\u8c03\u7528\u7531\u4e8e\u5e76\u53d1\u51b2\u7a81\u800c\u4e2d\u6b62\uff0c\u4f8b\u5982\u5728\u4e8b\u52a1\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OUT_OF_RANGE (11):")," \u8868\u793a\u8c03\u7528\u7684\u53c2\u6570\u8d85\u51fa\u4e86\u6709\u6548\u8303\u56f4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UNIMPLEMENTED (12):")," \u8868\u793a\u8c03\u7528\u5c1a\u672a\u5b9e\u73b0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"INTERNAL (13):")," \u8868\u793a\u8c03\u7528\u7531\u4e8e\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef\u800c\u5931\u8d25\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UNAVAILABLE (14):")," \u8868\u793a\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u901a\u5e38\u662f\u7531\u4e8e\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DATA_LOSS (15):")," \u8868\u793a\u7531\u4e8e\u4e0d\u53ef\u6062\u590d\u7684\u6570\u636e\u4e22\u5931\u6216\u635f\u574f\u800c\u5931\u8d25\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UNAUTHENTICATED (16):")," \u8868\u793a\u8c03\u7528\u65b9\u672a\u7ecf\u8fc7\u8eab\u4efd\u9a8c\u8bc1\uff0c\u800c\u8981\u6c42\u8eab\u4efd\u9a8c\u8bc1\u3002")))}s.isMDXComponent=!0}}]);