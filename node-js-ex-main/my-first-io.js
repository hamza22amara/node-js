var fs = require("fs");
var file = process.argv[2];
var src = fs.readFileSync(file).toString();
let arr = src.split("\n");
let countLine = arr.length - 1;
console.log(countLine);
