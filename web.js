var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var index = fs.readFileSync('./index.html');

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  //response.send
  response.writeHead(200, {'Content-Type': 'text/html','Content-Length':index.length});
  response.write(index);
  response.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
