package com.manson.dojoandninjas.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.manson.dojoandninjas.models.Dojo;
import com.manson.dojoandninjas.models.Ninja;
import com.manson.dojoandninjas.service.DojoNinja_Services;

@Controller
public class HomeController {
	private DojoNinja_Services dnservice;

	public HomeController(DojoNinja_Services dnservice) {
		super();
		this.dnservice = dnservice;
	}
	//show all dojos
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("alldojos", dnservice.getAllDojos());
		return "index.jsp";
	}
	
	//show all ninjas
	
	//jsp return to create dojo
	@GetMapping("/newDojo")
	public String dojo(@ModelAttribute("addDojo") Dojo dojo) {
		return "newDojo.jsp";
	}
	//create dojo
	@PostMapping("/makeDojo")
	public String createDojo(@Valid @ModelAttribute("addDojo") Dojo dojo,
			BindingResult result, Model model) {
		if(result.hasErrors()) {
			System.out.print(result.getAllErrors());
		}else {
			dnservice.create(dojo);
		}
		return "redirect:/";
	}
	//jsp return to create ninja
	@GetMapping("/newNinja")
	public String ninja(@ModelAttribute("addNinja") Ninja ninja, Model model) {
		model.addAttribute("alldojos", dnservice.getAllDojos());
		return "newNinja.jsp";
		
	}
	
	//create ninja
	@PostMapping("/makeNinja")
	public String createNinja(@Valid @ModelAttribute("addNinja") Ninja ninja,
			BindingResult result, Model model) {
		if(result.hasErrors()) {
			System.out.print(result.getAllErrors());
		}else {
			dnservice.create(ninja);
		}
		return "redirect:/";
	}
	
	//Show one dojo
	@GetMapping("/showDojo/{id}")
	public String showDojo(@PathVariable("id") Long id, Model model) {
		Dojo myDojo = this.dnservice.getDojo(id);
		model.addAttribute("thisDojo", myDojo);
		return "oneDojo.jsp";
	}
	
}
