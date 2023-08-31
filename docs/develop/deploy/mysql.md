---
title: MySQL
sidebar_label: MySQL
hide_title: true
hide_table_of_contents: false
slug: mysql
---

#### 参考文档：
- https://hub.docker.com/r/bitnami/mysql

### Docker 部署
```bash
docker run --rm -it --name mysql --hostname mysql -p 3306:3306 \
    -v /path/to/mysql-persistence:/bitnami/mysql/data \
    -e MYSQL_USER=my_user \
    -e MYSQL_PASSWORD=my_password \
    -e MYSQL_DATABASE=my_database \
    bitnami/mysql:latest
```

### DockerCompose 部署
```yaml title="主从集群"
version: '2'
services:
  mysql-master:
    image: 'bitnami/mysql:latest'
    ports:
      - '3306'
    volumes:
      - /path/to/mysql-persistence:/bitnami/mysql/data
    environment:
      - MYSQL_REPLICATION_MODE=master
      - MYSQL_REPLICATION_USER=repl_user
      - MYSQL_REPLICATION_PASSWORD=repl_password
      - MYSQL_ROOT_PASSWORD=master_root_password
      - MYSQL_USER=my_user
      - MYSQL_PASSWORD=my_password
      - MYSQL_DATABASE=my_database
  mysql-slave:
    image: 'bitnami/mysql:latest'
    ports:
      - '3306'
    depends_on:
      - mysql-master
    environment:
      - MYSQL_REPLICATION_MODE=slave
      - MYSQL_REPLICATION_USER=repl_user
      - MYSQL_REPLICATION_PASSWORD=repl_password
      - MYSQL_MASTER_HOST=mysql-master
      - MYSQL_MASTER_PORT_NUMBER=3306
      - MYSQL_MASTER_ROOT_PASSWORD=master_root_password
```

### K8S 部署
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: mysql
  name: mysql
spec:
  replicas: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: mysql
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: mysql
      annotations:
        co.elastic.logs: "false"
        co.elastic.logs/enabled: "false"
        co.elastic.logs/json.add_error_key: "true"
        co.elastic.logs/json.ignore_decoding_error: "true"
        co.elastic.logs/json.keys_under_root: "false"
        co.elastic.logs/processors.add_fields.fields.index: elk-index-mysql
        co.elastic.logs/processors.timestamp.field: json.time
        co.elastic.logs/processors.timestamp.layouts: UNIX_MS
        co.elastic.logs/processors.timestamp.timezone: Asia/Shanghai
    spec:
      hostname: mysql
      containers:
        - image: bitnami/mysql:latest
          imagePullPolicy: Always
          envFrom:
            - configMapRef:
                name: mysql
          name: mysql
          ports:
            - containerPort: 3306
              name: mysql
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
            - mountPath: /bitnami/mysql/data
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
  name: mysql
spec:
  ports:
    - name: mysql3306
      port: 3306
      protocol: TCP
      targetPort: 3306
  selector:
    app: mysql
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: v1
kind: Service
metadata:
  name: mysql-nodeport
spec:
  ports:
    - name: mysql-nodeport
      port: 3306
      protocol: TCP
      targetPort: 3306
  selector:
    app: mysql
  sessionAffinity: None
  type: NodePort
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: mysql
data:
  MYSQL_USER: "my_user"
  MYSQL_PASSWORD: "my_password"
  MYSQL_DATABASE: "my_database"
```
