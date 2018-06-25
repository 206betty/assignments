const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chakraSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    journal: {
        type: String,
        required: true
    } 
})

module.exports = mongoose.model("Chakra", chakraSchema)