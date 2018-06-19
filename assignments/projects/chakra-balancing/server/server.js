const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost/tastmanager', (err)=> {
    if(err) throw err
    console.log('connected to database')
})

app.use('/chakra', require('./routes/chakra'))

app.listen(3015, () => {
    console.log('server is running on port 3015')
})