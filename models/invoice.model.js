const mongoose = require('mongoose');

const Invoice = new mongoose.Schema({
    employeId: {
        type: mongoose.Types.ObjectId,
        require: true,
        minlength: 1
    },
    customerId: {
        type: mongoose.Types.ObjectId,
        require: true,
        minlength: 1
    },
    createAt: {
        type: Date,
        trim: true,
        require: true
    },
    totalCash: {
        type: Number,
        trim: true,
        require: true,
        minlength: 1
    }
})
module.exports = mongoose.model('Invoice',Invoice);