var express = require('express');
var app = express();
var fs = require("fs");

app.get('/api/products/', function (req, res) {
   fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})