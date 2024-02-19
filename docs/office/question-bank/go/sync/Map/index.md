---
title: Map
---

### 什么是sync.Map

Map是Go中的并发安全的映射机制。

其底层基于互斥锁，readOnlyMap、dirtyMap实现。在读多写少的场景下，性能近乎于无锁。

其中readOnlyMap因为是只读的，所以是并发安全的。而dirtyMap则存储的是没有刷新到readOnlyMap中的新数据。


### 一次查询流程

1. 在readOnlyMap中查询是否存在，如果存在直接返回数据。
```go
read, _ := m.read.Load().(readOnly)
e, ok := read.m[key]
if ok {
    return e.load()
}
```

2. 如果readOnlyMap不存在，判断是否存在脏数据，如果也不存在脏数据，则直接返回空。
```go
read, _ := m.read.Load().(readOnly)
e, ok := read.m[key]
if ok {
    return e.load()
}
if !read.amended {
    return nil, false
}
```

3. 如果readOnlyMap不存在，判断是否存在脏数据，如果存在脏数据，判断脏数据中是否存在，并返回结果。
```go
read, _ := m.read.Load().(readOnly)
e, ok := read.m[key]
if ok {
    return e.load()
}
if !read.amended {
    return nil, false
}
m.mu.Lock()
defer m.mu.Unlock()
e, ok = m.dirty[key]
m.missLocked() // 当未命中次数大于脏数据大小时，触发刷新，将dirtyMap刷入readOnlyMap
if ok {
    return e.load()
}
return nil, false
```

### 一次更新流程

1. 判断数据是否存在于dirtyMap中，若存在，则直接更新dirtyMap，若不存在，则创建新的实例
```go
m.mu.Lock()
defer m.mu.Unlock()
if e, ok := m.dirty[key]; ok {
    e.storeLocked(&value)
} else {
    m.dirty[key] = newEntry(value)
}
```

也就是更新操作的数据会先写到脏数据中。等查询未命中次数大于脏数据大小时，再执行刷新操作。

### 一次删除流程

1. 判断数据是否存在于readOnlyMap中，如果存在则直接标记删除
```go
read, _ := m.read.Load().(readOnly)
e, ok := read.m[key]
if ok {
    return e.delete()
}
```

2. 判断数据是否存在dirtyMap，如果存在直接删除
```go
read, _ := m.read.Load().(readOnly)
e, ok := read.m[key]
if ok {
    return e.delete()
}
if read.amended {
    delete(m.dirty, key)
}
```
