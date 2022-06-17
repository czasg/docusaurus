## 搭建 http 服务
```go
import "net/http"

func hello(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World"))
}
 
func main() {
	http.HandleFunc("/", hello)
	http.ListenAndServe(":8000", nil)
}
```


## 搭建 websocket 服务
```go
import (
    "net/http"
    "github.com/gorilla/websocket"
)

var upGrader = websocket.Upgrader{
    ReadBufferSize:  1024,
    WriteBufferSize: 1024,
    CheckOrigin: func(r *http.Request) bool {
        return true
    },
}

func ws(w http.ResponseWriter, r *http.Request) {
	conn, _ := upGrader.Upgrade(w, r, nil)
    messageType, data, _ := conn.ReadMessage()
    _ = conn.WriteMessage(messageType, data)
}
 
func main() {
	http.HandleFunc("/", ws)
	http.ListenAndServe(":8000", nil)
}
```
