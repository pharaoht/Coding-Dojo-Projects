const express = require("express")
const cors = require("cors");
const  mongoose = require("mongoose");
const { ObjectId } = require("bson");
const port = 8000;
const app = express()

app.use(cors())
app.use(express.json());


mongoose.connect('mongodb://localhost/my_first_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connection has been made"))
.catch(err => console.log('something went wrong', err))

const StudentsSchema = new mongoose.Schema({
    name: String,
    home_state: String,
    lucky_number: Number,
    birthday: {month: Number, day: Number, year: Number },
    interest: [coding = String, brunch = String, Mongodb = String ]

})

const Student = mongoose.model("Student", StudentsSchema)


app.get("/students", (req,res) =>{
    Student.find()
    .then(allstudents => res.json({results: allstudents}))
    .catch(err => console.log(err))
})

app.get("/student/cali", (req,res) =>{
    Student.find({home_state: "California"}, {home_state: "Washington"})
    .then(cali_wash_students => res.json({result: cali_wash_students}))
    .catch(err => console.log(err))
})

app.get("/students/lucky_num/3", (req,res) =>{
    Student.find({lucky_number:{$gt: 3}})
    .then(students_gt_3 => res.json({result: students_gt_3}))
    .catch(err => console.log(err))
})

app.get("/students/lucky_num/10", (req,res)=>{
    Student.find({lucky_number:{$lte: 10}})
    .then(students_lte_10 => res.json({result:students_lte_10}))
    .catch(err => console.log(err))
})

app.get("/students/lucky_num/1-9", (req,res) =>{
    Student.find({lucky_number:{$lt: 9}}, {lucky_number: {$gt: 1}})
    .then(students_between => res.json({result:students_between}))
    .catch(err => console.log(err))
})

app.post("/students/add-interest/", (req,res) =>{
    Student.update({id: '5463d871a6a96d5ed6252f4d'}, {$push: {interest: 'taxes'}})
    .then(addInterest => res.json({result:addInterest}))
    .catch(err => console.log(err))
})

app.get("/students/remove-interest/",(req,res)=>{
    Student.update({id: '5463d871a6a96d5ed6252f4d'}, {$pull:{interest:'taxes'}})
    .then(removeInterest => res.json({result:removeInterest}))
    .catch(err => console.log(err))
})

app.delete("/students/remove-all/cali", (req,res)=>{
    Student.remove({home_state: "cali"})
    .then(removeAllCali => res.json({result:removeAllCali}))
    .catch(err => console.log(err))
})

app.delete("/students/remove-student/", (req,res)=>{
    Student.remove({name: "john"})
    .then(removeStudent => res.json({result:removeStudent}))
    .catch(err => console.log(err))
})

app.get('/student/lucky_num/5', (req,res) =>{
    Student.remove({lucky_number: {$gt:5}})
    .then(removestudent => res.json({result:removestudent}))
    .catch(err => console.log(err))
})

app.update('/students/add-belts', (req,res) =>{
    Student.find({$push: "number_of_belts"})
    .then(updatedAll => res.json({result:updatedAll}))
    .catch(err => console.log(err))
})

app.get("/students/belt/value", (req,res) =>{
    Student.update()
    .then()
    .catch(err => console.log(err))
})

app.patch("/students/update-belt/", (req,res)=>{
    //rename belts to belts earned
    Student.update()
    .then()
    .catch(err => console.log(err))
})

app.delete("/student/belt/remove", (req,res) =>{
    Student.remove()
    .then()
    .catch()
})

app.listen(port, () => console.log(`listening on port ${port}`))