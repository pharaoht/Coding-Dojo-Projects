import React from 'react'



const BoxGenerator = () => {
    //declare usestate varibles

    const addColor = () =>{
        alert('hi')
    }
    
    return (
        <div>
            <div className="colorpicker">
                <form action={addColor}>
                <span>Color</span>
                <input type="text" name="color"/>
                <button type='submit'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default BoxGenerator;