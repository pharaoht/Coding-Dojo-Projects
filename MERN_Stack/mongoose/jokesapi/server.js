const express = require('express');
const app = express();
require('./server/config/config');
const allJokeRoutes = require('./server/routes/routes')
allJokeRoutes(app)

app.use(express.json(), express.urlencoded({extended: true}));

app.listen(8000, () => console.log("The server is all fired up on port 8000"))
