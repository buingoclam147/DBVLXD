const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    categoryId: {
        type: mongoose.Types.ObjectId,
        require: true,
        minlength: 1,
        trim: true
    },
    supplierId: {
        type: mongoose.Types.ObjectId,
        require: true,
        minlength: 1,
        trim: true
    },
    name: {
        type: String,
        require: true,
        unique: true,
        minlength: 1
    },
    price: {
        type: Number,
        trim: true,
        require: true,
        minlength: 1
    },
    unit: {
        type: String,
        require: true,
        minlength: 1
    },
    origin: {
        type: String,
        require: true,
        minlength: 1
    },
    quantity:{
        type: Number,
        trim: true,
        require: true,
        minlength: 1
    },
    photos:{
        type:[String]
    },
    note:{
        type: String,
    }

})
module.exports = mongoose.model('Product',Product);