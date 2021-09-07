var express = require('express');
var app = express();
var path = require("path");
var router = express.Router();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/templates/index.html"));
});

app.use(express.static(__dirname + '/public/'));


app.listen(3000);
