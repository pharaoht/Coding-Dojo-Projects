const PlayerController = require("../controllers/controllers")

module.exports = app =>{
    app.get('/api/test', PlayerController.testRoute)
}