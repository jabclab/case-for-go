package main

import "testing" // HL

func helloTechWednesday() string { return "hello tech thursday" }

func TestHelloTechWednesday(t *testing.T) { // HL
	actual := helloTechWednesday()
	expected := "hello tech wednesday"

	if actual != expected {
		t.Fatalf(`"%s" did not equal "%s"`, actual, expected) // HL
	}
}
