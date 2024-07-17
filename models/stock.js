const mongoose = require('mongoose');
const stockSchema = mongoose.Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    restockDate: {
        type: Date,
        required: true
    },

    location: {
        type: String,
        enum: ['warehouse1', 'warehouse2', 'warehouse3'],
        required: true
    }
})



const stock = mongoose.model("stock", stockSchema)

module.exports = stock
