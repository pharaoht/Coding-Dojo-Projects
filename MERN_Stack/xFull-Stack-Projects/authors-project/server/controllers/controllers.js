const Player = require('../models/models')

module.exports.findAllPlayers = (req, res) =>{
    Player.find()
    .then(allPlayers => res.json({results:allPlayers}))
    .catch(err => res.json({results:err}))
}

module.exports.testRoute = (req, res) =>{
    res.json({"Message": "Hello, Test route working..."})
}