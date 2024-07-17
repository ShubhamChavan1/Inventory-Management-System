const express = require('express');

const router = express.Router();

const User = require('../models/User');
const { generateToken } = require('../jwt');


router.post('/signup', async (req, res) => {

    try {
        const data = req.body
        const newUser = new User(data)
        const response = await newUser.save();
        const payload = {
            id: response.id,
            role: response.role
        }
        const token = generateToken(payload)
        res.status(200).json({ response: response, Token: token })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
        console.error(error.message)
    }
})


router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })

        if (!user || !(await user.comparePassword(password))) {
            return res.json("username or password is wrong")
        }

        const payload = {
            id: user.id,
            role: user.role
        }

        const token = generateToken(payload)
        console.log(token)
        res.status(200).json({ Token: token })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
        console.error(error.message)
    }
})


module.exports = router