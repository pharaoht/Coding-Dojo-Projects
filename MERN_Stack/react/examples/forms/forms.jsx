import React, { useState } from  'react';
//There are two basic ways to deal with forms in React.

//state: Track input values as a piece of your state, updating them on change events and rendering them back out to the UI. These are called controlled components.
//refs: Attach a pointer to DOM nodes like inputs and textareas and reach out to inspect their values once our form is submitted. We call these uncontrolled components.
//We'll favor the controlled component strategy because it allows React to continue to sit between us and the actual DOM.
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;

//If we want to clear the form after it's been submitted, we can do it with some small modifications to our code above.

//On each of the inputs, we will now include a value attribute that we set equal to the corresponding useState variable.

<input type="text" onchange={ (e) => setUsername(e.target.value) } value={ username } />