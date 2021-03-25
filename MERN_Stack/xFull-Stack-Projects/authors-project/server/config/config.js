const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/teamManager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() => console.log("Connection to database has been established"))
.catch(err => console.log("Something went wrong", err))