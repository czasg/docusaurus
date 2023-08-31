---
title: PostgresQL
sidebar_label: PostgresQL
hide_title: true
hide_table_of_contents: false
slug: postgres
---

#### 参考文档：
- https://hub.docker.com/r/bitnami/postgresql

### Docker 部署
```bash
docker run --rm -it --name postgresql --hostname postgresql -p 5432:5432 \
    -v /path/to/postgresql-persistence:/bitnami/postgresql \
    -e POSTGRESQL_USERNAME=my_user \
    -e POSTGRESQL_PASSWORD=password123 \
    -e POSTGRESQL_DATABASE=my_database \
    bitnami/postgresql:latest
```

### DockerCompose 部署
```yaml title="主从集群"
version: '2'
services:
  postgresql-master:
    image: 'bitnami/postgresql:latest'
    ports:
      - '5432'
    volumes:
      - 'postgresql_master_data:/bitnami/postgresql'
    environment:
      - POSTGRESQL_REPLICATION_MODE=master
      - POSTGRESQL_REPLICATION_USER=repl_user
      - POSTGRESQL_REPLICATION_PASSWORD=repl_password
      - POSTGRESQL_USERNAME=my_user
      - POSTGRESQL_PASSWORD=my_password
      - POSTGRESQL_DATABASE=my_database
  postgresql-slave:
    image: 'bitnami/postgresql:latest'
    ports:
      - '5432'
    depends_on:
      - postgresql-master
    environment:
      - POSTGRESQL_REPLICATION_MODE=slave
      - POSTGRESQL_REPLICATION_USER=repl_user
      - POSTGRESQL_REPLICATION_PASSWORD=repl_password
      - POSTGRESQL_MASTER_HOST=postgresql-master
      - POSTGRESQL_PASSWORD=my_password
      - POSTGRESQL_MASTER_PORT_NUMBER=5432
volumes:
  postgresql_master_data:
```

### K8S 部署
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: postgres
  name: postgres
spec:
  replicas: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: postgres
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: postgres
      annotations:
        co.elastic.logs: "false"
        co.elastic.logs/enabled: "false"
        co.elastic.logs/json.add_error_key: "true"
        co.elastic.logs/json.ignore_decoding_error: "true"
        co.elastic.logs/json.keys_under_root: "false"
        co.elastic.logs/processors.add_fields.fields.index: elk-index-postgres
        co.elastic.logs/processors.timestamp.field: json.time
        co.elastic.logs/processors.timestamp.layouts: UNIX_MS
        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai
    spec:
      hostname: postgres
      containers:
        - image: bitnami/postgresql:latest
          imagePullPolicy: Always
          envFrom:
            - configMapRef:
                name: postgres
          name: postgres
          ports:
            - containerPort: 5432
              name: postgres
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
            - mountPath: /bitnami/postgresql
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
  name: postgres
spec:
  ports:
    - name: postgres5432
      port: 5432
      protocol: TCP
      targetPort: 5432
  selector:
    app: postgres
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: v1
kind: Service
metadata:
  name: postgres-nodeport
spec:
  ports:
    - name: postgres-nodeport
      port: 5432
      protocol: TCP
      targetPort: 5432
  selector:
    app: postgres
  sessionAffinity: None
  type: NodePort
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: postgres
data:
  POSTGRESQL_USERNAME: "my_user"
  POSTGRESQL_PASSWORD: "my_password"
  POSTGRESQL_DATABASE: "my_database"
```
