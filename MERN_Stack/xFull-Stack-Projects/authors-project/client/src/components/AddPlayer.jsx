import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navagate, navigate} from '@reach/router'

const AddPlayer = () =>{

    const[formInfo, setFormInfo] = useState({
        player_firstName : "",
        player_lastName: "",
        player_position:"",
        isplaying_game1:false,
        isplaying_game2:false,
        isplaying_game3:false
    })

    const[formErrors, setFormErrors] = useState([])

    const changeHandler = (e) => {
        if(e.target.type == 'checkbox'){
            if(e.target.name == 'isplaying_game1'){
                setFormInfo({
                    ...formInfo,
                    isplaying_game1: !formInfo.isplaying_game1,
                })
            }else if(e.target.name == "isplaying_game2"){
                    setFormInfo({
                    ...formInfo,
                    isplaying_game2: !formInfo.isplaying_game2,
                })
            }else if(e.target.name == "isplaying_game3"){
                setFormInfo({
                    ...formInfo,
                    isplaying_game3: !formInfo.isplaying_game3
                })
            }
        }else{
            setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
            })
        }

    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/new-player', formInfo)
        .then(res => {
            if(res.data.err){
                console.log("opps...")
                setFormErrors(res.data.err)
                
            }else{
                navigate("/")
            }
        })
        .catch(err => console.log(err))
        
    }

    return(
        <div>
            <h1>Add Player</h1>
            <form onSubmit={submitHandler}>
                <span>First Name</span>
                <p className="text-danger">{formErrors.errors ? formErrors.errors.player_firstName.message : "" }</p>
                <p><input type="text" name="player_firstName" id="" onChange={changeHandler}/></p>

                <span>Last Name</span>
                <p className="text-danger">{formErrors.errors ? formErrors.errors.player_lastName.message : "" }</p>
                <p><input type="text" name="player_lastName" id="" onChange={changeHandler}/></p>

                <span>Player Position</span>
                <p className="text-danger">{formErrors.errors ? formErrors.errors.player_position.message : "" }</p>
                <p><input type="text" name="player_position" id="" onChange={changeHandler}/></p>

                <p>Playing in game 1
                    <input type="checkbox" checked={formInfo.isplaying_game1} value={formInfo.isplaying_game1} name="isplaying_game1" onChange={changeHandler}
                    /></p>
                <p>Playing in game 2 
                    <input type="checkbox" checked={formInfo.isplaying_game2} value={formInfo.isplaying_game2} name="isplaying_game2" onChange={changeHandler}
                    /></p>
                <p>Playing in game 3
                     <input type="checkbox" checked={formInfo.isplaying_game3} value={formInfo.isplaying_game3} name="isplaying_game3" onChange={changeHandler}
                     /></p>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddPlayer;