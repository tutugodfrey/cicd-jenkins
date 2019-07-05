var express = require('express');
var app = express();

var port = process.env.PORT || 4000
app.get('/',function(req,res) {
  res.send("Hello World! Jenkins is integrated!");
});

app.listen(port);

module.exports = app;
