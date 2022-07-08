"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1105],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6385:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={},c=void 0,p={unversionedId:"k8s/\u914d\u7f6e\u8be6\u89e3/pod",id:"k8s/\u914d\u7f6e\u8be6\u89e3/pod",isDocsHomePage:!1,title:"pod",description:"",source:"@site/docs-note/k8s/\u914d\u7f6e\u8be6\u89e3/pod.md",sourceDirName:"k8s/\u914d\u7f6e\u8be6\u89e3",slug:"/k8s/\u914d\u7f6e\u8be6\u89e3/pod",permalink:"/docusaurus/note/k8s/\u914d\u7f6e\u8be6\u89e3/pod",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Service",permalink:"/docusaurus/note/k8s/service"},next:{title:"mysql\u57fa\u7840",permalink:"/docusaurus/note/mysql/mysql\u57fa\u7840"}},l=[],u={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: demo\n  namespace: demo\n  labels:  # object\n    app: demo\n  annotations:  # object\n    app: demo\nspec:\n  replicas: 1\n  revisionHistoryLimit: 5\n  progressDeadlineSeconds: 600\n  selector:\n    matchLabels:\n      name: demo\n  strategy:\n    type: [RollingUpdate | Recreate]\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  template:\n    metadata:\n      labels:  # object\n        app: demo\n      annotations:  # object\n        app: demo\n    spec:\n      restartPolicy: [Always | Never | OnFailure]\n      nodeSelector:  # object\n        kubernetes.io/hostname: node-1\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: nodeHostName\n                operator: In\n                values:\n                - "node-1"\n      imagePullSecrets:\n      - name: string\n      hostNetowrk: false\n      volumes:\n      - name: emptyDir\n        emptyDir: {}\n      - name: hostPath\n        hostPath:\n          path: /hostPath\n      - name: configMap\n        configMap:\n          name: demoConfigMap\n          items:\n          - key: demo\n            path: /configMap\n      - name: nfs\n        nfs:\n          server: 10.10.10.10\n          path: /nfs\n      containers:\n      - name: demo\n        image: demo:latest\n        imagePullPolicy: [Always | Never | IfNotPresent]\n        command: ["sh", "-c", "sleep 3600"]\n        args: ["-c", "sleep 3600"]\n        workingDir: /workplace\n        securityContext:\n          privileged: [false | true]\n        volumeMounts:\n        - name: emptyDir\n          mountPath: /emptyDir\n          readOnly: [false | true]\n        ports:\n        - name: http\n          containerPort: 8080\n          hostPort: int\n          protocol: string\n        env:\n        - name: APP_NAME\n          value: demo\n        envFrom:\n        - configMapRef:\n            name: demoConfigMap\n        resources:\n          limits:\n            cpu: "1"\n            memory: 200Mi\n          requests:\n            cpu: "1"\n            memory: 200Mi\n        livenessProbe:\n          exec:\n            command: [...string]\n          httpGet:\n            path: string\n            port: int\n            host: string\n            scheme: string\n            httpHeaders:\n            - name: string\n              value: string\n          tcpSocket:\n            port: 8080\n          initialDelaySeconds: 10\n          timeoutSeconds: 5\n          periodSeconds: 30\n          successThreshold: 1\n          failureThreshold: 3\n')))}m.isMDXComponent=!0}}]);