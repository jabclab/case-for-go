package main;

import java.util.List;
import java.util.LinkedList;

public class Iteration{
	static final List<String> values = new LinkedList<String>();

	static {
		values.add("hello");
		values.add("tech");
		values.add("wednesday");
	}

	public static void main(String[] args) {
		for (int i = 0, len = values.size(); i < len; i++) { // HL
			System.out.println(values.get(i));
		} // HL

		for (final String x : values) { // HL
			System.out.println(x);
		} // HL
	}
}
