import React from 'react'

const RoutingPracticePage2 = (props) => {

    return (
    <>
        {isNaN(props.num) ? <div><h1>The word is: {props.num}</h1></div>
        : <div><h1>The number is: {props.num}</h1></div>
        
    }
        
    </>
    )
}

export default RoutingPracticePage2;