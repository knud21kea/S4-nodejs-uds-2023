/*
Birds Rest API - Part 1

Uses an array of bird objects to simulate DB
It is invisioned that a bird has for now the following properties:
    id
    name
    family
    size (cm)
    mass (g)
    description
*/

// -----------------------------------------------------------------------------------------------
// Data

const birds = []; // implementation is a simple array of objects, no persistence

birds.push({
    id: 1, name: "House sparrow", family: "Passer domesticus", size: "16", mass: "40",
    description: "The plumage of the house sparrow is mostly different shades of grey and brown."
});

birds.push({
    id: 2, name: "Starling", family: "Sturnidae", size: "36", mass: "400",
    description: "Starlings have diverse and complex vocalizations and have been known to embed sounds from their surroundings into their own calls."
});

birds.push({
    id: 3, name: "Pigeon", family: "Columbidae", size: "75", mass: "900",
    description: "Columbidae have unique body feathers, with the shaft being generally broad, strong, and flattened, tapering to a fine point, abruptly."
});

/* test data for POST mapping in Postman
{
    "name" : "Magpie", "family" : "Corvidae", "size" : "45", "mass" : "240",
    "description" : "The head, neck and breast are glossy black with a metallic green and violet sheen; the belly and scapulars (shoulder feathers) are pure white; the wings are black glossed with green or purple, and the primaries have white inner webs, conspicuous when the wing is open."
}
*/


// ----------------------------------------------------------------------------------------------
// API

const express = require("express");
const app = express();
app.use(express.json()); // Future implementation of POST?


//Endpoint for the API to read all birds via HTTP GET mapping
app.get("/birds", (req, res) => {
    res.send(birds);
});


// Endpoint for the API to read the bird with 'id: id' via HTTP GET mapping
app.get("/birds/:id", (req, res) => {
    res.send(birds.find(bird => bird.id === parseInt(req.params.id))); // fails if no bird with that id
});


//Birds Rest API - Part 2


// Endpoint for the API to create one bird with 'auto-incremented' id via HTTP POST mapping
app.post("/birds", (req, res) => {
    console.log(req.body.mass);
    birds.push({
        id: birds.slice(-1)[0].id + 1,
        name: req.body.name,
        family: req.body.family,
        size: req.body.size,
        mass: req.body.mass,
        description: req.body.description
    });
    res.send({ created: birds.slice(-1)[0] });
});


// Endpoint for the API to delete the bird with 'id: id' via HTTP DELETE mapping
app.delete("/birds/:id", (req, res) => {
    const indexOfBirdToDelete = birds.indexOf(birds.find(bird => bird.id === parseInt(req.params.id)));
    let birdDeleted = [];
    if (indexOfBirdToDelete > -1) {
        birdDeleted = birds.splice(indexOfBirdToDelete, 1);
    }
    res.send({ deleted: birdDeleted[0] });
});


// ----------------------------------------------------------------------------------
// Server on dev port

app.listen(8080);
