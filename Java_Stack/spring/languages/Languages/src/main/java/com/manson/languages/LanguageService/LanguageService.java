package com.manson.languages.LanguageService;


import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.manson.languages.LanguageRepository.LanguageRepository;
import com.manson.languages.models.Language;

@Service
public class LanguageService {
	private final LanguageRepository languageRepository;
	
	public LanguageService(LanguageRepository languageRepository) {
		this.languageRepository = languageRepository;
	}
	
    // returns all the language
    public List<Language> allLanguages() {
        return languageRepository.findAll();
    }
    // creates a language
    public Language createLanguage(Language b) {
        return languageRepository.save(b);
    }
    // retrieves a language
    public Language findLanguage(Long id) {
        Optional<Language> optionalLanguage = languageRepository.findById(id);
        if(optionalLanguage.isPresent()) {
            return optionalLanguage.get();
        } else {
            return null;
        }
    }
    public Language updateLanguage(Long id, String name, String creator, String currentVersion) {
    	Language toUpdate = this.languageRepository.findById(id).orElse(null);
    	if(toUpdate == null) {
    		return null;
    	}
    	else {
    		toUpdate.setName(name);
    		toUpdate.setCreator(creator);
    		toUpdate.setcurrentVersion(currentVersion);
    		return this.languageRepository.save(toUpdate);
    	}
    }
    
    public Language updateLanguage(Language language) {
    	return this.languageRepository.save(language);
    }
    
    public void deleteLanguage(Long id) {
    	this.languageRepository.deleteById(id);
    }
}
