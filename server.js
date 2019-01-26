var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello saurabh pratap singh and node js');
});

app.listen(3000, function () {
    console.log("server start");
});