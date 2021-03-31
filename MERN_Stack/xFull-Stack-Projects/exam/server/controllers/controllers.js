const Pet = require('../models/models')

module.exports.findAllPets = (req, res) => {
    Pet.find()
    .then(allPets => res.json({results: allPets}))
    .catch(err => res.json(err))
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
    .then(newPet => res.json({results: newPet}))
    .catch(err => res.json(err))
}

module.exports.getPet = (req, res) => {
    Pet.findOne({_id: req.params.petID})
    .then(singlePet => res.json({result: singlePet}))
    .catch(err => res.json(err))
}

module.exports.updatePet = (req, res) =>{
    Pet.findOneAndUpdate({_id: req.params.petID}, req.body, {new:true}, )
    .then(updatedPet => res.json({result:updatedPet}))
    .catch(err => res.json(err))
}

module.exports.deletePet = (req, res) =>{
    Pet.deleteOne({_id: req.params.petID})
    .then(deletedPet => res.json({result: deletedPet}))
    .catch(err => res.json(err))
}

module.exports.Test = (req, res) =>{
    res.json({"Hoolo":"world"})
}