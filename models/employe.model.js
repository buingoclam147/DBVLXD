const mongoose = require('mongoose');

const Employe = new mongoose.Schema({
    fullName: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    phoneNumber: {
        type: String,
        minlength: 10,
        trim: true
    },
    sex: {
        type: Boolean,
        trim: true
    },
    dayOfBirt: {
        type: Date,
        trim: true
    },
    address: {
        type: String,
    },
    note:{
        type: String,
    }

})
module.exports = mongoose.model('Employe',Employe);