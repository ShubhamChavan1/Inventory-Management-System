
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({


    Name: {
        type: String,
        require: true
    },

    Description: {
        type: [String],
        required: true
    },

    Price: {
        type: Number,
        required: true
    },

    Quantity: {
        type: Number,
        required: true
    },

    Category: {
        type: String,
        required: true,
        enum: ["hardware tools", "food", "clothes", "electronics"]
    }

})

const product = mongoose.model('product', productSchema)

module.exports = product