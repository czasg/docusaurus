# golang 题库

## 切片
```go title="切片 a、b、c 的长度和容量分别是多少？"
func main() {
	s := [3]int{1, 2, 3}
	a := s[:0]
	b := s[:2]
	c := s[1:2:cap(s)]
}
--- 答案 ---
a 是 0 和 3。
b 是 2 和 3。
c 是 1 和 2。
--- 解析 ---
对于 [i:j]，切片长度和容量计算方法是 j-i、l-i
对于 [i:j:k]，切片长度和容量计算方法是 j-i、k-i。k 主要是用来限制切片的容量，但是不能大于数组的长度 l，
```

## defer
```go title="以下函数运行时会输出什么？"
func defer_call() {
	defer func() { fmt.Println("step-1") }()
	defer func() { fmt.Println("step-2") }()
	defer func() { fmt.Println("step-3") }()
	panic("错误异常")
}
--- 答案 ---
step-3
step-2
step-1
错误异常
--- 解析 ---
defer 是 lifo 结构，且可以在 panic 前执行的，以确保资源可以在发生异常时正确释放。  
```

## for range
```go title="result 的 value 结果组成是什么？"
type student struct {
	Name string
	Age  int
}

result := make(map[string]*student)
stus := []student{
    {Name: "one", Age: 21},
    {Name: "two", Age: 22},
    {Name: "three", Age: 23},
}
for _, stu := range stus {
    result[stu.Name] = &stu
}
for _, res := range result {
    fmt.Println(res.Name, res.Age)
}
--- 答案 ---
three 23
three 23
three 23
--- 解析 ---
因为 `for range` 执行期间 stu 的指针是不变的。遍历时仅作值的拷贝。
```

## slice
```go title="s 输出什么？"
func main() {
	s := make([]int, 5)
	s = append(s, 1, 2, 3)
	fmt.Println(s)
}
--- 答案 ---
[0 0 0 0 0 1 2 3]
--- 解析 ---
make 用于初始化数组，第二个初始化参数表示数组的长度，第三个初始化参数表示切片的容量。  
调用 make 时默认返回的是一个包含零值的数组。
```

## interface
```go title="下面代码能否正确编译？"
type People interface {
	Speak(string) string
}
type Stduent struct{}
func (stu *Stduent) Speak(think string) (talk string) {
	return
}
func main() {
	var peo People = Stduent{}
	think := "bitch"
	fmt.Println(peo.Speak(think))
}
--- 答案 ---
不可以
--- 解析 ---
值类型的 Stduent 未实现 People 方法，不能定义为此类型。上面  Speak 方法表示结构体 *Stduent 提供的方法，和 Stduent 是有区别的。
可以改用指针类型：  
var peo People = &Stduent{}
```
