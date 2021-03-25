import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

const UpdateProduct = (props) =>{
    const[productInfo, setProductInfo] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res =>{
            console.log(res.data.result)
            console.log("From update page")
            setProductInfo(res.data.result)
        })
        .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) =>{
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const {title,price,description} = productInfo

        axios.put(`http://localhost:8000/api/product/${props.id}`, {description,title,price,})
        .then(res => {
            console.log(res)
            navigate("/")
            
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Edit {productInfo.title} </h1>
            <form onSubmit={submitHandler}>
            <span>Title</span>
            <p><input type="text" name="title" id="" onChange={changeHandler} value={productInfo.title} /></p>
            
            <span>Price</span>
            <p><input type="text" name="price" id="" onChange={changeHandler} value={productInfo.price}/></p>
            <span>Description</span>
            <p><textarea name="description" id="" cols="30" rows="10" onChange={changeHandler} value={productInfo.description}></textarea></p>
            <button type="submit">Update</button>
            </form>
        </div>
    )
}


export default UpdateProduct