package com.manson.authentication.validation;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.manson.authentication.models.User;
import com.manson.authentication.service.UserService;

@Component
public class UserValidator implements Validator {
	private final UserService userservice;
	
	public UserValidator(UserService userservice) {
		this.userservice = userservice;
	}
    // 1
    @Override
    public boolean supports(Class<?> clazz) {
        return User.class.equals(clazz);
    }
    
    // 2
    @Override
    public void validate(Object target, Errors errors) {
        User user = (User) target;
        
        if (!user.getPasswordConfirmation().equals(user.getPassword())) {
            // 3
            errors.rejectValue("passwordConfirmation", "Match");
        }         
        if(this.userservice.findByEmail(user.getEmail().toLowerCase()) != null) {
        	errors.rejectValue("email", "DupeEmail");
        }
    }
}
