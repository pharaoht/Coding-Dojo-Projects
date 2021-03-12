import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';
    
    
function App() {
  return (
    <div className="App">
        <MyNewComponent header={ "Header Prop" }>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
    </div>
  );
}
    
export default App;



import React, { Component } from 'react';
    
//We have a Component called MyNewComponent.
// There is one prop called header which we can access within our MyNewComponent.js. 
//We also have some text between the JSX tags. All components between these two are called "children".
// We can access them via the following:
class MyNewComponent extends Component{
    render(){
        return(
            <div>
                <h1>
                    { this.props.header }
                </h1>
                { this.props.children }
            </div>
        );
    }
}
    
export default MyNewComponent;

