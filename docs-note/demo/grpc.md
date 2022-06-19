```go
syntax = "proto3";

option go_package = ".;pb";

service SearchService {
    rpc Get (GetRequest) returns (GetResponse) {}
}

message GetRequest {
    string key = 1;
    string space = 2;
}

message GetResponse {
    string value = 1;
}
```