"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5242],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2429:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],u={},i=void 0,p={unversionedId:"demo/go",id:"demo/go",isDocsHomePage:!1,title:"go",description:"\u642d\u5efa http \u670d\u52a1",source:"@site/docs-note/demo/go.md",sourceDirName:"demo",slug:"/demo/go",permalink:"/docusaurus/note/demo/go",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6587\u6863\u8ba1\u5212",permalink:"/docusaurus/note/intro"},next:{title:"docker\u7f51\u7edc",permalink:"/docusaurus/note/docker/docker\u7f51\u7edc"}},l=[{value:"\u642d\u5efa http \u670d\u52a1",id:"\u642d\u5efa-http-\u670d\u52a1",children:[],level:2},{value:"\u642d\u5efa websocket \u670d\u52a1",id:"\u642d\u5efa-websocket-\u670d\u52a1",children:[],level:2}],s={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u642d\u5efa-http-\u670d\u52a1"},"\u642d\u5efa http \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "net/http"\n\nfunc hello(w http.ResponseWriter, r *http.Request) {\n    w.Write([]byte("Hello World"))\n}\n \nfunc main() {\n    http.HandleFunc("/", hello)\n    http.ListenAndServe(":8000", nil)\n}\n')),(0,a.kt)("h2",{id:"\u642d\u5efa-websocket-\u670d\u52a1"},"\u642d\u5efa websocket \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "net/http"\n    "github.com/gorilla/websocket"\n)\n\nvar upGrader = websocket.Upgrader{\n    ReadBufferSize:  1024,\n    WriteBufferSize: 1024,\n    CheckOrigin: func(r *http.Request) bool {\n        return true\n    },\n}\n\nfunc ws(w http.ResponseWriter, r *http.Request) {\n    conn, _ := upGrader.Upgrade(w, r, nil)\n    messageType, data, _ := conn.ReadMessage()\n    _ = conn.WriteMessage(messageType, data)\n}\n \nfunc main() {\n    http.HandleFunc("/", ws)\n    http.ListenAndServe(":8000", nil)\n}\n')))}d.isMDXComponent=!0}}]);