var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var file = process.argv[3];
http
  .createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html;charset=utf-8" });
    fs.createReadStream(file).pipe(response);
  })
  .listen(port);
