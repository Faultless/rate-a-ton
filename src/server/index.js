"use strict";
exports.__esModule = true;
var express = require("express");
var path_1 = require("path");
var app = express();
app.use(express.static(path_1.join(__dirname, '/public')));
app.listen(3030, function (err) {
    return err
        ? console.log(new Error('Something went wrong while creating the server.'))
        : console.log('Server running on port 3030');
});
