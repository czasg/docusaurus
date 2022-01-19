---
title: redis 部署
---

## docker
```shell script
docker run -it --rm --name redis-server -p 6379:6379 redis
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
      - "/data:/data"
```

## kubectl
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: redis-lru
  name: redis-lru
spec:
  replicas: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: redis-lru
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: redis-lru
      annotations:
        co.elastic.logs: "false"
    spec:
      containers:
        - name: redis-lru
          image: "redis:latest"
          imagePullPolicy: Always
          args:
            - --appendonly
            - "yes"
            - --no-appendfsync-on-rewrite
            - "yes"
            - --databases
            - "16"
            - --maxmemory
            - "2g"
            - --maxmemory-policy
            - "allkeys-lru"
            - --loglevel
            - "warning"
            - --requirepass
            - "redislru"
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
            - containerPort: 6379
              name: 6379tcp
              protocol: TCP
          resources:
            limits:
              cpu: 1000m
              memory: 2048Mi
            requests:
              cpu: 1000m
              memory: 2048Mi
          volumeMounts:
            - mountPath: /etc/localtime
              name: host-time
              readOnly: true
            - mountPath: /data
              name: redis-data
      restartPolicy: Always
      volumes:
        - hostPath:
            path: /etc/localtime
            type: ""
          name: host-time
        - name: redis-data
          persistentVolumeClaim:
            claimName: redis-lru
---
apiVersion: v1
kind: Service
metadata:
  name: redis-lru
spec:
  ports:
    - name: tcp6379
      port: 6379
      protocol: TCP
      targetPort: 6379
  selector:
    app: redis-lru
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: v1
kind: Service
metadata:
  name: redis-lru-node
spec:
  selector:
    app: redis-lru
  ports:
    - name: tcp6379
      port: 6379
      protocol: TCP
      targetPort: 6379
  sessionAffinity: None
  type: NodePort
```
