const Redis = require('ioredis');
const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const port = 3080;



const redis = new Redis({
    host: 'redis-15163.c16.us-east-1-2.ec2.cloud.redislabs.com',
    port: 15163,
    password: 'PDIeXjTwXPq4NsUP7whtP5xG6C4e5WZh'
});
// build api to get all keys



const keys = ["test"];


redis.get("test").then((result) => {
    keys.push(result);
});


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.post('/api/keys', (req, res) => {
    const key = req.body.key;
    const value = req.body.value
    redis.set(key, value);
    res.json("key added");
});

app.get('/api/keys', (req, res) => {
    const key = req.query.key;
    redis.get(key).then((result) => {
        res.json(result);
    });
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
   



