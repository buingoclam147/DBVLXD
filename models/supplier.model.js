const mongoose = require('mongoose');

const Supplier = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 1
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String,
        minlength: 10,
        trim: true
    }
})
module.exports = mongoose.model('Supplier',Supplier);