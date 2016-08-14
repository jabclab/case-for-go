package main

import "fmt"

func main() {
	values := []string{
		"hello",
		"tech",
		"wednesday",
	}

	for _, v := range values {
		fmt.Println(v)
	}
}
