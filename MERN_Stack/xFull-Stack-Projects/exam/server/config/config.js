const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/exam_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection to the database has been made... LET GET IT!"))
.catch(err => console.log("Something went wrong... dont worry well will figure it out"))
