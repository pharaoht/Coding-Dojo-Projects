const express = require('express')
const app = express()
const cors = require("cors")
require('./server/config/config');
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}));
const allPlayersRoute = require('./server/routes/routes')
allPlayersRoute(app)
app.listen(8000, () => console.log("the server is all fired up on port 8000"))