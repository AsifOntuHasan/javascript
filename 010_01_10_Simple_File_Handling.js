const fs = require('fs');
fs.writeFileSync("output.txt", "Hello, this is a sample text.");
const data = fs.readFileSync("output.txt", "utf8");
console.log("Data from file:", data);
