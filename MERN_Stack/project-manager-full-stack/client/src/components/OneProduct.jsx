import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const OneProduct = (props) =>{
    const[oneProduct, setOneProduct] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res =>{
           console.log(res.data.result)
           setOneProduct(res.data.result)
           

        })
        .catch(err => console.log(err))
    },[])

    const deleteHandler = (e) =>{
        axios.delete(`http://localhost:8000/api/product/${props.id}`)
        .then(res => {
            console.log(res)
            navigate("/")
        })
        .catch()
        
    }
    return (
        <div className="container">
            <h1>{oneProduct.title}</h1>
            <p>
                Cost: ${oneProduct.price}.00
            </p>
            <p>
                {oneProduct.description}
            </p>
            <p>
             <button><Link to ={`/product-update/${props.id}`}>Edit</Link></button>
            </p>
            <p>
                <button onClick={deleteHandler}>Delete</button>
            </p>
        </div>
    )
}

export default OneProduct;