const express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');

const port = (process.env.PORT || 8082);

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json()); 
app.get("/user", (req, res) => {
    res.send({message: "hello world!"});
})
app.options("/user" , (req, res) => {
    res.send("good");
})
app.post("/user", (req, res) => {
    var name = req.body.postUser;
    console.log(name);
    res.send({"name":name});
    //send a request to the twitter api, then do stuff with the response
});

app.listen(port, function() {
    console.log('server is running on port ' + port);
});
/*
    https://slow-project-october-server-slowback1.c9users.io
    port 8080
*/