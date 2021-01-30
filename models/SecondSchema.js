const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    crew: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }, 
    position: {
        type: String,
        required: true
    }, 
    missions: {
        type: Number,
        required: true
    },
    field: {
        type: String,
        required: true,
    }, 
    condition:{
        type: String,
        required: true
    },
    condition_value : {
        type: Number,
        required: true,
    }
})

module.exports = Users = mongoose.model('users', Userschema)