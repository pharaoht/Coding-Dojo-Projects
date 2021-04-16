package com.manson.displayTime;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.text.SimpleDateFormat;  
import java.util.Date;  


//anything with @ is an annotation

@SpringBootApplication 

@Controller
@RequestMapping("")
public class displayTimeController {
	
	
	@RequestMapping("")
	public String Home(Model model) {
		
		return "index.jsp";
	}
	
	
	@RequestMapping("/date")
	public String displayDate(Model model) {
		
		model.addAttribute("date", java.time.LocalDate.now());
		
		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String displayTime(Model model) {
		
		model.addAttribute("time", java.time.LocalTime.now());
		
		return "Time.jsp";
	}
}
