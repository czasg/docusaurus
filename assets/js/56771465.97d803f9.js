"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9868],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>O});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),m=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},d=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(o),u=r,O=c["".concat(l,".").concat(u)]||c[u]||p[u]||a;return o?t.createElement(O,s(s({ref:n},d),{},{components:o})):t.createElement(O,s({ref:n},d))}));function O(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var m=2;m<a;m++)s[m]=o[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7471:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var t=o(7462),r=(o(7294),o(3905));const a={title:"MongoDB",sidebar_label:"MongoDB",hide_title:!0,hide_table_of_contents:!1,slug:"mongo"},s=void 0,i={unversionedId:"deploy/mongodb",id:"deploy/mongodb",title:"MongoDB",description:"\u53c2\u8003\u6587\u6863\uff1a",source:"@site/docs/develop/deploy/mongodb.md",sourceDirName:"deploy",slug:"/deploy/mongo",permalink:"/docusaurus/docs/develop/deploy/mongo",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/develop/deploy/mongodb.md",tags:[],version:"current",frontMatter:{title:"MongoDB",sidebar_label:"MongoDB",hide_title:!0,hide_table_of_contents:!1,slug:"mongo"},sidebar:"tutorialSidebar",previous:{title:"Kafka",permalink:"/docusaurus/docs/develop/deploy/kafka"},next:{title:"MySQL",permalink:"/docusaurus/docs/develop/deploy/mysql"}},l={},m=[{value:"\u53c2\u8003\u6587\u6863\uff1a",id:"\u53c2\u8003\u6587\u6863",level:4},{value:"Docker \u90e8\u7f72",id:"docker-\u90e8\u7f72",level:3},{value:"DockerCompose \u90e8\u7f72",id:"dockercompose-\u90e8\u7f72",level:3},{value:"K8S \u90e8\u7f72",id:"k8s-\u90e8\u7f72",level:3}],d={toc:m},c="wrapper";function p(e){let{components:n,...o}=e;return(0,r.kt)(c,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/bitnami/mongodb"},"https://hub.docker.com/r/bitnami/mongodb"))),(0,r.kt)("h3",{id:"docker-\u90e8\u7f72"},"Docker \u90e8\u7f72"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it --name mongodb --hostname mongodb -p 27017:27017 \\\n    -v /path/to/mongodb-persistence:/bitnami/mongodb \\\n    -e ALLOW_EMPTY_PASSWORD=yes \\\n    -e MONGODB_USERNAME=my_user \\\n    -e MONGODB_PASSWORD=password123 \\\n    -e MONGODB_DATABASE=my_database \\\n    -e MONGODB_ROOT_USER=root \\\n    -e MONGODB_ROOT_PASSWORD=root \\\n    -e MONGODB_EXTRA_FLAGS='--wiredTigerCacheSizeGB=2' \\\n    bitnami/mongodb:latest\n")),(0,r.kt)("h3",{id:"dockercompose-\u90e8\u7f72"},"DockerCompose \u90e8\u7f72"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="\u4e3b\u4ece\u96c6\u7fa4"',title:'"\u4e3b\u4ece\u96c6\u7fa4"'},"version: '2'\nservices:\n  mongodb-primary:\n    image: 'bitnami/mongodb:latest'\n    environment:\n      - MONGODB_ADVERTISED_HOSTNAME=mongodb-primary\n      - MONGODB_REPLICA_SET_MODE=primary\n      - MONGODB_ROOT_PASSWORD=password123\n      - MONGODB_REPLICA_SET_KEY=replicasetkey123\n    volumes:\n      - 'mongodb_master_data:/bitnami'\n  mongodb-secondary:\n    image: 'bitnami/mongodb:latest'\n    depends_on:\n      - mongodb-primary\n    environment:\n      - MONGODB_ADVERTISED_HOSTNAME=mongodb-secondary\n      - MONGODB_REPLICA_SET_MODE=secondary\n      - MONGODB_INITIAL_PRIMARY_HOST=mongodb-primary\n      - MONGODB_INITIAL_PRIMARY_PORT_NUMBER=27017\n      - MONGODB_INITIAL_PRIMARY_ROOT_PASSWORD=password123\n      - MONGODB_REPLICA_SET_KEY=replicasetkey123\n  mongodb-arbiter:\n    image: 'bitnami/mongodb:latest'\n    depends_on:\n      - mongodb-primary\n    environment:\n      - MONGODB_ADVERTISED_HOSTNAME=mongodb-arbiter\n      - MONGODB_REPLICA_SET_MODE=arbiter\n      - MONGODB_INITIAL_PRIMARY_HOST=mongodb-primary\n      - MONGODB_INITIAL_PRIMARY_PORT_NUMBER=27017\n      - MONGODB_INITIAL_PRIMARY_ROOT_PASSWORD=password123\n      - MONGODB_REPLICA_SET_KEY=replicasetkey123\nvolumes:\n  mongodb_master_data:\n    driver: local\n")),(0,r.kt)("h3",{id:"k8s-\u90e8\u7f72"},"K8S \u90e8\u7f72"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: mongodb\n  name: mongodb\nspec:\n  replicas: 1\n  revisionHistoryLimit: 5\n  selector:\n    matchLabels:\n      app: mongodb\n  strategy:\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: mongodb\n      annotations:\n        co.elastic.logs: "false"\n        co.elastic.logs/enabled: "false"\n        co.elastic.logs/json.add_error_key: "true"\n        co.elastic.logs/json.ignore_decoding_error: "true"\n        co.elastic.logs/json.keys_under_root: "false"\n        co.elastic.logs/processors.add_fields.fields.index: elk-index-mongodb\n        co.elastic.logs/processors.timestamp.field: json.time\n        co.elastic.logs/processors.timestamp.layouts: UNIX_MS\n        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai\n    spec:\n      hostname: mongodb\n      containers:\n        - image: bitnami/mongodb:latest\n          imagePullPolicy: Always\n          envFrom:\n            - configMapRef:\n                name: mongodb\n          name: mongodb\n          livenessProbe:\n            failureThreshold: 3\n            initialDelaySeconds: 300\n            periodSeconds: 20\n            successThreshold: 1\n            tcpSocket:\n              port: 27017\n            timeoutSeconds: 5\n          readinessProbe:\n            failureThreshold: 3\n            initialDelaySeconds: 5\n            periodSeconds: 40\n            successThreshold: 1\n            tcpSocket:\n              port: 27017\n            timeoutSeconds: 2\n          ports:\n            - containerPort: 27017\n              name: mongodb\n              protocol: TCP\n          resources:\n            limits:\n              cpu: 1000m\n              memory: 1000Mi\n            requests:\n              cpu: 100m\n              memory: 100Mi\n          volumeMounts:\n            - mountPath: /etc/localtime\n              name: host-time\n              readOnly: true\n            - mountPath: /bitnami/mongodb\n              name: storage\n      restartPolicy: Always\n      volumes:\n        - name: host-time\n          hostPath:\n            path: /etc/localtime\n            type: ""\n        - name: storage\n          emptyDir: {}\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: mongodb\nspec:\n  ports:\n    - name: mongodb\n      port: 27017\n      protocol: TCP\n      targetPort: 27017\n  selector:\n    app: mongodb\n  sessionAffinity: None\n  type: ClusterIP\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: mongodb-nodeport\nspec:\n  ports:\n    - name: mongodb-nodeport\n      port: 27017\n      protocol: TCP\n      targetPort: 27017\n  selector:\n    app: mongodb\n  sessionAffinity: None\n  type: NodePort\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: mongodb\ndata:\n  MONGODB_USERNAME: "my_user"\n  MONGODB_PASSWORD: "password123"\n  MONGODB_DATABASE: "my_database"\n  MONGODB_ROOT_USER: "root"\n  MONGODB_ROOT_PASSWORD: "root"\n  MONGODB_EXTRA_FLAGS: "--wiredTigerCacheSizeGB=2"\n')))}p.isMDXComponent=!0}}]);