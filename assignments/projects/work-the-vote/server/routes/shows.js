const express = require('express')
 const showRouter = express.Router()
 const Show = require('../models/shows')

 showRouter.get('/', (req, res) => {
     Show.find((err, show) => {
         if(err) return res.status(500).send(err)
         return res.status(200).send(show)
     })
 })

 showRouter.post('/:id/comments', (req,res) => {
     Show.findByIdAndUpdate(
         req.params.id,
         {$push: {comments: req.body}},
         {new: true}, (err, updatedShow) => {
             if(err) return res.status(500).send(err)
             return res.show(updatedShow)
         }
     )
 })

 showRouter.post('/', (req, res) => {
    const newShow = new Show(req.body)
    newShow.save((err, newShow) => {
        if(err) return res.status(500).send(err)
        return res.status(201).send(newShow)
    })
 })

 showRouter.put('/:id', (req, res) => {
    Show.findByIdAndUpdate(
        {_id: req.params.id },
        req.body,
        {new: true},
        (err, updatedShow) => {
            if(err) return res.status(500).send(err)
            return res.send(updatedShow)
        }
    )
})

 showRouter.delete('/:id', (req, res) => {
     Show.findByIdAndRemove(req.params.id, (err, deletedShow) => {
         if(err) return res.status(500).send(err)
         return res.send({ message: "story was sucesfully deleted", deletedShow})
     })
 })

 module.exports = showRouter

 