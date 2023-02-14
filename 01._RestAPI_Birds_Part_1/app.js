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
    id: "1", name: "House sparrow", family: "Passer domesticus", size: "16", mass: "40",
    description: "The plumage of the house sparrow is mostly different shades of grey and brown."
});

birds.push({
    id: "2", name: "Starling", family: "Sturnidae", size: "36", mass: "400",
    description: "Starlings have diverse and complex vocalizations and have been known to embed sounds from their surroundings into their own calls."
});

birds.push({
    id: "3", name: "Pigeon", family: "Columbidae", size: "75", mass: "900",
    description: "Columbidae have unique body feathers, with the shaft being generally broad, strong, and flattened, tapering to a fine point, abruptly."
});

console.log(birds);


// ----------------------------------------------------------------------------------------------
// API

const express = require("express");
const app = express();
app.use(express.json()); // Future implementation of POST?


// API root
app.get("/", (req, res) => {
    res.send(`
    <h1>Birds</h1>
    <h3>Classification</h3>
    <p>Aves (alternately Neornithes) - All modern birds, divided into two subdivisions:</p>
    <p>* Palaeognathae - flightless ratites (such as the ostriches) and the weak-flying tinamous.</p>
    <p>* Neognathae - all other birds.</p>
    <br>
    <p>The number of known living bird species is around 10,906 [Braun & Kimball (2021)]</p>  
`);
});


/* Endpoint for the API to display all birds via HTTP GET mapping */
app.get("/birds", (req, res) => {
    res.send(`
        <h1>Birds</h1>
        <h3>List of all birds:</h3>
        ${getListOfAllBirds()} 
    `);
});


/* Endpoint for the API to display one bird via HTTP GET mapping
Depreciated - The original design was for the parameter to be passed using a query string */
app.get("/bird", (req, res) => {
    res.send(`
    <h1>Birds</h1>
    <h3>Please use the endpoint localhost:8080/birds/${req.query.id} instead.</h3>
    `);
});


/* Endpoint for the API to display one bird via HTTP GET mapping
An alternative design where the parameter is passed using a path variable */
app.get("/birds/:id", (req, res) => {
    res.send(`
    <h1>Birds</h1>
    <h3>The particular bird which has id ${req.params.id}:</h3>    
    ${getDataOfOneBird(req.params.id)}
    `);
});


// ---------------------------------------------------------------------------
// Services

/* returns an unordered HTML list of bird names from the birds collection
If this was Spring the logic would be in a service, but not sure how it is meant to be handled in node.js */
function getListOfAllBirds() {
    let listToReturn = `<ul>`
    birds.forEach(bird => {
        listToReturn += `<li>${bird.name}</li>`
    })
    listToReturn += `</ul>`;
    return listToReturn;
}


// returns an unordered HTML list of bird data for the bird with id
function getDataOfOneBird(id) {
    let listToReturn = `<ul>
    <li>Name: ${birds[id].name}</li>
    <li>Family: ${birds[id].family}</li>
    <li>Size: ${birds[id].size}cm</li>
    <li>Weight: ${birds[id].mass}g</li>    
    </ul>`;
    return listToReturn;
}


// ----------------------------------------------------------------------------------
// Server on dev port

app.listen(8080);
