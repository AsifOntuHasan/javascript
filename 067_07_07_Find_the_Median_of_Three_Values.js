const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function findMedian(a, b, c) {
  return [a, b, c].sort((x, y) => x - y)[1];
}
async function main() {
  const num1 = parseFloat(await question("Enter the first number: "));
  const num2 = parseFloat(await question("Enter the second number: "));
  const num3 = parseFloat(await question("Enter the third number: "));
  console.log("Median:", findMedian(num1, num2, num3));
  rl.close();
}
main();
