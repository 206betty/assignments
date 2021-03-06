const mongoose = require('mongoose')
const Schema = mongoose.Schema

const showSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    comments: [{
        name: String,
        body: String
    }]
})

module.exports = mongoose.model("Shows", showSchema)