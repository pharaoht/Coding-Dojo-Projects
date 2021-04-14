package com.example.demo;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


//anything with @ is an annotation

@SpringBootApplication 

@RestController


@RequestMapping("/basketball")
public class Basketball {
	@RequestMapping("")
	public String basketballHome() {
		return "placeholder";
	}
	
	@RequestMapping("/players")
	public String showAllPlayers() {
		return "placeholder for players";
	}
	
	@RequestMapping("/players/")
	public String showPlayerByName(@RequestParam(value="q") String playerName) {
		return String.format("Information about player name %s", playerName);
	}
	
	@RequestMapping("/schedule/")
	public String showSchedule(@RequestParam(value="q", required=false) String dayOfWeek) {
		if(dayOfWeek == null) {
			return "Here are all games for the week";
		}
		return String.format("Here are all games for %s", dayOfWeek);
	}
}
