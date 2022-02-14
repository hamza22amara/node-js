var fs = require("fs");
var file = process.argv[2];
fs.readFile(file, (err, buf) => {
  if (err) return console.log(err.stack);
  var arr = buf.toString().split("\n");
  console.log(arr.length - 1);
});
