"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8714],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(y,i(i({ref:n},p),{},{components:r})):t.createElement(y,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5387:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"redis"},l=void 0,c={unversionedId:"\u90e8\u7f72/redis",id:"\u90e8\u7f72/redis",isDocsHomePage:!1,title:"redis",description:"docker",source:"@site/docs-note/\u90e8\u7f72/redis.md",sourceDirName:"\u90e8\u7f72",slug:"/\u90e8\u7f72/redis",permalink:"/docusaurus/note/\u90e8\u7f72/redis",tags:[],version:"current",frontMatter:{title:"redis"},sidebar:"tutorialSidebar",previous:{title:"rabbitmq",permalink:"/docusaurus/note/\u90e8\u7f72/rabbitmq"},next:{title:"golang",permalink:"/docusaurus/note/\u9898\u5e93/golang"}},p=[{value:"docker",id:"docker",children:[],level:2},{value:"docker-compose",id:"docker-compose",children:[],level:2},{value:"kubectl",id:"kubectl",children:[],level:2}],u={toc:p};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"docker"},"docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker run -it --rm --name redis-server -p 6379:6379 redis\n")),(0,a.kt)("h2",{id:"docker-compose"},"docker-compose"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yaml"',title:'"docker-compose.yaml"'},'version: "2.3"\nservices:\n  redis:\n    image: redis:latest\n    ports:\n    - "6379:6379"\n    volumes:\n      - "/data:/data"\n')),(0,a.kt)("h2",{id:"kubectl"},"kubectl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: redis-lru\n  name: redis-lru\nspec:\n  replicas: 1\n  revisionHistoryLimit: 5\n  selector:\n    matchLabels:\n      app: redis-lru\n  strategy:\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: redis-lru\n      annotations:\n        co.elastic.logs: "false"\n    spec:\n      containers:\n        - name: redis-lru\n          image: "redis:latest"\n          imagePullPolicy: Always\n          args:\n            - --appendonly\n            - "yes"\n            - --no-appendfsync-on-rewrite\n            - "yes"\n            - --databases\n            - "16"\n            - --maxmemory\n            - "2g"\n            - --maxmemory-policy\n            - "allkeys-lru"\n            - --loglevel\n            - "warning"\n            - --requirepass\n            - "redislru"\n          livenessProbe:\n            failureThreshold: 3\n            initialDelaySeconds: 300\n            periodSeconds: 20\n            successThreshold: 1\n            tcpSocket:\n              port: 6379\n            timeoutSeconds: 5\n          readinessProbe:\n            failureThreshold: 3\n            initialDelaySeconds: 5\n            periodSeconds: 40\n            successThreshold: 1\n            tcpSocket:\n              port: 6379\n            timeoutSeconds: 2\n          ports:\n            - containerPort: 6379\n              name: 6379tcp\n              protocol: TCP\n          resources:\n            limits:\n              cpu: 1000m\n              memory: 2048Mi\n            requests:\n              cpu: 1000m\n              memory: 2048Mi\n          volumeMounts:\n            - mountPath: /etc/localtime\n              name: host-time\n              readOnly: true\n            - mountPath: /data\n              name: redis-data\n      restartPolicy: Always\n      volumes:\n        - hostPath:\n            path: /etc/localtime\n            type: ""\n          name: host-time\n        - name: redis-data\n          persistentVolumeClaim:\n            claimName: redis-lru\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: redis-lru\nspec:\n  ports:\n    - name: tcp6379\n      port: 6379\n      protocol: TCP\n      targetPort: 6379\n  selector:\n    app: redis-lru\n  sessionAffinity: None\n  type: ClusterIP\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: redis-lru-node\nspec:\n  selector:\n    app: redis-lru\n  ports:\n    - name: tcp6379\n      port: 6379\n      protocol: TCP\n      targetPort: 6379\n  sessionAffinity: None\n  type: NodePort\n')))}d.isMDXComponent=!0}}]);