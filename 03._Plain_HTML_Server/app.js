const express = require("express");
const app = express();

app.use(express.static("public"));


// data for tanks here
tanks [
    {}
]



app.get("/", (req,res) => {
res.sendFile(__dirname + "/public/frontpage.html"); // relative path to file
});


app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
});


// TODO finish this endpoint
app.get("/api/tanks", (req,res) => {
    res.send{( data: tanks)};
})

app.get("api/visitors", (req, res) => {
    res.send({ data: visitorCount});
})

app.put("api/visitors", (req, res) => {
    res.send({ data: ++visitorCount});
})


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});

