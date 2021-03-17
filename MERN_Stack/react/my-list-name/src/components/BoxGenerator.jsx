import React, { useState } from 'react'



const BoxGenerator = () => {
    //declare usestate varibles
    const[color, setColor] = useState("")
    const[allColors, setAllColors] = useState([])

    const changeHandler = (e) => {
        setColor({color1: e.target.value})
        
    }
    const addColor = (e) =>{
        e.preventDefault()
        setAllColors([...allColors, color.color1])
        setColor({color1:""})
     
    }


    return (
        <>
            <div className="colorpicker">
                <form onSubmit={addColor}>
                <span>Color</span>
                <input type="text" name="color1" onChange={changeHandler}/>
                <button type='submit'>Add</button>
                </form>
            </div>
            <hr></hr>
            <div className="color-holder">
                {allColors.map(color =>{
                    return <div className="coloredboxes" style={{backgroundColor:color}  }>
                             <p>3</p>
                            </div>
                })}

            </div>
        </>
    )
}

export default BoxGenerator;