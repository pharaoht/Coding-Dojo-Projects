const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    player_firstName: {
        type: String,
        required: [true, "First Name is required"],
        minLength: [3, 'First Name must be at least 3 characters'],
        maxLength:[30, 'First Name is too long, must be lower than 30']
    },

    player_lastName:{
        type: String,
        required: [true, "Last Name is required"],
        minLength: [3, 'Last Name must be at least 3 characters'],
        maxLength:[30, 'Last Name is too long, must be lower than 30']
    }, 

    player_position:{
        type:String,
        required: [true, "You must give this player a valid position"],
        minLength: [3, 'Position must be at least 3 characters']
    },

    isplaying_game1:{
        type:Boolean,
    },

    isplaying_game2:{
        type:Boolean
    },

    isplaying_game3:{
        type:Boolean
    }

})

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player