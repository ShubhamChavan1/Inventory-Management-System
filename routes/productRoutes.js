const express = require('express');

const router = express.Router();

const product = require('./../models/product');

const authrole = require('./../authrole')
const { jwtAuthmiddleWare, generateToken } = require('./../jwt');


//add product to database 
router.post('/', jwtAuthmiddleWare, authrole('Admin'), async (req, res) => {
    try {
        const data = req.body
        const newProduct = new product(data);
        const response = await newProduct.save();
        console.log("product saved successfully");
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
})

//get all products 
router.get('/', jwtAuthmiddleWare, authrole('Admin',"User"), async (req, res) => {
    try {
        const data = await product.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
})


//get specific product using product id
router.get('/:id', jwtAuthmiddleWare, authrole('Admin', 'User'), async (req, res) => {
    try {
        const product_ID = req.params.id
        const response = await product.findById(product_ID);
        if (!response) {
            res.status(404).json({ message: "product not found" })
        } else {
            console.log("product found")
            res.status(200).json(response)
        }

    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
})


//update product by using product id
router.put('/:id', jwtAuthmiddleWare, authrole('Admin'), async (req, res) => {
    try {
        const product_ID = req.params.id
        const updatedProdcut = req.body
        const response = await product.findByIdAndUpdate(product_ID, updatedProdcut, {
            new: true,
            runValidators: true
        })

        if (!response) {
            res.status(404).json({ message: "product not found" })
        } else {
            res.status(200).json(response);
        }

    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
})


//delete a specific product
router.delete('/:id', jwtAuthmiddleWare, authrole('Admin'), async (req, res) => {
    try {
        const product_ID = req.params.id

        const response = await product.findByIdAndDelete(product_ID)

        if (!response) {
            res.status(404).json({ message: "product not found" })
        } else {
            res.status(200).json({ message: "product deleted successfully" })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
})

module.exports = router
