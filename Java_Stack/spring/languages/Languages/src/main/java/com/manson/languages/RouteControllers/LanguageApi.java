package com.manson.languages.RouteControllers;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.manson.languages.LanguageService.LanguageService;
import com.manson.languages.models.Language;

public class LanguageApi {
	private final LanguageService languageService;
	
	public LanguageApi(LanguageService languageService) {
		this.languageService = languageService;
	}
	
	@RequestMapping("/test")
	public String test() {
		return "index.jsp";
	}
	
	
	@RequestMapping("/api/languages")
	public List<Language> index(){
		return languageService.allLanguages();
	}
	
	@RequestMapping(value="/api/languages", method=RequestMethod.POST)
	public Language create(@RequestParam(value="name") String name, 
			@RequestParam(value="creator") String creator, 
			@RequestParam(value="currentVersion") String currentversion){
				Language language = new Language(name, creator, currentversion);
				return languageService.createLanguage(language);
	}
	
	@RequestMapping("/api/languages/{id}")
	public Language show(@PathVariable("id") Long id) {
		Language language = languageService.findLanguage(id);
				return language;
	}
	
	@RequestMapping(value="/api/languages/{id}", method=RequestMethod.PUT)
    public Language update(@PathVariable("id") Long id, 
    		@RequestParam(value="name") String name, 
    		@RequestParam(value="creator") String creator, 
    		@RequestParam(value="currentversion") String currentversion) {
		Language language = languageService.updateLanguage(id, name, creator, currentversion);
        return language;
    }
    
    @RequestMapping(value="/api/languages/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
        languageService.deleteLanguage(id);
    }

}
