const express = require("express");
const app = express();

const birds = [{ id: 1, name: "name1", value1: "value1", value2: "value2"}];

console.log(birds.filter(bird => false));
console.log(birds.filter(bird => true));



app.get("/birds", (req, res) => {
    res.send({ data: birds });
})


app.get("/birds/:id", (req, res) => {

const foundBird = birds.find(birds.find(bird => bird.id === Number(req.params.id)));

    res.send({ data: foundBird });
    });



app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});