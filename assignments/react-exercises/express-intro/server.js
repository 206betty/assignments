const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuidv1 = require("uuid/v1");

app.use(bodyParser.json());

const dogs = [
    {name: "Mr. Sniffles", type:"Bloodhound", age: 3, id: 1},
    {name: "Ladybird", type: "Bloodhound", age: 14, id: 2},
    {name: "Maya", type: "Siberian Husky", age: 10, id: 3},
    {name: "Wilson", type: "Poodle", age: .75, id: 4}
]
app.get("/dogs", (req, res) => {
    res.send(dogs);
});

app.post("/dogs", (req, res) => {
    const newDog = req.body;
    newDog.id = uuidv1();
    dogs.push(newDog);
    res.send(newDog);
});

app.listen(8000, () => {
  console.log("server is running on port 8000")
});