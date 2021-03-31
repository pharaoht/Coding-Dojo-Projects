const PetController = require('../controllers/controllers')

module.exports = app =>{
    app.get('/api/all-pets', PetController.findAllPets)
    app.post('/api/create-pet', PetController.createPet)
    app.get('/api/pet/:petID', PetController.getPet)
    app.put('/api/pet/:petID',  PetController.updatePet)
    app.delete('/api/pet/:petID',  PetController.deletePet)
    app.get("/test", PetController.Test)
}