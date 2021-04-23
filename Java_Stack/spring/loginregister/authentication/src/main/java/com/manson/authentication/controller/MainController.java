package com.manson.authentication.controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
		return "index.jsp";
	}
	
	@PostMapping("/registration")
	public String register(@Valid @ModelAttribute("userhtml") User user, 
			BindingResult result, HttpSession session) {
		uservalidate.validate(user, result);
		if(result.hasErrors()) {
			return "index.jsp";
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
}
