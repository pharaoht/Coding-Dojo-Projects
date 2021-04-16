package com.manson.dojoSurvey;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DojoSurveyController {
	@RequestMapping("")
	public String home(Model model) {

		return "index.jsp";
	}
	
	@RequestMapping(value="/formpost", method=RequestMethod.POST)
	public String formHandler(@RequestParam(value="name") String name,
			@RequestParam(value="location") String location, 
			@RequestParam(value="favlang") String favlang,
			@RequestParam(value="comment") String comment, HttpSession session) {
		session.setAttribute("name1", name);
		session.setAttribute("location1", location);
		session.setAttribute("favlang1", favlang);
		session.setAttribute("comment1", comment);
		
		return "redirect:/result";
	}
	
	@RequestMapping("/result")
	public String result() {
		return "index2.jsp";
	}
	
}
