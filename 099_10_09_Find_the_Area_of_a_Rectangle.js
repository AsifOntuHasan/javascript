const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const length = parseFloat(await question("Enter the length of the rectangle: "));
  const width = parseFloat(await question("Enter the width of the rectangle: "));
  const area = length * width;
  console.log("Area of the rectangle:", area);
  rl.close();
}
main();
