---
title: redis
---
## redis 配置模板
```text title="redis.conf"
appendonly  no
databases  16
maxmemory  200mb
maxmemory-policy  allkeys-lru
protected-mode  no
```

## docker
```shell script title="部署 redis"
docker run -it --rm --name redis-server \
    -v data:/data \
    -v redis.conf:/rds/redis.conf \
    -p 6379:6379 \
    redis:latest redis-server /rds/redis.conf
```


## docker-compose
```yaml title="docker-compose.yaml"
version: "2.3"
services:
  redis:
    image: redis:latest
    ports:
    - "6379:6379"
    volumes:
      - "data:/data"
      - "redis.conf:/rds/redis.conf"
```

## kubectl
```yaml title="redis-deploy.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: redis
  name: redis
spec:
  replicas: 2
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
        co.elastic.logs: "true"
        co.elastic.logs/enabled: "true"
        co.elastic.logs/json.add_error_key: "true"
        co.elastic.logs/json.ignore_decoding_error: "true"
        co.elastic.logs/json.keys_under_root: "false"
        co.elastic.logs/processors.timestamp.field: json.time
        co.elastic.logs/processors.timestamp.layouts: UNIX_MS
        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai
        co.elastic.logs/processors.add_fields.fields.index: "redis-test"
    spec:
      containers:
        - name: redis
          image: redis:latest
          imagePullPolicy: Always
          command: ["sh", "-c", "redis-server /rds/redis.conf"]
          ports:
            - containerPort: 6379
              name: 6379tcp
              protocol: TCP
          readinessProbe:
            failureThreshold: 3
            initialDelaySeconds: 10
            periodSeconds: 30
            successThreshold: 2
            tcpSocket:
               port: 6379
            timeoutSeconds: 10
          livenessProbe:
            failureThreshold: 3
            initialDelaySeconds: 10
            periodSeconds: 60
            successThreshold: 1
            tcpSocket:
              port: 6379
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
            - mountPath: /rds/redis.conf
              name: redis-conf
              subPath: config
      restartPolicy: Always
      volumes:
        - name: host-time
          hostPath:
            path: /etc/localtime
            type: ""
        - name: redis-conf
          configMap:
            name: redis
            defaultMode: 420
---
apiVersion: v1
kind: Service
metadata:
  name: redis
spec:
  ports:
    - name: http6379
      port: 6379
      protocol: TCP
      targetPort: 6379
  selector:
    app: redis
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: redis
data:
  config: |
    appendonly  no
    databases  16
    maxmemory  200mb
    maxmemory-policy  allkeys-lru
    protected-mode  no
```
