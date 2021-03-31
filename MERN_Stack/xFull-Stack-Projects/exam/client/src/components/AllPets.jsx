import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const AllPets = () =>{
    const[allPets, setAllPets] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/all-pets')
        .then(res => {
            console.log(res.data.results)
            setAllPets(res.data.results)
        })
        .catch(err => console.log(err))
    },[])
    return ( 
        <div>
            <div className='header-table'>
                <h2 className="h2-header">These Pets are looking for a good home</h2>
                <Link to = '/pet/create'>add a pet to the shelter</Link>
            </div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPets.map((currentPet, idx) =>{
                            return<tr key = {idx}>
                                    <td>{currentPet.pet_name}</td>
                                    <td>{currentPet.pet_type}</td>
                                    <td><Link to = {`/pet/info/${currentPet._id}`}>Description </Link> | <Link to = {`/pet/edit/${currentPet._id}`}>Edit</Link></td>
                            </tr>
                        })}  
                    </tbody>
                </table>
        </div>
    )
}

export default AllPets;