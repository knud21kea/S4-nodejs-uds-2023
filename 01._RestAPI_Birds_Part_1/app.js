const express = require("express");
const app = express();
app.use(express.json()); // Future implementation of POST


// API root
app.get("/", (req, res) => {
    res.send(`
        <h1>Birds</h1>
        <h3>Something like a welcome page here.</h3>    
    `);
});


/* Endpoint for the API to display all birds via HTTP GET mapping */
app.get("/birds", (req, res) => {
    res.send(`
        <h1>Birds</h1>
        <h3>Something displaying a list of all birds with limited data here.</h3>    
    `);
});


/* Endpoint for the API to display one bird via HTTP GET mapping
The original design was for the parameter to be passed using a query string */
app.get("/bird", (req, res) => {
    res.send(`
    <h1>Birds</h1>
    <h3>The particular bird which has id ${req.query.id} with all relevant data here.</h3>
    `);
});


/* Endpoint for the API to display one bird via HTTP GET mapping
An alternative design is for the parameter to be passed using a path variable */
app.get("/birds/:id", (req, res) => {
    res.send(`
    <h1>Birds</h1>
    <h3>The particular bird which has id ${req.params.id} with all relevant data here.</h3>
    `);
});


app.listen(8080);
