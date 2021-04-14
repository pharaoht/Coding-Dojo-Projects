package com.example.demo;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


//anything with @ is an annotation

@SpringBootApplication 

@RestController

@RequestMapping("/coding")
public class CodingController {
	
	@RequestMapping("")
	public String greetDojo() {
		return "Hello Coding Dojo!";
	}
	
	@RequestMapping("/python")
	public String greetPython() {
		return "Python/Django was awesome";
	}
	
	@RequestMapping("/java")
	public String greetJava() {
		return "Java/Spring is better";
	}
	
}
