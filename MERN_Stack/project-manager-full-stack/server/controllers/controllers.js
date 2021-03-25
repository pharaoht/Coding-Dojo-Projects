const Product = require('../models/models')


module.exports.findAllProducts = (req, res) =>{
    Product.find()
    .then(allProducts => res.json({results:allProducts}))
    .catch(err => res.json({message:"Something went wrong", error: err}))
}

module.exports.TestRoute = (req,res) =>{
    res.json({'message':'hello'})
}

module.exports.createProduct = (req, res) => {
    console.log(req.body)
    Product.create(req.body)
    .then(newProduct => res.json({results: newProduct}))
    .catch(err => res.json({message:"Something went wrong", error: err}))
}