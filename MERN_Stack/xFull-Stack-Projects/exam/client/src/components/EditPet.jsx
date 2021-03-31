import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const EditPet = (props) =>{
    const[formInfo, setFormInfo] = useState({
        pet_name : "",
        pet_type: "",
        pet_desc:"",
        skill_1: "",
        skill_2: "",
        skill_3:"",

    })

    const[formErrors, setFormErrors] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
        .then(res => {
            console.log(res.data.result)
            setFormInfo(res.data.result)
        })
        .catch(err => console.log(err))
    },[])
    

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
        

    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put('http://localhost:8000/api/pet/' + props.id, formInfo)
        .then(res => {
            if(res.data.err){
                console.log(res.data.errors)
                setFormErrors(res.data.errors)
                
            }
            else{
                console.log(res)
                console.log("********")
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
                    <p><input type="text" name="pet_name" id="" onChange={changeHandler} defaultValue={formInfo.pet_name}/></p>

                    <span>Pet Type</span>
                    <p className="text-danger">{formErrors.pet_type ? formErrors.pet_type.message : ""}</p>
                    <p><input type="text" name="pet_type" id="" onChange={changeHandler} defaultValue={formInfo.pet_type}/></p>

                    <span>Pet Description</span>
                    <p className="text-danger">{formErrors.pet_desc ? formErrors.pet_desc.message : ""}</p>
                    <p><input type="text" name="pet_desc" id="" onChange={changeHandler} defaultValue={formInfo.pet_desc}/></p>
                </div>

                <div className="optional-info">
                    <h1>Optional</h1>
                    <span>Skill 1</span>
                    <p className="text-danger"></p>
                    <p><input type="text" name="skill_1" id="" onChange={changeHandler} defaultValue={formInfo.skill_1}/></p>

                    <span>Pet Type</span>
                    <p className="text-danger"></p>
                    <p><input type="text" name="skill_2" id="" onChange={changeHandler} defaultValue={formInfo.skill_2}/></p>

                    <span>Pet Description</span>
                    <p className="text-danger"></p>
                    <p><input type="text" name="skill_3" id="" onChange={changeHandler} defaultValue={formInfo.skill_3}/></p>

                </div>
                
            </div>
            <button className="btn btn-primary" type="submit">Update Pet</button>
            </form>
        </div>
    )
}

export default EditPet;