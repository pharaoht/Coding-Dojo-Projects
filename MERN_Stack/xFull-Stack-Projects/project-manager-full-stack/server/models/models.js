const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You need a title"]
    },
    price: {
        type: Number,
        required: [true, "You need to set a price"]
    },
    description: {
        type: String,
        required:[true, "please add a description"]
    }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product
