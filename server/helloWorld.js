/**
This is how to create simple HTTP web server using node.js
You do not need to understand how it works fully.

The important thing is that it is still Javascript!

**/

// Load the http module to create an http server.
var http = require("http");

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end("<!doctype html><html><body><h1>Hello World!</h1></body></html>");
});

// Listen on port 8080, IP defaults to 127.0.0.1
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8080/");
