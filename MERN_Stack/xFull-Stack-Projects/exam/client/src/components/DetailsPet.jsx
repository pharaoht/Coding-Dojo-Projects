import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const DetailsPet = (props) =>{
    const[petInfo, setPetInfo] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
        .then(res =>{
            console.log(res.data.result)
            setPetInfo(res.data.result)
        })
        .catch()

    },[])

    const deleteHandler = (e) =>{
        axios.delete(`http://localhost:8000/api/pet/${props.id}`)
        .then(res => {

            console.log(res)

        })
        .catch(err => console.log(err))
        navigate('/')
    }


    return (
        <div>
            <h3>Details About, {petInfo.pet_name}</h3>
            <Link to = '/'>back to home</Link>
            <div>
                <p>Pet Type: {petInfo.pet_type}</p>
                <p>Pet Description: {petInfo.pet_desc}</p>
                <button className="btn btn-danger" onClick={(e) => window.confirm(`Are you sure you wish to Abopt ${petInfo.pet_name}?`) ? deleteHandler(e) : "" }>Abopt {petInfo.pet_name}</button>
            </div>
        </div>

    )
}

export default DetailsPet;