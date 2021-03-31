const express = require('express')
const app = express();
const cors = require("cors");
require('./server/config/config')
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}));
// require route files exports
const allPetsRoute = require('./server/routes/routes')
allPetsRoute(app)
//routefile export (app)

app.listen(8000, () => console.log("The server is all fired up on port 8000, LETS GET THIS BREAD"))
