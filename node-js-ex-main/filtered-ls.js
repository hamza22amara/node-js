var fs = require("fs");
var directory = process.argv[2];
var extension = process.argv[3];
fs.readdir(directory, (err, files) => {
  if (err) {
    return console.log(err.stack);
  }
  var filtered = files.filter((file) => file.endsWith("." + extension));
  filtered.forEach((file) => console.log(file));
});
