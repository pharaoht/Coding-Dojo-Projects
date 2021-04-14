package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@RequestMapping("/")
	public String sayHello() {
		return "Hello client how are you";
	}

	@RequestMapping("/random")
	public String sayHi() {
		return "HSpring boot is great. So easy to just respond with strings";
	}
}

//string.format("Hello name is %s and %s", variable, variable )