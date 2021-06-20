const mongoose = require('mongoose');

const Category = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 1,
        unique: true,
        trim: true
    },
    note: {
        type: String,
    }

})
module.exports = mongoose.model('Category',Category);