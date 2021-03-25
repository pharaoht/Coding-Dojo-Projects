const ProductsController = require("../controllers/controllers")


module.exports = app =>{
    app.get('/api/all-products', ProductsController.findAllProducts)
    app.get('/', ProductsController.TestRoute)
    app.post('/api/create-product', ProductsController.createProduct)
    app.get('/api/product/:itemID', ProductsController.getProduct)
    app.put('/api/product/:itemID',  ProductsController.updateProduct)
    app.delete('/api/product/:itemID',  ProductsController.deleteProduct)

}