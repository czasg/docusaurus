# 美化json
通过`json.MarshalIndent(result, "", "  ")`这个方法，可以实现json序列化的格式处理，从而达到美化json的目的。
```golang
package main

import (
    "encoding/json"
    "fmt"
)

type User struct {
    ID   int
    Name string
    Role int
    Meta struct {
        Cert  int
        Age   int
        Email string
        Phone string
    }
}

func main() {
    user := User{
        ID:   0,
        Name: "test",
        Role: 2,
        Meta: struct {
            Cert  int
            Age   int
            Email string
            Phone string
        }{
            Cert:  422325,
            Age:   14,
            Email: "cza@qq.com",
            Phone: "156748745874",
        },
    }
    data1, _ := json.Marshal(user)
    fmt.Println(string(data1))
    data2, _ := json.MarshalIndent(user, "", "  ")
    fmt.Println(string(data2))
}
```

分别输出json：
```json
{"ID":0,"Name":"test","Role":2,"Meta":{"Cert":422325,"Age":14,"Email":"cza@qq.com","Phone":"156748745874"}}
```
```json
{
  "ID": 0,
  "Name": "test",
  "Role": 2,
  "Meta": {
    "Cert": 422325,
    "Age": 14,
    "Email": "cza@qq.com",
    "Phone": "156748745874"
  }
}
```
