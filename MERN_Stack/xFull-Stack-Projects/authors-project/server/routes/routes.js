const PlayerController = require("../controllers/controllers")

module.exports = app =>{
    app.get('/api/all-players', PlayerController.findAllPlayers)
    app.get('/api/test', PlayerController.testRoute)
    app.post('/api/new-player', PlayerController.addNewPlayer)
    app.delete('/api/delete-player/:playerId' , PlayerController.deletePlayer)
    app.get('/api/player/:playerId', PlayerController.getPlayer)
    app.put('/api/update-player/:playerId', PlayerController.updatePlayer)
}