var express = require("express");
var app = express();
var path = require("path");

app.use('/', express.static(path.join(__dirname, 'public/')));

app.listen(3001, function() {
    console.log('example app listening on port 3001  open http://localhos:3001 ');
});
