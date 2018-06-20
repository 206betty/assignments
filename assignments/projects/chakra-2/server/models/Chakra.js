const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chakraSchema = new Schema({
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Chakra", chakraSchema)