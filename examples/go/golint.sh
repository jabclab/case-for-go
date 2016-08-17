$ cat example_main.go

package main

func HelloTechWednesday() string {
    return "hello tech thursday"
}

$ golint example_main.go
example_main.go:3:1: exported function HelloTechWednesday should have comment or be unexported
