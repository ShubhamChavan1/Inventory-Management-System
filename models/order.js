const mongoose = require('mongoose')
const product = require('./product')
const orderSchema = mongoose.Schema({

    orderDate: {
        type: Date,
        default: Date.now
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'product',
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    customerDetails: {
        name:{type:String,required:true},
        mobileNo:{ type:Number, require:true },
        address: { type: String, required: true },
    },

    status:{
        type:String,
        enum:['Pending','Shipped','Delivered','Cancelled'],
        default:'pending'
    }
})

const order = mongoose.model('order',orderSchema);
module.exports = order