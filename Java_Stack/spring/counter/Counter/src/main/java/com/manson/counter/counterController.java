package com.manson.counter;

import javax.servlet.http.HttpSession;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@SpringBootApplication


@Controller
public class counterController {
	
	@RequestMapping("/look")
	public String index(HttpSession session) {
		//setting the session variable
		session.setAttribute("count", 0);
		return "index.jsp";
	}
	
	@RequestMapping("/counter")
	public String index2(HttpSession session) {

		//declaring session variable
	    Integer count = (Integer) session.getAttribute("count");
	    count ++;
	    session.setAttribute("count", count);
		return "index2.jsp";
	}
	
}

