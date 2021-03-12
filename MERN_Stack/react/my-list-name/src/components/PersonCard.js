import React, {Component} from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render(){
        const addBirthday = () =>{
            this.setState({age: this.state.age+1})
    }
        return  <div>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <p>{this.state.age}</p>
                <p>{this.props.hairColor}</p>
                <button onClick={addBirthday}>Birthday</button>
            </div>
        

        
    }
}

export default PersonCard;