const express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');

var auth = require('./auth.js');
var twit = require('twit');

const consumer_key = auth.consumer_key;
const consumer_secret = auth.consumer_secret;
const access_key = auth.access_key;
const access_secret = auth.access_secret;

var filterTweets = require('./filterTweets');
var parseTweets = require('./parseTweets');

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
    var T = new twit({
        consumer_key: consumer_key,
        consumer_secret: consumer_secret,
        access_token: access_key,
        access_token_secret: access_secret
    })
    
    T.get('statuses/user_timeline', {screen_name: name, count: 100}, function(err, data) {
        var tweets = data;
        var b = filterTweets(tweets);
        async function a(e) {
        let result = await parseTweets(e);
        console.log(result);
        return result;
            
        }
        let finalResult = a(b);
        console.log(finalResult);
        res.send({tweets: finalResult, message: "hi"});
    })
});

app.listen(port, function() {
    console.log('server is running on port ' + port);
});
/*
    https://slow-project-october-server-slowback1.c9users.io
    port 8080
*/