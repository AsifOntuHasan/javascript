const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) {
  if (y === 0) return "Cannot divide by zero";
  return x / y;
}
async function main() {
  const num1 = parseFloat(await question("Enter first number: "));
  const num2 = parseFloat(await question("Enter second number: "));
  console.log("Sum:", add(num1, num2));
  console.log("Difference:", subtract(num1, num2));
  console.log("Product:", multiply(num1, num2));
  console.log("Quotient:", divide(num1, num2));
  rl.close();
}
main();
