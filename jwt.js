const jwt = require('jsonwebtoken');


const jwtAuthmiddleWare = (req, res, next) => {
    //check for authorization headaer
    const authHeader = req.headers.authorization
    if (!authHeader) {
        res.status(401).json({ message: "Token not found" })
    }
    //exctract token
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.json({ message: "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SecretKey)

        req.user = decoded
        next();

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: "Invalid token" })
    }
}

const generateToken = (userData) => {

    return jwt.sign(userData, process.env.JWT_SecretKey);
}

module.exports = { jwtAuthmiddleWare, generateToken };

