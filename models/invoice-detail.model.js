const mongoose = require('mongoose');

const InvoiceDetail = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        require: true,
        minlength: 1
    },
    invoiceId: {
        type: mongoose.Types.ObjectId,
        require: true,
        minlength: 1
    },
    quantity: {
        type: Number,
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
module.exports = mongoose.model('InvoiceDetail',InvoiceDetail);