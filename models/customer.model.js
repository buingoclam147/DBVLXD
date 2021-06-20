const mongoose = require('mongoose');

const Customer = new mongoose.Schema({
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
    address: {
        type: String,
        trim: true
    },
    note:{
        type: String,
    }

})
module.exports = mongoose.model('Customer',Customer);