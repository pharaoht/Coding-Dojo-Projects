const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokesapi_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection has been established"))
.catch(err => console.log('Something went wrong', err))