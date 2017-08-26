"use strict";
exports.__esModule = true;
var express = require("express");
// const compression = require('compression');
var app = express();
var host = 'localhost';
var port = 3000;
// app.use(compression());
app.get('/', function (req, res) {
    res.send('use ' + host + ':' + port + '/test');
});
app.route('/test')
    .get(function (req, res) {
    res.send('test');
});
app.listen(port, function () {
    console.log('App is running on port ', port);
});
