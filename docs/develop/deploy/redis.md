---
title: Redis
sidebar_label: Redis
hide_title: true
hide_table_of_contents: false
slug: redis
---

#### 参考文档：
- https://hub.docker.com/r/bitnami/redis

```text title="redis 配置"
# 在后台运行
daemonize yes
# 绑定的IP地址，如果要允许外部访问，设置为0.0.0.0
bind 127.0.0.1
# 监听的端口号
port 6379
# 数据持久化选项
save 900 1
save 300 10
save 60 10000
# 持久化文件名
dbfilename dump.rdb
# 持久化文件保存的目录
dir /var/lib/redis/
# 设置密码进行连接认证
requirepass yourpassword
# 是否开启AOF（Append-Only File）持久化
appendonly yes
# AOF持久化文件名
appendfilename "appendonly.aof"
# AOF持久化策略
appendfsync everysec
# 是否开启RDB压缩
rdbcompression yes
# 最大连接数
maxclients 10000
# 内存使用警告阈值
maxmemory-policy allkeys-lru
# 启用键空间通知
notify-keyspace-events Ex
# 是否开启集群模式
cluster-enabled yes
# 其他
no-appendfsync-on-rewrite yes
databases 16
maxmemory 2g
loglevel warning
```

### Docker 部署
```bash
docker run --rm -it --name redis --hostname redis -p 6379:6379 \
    -v /path/to/redis-persistence:/bitnami/redis/data \
    -v /path/to/your_redis.conf:/opt/bitnami/redis/mounted-etc/redis.conf \
    -e ALLOW_EMPTY_PASSWORD=yes \
    bitnami/redis:latest
```

### DockerCompose 部署
```yaml title="主从集群"
version: '2'
services:
  redis-master:
    image: 'bitnami/redis:latest'
    ports:
      - '6379'
    environment:
      - REDIS_REPLICATION_MODE=master
      - REDIS_PASSWORD=my_master_password
    volumes:
      - '/path/to/redis-persistence:/bitnami'
  redis-replica:
    image: 'bitnami/redis:latest'
    ports:
      - '6379'
    depends_on:
      - redis-master
    environment:
      - REDIS_REPLICATION_MODE=slave
      - REDIS_MASTER_HOST=redis-master
      - REDIS_MASTER_PORT_NUMBER=6379
      - REDIS_MASTER_PASSWORD=my_master_password
      - REDIS_PASSWORD=my_replica_password
```

### K8S 部署
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: redis
  name: redis
spec:
  replicas: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: redis
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: redis
      annotations:
        co.elastic.logs: "false"
        co.elastic.logs/enabled: "false"
        co.elastic.logs/json.add_error_key: "true"
        co.elastic.logs/json.ignore_decoding_error: "true"
        co.elastic.logs/json.keys_under_root: "false"
        co.elastic.logs/processors.add_fields.fields.index: elk-index-redis
        co.elastic.logs/processors.timestamp.field: json.time
        co.elastic.logs/processors.timestamp.layouts: UNIX_MS
        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai
    spec:
      hostname: redis
      containers:
        - image: bitnami/redis:latest
          imagePullPolicy: Always
          envFrom:
            - configMapRef:
                name: redis
          name: redis
          livenessProbe:
            failureThreshold: 3
            initialDelaySeconds: 300
            periodSeconds: 20
            successThreshold: 1
            tcpSocket:
              port: 6379
            timeoutSeconds: 5
          readinessProbe:
            failureThreshold: 3
            initialDelaySeconds: 5
            periodSeconds: 40
            successThreshold: 1
            tcpSocket:
              port: 6379
            timeoutSeconds: 2
          ports:
            - containerPort: 9092
              name: redis
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
            - mountPath: /bitnami/redis/data
              name: storage
      restartPolicy: Always
      volumes:
        - name: host-time
          hostPath:
            path: /etc/localtime
            type: ""
        - name: storage
          emptyDir: {}
---
apiVersion: v1
kind: Service
metadata:
  name: redis
spec:
  ports:
    - name: redis6379
      port: 6379
      protocol: TCP
      targetPort: 6379
  selector:
    app: redis
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: v1
kind: Service
metadata:
  name: redis-nodeport
spec:
  ports:
    - name: redis-nodeport
      port: 6379
      protocol: TCP
      targetPort: 6379
  selector:
    app: redis
  sessionAffinity: None
  type: NodePort
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: redis
data:
  REDIS_PASSWORD: "redis"
```
