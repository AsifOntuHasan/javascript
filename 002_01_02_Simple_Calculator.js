const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const a = parseFloat(await question("Enter the first number: "));
  const b = parseFloat(await question("Enter the second number: "));
  console.log("Sum:", a + b);
  console.log("Difference:", a - b);
  console.log("Product:", a * b);
  console.log("Quotient:", a / b);
  rl.close();
}
main();
