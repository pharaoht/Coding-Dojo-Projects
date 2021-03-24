const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    Description: String
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product
