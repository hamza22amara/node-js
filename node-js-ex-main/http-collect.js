var http = require("http");
var url = process.argv[2];
var count = 0;
var str = "";
http.get(url, function (response) {
  response.setEncoding("utf8");
  response.on("data", function (data) {
    count += data.length;
    str += data;
  });
  response.on("end", function () {
    console.log(count);
    console.log(str);
  });
});

// The official solution:

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//     response.pipe(bl(function (err, data) {
//         if (err)
//             return console.error(err)
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//     }))
// })
