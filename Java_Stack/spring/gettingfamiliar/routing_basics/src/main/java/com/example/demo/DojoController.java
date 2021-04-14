package com.example.demo;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


//anything with @ is an annotation

@SpringBootApplication 

@RestController

@RequestMapping("")
public class DojoController {
	@RequestMapping("/dojo")
	public String showDojo(@PathVariable("dojo") String dojo) {
		return "The" + dojo + "is awesome!";
	}
	
	@RequestMapping("/burbankdojo")
	public String showBurBankDojo(@PathVariable("burbankdojo") String burbankdojo) {
		return "The" + burbankdojo + "is located in southern california";
	}
	
	@RequestMapping("/sanjose")
	public String sanjose(@PathVariable("sanjose") String sanjose) {
		return "The" + sanjose + "is dojo hq";
	}
	
	
}
