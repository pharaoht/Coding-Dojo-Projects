package com.manson.authentication.service;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.manson.authentication.models.Idea;
import com.manson.authentication.models.User;
import com.manson.authentication.repositories.IdeaRepository;
import com.manson.authentication.repositories.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final IdeaRepository idearepo;
    
    public UserService(UserRepository userRepository, IdeaRepository idearepo) {
        this.userRepository = userRepository;
        this.idearepo = idearepo;
    }
    
    // register user and hash their password
    public User registerUser(User user) {
        String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashed);
        user.setEmail(user.getEmail().toLowerCase());
        return userRepository.save(user);
    }
    
    // find user by email
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    // find user by id
    public User findUserById(Long id) {
    	Optional<User> u = userRepository.findById(id);
    	
    	if(u.isPresent()) {
            return u.get();
    	} else {
    	    return null;
    	}
    }
    
    // authenticate user
    public boolean authenticateUser(String email, String password) {
        // first find the user by email
        User user = userRepository.findByEmail(email);
        // if we can't find it by email, return false
        if(user == null) {
            return false;
        } else {
            // if the passwords match, return true, else, return false
            if(BCrypt.checkpw(password, user.getPassword())) {
                return true;
            } else {
                return false;
            }
        }
    }
    
	//create idea
	public Idea createIdea(Idea newIdea) {
		return idearepo.save(newIdea);
	}
	
	//display all ideas
	public List<Idea> getAllIdeas(){
		return (List<Idea>) idearepo.findAll();
	}
    
	//get one idea
	public Idea getIdea(Long id) {
		Optional<Idea> optionalIdea = this.idearepo.findById(id);
		if(optionalIdea.isPresent()) {
			return optionalIdea.get();
		}else {
			return null;
		}
	}
	
	public Idea updateFormIdea(Idea idea) {
    		return this.idearepo.save(idea);
	}
	
	public void deleteIdea(Long id) {
		this.idearepo.deleteById(id);
	}
    
    
}