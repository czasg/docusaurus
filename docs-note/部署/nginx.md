---
title: nginx 部署
---

## docker
```shell script title="指定默认配置文件"
docker run -it --rm --name nginx-server \
    -v default.conf:/etc/nginx/conf.d/default.conf \
    -p 8080:80 \
    nginx:latest
```

## docker-compose
```yaml title="docker-compose.yaml"
version: "2.3"
services:
  nginx:
    image: nginx:latest
    ports:
    - "8080:80"
    volumes:
      - "default.conf:/etc/nginx/conf.d/default.conf"
```

## kubectl
```yaml title="nginx-deploy.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: nginx
  name: nginx
spec:
  replicas: 2
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: nginx
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: nginx
      annotations:
        co.elastic.logs: "true"
        co.elastic.logs/enabled: "true"
        co.elastic.logs/json.add_error_key: "true"
        co.elastic.logs/json.ignore_decoding_error: "true"
        co.elastic.logs/json.keys_under_root: "false"
        co.elastic.logs/processors.timestamp.field: json.time
        co.elastic.logs/processors.timestamp.layouts: UNIX_MS
        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai
        co.elastic.logs/processors.add_fields.fields.index: "nginx"
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          imagePullPolicy: Always
          ports:
            - containerPort: 80
              name: 80tcp
              protocol: TCP
          readinessProbe:
            failureThreshold: 3
            initialDelaySeconds: 10
            periodSeconds: 30
            successThreshold: 2
            tcpSocket:
               port: 80
            timeoutSeconds: 10
          livenessProbe:
            failureThreshold: 3
            initialDelaySeconds: 10
            periodSeconds: 60
            successThreshold: 1
            tcpSocket:
              port: 80
            timeoutSeconds: 20
          resources:
            limits:
              cpu: 200m
              memory: 200Mi
            requests:
              cpu: 200m
              memory: 200Mi
          volumeMounts:
            - mountPath: /etc/localtime
              name: host-time
              readOnly: true
            - mountPath: /etc/nginx/conf.d/
              name: nginx-conf
      restartPolicy: Always
      volumes:
        - name: host-time
          hostPath:
            path: /etc/localtime
            type: ""
        - name: nginx-conf
          configMap:
            name: nginx
            defaultMode: 420
---
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  ports:
    - name: http80
      port: 80
      protocol: TCP
      targetPort: 80
  selector:
    app: nginx
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: nginx
spec:
  rules:
    - host: nginx.k8s.xyz
      http:
        paths:
          - backend:
              serviceName: nginx
              servicePort: 80
---
# 环境变量配置
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx
data:
  default.conf: |
    server {
        listen  80;
        location / {
            root  /static;
            autoindex  on;
        }
    }
```

## 模板
### 静态文件配置
```text title="default.conf"
server {
    listen  80;
    server_name  _;
    proxy_request_buffering  off;
    proxy_buffering  off;
    client_max_body_size  0;

    location / {
        if ( $request_method = 'OPTIONS' ) {
            add_header  'Access-Control-Allow-Methods' 'OPTIONS,GET';
            add_header  'Access-Control-Allow-Origin' '*'; 
            add_header  'Access-Control-Allow-Credentials' 'true';
            add_header  'Access-Control-Allow-Headers' 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
            return  204;
        }
        root  /static;
        autoindex  on;
    }
}
```
