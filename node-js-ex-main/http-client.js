var http = require("http");
var url = process.argv[2];
http
  .get(url, function (response) {
    response.setEncoding("utf8"); //instead of data.toString()
    response.on("data", function (data) {
      console.log(data);
    });
    response.on("error", console.error);
  })
  .on("error", console.error);
