const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productmanager_db', {
    userNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("connection has been established"))
.catch(err => console.log('Something went wrong', err))