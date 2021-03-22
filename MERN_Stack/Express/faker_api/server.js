const express = require('express');
const faker = require('faker')
const app = express;
const port = 8000;


app.get('/', (req,res) =>{
    res.json({message:"Hello world"})
})

app.get('/api/users/new', (req,res) =>{
    const newUser = new User()
    res.json({"result": newUser})
    console.log(newUser.id)
})

app.get('/api/companies/new', (req,res) =>{
    const newCompany = new Company()
    res.json({"result": newCompany})
})

app.get('/api/user/company', (req,res) =>{
    const newCompany = new Company()
    const newUser = new User()
    res.json({
            "resultCompany": newCompany,
            "resultUser": newUser        
    })
})


class User{
    constructor(){
        this.id = faker.random.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor(){
        this.id = faker.random.uuid()
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );