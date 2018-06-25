const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');

const cities = [
    {name: "Seattle", state: "Washington", population: 700000},
    {name: "Los Angeles", state: "California", population: 4000000},
    {name: 'Draper', state: "Utah", population: 44000},
    {name: "Sedona", state: "Arizona", population: 10000}
  ]

  app.get("/city", (req, res) => {
      res.send(cities)
  })

app.use(bodyParser.json());

app.listen(8000, () => {
    console.log("it's lit")
})