---
title: volume
---

## pv & pvc
为了更好的管理存储卷，k8s 引入了两个新的 api 资源类型：PersistentVolume、PersistentVolumeClaim，后面简称 pv 和 pvc。

pv 是集群中的一块存储，可以由管理员静态创建，也可以通过 StorageClass 动态创建。  
每一个 pv 都是集群中的资源，而 pvc 则是资源请求。
pv 和 pvc 之间的关系有点类似 pod 和节点，可以这样理解，节点是集群中的资源，pod 创建时需要申请节点资源（cpu、memory），
pv 也是集群中的资源，pvc 则消耗 pv 资源。

|回收策略|说明|
|---|---|
|Retain|手动回收。当 pvc 被删除时，pv 仍然存在，此时 pv 被认为是已释放，但不能继续被使用，需要管理员手动清理|
|Delete||
|Recycle||



## template

提供一些常用的 volume 模板

### emptyDir
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - image: nginx
    name: nginx
    volumeMounts:
    - mountPath: /usr/share/nginx/html
      name: nginx-volume
  volumes:
  - name: nginx-volume
    emptyDir: {}
```

### hostpath
|spec.volumes.hostPath.type|说明|
|---|---|
|""|空字符串（默认）是为了向后兼容，这意味着在挂载 hostPath 卷之前不会执行任何检查|
|DirectoryOrCreate|如果给定路径不存在任何内容，则会根据需要在此处创建一个空目录，权限设置为 0755，与 Kubelet 具有相同的组和所有权|
|Directory|目录必须存在于给定路径|
|FileOrCreate|如果给定路径不存在任何内容，则会根据需要在此处创建一个空文件，权限设置为 0644，与 Kubelet 具有相同的组和所有权|
|File|文件必须存在于给定路径|
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - image: nginx
    name: nginx
    volumeMounts:
    - mountPath: /usr/share/nginx/html
      name: nginx-volume
    - mountPath: /usr/share/nginx/html/hello.html
      name: nginx-file
    - mountPath: /etc/localtime
      name: host-time
  volumes:
  - name: nginx-volume
    hostPath:
      path: /data
      type: Directory
  - name: nginx-file
    hostPath:
      path: /data/hello.html
      type: FileOrCreate
  - name: host-time
    hostPath:
      path: /etc/localtime
      type: ""
```

### nfs
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - image: nginx
    name: nginx
    volumeMounts:
    - mountPath: /usr/share/nginx/html/nfs
      name: nfs-volume
    - mountPath: /usr/share/nginx/html/cephfs
      name: cephfs-volume
  volumes:
  - name: nfs-volume
    nfs:
      path: /nfs/path
      server: 1.1.1.1
  - name: cephfs-volume
    cephfs:
      monitors:
      - 1.1.1.1:1111
      - 2.2.2.2:2222
      path: /cephfs/path
      secretRef:
        name: cephfs
      user: cephfs
```


