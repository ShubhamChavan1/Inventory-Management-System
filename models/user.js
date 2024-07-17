const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    mobileNo:{
        type:Number,
        required:true,
 
    },

    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    }
})

userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')){
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password,salt)
        user.password = hashedPassword
        next();
    } catch (error) {
        return next(error);
    }
})

userSchema.methods.comparePassword = async function(enteredPassword) {
    try {
        const isMatch = await bcrypt.compare(enteredPassword , this.password);
        return isMatch;
    } catch (er) {
        throw er;
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User