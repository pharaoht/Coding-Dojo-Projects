const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    pet_name: {
        type: String,
        unique: true,
        required: [true, "Pet Name is required"],
        minLength: [3, 'Name must be at least 3 characters long']
    },
    pet_type: {
        type: String,
        required: [true, "Pet Type is required"],
        minLength: [3, 'Name must be at least 3 characters long']
    },
    pet_desc: {
        type: String,
        required: [true, "Pet Desc is required"],
        minLength: [3, 'Name must be at least 3 characters long']
    },
    skill_1: {
        type: String,
    },
    skill_2: {
        type: String,
    },
    skill_3: {
        type: String,
    },
})

const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet

