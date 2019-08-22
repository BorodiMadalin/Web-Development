const express = require("express");
const app = express();
const port  = 3000;

// "/" -> "Hi there!"
app.get ("/", function(req, res){
    res.send("Hi there!");
})

app.get ("/bye", function(req, res){
    res.send("Goodbye!");
})

app.get ("/dog", function(req, res){
    console.log("Someone made a request to /dog!") // this will appear in the console, NOT on the website and NOT on postman
    res.send("MEOW!");
})

// Tell express to listen for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))