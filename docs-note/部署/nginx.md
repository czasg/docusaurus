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
```yaml

```

## 模板
### 静态文件配置
```text title="default.conf"
server {
    listen  80;
    server_name  _;
    proxy_request_buffering  off;
    proxy_buffering  off;

    location / {
        return  204;
    }

    location /static {
        root  /static;
        autoindex  on;
        add_header  'Access‐Control‐Allow‐Methods' 'OPTIONS,GET';
        add_header  'Access-Control-Allow-Origin' '*'; 
        add_header  'Access-Control-Allow-Credentials' 'true';
    }
}
```

### lua
