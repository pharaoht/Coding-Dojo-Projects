import React from 'react'

const RoutingPracticePage3 = (props) => {

    return (
    <>
        {isNaN(props.num) ? <p>This is not a number</p> 
        : <div>The number is: {props.num}</div>
        
    }
        
    </>
    )
}

export default RoutingPracticePage3;