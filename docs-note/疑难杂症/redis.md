## 为什么使用单线程？
我们先来看看多线程在不同场景下的特点：   
1、IO密集型。在此场景下，多线程将拥有更大的吞吐率。   
2、计算密集型。在此场景下，多线程存在一定的系统调度开销。当线程数量达到一定值，调度都成问题。   

除此之外，在多线程操作共享内存时，需要引入锁机制来保障数据和内存安全，在高并发场景下会严重阻碍性能。这也是我们常说的**并发访问控制**问题。   

所以，redis 采用单线程，可以减少系统调度开销，并很好的避免**并发访问控制**问题。因为只有一个线程，也不存在冲突问题。

---

## 为什么单线程也这么快？
单线程和多线程之间的优劣，不是绝对的，他们在不同的场景有不同的特点。

就 redis 来看，他使用单线程，可以避免在高并发场景下引入锁机制，进而解决了**并发访问控制**问题。  
但是 redis 的高并能，并不只是因为单线程，而是多种优化策略的产物，包括：

1、内存数据库，基于内存操作，具有天然的性能优势。   
2、高效的数据结构。基于全局哈希表快速定位并读写数据。   
3、单线程。解决并发访问控制问题。   
4、I/O多路复用，使其在网络IO操作中能够并发处理大量请求。  

常见的一个网络服务中，在服务端 listen 之后，一般会显示调用 accept，阻塞等待用户请求。
请求来后还需要调用 recv 获取用户数据，最后还要 send 发送出去。     
在整个流程中，阻塞点非常多。在IO多路复用中不存在这个问题，首先因为 socket 支持非阻塞模式，不需要显示阻塞等待网络请求。
除非阻塞模式之外，还依赖 select/epoll 机制，这是一种**允许内核中，同时存在多个监听套接字和已连接套接字**的机制。
他们之间通过**注册事件回调**来进行管理。这使得 redis 可以并发处理大量请求。

注册事件回调需要简单解释下。select/epoll 一旦检测到文件套接字FD有请求达到，就会触发响应的事件。
这些事件将被放在一个队列中，由 redis 去获取并执行。   
所以 redis 可以不用显示等待某一个请求，去更好的利用和分配资源。

---

## redis存在慢操作吗？
<!-- https://baijiahao.baidu.com/s?id=1707123040872138305&wfr=spider&for=pc -->
<!-- https://zhuanlan.zhihu.com/p/120004818 -->


在 redis 中，类似数据读写等核心逻辑，是单线程处理的。所以，如果在单线程处理这一块耗时过久，这次操作就变成了慢操作。常见的有：  

1、一次读写过多数据。       
2、对大集合执行范围操作。类似 `smembers`、`hgetall` 等。       

---

## rehash为什么不会阻塞？
简单的 rehash 过程可能是这样：    
1、创建一个更大的数组，比如是前一个数组的两倍    
2、将旧数组的数据重新哈希分配到新数组中     
3、释放资源（数组、锁等）    

在 redis 中这显然是行不通的，因为一旦 rehash 的量过大，中间需要阻塞的时间将会非常久。所以 redis 采用了**渐进式 rehash**。   
这里的意思是，在拷贝旧数据时，redis 可以继续处理请求，且每处理一个请求时，顺带拷贝一个哈希槽的数据到新数组。   
这样可以巧妙的把一次性大量拷贝的开销，分摊到多次请求中。

---

## AOF 日志文件过大怎办？
AOF 日志是 redis 的持久化机制之一，用于记录具体的写入指令。
他是一种写后日志，也就是当写操作执行完之后，再记录此次操作的日志。这样可以避免阻塞当前请求。    
此外还支持三种写回策略：Always、Everysec、No，因为日志记录仅写入到 AOF 文件的缓存区，还没有写回磁盘。

按照刚刚这种说法，AOF 其实是存在缺陷的，因为写入越多，那么 AOF 文件就会越来越大。为了解决这个问题，redis 支持 AOF 的重写机制。
重写的意思就是对 AOF 文件进行整理、合并。比如对一个 key 执行了 N 次写操作，那么对于该 key 来说，只有最后一次才有意义。
AOF 重写，就是梳理这些关系，仅保留有效的日志，这样可以大大精简 AOF 日志。

---

## save 和 bgsave 是否会阻塞主线程？
save 和 bgsave 是 redis 提供的两种全量快照的方式。  
    
save 会阻塞主线程，执行期间 redis 无法提供服务。    
bgsave 理论不会阻塞主线程，执行期间会创建子进程执行全量快照，主线程可以正常提供服务。   
除此之外，依赖于操作系统提供的 **COW（Copy-On-Write，写时复制）技术**，快照期间可以正常的接受写请求。

但是，fork 这个操作要视情况而定。当主线程内存特别大时，fork 本身就存在一定的阻塞间隔。

---

## 主从第一次同步是什么样的？
主从第一次同步，是**全量同步**。     
在主从建立连接后，从库会发送 runID 和 offset 给主库，二者值为 `runID=?,offset=-1`。     
主库接收到请求后，通过值可以判断从库需要执行全量同步，此时会响应 **FULLRESYNC**。    
然后主库执行 bgsave 生成全量快照，生成后，将快照文件发送给从库。    
从库接收到快照文件，会先清空自身内存避免残留数据造成冲突，然后将快照文件加载进内存。   
至此，完成了第一次同步。

---

## 主从同步压力过大怎么办？
主从同步可以简单分为两类：第一次建立主从连接时的**全量同步**和之后的**增量同步**。     
压力过大一般由全量同步引起，造成全量同步压力过大的可能有：   
1、内存过大，导致全量同步过程消耗较多资源。   
2、从库过多，导致全量同步频繁。

针对上面分析的场景，我们可以这样解决：    
1、减少单个 redis 实例的内存，小于 8g 最佳。     
2、从库过多时，可以采用 "主-从-从" 的联级模式，让从库替主库分担压力。  

---

## 主从断连后如何恢复数据？
在 redis 2.8 版本之前，主从断连，然后恢复，此时从库会重新执行一次全量同步。    
在 redis 2.8 版本之后，引入了 `repl_backlog_buffer` 环形缓冲区，主库在其中记录写入的位置，从库则记录读取的位置。   
主从断连后，主库接收到的写操作会持续写入环形环形缓冲区，并更新在环形缓冲区的写入位置，此时从库的读取位置是没有变化的。   
当主从恢复连接时，从库发送 offset 给主库，此时主库就可以知道从库的更新状态，并将他需要的更新同步给它。

但是当主从失联很久，或者主库的写入压力过大，导致主库覆盖的写入了环形缓冲区，此时主从恢复连接后，从库需要重新执行一次全量复制。

---

## 什么是 redis 脑裂？

---

## 哨兵挂了主从还能切换吗？

---

## 主从切换时怎么确定那个哨兵执行？
每个哨兵判断主库"主观下线"后，会向其他哨兵实例发送 is-master-down-by-addr 命令。     
此时其他实例会根据自己和主库的连接情况，做出 Y/N 的响应。      
当哨兵获取了 (N/1 + 1) 个投票时，就可以标记主库为"客观下线"。

---

## redis 如何保存更多数据？