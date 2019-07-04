var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World! Jenkins is integrated");
});

app.listen(4000);
