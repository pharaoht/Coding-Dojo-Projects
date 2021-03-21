const express = require('express')
const faker = require('faker')
const app = express;
const port = 8000;


app.get('/', (req,res) =>{
    res.json({message:"Hello world"})
})