$ cat example_main.go

package main
func helloTechWednesday()string {
  return "hello tech thursday"
}

$ gofmt example_main.go

package main

func helloTechWednesday() string {
        return "hello tech thursday"
}
