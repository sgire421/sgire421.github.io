/* this loads the http library */
var http = require("http");

/* create an http server to handle responses */

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World!");
  response.end();
}).listen(8888);
