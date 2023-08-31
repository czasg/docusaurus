---
title: Nginx
sidebar_label: Nginx
hide_title: true
hide_table_of_contents: false
slug: nginx
---

#### 参考文档：
- https://hub.docker.com/r/bitnami/nginx

```text title="nginx 配置"
# 用户和用户组
user www-data;
# 启动的工作进程数
worker_processes auto;
# 错误日志存放路径
error_log /var/log/nginx/error.log;
# 进程文件存放路径
pid /var/run/nginx.pid;
# 设置事件模型（通常不需要修改）
events {
    worker_connections 1024;
}
# HTTP服务器配置
http {
    # 文件扩展名和MIME类型映射
    include mime.types;
    default_type application/octet-stream;

    # 日志格式
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    # 访问日志存放路径
    access_log /var/log/nginx/access.log main;

    # 使用gzip压缩
    gzip on;
    gzip_comp_level 5;
    gzip_min_length 256;
    gzip_types application/javascript text/css;

    # 服务器块配置
    server {
        # 监听的端口
        listen 80;
        
        # 域名
        server_name example.com;
        
        # 根目录
        root /var/www/html;
        
        # 静态文件缓存设置
        location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
            expires max;
            log_not_found off;
        }
        
        # 反向代理配置示例
        location /api/ {
            proxy_pass http://backend_server;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
        
        # 错误页面配置
        error_page 404 /404.html;
        
        # 重定向配置
        location /old-url {
            return 301 /new-url;
        }
        
        # SSL配置示例
        listen 443 ssl;
        ssl_certificate /path/to/ssl_certificate.crt;
        ssl_certificate_key /path/to/ssl_certificate.key;
    }
}
```

### Docker 部署
```bash
docker run --rm -it --name nginx --hostname nginx -p 80:80 \
    -v /path/to/my_server_block.conf:/opt/bitnami/nginx/conf/server_blocks/my_server_block.conf:ro \
    bitnami/nginx:latest
```

### K8S 部署
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: nginx
  name: nginx
spec:
  replicas: 1
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
        co.elastic.logs: "false"
        co.elastic.logs/enabled: "false"
        co.elastic.logs/json.add_error_key: "true"
        co.elastic.logs/json.ignore_decoding_error: "true"
        co.elastic.logs/json.keys_under_root: "false"
        co.elastic.logs/processors.add_fields.fields.index: elk-index-nginx
        co.elastic.logs/processors.timestamp.field: json.time
        co.elastic.logs/processors.timestamp.layouts: UNIX_MS
        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai
    spec:
      hostname: nginx
      containers:
        - image: bitnami/nginx:latest
          imagePullPolicy: Always
          envFrom:
            - configMapRef:
                name: nginx
          name: nginx
          livenessProbe:
            failureThreshold: 3
            initialDelaySeconds: 300
            periodSeconds: 20
            successThreshold: 1
            tcpSocket:
              port: 80
            timeoutSeconds: 5
          readinessProbe:
            failureThreshold: 3
            initialDelaySeconds: 5
            periodSeconds: 40
            successThreshold: 1
            tcpSocket:
              port: 80
            timeoutSeconds: 2
          ports:
            - containerPort: 80
              name: nginx
              protocol: TCP
          resources:
            limits:
              cpu: 1000m
              memory: 1000Mi
            requests:
              cpu: 100m
              memory: 100Mi
          volumeMounts:
            - mountPath: /etc/localtime
              name: host-time
              readOnly: true
            - mountPath: /opt/bitnami/nginx/conf/server_blocks/
              name: nginx-conf
      restartPolicy: Always
      volumes:
        - hostPath:
            path: /etc/localtime
            type: ""
          name: host-time
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
    - name: nginx
      port: 80
      protocol: TCP
      targetPort: 80
  selector:
    app: nginx
  sessionAffinity: None
  type: ClusterIP
---
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
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: nginx
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "5M"
    nginx.ingress.kubernetes.io/proxy-connect-timeout: "1200"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "1200"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "1200"
spec:
  rules:
    - host: nginx.domain
      http:
        paths:
          - backend:
              serviceName: nginx
              servicePort: 80
```
