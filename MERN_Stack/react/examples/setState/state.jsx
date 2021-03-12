import React, { Component } from 'react';
                
                
class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }

// this method goes inside of the LightSwitch Component
flipSwitch = () => {
    if( this.state.position === "On" ) {
        this.setState({ position: "Off" });
    } else {
        this.setState({ position: "On" });
    }
}
    
    render() {
        return (
            <fieldset>
                <p >The light is currently { this.state.position }</p>
                <button onClick={ this.flipSwitch} >Flip Switch</button>
            </fieldset>
        );
    }
}
                
export default LightSwitch;

// As we make more complicated React apps some of the components we write will need to be 
//able to store their own information. The way Components in React are able to hold onto
//their own information is inside of a variable we will be calling state