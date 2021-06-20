const mongoose = require('mongoose');

const CustomerAccount = new mongoose.Schema({
    customerId: {
        type: mongoose.Types.ObjectId,
        require: true,
        minlength: 1,
        trim: true,
    },
    userName: {
        type: String,
        minlength: 4,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    },
})
module.exports = mongoose.model('CustomerAccount',CustomerAccount);