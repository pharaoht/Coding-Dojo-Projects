import React, {useState} from 'react'

const Todolist = () => {
    const[formInfo, setFormInfo] = useState({
        addTask:""
    })
    const[allTasks, setAllTasks] = useState([])

    const removeTask = (e, itemInfo, index) =>{
        e.preventDefault()
        let result = allTasks.filter((currentTask, indexNum)=>{
            return indexNum != index
        })

        setAllTasks([result])
    }

    const changeHandler = (e) =>{
        setFormInfo({addtask: e.target.value})
    }

    const addTask = e =>{
        e.preventDefault()
        setAllTasks([...allTasks, formInfo.addtask])
        setFormInfo({addtask:""})

    }

    const strikeThru = (e) => {
        
    }
    return(
        <>
            <div className="addtask">
                <form onSubmit={(e) => addTask(e)}>
                <input type="text" name="addtask" id="" className="addtask" onChange={(e) => changeHandler(e)}/>
                <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
            
            <hr></hr>
            <div className="alltasks">
            {allTasks.map((currentItem, index) =>{
                return <>
                <div style={{display:'flex'}}>
                    <h4 style={{marginRight:'20px'}} id="string">{currentItem}</h4>  
                    <input style={{marginRight:'20px'}} type="checkbox" name="check" onClick={(e) => strikeThru(e)}/>
                    <form onSubmit={(e) => removeTask(e, currentItem, index)}>
                        <button style={{marginRight:'20px'}} type="submit">Delete</button>
                    </form>
                </div>
                 
                
                </>
            })}
            </div>
        </>
    )
}

export default Todolist;