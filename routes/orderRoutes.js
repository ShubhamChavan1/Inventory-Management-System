const express = require('express');
const router = express.Router();

const order = require('./../models/order')


const authrole = require('./../authrole')
const { jwtAuthmiddleWare, generateToken } = require('./../jwt');

//create an order
router.post('/', jwtAuthmiddleWare, authrole('User'), async (req, res) => {
    try {
        const data = req.body
        const newOrder = new order(data);
        const response = await newOrder.save();
        res.status(200).json(response)
        console.log("order placed succesfully")
    } catch (error) {
        res.status(500).json(error);
    }
})

//Endpoint to view details of a specific order.
router.get('/:id', jwtAuthmiddleWare, authrole('Admin', 'User'), async (req, res) => {
    try {
        const order_id = req.params.id
        const response = await order.findById(order_id);

        if (!response) {
            res.status(404).json({ message: "order not found" })
        } else {
            console.log("order found");
            res.status(200).json(response)
        }

    } catch (error) {
        res.status(500).json(error);
    }
})

//udpate an order

router.put('/:id', jwtAuthmiddleWare, authrole('Admin'), async (req, res) => {
    try {
        const order_id = req.params.id
        const updatedOrder = req.body
        const response = await order.findByIdAndUpdate(order_id, updatedOrder, {
            new: true,
            runValidators: true
        });

        if (!response) {
            res.status(404).json("order not found");
        } else {
            console.log("order updated successfully");
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})


//deleting an Order
router.delete('/:id', jwtAuthmiddleWare, authrole('Admin'), async (req, res) => {
    try {
        const order_id = req.params.id
        const response = await order.findByIdAndDelete(order_id);

        if (!response) {
            res.status(404).json("order not found");
        } else {
            console.log("order deleted successfully");
            res.status(200).json({ message: "order deleted successfully" });
        }

    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router