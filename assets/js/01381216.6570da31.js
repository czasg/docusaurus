"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3927],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6121:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={title:"postgres"},s=void 0,l={unversionedId:"\u90e8\u7f72/postgres",id:"\u90e8\u7f72/postgres",isDocsHomePage:!1,title:"postgres",description:"docker",source:"@site/docs-note/\u90e8\u7f72/postgres.md",sourceDirName:"\u90e8\u7f72",slug:"/\u90e8\u7f72/postgres",permalink:"/docusaurus/note/\u90e8\u7f72/postgres",tags:[],version:"current",frontMatter:{title:"postgres"},sidebar:"tutorialSidebar",previous:{title:"nginx",permalink:"/docusaurus/note/\u90e8\u7f72/nginx"},next:{title:"rabbitmq",permalink:"/docusaurus/note/\u90e8\u7f72/rabbitmq"}},u=[{value:"docker",id:"docker",children:[],level:2},{value:"kubectl",id:"kubectl",children:[],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"docker"},"docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker pull postgres\ndocker run -it --rm --name postgres -p 5432:5432 postgres\n")),(0,o.kt)("h2",{id:"kubectl"},"kubectl"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: junkv\n  name: junkv\nspec:\n  replicas: 1\n  revisionHistoryLimit: 5\n  selector:\n    matchLabels:\n      app: junkv\n  template:\n    metadata:\n      labels:\n        app: junkv\n    spec:\n      initContainers:\n        - image: busybox:latest\n          name: fill-pgdata\n          command: ["sh", "-c", "cp -r /data/* /pgdata/"]\n          volumeMounts:\n            - mountPath: /pgdata\n              name: pgdata\n            - mountPath: /data\n              name: data\n      containers:\n        - image: postgres:latest\n          imagePullPolicy: Always\n          name: postgres\n          lifecycle:\n            postStart:\n              exec:\n                command: ["/bin/sh", "-c", "while ! pg_isready ; do sleep 3; done; echo success;"]\n          resources:\n            limits:\n              cpu: 1000m\n              memory: 2000Mi\n            requests:\n              cpu: 1000m\n              memory: 2000Mi\n          volumeMounts:\n            - mountPath: /etc/localtime\n              name: host-time\n              readOnly: true\n            - mountPath: /var/lib/postgresql/data\n              name: pgdata\n      restartPolicy: Always\n      volumes:\n        - hostPath:\n            path: /etc/localtime\n            type: ""\n          name: host-time\n        - name: pgdata\n          emptyDir: {}\n        - name: data\n          emptyDir: {}\n')))}m.isMDXComponent=!0}}]);