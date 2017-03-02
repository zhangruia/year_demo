var express = require("express");
var url = require('url');

var app = express();
var loginArr = {

    "15011199029": {
        "pass": "1314520",
        "name": "沉默"
    }

};

app.get("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", "3.2.1");
    next();
});

var verification = require("./node/verification")(app);
var login = require("./node/login")(app,loginArr,url);
var register = require("./node/register")(app,loginArr,url);
var hot = require( "./node/hot" )( app );
var foreign = require( "./node/foreign" )(app);

app.listen(8089, function () {
    console.log("hello world");
});