package com.manson.lookify.ViewControllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.manson.lookify.models.Song;
import com.manson.lookify.services.SongService;

@Controller
public class ViewControllers {
	private final SongService songService;
	
	public ViewControllers(SongService songService) {
		this.songService = songService;
	}
	
	@RequestMapping("/")
	public String welcomePage() {

		return "welcomepage.jsp";
	}
	
	@RequestMapping("/dashboard")
	public String dashboard(Model model, @RequestParam(defaultValue="") String name) {
		List<Song> songs = songService.allSongs();
		model.addAttribute("songs", songs);
		model.addAttribute("songs", songService.findByartistName(name));
		return "dashboard.jsp";
	}
	
	@RequestMapping("/songs/{id}")
	public String details(@PathVariable("id") Long id, Model model ) {
		Song song = this.songService.findSong(id);
		model.addAttribute("song", song);
		return "details.jsp";
	}
	
	@RequestMapping("/songs/new")
	public String addNew(@ModelAttribute("song") Song song) {
		return "addsong.jsp";
	}
	
	@RequestMapping(value="/create", method=RequestMethod.POST)
	public String addNewSong(@Valid @ModelAttribute("song") Song song, BindingResult result) {
			if(result.hasErrors()) {
				System.out.println(result);
				return "addsong.jsp";
			}
			else {
				songService.addSong(song);
				return "redirect:/dashboard";
			}
	}
	
	
//	@RequestMapping("/search/topTen")
//	public String topTen(Model model) {
//		model.addAttribute("songs", songService.findTop3());
//		return "topTen.jsp";
//	}
//	
	@RequestMapping(value="/songs/{id}" , method=RequestMethod.DELETE)
	public String destory(@PathVariable("id") Long id) {
		songService.deleteSong(id);
		return "redirect:/dashboard";
	}
	
	
	
}

