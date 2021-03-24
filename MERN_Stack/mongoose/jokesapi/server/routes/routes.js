const JokesController = require('../controllers/controllers');

module.exports = app => {
    app.get('/api/all-jokes', JokesController.findAllJokes)
    app.get('/api/jokes/:id', JokesController.findOneJoke)
    app.put('/api/jokes/:id', JokesController.updateJoke)
    app.post('/api/jokes/:id', JokesController.createJoke)
    app.delete('/api/jokes/:id', JokesController.deleteJoke)
}