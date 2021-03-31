const Player = require('../models/models')

module.exports.findAllPlayers = (req, res) =>{
    Player.find()
    .then(allPlayers => res.json({results:allPlayers}))
    .catch(err => res.json(err))
}

module.exports.testRoute = (req, res) =>{
    res.json({"Message": "Hello, Test route working..."})
}

module.exports.addNewPlayer = (req, res) =>{
    Player.create(req.body)
    .then(newPlayer => res.json({results:newPlayer}))
    .catch(err => res.json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id : req.params.playerId})
    .then(deletedPlayer => res.json({result: deletedPlayer}))
    .catch(err => res.json(err))
}


module.exports.getPlayer = (req, res) => {
    Player.findOne({_id: req.params.playerId})
    .then(player => res.json({results:player}))
    .catch(err => res.json(err))
}

module.exports.updatePlayer = (req, res) =>{
    Player.findOneAndUpdate({_id: req.params.playerId}, req.body, {new:true},)
    .then(updatedPlayer => res.json({results:updatedPlayer}))
    .catch(err => console.log(err))
}