---
title: MongoDB
sidebar_label: MongoDB
hide_title: true
hide_table_of_contents: false
slug: mongo
---

#### 参考文档：
- https://hub.docker.com/r/bitnami/mongodb

### Docker 部署
```bash
docker run --rm -it --name mongodb --hostname mongodb -p 27017:27017 \
    -v /path/to/mongodb-persistence:/bitnami/mongodb \
    -e ALLOW_EMPTY_PASSWORD=yes \
    -e MONGODB_USERNAME=my_user \
    -e MONGODB_PASSWORD=password123 \
    -e MONGODB_DATABASE=my_database \
    -e MONGODB_ROOT_USER=root \
    -e MONGODB_ROOT_PASSWORD=root \
    -e MONGODB_EXTRA_FLAGS='--wiredTigerCacheSizeGB=2' \
    bitnami/mongodb:latest
```

### DockerCompose 部署
```yaml title="主从集群"
version: '2'
services:
  mongodb-primary:
    image: 'bitnami/mongodb:latest'
    environment:
      - MONGODB_ADVERTISED_HOSTNAME=mongodb-primary
      - MONGODB_REPLICA_SET_MODE=primary
      - MONGODB_ROOT_PASSWORD=password123
      - MONGODB_REPLICA_SET_KEY=replicasetkey123
    volumes:
      - 'mongodb_master_data:/bitnami'
  mongodb-secondary:
    image: 'bitnami/mongodb:latest'
    depends_on:
      - mongodb-primary
    environment:
      - MONGODB_ADVERTISED_HOSTNAME=mongodb-secondary
      - MONGODB_REPLICA_SET_MODE=secondary
      - MONGODB_INITIAL_PRIMARY_HOST=mongodb-primary
      - MONGODB_INITIAL_PRIMARY_PORT_NUMBER=27017
      - MONGODB_INITIAL_PRIMARY_ROOT_PASSWORD=password123
      - MONGODB_REPLICA_SET_KEY=replicasetkey123
  mongodb-arbiter:
    image: 'bitnami/mongodb:latest'
    depends_on:
      - mongodb-primary
    environment:
      - MONGODB_ADVERTISED_HOSTNAME=mongodb-arbiter
      - MONGODB_REPLICA_SET_MODE=arbiter
      - MONGODB_INITIAL_PRIMARY_HOST=mongodb-primary
      - MONGODB_INITIAL_PRIMARY_PORT_NUMBER=27017
      - MONGODB_INITIAL_PRIMARY_ROOT_PASSWORD=password123
      - MONGODB_REPLICA_SET_KEY=replicasetkey123
volumes:
  mongodb_master_data:
    driver: local
```

### K8S 部署
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: mongodb
  name: mongodb
spec:
  replicas: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: mongodb
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: mongodb
      annotations:
        co.elastic.logs: "false"
        co.elastic.logs/enabled: "false"
        co.elastic.logs/json.add_error_key: "true"
        co.elastic.logs/json.ignore_decoding_error: "true"
        co.elastic.logs/json.keys_under_root: "false"
        co.elastic.logs/processors.add_fields.fields.index: elk-index-mongodb
        co.elastic.logs/processors.timestamp.field: json.time
        co.elastic.logs/processors.timestamp.layouts: UNIX_MS
        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai
    spec:
      hostname: mongodb
      containers:
        - image: bitnami/mongodb:latest
          imagePullPolicy: Always
          envFrom:
            - configMapRef:
                name: mongodb
          name: mongodb
          ports:
            - containerPort: 27017
              name: mongodb
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
            - mountPath: /bitnami/mongodb
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
  name: mongodb
spec:
  ports:
    - name: mongodb
      port: 27017
      protocol: TCP
      targetPort: 27017
  selector:
    app: mongodb
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: v1
kind: Service
metadata:
  name: mongodb-nodeport
spec:
  ports:
    - name: mongodb-nodeport
      port: 27017
      protocol: TCP
      targetPort: 27017
  selector:
    app: mongodb
  sessionAffinity: None
  type: NodePort
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: mongodb
data:
  MONGODB_USERNAME: "my_user"
  MONGODB_PASSWORD: "password123"
  MONGODB_DATABASE: "my_database"
  MONGODB_ROOT_USER: "root"
  MONGODB_ROOT_PASSWORD: "root"
  MONGODB_EXTRA_FLAGS: "--wiredTigerCacheSizeGB=2"
```
