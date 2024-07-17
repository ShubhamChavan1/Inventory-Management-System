const express = require('express')
const router = express.Router();
const authrole = require('./../authrole')
const { jwtAuthmiddleWare, generateToken } = require('./../jwt');
const stock = require('./../models/stock');

router.get('/', jwtAuthmiddleWare, authrole('Admin'), async (req, res) => {
    try {
        const data = await stock.find();
        console.log("List of all Stocks")
        res.status(200).json(data);
    } catch (error) {
        console.error("Error getting stock:", error);
        res.status(500).json({ error: "Internal server error" })
    }
})

router.get('/:id', jwtAuthmiddleWare, authrole('Admin'), async (req, res) => {
    try {
        const stock_ID = req.params.id
        const response = await stock.findById(stock_ID);
        if (!response) {
            res.status(404).json({ message: "stock not found" });
        } else {
            console.log("stock found ");
            res.status(200).json(response)
        }
    } catch (error) {
        console.error("Error getting stock:", error);
        res.status(500).json({ error: "Internal server error" })
    }
})

router.put('/:id', jwtAuthmiddleWare, authrole('Admin'), async (req, res) => {
    try {
        const stock_ID = req.params.id
        const UpdatedStock = req.body
        const response = await stock.findByIdAndUpdate(stock_ID, UpdatedStock, {
            new: true,
            runValidators: true
        });

        if (!response) {
            res.status(404).json({ message: "stock not found" });
        } else {
            console.log('Stock Updated Successfully')
            res.status(200).json(response);
        }
    } catch (error) {
        console.error("Error updating stock:", error);
        res.status(500).json({ error: "Internal server error" })
    }
})

router.post('/', jwtAuthmiddleWare, authrole('Admin'), async (req, res) => {

    try {
        const newStock = new stock(req.body)
        const response = await newStock.save(newStock);

        console.log("New stock item added Suceessfully")
        res.status(200).json(response)

    } catch (error) {
        console.error(error, "error saving new stock")
        res.status(500).json({ error: "Internal server error" })
    }

})

module.exports = router