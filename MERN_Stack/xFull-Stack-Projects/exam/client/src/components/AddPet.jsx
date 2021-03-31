import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const AddPet = () =>{
    const[formInfo, setFormInfo] = useState({
        pet_name : "",
        pet_type: "",
        pet_desc:"",
        skill_1: "",
        skill_2: "",
        skill_3:"",

    })

    const[formErrors, setFormErrors] = useState({})
    

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
        

    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/create-pet', formInfo)
        .then(res => {
            if(res.data.errors){
                console.log(res.data.errors)
                setFormErrors(res.data.errors)
                
            }
            else{
                navigate("/")
            }
        })
        .catch(err => console.log(err))
        
    }

    return (
        <div >
            <h3>Know a pet needing a home</h3>
            <Link to = '/'>back to home</Link>
            <form onSubmit={submitHandler}>
                <div className="create-pet-holder">
                <div className="required-info">
                   
                    <h1>Add Pet</h1>
                    <span>Name</span>
                    <p className="text-danger">{formErrors.pet_name ? formErrors.pet_name.message : ""}</p>
                    <p><input type="text" name="pet_name" id="" onChange={changeHandler}/></p>

                    <span>Pet Type</span>
                    <p className="text-danger">{formErrors.pet_type ? formErrors.pet_type.message : ""}</p>
                    <p><input type="text" name="pet_type" id="" onChange={changeHandler}/></p>

                    <span>Pet Description</span>
                    <p className="text-danger">{formErrors.pet_desc ? formErrors.pet_desc.message : ""}</p>
                    <p><input type="text" name="pet_desc" id="" onChange={changeHandler}/></p>
                </div>

                <div className="optional-info">
                    <h1>Optional</h1>
                    <span>Skill 1</span>
                    <p className="text-danger"></p>
                    <p><input type="text" name="skill_1" id="" onChange={changeHandler}/></p>

                    <span>Pet Type</span>
                    <p className="text-danger"></p>
                    <p><input type="text" name="skill_2" id="" onChange={changeHandler}/></p>

                    <span>Pet Description</span>
                    <p className="text-danger"></p>
                    <p><input type="text" name="skill_3" id="" onChange={changeHandler}/></p>

                </div>
                
            </div>
            <button className="btn btn-primary" type="submit">Add Pet</button>
            </form>
        </div>
    )
}

export default AddPet;