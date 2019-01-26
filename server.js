var express = require('express');
var app = express();
var port = process.env.port || 1337;

app.get('/', function (req, res) {
    res.send('hello arvind pratap singh and node js');
});
app.get('/sp', function (req, res) {
    res.send('hello ram singh and node js');
});

app.listen(port, function () {
    console.log("server start");
});
