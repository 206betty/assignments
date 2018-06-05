const express = require('express');
const uuid = require('uuid/v1');
const bountyRoutes = express.Router();

const bounties = [
  {name: 'Dorito', talent: 'theater', id: 1},
  {name: 'Chicken Nugget', talent: 'speed eating', id: 2},
  {name: 'Hot Cross Bun', talent: 'coloring', id: 3},
  {name: 'Spicy Tuna', talent: 'mind reading', id:4}
]

bountyRoutes.route('/')
.get((req, res) => {
  res.send(bounties)
})
.post((req, res) => {
  req.body.id = uuid();
  bounties.push(req.body);
  res.send(req.body);
})

bountyRoutes.route('/:id')
.get((req, res) => {
  const foundBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id))
  res.send(foundBounty);
})
.put((req, res) => {
  const foundBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id))
  const newBounty = Object.assign(foundBounty, req.body);
  res.send(req.body);
})
.delete((req, res) => {
  const foundBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id))
  const index = bounties.indexOf(foundBounty)
  bounties.splice(index, 1);
  res.send("You've succesfully deleted the bounty")
})





module.exports = bountyRoutes