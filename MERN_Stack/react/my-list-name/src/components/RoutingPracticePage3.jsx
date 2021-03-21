import React from 'react'

const RoutingPracticePage3 = (props) => {

    return (
    <>
        {isNaN(props.word) ? <div style={{backgroundColor:props.color2}}><h1 style={{color:props.color1}}>This word is: {props.word}</h1></div> 
        : <div>You need a word</div>
        
    }
        
    </>
    )
}

export default RoutingPracticePage3;