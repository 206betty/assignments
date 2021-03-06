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

app.use('/Chakra', require('./routes/Chakra'))

app.listen(3030, () => {
    console.log('server is running on port 3030')
})