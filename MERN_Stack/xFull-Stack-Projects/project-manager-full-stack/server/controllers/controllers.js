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

module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.itemID})
    .then(singleProduct => res.json({result: singleProduct}))
    .catch(err => res.json({message:"Something went wrong", error: err}))

}

module.exports.updateProduct = (req, res) =>{
    console.log(req.body)
    Product.findOneAndUpdate({_id: req.params.itemID}, req.body, {new:true}, )
    .then(updatedProduct => res.json({result:updatedProduct}))
    .catch(err => res.json({message:"Something went wrong", error: err}))
}

module.exports.deleteProduct = (req, res) =>{
    Product.deleteOne({_id: req.params.itemID})
    .then(deletedItem => res.json({result: deletedItem}))
    .catch(err => console.log(err))
}