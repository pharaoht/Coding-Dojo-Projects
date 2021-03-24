const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
    createdAt: { type : Date, default: Date.now },
    updatedAt: { type : Date, default: Date.now },
})

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;