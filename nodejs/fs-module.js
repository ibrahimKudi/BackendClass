const fs = require('fs');

const first = fs.readFileSync('./Read/file1.txt', 'utf8');
const second = fs.readFileSync("file2.txt", 'utf8');

console.log(first);
console.log(second);

fs.writeFileSync("./Read/file3.txt", `this is my both ${first} and ${second}`);
const third = fs.readFileSync("./Read/file3.txt", 'utf8');
console.log(third); 