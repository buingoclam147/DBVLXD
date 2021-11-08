const mongoose = require('mongoose');

const Invoice = new mongoose.Schema({
    code:{
         type:String,
         trim: true,
         minlength:6
    },
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
        type: String,
        trim: true,
        require: true,
        minlength: 1
    },
    status: {
        type: String,
        trim: true,
        require: true,
        minlength: 1
    },
})
module.exports = mongoose.model('Invoice',Invoice);