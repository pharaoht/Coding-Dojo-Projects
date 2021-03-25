const ProductsController = require("../controllers/controllers")
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

module.exports = app =>{
    app.get('/api/all-products', ProductsController.findAllProducts)
    app.get('/', ProductsController.TestRoute)
    app.post('/api/create-product', jsonParser, ProductsController.createProduct)
    app.get('/api/product/:id', ProductsController.getProduct )

}