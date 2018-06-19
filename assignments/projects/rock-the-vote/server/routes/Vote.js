const express = require('express');
const voteRouter = express.Router();
const Vote = require('../models/Vote');


voteRouter.get('/', (req, res) => {
    Vote.find((err, vote) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(vote);
    })
})

voteRouter.post('/', (req, res) => {
    const newVote = new Vote(req.body);
    newVote.save((err, newVote) => {
        if(err) return res.status(500).send(err);
        return res.status(201).send(newVote);
    })
})

voteRouter.get('/:id', (req, res) => {
    
})

voteRouter.put('/:id', (req, res) => {
    Vote.findByIdAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        {new: true},
        (err, updatedVote) => {
            if(err) return res.status(500).send(err);
            return res.send(updatedVote)
        })
})

voteRouter.delete('/:id', (req, res) => {
    Vote.findByIdAndRemove(req.params.id, (err, deletedVote) => {
        if(err) return res.status(500).send(err);
        return res.send({ message: "vote was successfully deleted", deletedVote })
    })
})

module.exports = voteRouter;