package com.manson.authentication.controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.manson.authentication.models.Idea;
import com.manson.authentication.models.User;
import com.manson.authentication.service.UserService;
import com.manson.authentication.validation.UserValidator;

@Controller
public class MainController {

	private final UserService userservice;
	private final UserValidator uservalidate;
	
	public MainController(UserService userservice, UserValidator uservalidate) {
		this.userservice = userservice;
		this.uservalidate = uservalidate;
		
	}
	
	@GetMapping("/")
	public String home(@ModelAttribute("userhtml") User user) {
		return "login.jsp";
	}
	
	@PostMapping("/registration")
	public String register(@Valid @ModelAttribute("userhtml") User user, 
			BindingResult result, HttpSession session) {
		uservalidate.validate(user, result);
		if(result.hasErrors()) {
			return "login.jsp";
		}
		User currentuser = this.userservice.registerUser(user);
		session.setAttribute("userId", currentuser.getId());
		return "redirect:/dashboard";
	}
	
	@GetMapping("/dashboard")
	public String dashboard(Model model, HttpSession session) {
		Long id = (Long)session.getAttribute("userId");
		User loggedinuser = this.userservice.findUserById(id);
		model.addAttribute("loggedinuser", loggedinuser);
		//                    ^html var
		model.addAttribute("allideas", userservice.getAllIdeas());
		
		return "dashboard.jsp";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
	
	@PostMapping("/login")
	public String login(@RequestParam("email") String email, 
			@RequestParam("password") String password, HttpSession session,
			RedirectAttributes redirectattributes) {
		Boolean isLegit = this.userservice.authenticateUser(email, password);
		if(isLegit) {
			//get user with email
			User user = this.userservice.findByEmail(email);
			session.setAttribute("userId", user.getId());
			return "redirect:/dashboard";	
		}
		redirectattributes.addFlashAttribute("error", "Invalid login attempt");
		return "redirect:/";
	}
	
	@GetMapping("/newIdea")
	public String newIdea(@ModelAttribute("addidea") Idea idea, HttpSession session, Model model) {
		Long id = (Long)session.getAttribute("userId");
		model.addAttribute("currentuser", userservice.findUserById(id));
		return "newIdea.jsp";
	}
	
	@PostMapping("/createIdea")
	public String createIdea(@Valid @ModelAttribute("addidea") Idea idea, BindingResult result, Model model) {
		if(result.hasErrors()) {
			
			return "redirect:/newIdea";
		}
		userservice.createIdea(idea);
		
		return "redirect:/dashboard";
	}
	
	@GetMapping("/showIdea/{id}")
	public String showIdea(@PathVariable("id") Long id, Model model, HttpSession session) {
		Long idz = (Long)session.getAttribute("userId");
		model.addAttribute("currentuser", userservice.findUserById(idz));
		Idea myidea = this.userservice.getIdea(id);
		model.addAttribute("thisidea", myidea);
		return "oneidea.jsp";
	}
	
	@GetMapping("/edit/{id}")
	public String editIdea(@PathVariable("id") Long id, Model model, HttpSession session) {
		Long idz = (Long)session.getAttribute("userId");
		model.addAttribute("currentuser", userservice.findUserById(idz));
		Idea idea = this.userservice.getIdea(id);
		model.addAttribute("idea", idea);
		return "editIdea.jsp";
	}
	
	@PostMapping("/updateIdea/{id}")
	public String updateIdea(@Valid @ModelAttribute("editidea") Idea idea, BindingResult result, @PathVariable("id") Long id) {
		idea.setId(id);
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			this.userservice.updateFormIdea(idea);
			return "redirect:/dashboard";
		}
	}
	
	@RequestMapping(value="/delete/{id}", method=RequestMethod.POST)
	public String destroy(@PathVariable("id") Long id) {
		userservice.deleteIdea(id);
		return "redirect:/dashboard";	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
