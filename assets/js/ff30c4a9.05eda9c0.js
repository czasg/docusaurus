"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8419],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),m=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),y=o,u=c["".concat(i,".").concat(y)]||c[y]||d[y]||a;return t?r.createElement(u,s(s({ref:n},p),{},{components:t})):r.createElement(u,s({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var m=2;m<a;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=t(7462),o=(t(7294),t(3905));const a={title:"MySQL",sidebar_label:"MySQL",hide_title:!0,hide_table_of_contents:!1,slug:"mysql"},s=void 0,l={unversionedId:"deploy/mysql",id:"deploy/mysql",title:"MySQL",description:"\u53c2\u8003\u6587\u6863\uff1a",source:"@site/docs/develop/deploy/mysql.md",sourceDirName:"deploy",slug:"/deploy/mysql",permalink:"/docusaurus/docs/develop/deploy/mysql",draft:!1,editUrl:"https://github.com/czasg/docusaurus/edit/main/docs/develop/deploy/mysql.md",tags:[],version:"current",frontMatter:{title:"MySQL",sidebar_label:"MySQL",hide_title:!0,hide_table_of_contents:!1,slug:"mysql"},sidebar:"tutorialSidebar",previous:{title:"PostgresQL",permalink:"/docusaurus/docs/develop/deploy/postgres"},next:{title:"MongoDB",permalink:"/docusaurus/docs/develop/deploy/mongo"}},i={},m=[{value:"\u53c2\u8003\u6587\u6863\uff1a",id:"\u53c2\u8003\u6587\u6863",level:4},{value:"Docker \u90e8\u7f72",id:"docker-\u90e8\u7f72",level:3},{value:"DockerCompose \u90e8\u7f72",id:"dockercompose-\u90e8\u7f72",level:3},{value:"K8S \u90e8\u7f72",id:"k8s-\u90e8\u7f72",level:3}],p={toc:m},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/bitnami/mysql"},"https://hub.docker.com/r/bitnami/mysql"))),(0,o.kt)("h3",{id:"docker-\u90e8\u7f72"},"Docker \u90e8\u7f72"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it --name mysql --hostname mysql -p 3306:3306 \\\n    -v /path/to/mysql-persistence:/bitnami/mysql/data \\\n    -e MYSQL_USER=my_user \\\n    -e MYSQL_PASSWORD=my_password \\\n    -e MYSQL_DATABASE=my_database \\\n    bitnami/mysql:latest\n")),(0,o.kt)("h3",{id:"dockercompose-\u90e8\u7f72"},"DockerCompose \u90e8\u7f72"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="\u4e3b\u4ece\u96c6\u7fa4"',title:'"\u4e3b\u4ece\u96c6\u7fa4"'},"version: '2'\nservices:\n  mysql-master:\n    image: 'bitnami/mysql:latest'\n    ports:\n      - '3306'\n    volumes:\n      - /path/to/mysql-persistence:/bitnami/mysql/data\n    environment:\n      - MYSQL_REPLICATION_MODE=master\n      - MYSQL_REPLICATION_USER=repl_user\n      - MYSQL_REPLICATION_PASSWORD=repl_password\n      - MYSQL_ROOT_PASSWORD=master_root_password\n      - MYSQL_USER=my_user\n      - MYSQL_PASSWORD=my_password\n      - MYSQL_DATABASE=my_database\n  mysql-slave:\n    image: 'bitnami/mysql:latest'\n    ports:\n      - '3306'\n    depends_on:\n      - mysql-master\n    environment:\n      - MYSQL_REPLICATION_MODE=slave\n      - MYSQL_REPLICATION_USER=repl_user\n      - MYSQL_REPLICATION_PASSWORD=repl_password\n      - MYSQL_MASTER_HOST=mysql-master\n      - MYSQL_MASTER_PORT_NUMBER=3306\n      - MYSQL_MASTER_ROOT_PASSWORD=master_root_password\n")),(0,o.kt)("h3",{id:"k8s-\u90e8\u7f72"},"K8S \u90e8\u7f72"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: mysql\n  name: mysql\nspec:\n  replicas: 1\n  revisionHistoryLimit: 5\n  selector:\n    matchLabels:\n      app: mysql\n  strategy:\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: mysql\n      annotations:\n        co.elastic.logs: "false"\n        co.elastic.logs/enabled: "false"\n        co.elastic.logs/json.add_error_key: "true"\n        co.elastic.logs/json.ignore_decoding_error: "true"\n        co.elastic.logs/json.keys_under_root: "false"\n        co.elastic.logs/processors.add_fields.fields.index: elk-index-mysql\n        co.elastic.logs/processors.timestamp.field: json.time\n        co.elastic.logs/processors.timestamp.layouts: UNIX_MS\n        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai\n    spec:\n      hostname: mysql\n      containers:\n        - image: bitnami/mysql:latest\n          imagePullPolicy: Always\n          envFrom:\n            - configMapRef:\n                name: mysql\n          name: mysql\n          ports:\n            - containerPort: 3306\n              name: mysql\n              protocol: TCP\n          resources:\n            limits:\n              cpu: 1000m\n              memory: 1000Mi\n            requests:\n              cpu: 100m\n              memory: 100Mi\n          volumeMounts:\n            - mountPath: /etc/localtime\n              name: host-time\n              readOnly: true\n            - mountPath: /bitnami/mysql/data\n              name: storage\n      restartPolicy: Always\n      volumes:\n        - name: host-time\n          hostPath:\n            path: /etc/localtime\n            type: ""\n        - name: storage\n          emptyDir: {}\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: mysql\nspec:\n  ports:\n    - name: mysql3306\n      port: 3306\n      protocol: TCP\n      targetPort: 3306\n  selector:\n    app: mysql\n  sessionAffinity: None\n  type: ClusterIP\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: mysql-nodeport\nspec:\n  ports:\n    - name: mysql-nodeport\n      port: 3306\n      protocol: TCP\n      targetPort: 3306\n  selector:\n    app: mysql\n  sessionAffinity: None\n  type: NodePort\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: mysql\ndata:\n  MYSQL_USER: "my_user"\n  MYSQL_PASSWORD: "my_password"\n  MYSQL_DATABASE: "my_database"\n')))}d.isMDXComponent=!0}}]);