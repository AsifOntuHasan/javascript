const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
async function main() {
  const num = parseInt(await question("Enter a number: "));
  console.log("Factorial:", factorial(num));
  rl.close();
}
main();
