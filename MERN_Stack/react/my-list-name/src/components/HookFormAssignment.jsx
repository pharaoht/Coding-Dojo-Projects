import React, {useState} from 'react'


const HookFormAssignment = () =>{
    //declare useState variables 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = React.useState(false);

    const createUser = (e) =>{
        e.preventDefault();
        const newUser = {firstName, lastName, email, password}
        setHasBeenSubmitted(true)

    }

    const formMessage = () =>{
        if (hasBeenSubmitted){
            return 'Thank you for submitting the form!'
        }else{
            return 'Welcome, please submit the form!'
        }
    }

    const firstNameValidation = () =>{
        if (firstName.length < 3){
            return 'First Name must be 3 char long'
        }
    }

    const lastNameValidation = () =>{
        if (lastName.length < 3){
            return 'Last Name must be 3 char long'
        }
    }
    const emailValidation = () =>{
        if(email.length < 3){
            return 'Email must be 3 char long'
        }
    }

    const passwordValidation = () =>{
        if(password.length < 8){
            return 'Password must be 8 char long'
        }
    }

    const passwordMatch = () =>{
        if(password != confirmPassword){
            return 'Passwords must match'
        }
    }
    

    return (
        <>
        <div>
            <form onSubmit={ createUser }>
            <div className="">
                <span>First Name</span>
                <p><input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/></p>
                <span>{firstNameValidation()}</span>
            </div>
            <div className="">
                <span>Last Name</span>
                <p><input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}/></p>
                <span>{lastNameValidation()}</span>
            </div>
            <div className="">
                <span>Email</span>
                <p><input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/></p>
                <span>{emailValidation()}</span>
            </div>
            <div className="">
                <span>Password</span>
                <p><input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/></p>
                <span>{passwordValidation()}</span><span>{passwordMatch()}</span>
            </div>
            <div className="">
                <span>Confirm Password</span>
                <p><input type="text" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/></p>
            </div>
            <button className='btn btn-success' type="submit" value='create user'>Submit</button>
            </form>
            <hr/>
            <div>
                <p>First Name: {firstName}</p>
            </div>
            <div>
                <p>Last Name: {lastName}</p>
            </div>
            <div>
                <p>Email: {email}</p>
            </div>
            <div>
                <p>Password: {password}</p>
            </div>
            <div>
                <p> Confirm Password: {confirmPassword}</p>
            </div>
            
        </div>
        </>

    )
}

export default HookFormAssignment