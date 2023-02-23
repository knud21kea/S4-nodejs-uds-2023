const express = require("express");
const app = express();

app.use(express.static("public"));


app.get("/", (req,res) => {
res.sendFile(__dirname + "/public/frontpage.html"); // relative path to file
});


// TODO finish this endpoint
app.get("/tanks", (req,res) => {

})


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});

