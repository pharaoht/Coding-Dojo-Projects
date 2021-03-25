import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router'

const AllProducts = () =>{
    const[allProducts, setProuducts] = useState([])
    const[formInfo, setformInfo] = useState({
        title:"",
        price:"",
        description:""
    })
    useEffect(() =>{
        axios.get("http://localhost:8000/api/all-products")
        .then(res =>{
           console.log(res.data.results)
           setProuducts(res.data.results)

        })
        .catch(err => console.log(err))

    },[])  

    const changeHandler = (e) =>{
        console.log(e.target.value)
        setformInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitForm = (e) => {
       e.preventDefault()
       axios.post("http://localhost:8000/api/create-product", formInfo)
       .then(res => console.log(res))
       .catch(err => console.log(err))
        
    }

    return (
        <div className="container">
            <div>
                <h1>Product Manager</h1>
                <form onSubmit={submitForm}>
                    <span>Title</span>
                    <p><input type="text" name="title" id="" onChange={changeHandler}/></p>
                    <span>Price</span>
                    <p><input type="text" name="price" id="" onChange={changeHandler}/></p>
                    <span>Description</span>
                    <p><textarea name="description" id="" cols="30" rows="10" onChange={changeHandler}></textarea></p>
                    <button type='submit'>Create</button>
                </form>
            </div>
            <hr></hr>
            {
            allProducts.map((product, idx) =>{
                return <p key = {idx}>
                <Link to = {`/api/product/${product._id}`}>{product.title}</Link>
                
                </p>
            })
            }
        </div>
    )
}

export default AllProducts;