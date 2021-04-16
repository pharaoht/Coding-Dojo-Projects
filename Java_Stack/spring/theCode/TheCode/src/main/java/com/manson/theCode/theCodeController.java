package com.manson.theCode;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@SpringBootApplication
@Controller
public class theCodeController {
	@RequestMapping("")
	public String index(RedirectAttributes redirectAttributes) {
		
		return "index.jsp";
	}
	
	@RequestMapping(value="/code", method=RequestMethod.POST)
	public String code(@RequestParam(value="code") String code, RedirectAttributes redirectAttributes) {
		if (code.equals("bushido") ) {
            return "redirect:/codepost";
        }
        else {
            redirectAttributes.addFlashAttribute("error", "Try Harder!");
            return "redirect:/";

        }
	}
	
	@RequestMapping("/codepost")
	public String index2() {
		
		return "index2.jsp";
	}
}
