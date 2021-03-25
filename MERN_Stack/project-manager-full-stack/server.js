const express = require('express');
const app = express();
const cors = require("cors");
require('./server/config/config');
const allProductsRoute = require('./server/routes/routes')


allProductsRoute(app)
app.use(cors())

app.use(express.json(), express.urlencoded({extended: true}));

app.listen(8000, () => console.log("The server is all fired up on port 8000"))