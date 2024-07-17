const moongose = require('mongoose');

const moongoseURL = process.env.mongooseDB 

moongose.connect(moongoseURL)

const db = moongose.connection

db.on('connected', () => {
    console.log("Connected to MongoAtlas");
})

db.on('disconnected' , ()=>{
    console.log("Disconnected to MongoAtlas");
})

module.exports = db 