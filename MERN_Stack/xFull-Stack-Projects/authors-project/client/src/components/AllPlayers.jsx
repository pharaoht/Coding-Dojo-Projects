import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const AllPlayers = () =>{
    const[allPlayers, setAllPlayers] = useState([])
    const[deleteState, setDeleteState] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/all-players")
        .then(res =>{
            console.log(res.data.results)
            setAllPlayers(res.data.results)
        })
        .catch(err => console.log(err))
    },[deleteState])

    const deleteHandler = (e, playerId) =>{
        axios.delete(`http://localhost:8000/api/delete-player/${playerId}`)
        .then(res => {

            console.log(res)
            setDeleteState(true)
        })
        .catch(err => console.log(err))
        navigate('/')
    }


    return (
        <div className="list-header">
            <div className="header-holder">
                <h3 className='list'><Link to ='/'>List</Link>  |</h3> 
                <h3 className='list'><Link to='/players/addplayer'>Add Player</Link></h3>
            </div>
            <div>
                <h3>Fowards</h3>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col"> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPlayers.map((currentplayer, idx) =>{
                            return<tr>
                                    <td>{currentplayer.player_firstName}, {currentplayer.player_lastName}</td>
                                    <td>{currentplayer.player_position}</td>
                                    <td><button className="btn btn-info"><Link to = {`players/edit/${currentplayer._id}`}>Edit</Link></button> | <button className="btn btn-danger" onClick={(e) => window.confirm(`Are you sure you wish to delete ${currentplayer.player_firstName}, ${currentplayer.player_lastName}?`) ? deleteHandler(e, currentplayer._id) : null }>Delete</button></td>
                            </tr>
                        })}  
                    </tbody>
                </table>


            </div>
        </div>

    
    )
}

export default AllPlayers;