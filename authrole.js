const authrole = (...roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            return next();
        }
        res.status(403).json({ message: "You are not authorized to this route" })
    }
}

module.exports = authrole;