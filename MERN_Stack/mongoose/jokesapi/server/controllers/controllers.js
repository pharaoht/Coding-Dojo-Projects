const Joke = require('../models/models')

module.exports.findAllJokes = (req,res) =>{
    Joke.find()
    .then(allJokes => res.json({results: allJokes}))
    .catch(err => res.json({message:"Something went wrong", error: err}))
}

module.exports.findOneJoke = (req,res) =>{
    Joke.findOne({_id: req.params.id})
    .then(singleJoke => res.json({result: singleJoke}))
    .catch(err => res.json({message:"Something went wrong", error: err}))
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({result: newJoke}))
    .catch(err => res.json({message:"Something went wrong", error: err}))
}

module.exports.updateJoke = (req,res) =>{
    Joke.findOneAndUpdate({_id: req.params.id},
         req.body,{new:true, runValidators:true})
    .then(updatedJoke => res.json({result:updatedJoke}))
    .catch(err => res.json({message:"Something went wrong", error: err}))
}

module.exports.deleteJoke = (req,res) =>{
    Joke.findOneAndDelete({_id: req.params.id})
    .then(deletedJoke => res.json({result: deletedJoke}))
    .catch(err => res.json({message:"Something went wrong", error: err}))
}