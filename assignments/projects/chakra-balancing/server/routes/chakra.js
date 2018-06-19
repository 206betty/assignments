const express = require('express')
 const chakraRouter = express.Router()
 const chakra = require('../models/chakra')

 chakraRouter.get('/', (req, res) => {
     chakra.find((err, chakra) => {
         if(err) return res.status(500).send(err)
         return res.status(200).send(chakra)
     })
 })

 chakraRouter.post('/:id/comments', (req,res) => {
     chakra.findByIdAndUpdate(
         req.params.id,
         {$push: {comments: req.body}},
         {new: true}, (err, updatedChakra) => {
             if(err) return res.status(500).send(err)
             return res.chakra(updatedChakra)
         }
     )
 })

 chakraRouter.post('/', (req, res) => {
    const newChakra = new chakra(req.body)
    newChakra.save((err, newChakra) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(newChakra)
    })
 })

 chakraRouter.put('/:id', (req, res) => {
    chakra.findByIdAndUpdate(
        {_id: req.params.id },
        req.body,
        {new: true},
        (err, updatedChakra) => {
            if(err) return res.status(500).send(err)
            return res.send(updatedChakra)
        }
    )
})

 chakraRouter.delete('/:id', (req, res) => {
     chakra.findByIdAndRemove(req.params.id, (err, deletedChakra) => {
         if(err) return res.status(500).send(err)
         return res.send({ message: "chakra was sucesfully deleted", deletedChakra})
     })
 })

 module.exports = chakraRouter