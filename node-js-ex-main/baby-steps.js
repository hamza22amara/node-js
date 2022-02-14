var arr = process.argv.splice(2);
arr = arr.map((el) => Number(el));
console.log(arr.reduce((acc, number) => acc + number));
