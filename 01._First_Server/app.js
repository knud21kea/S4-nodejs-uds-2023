const app = require("express")(); // same as the 2 lines below

//const express = require("express"); // express is a package, it has no extension like .js
//const app = express();

// app.use(express.json()); // This means that we can send json in a POST


// always use req for request and res for response
// route (the entire thing)
// HTTP method
// | endpoint callback function
app.get("/", (req, res) => {
    res.send({ message: "Our first route"});
})

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send( { message: `People have spun the bicycle wheel ${bicycleSpins} times`});
});

// create a new route that kicks the dinosaur and the dinosaur says ow ow ow

app.get("/kickthedinosaur", (req, res) => {
    res.send( { message: `ow ow ow`});
});

app.get("/about", (req, res) => {
    res.send(`
        <h1>About</h1>
        <h3>This is my about page.</h3>    
    `);
});

// /bat?adlective=spooky
app.get("/bat", (req, res) => {
    console.log(req.query);
    res.send({ message: `The bat is ${req.query.adjective}.`});
});

// /bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params);
    res.send({ bottleSize: req.params.bottleSize});
});

// TODO: look at this
app.post("/package", (req, res) => {
    console.log(req.body);
    res.send({ message: req.body });
});



app.listen(8080); // server running on port 8080 always at the bottom by convention (learn later)

