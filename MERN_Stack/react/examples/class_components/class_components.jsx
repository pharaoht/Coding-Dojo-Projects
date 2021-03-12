//A React component is simply defined by a function that returns a React Element. 
//Since the beginning, we've been writing functional components. 
//But we can also write an ES6 Class that will return a React Element as well.

import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    render() {
        return <div>This is our first class component.</div>;
    }
}
    
export default SomeClassComponent;

//PROPS

class Header extends React.Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
            <div>
              //Destructuring allows us to use them like variables. This is just a small amount of syntactical sugar
                <h1>My name is { firstName}  { lastName }</h1>
            </div>
        );
    }
}