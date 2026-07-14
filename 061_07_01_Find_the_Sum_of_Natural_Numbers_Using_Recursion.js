const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function sumOfNaturalNumbers(n) {
  if (n <= 1) return n;
  return n + sumOfNaturalNumbers(n - 1);
}
async function main() {
  const num = parseInt(await question("Enter a number: "));
  console.log("Sum of natural numbers:", sumOfNaturalNumbers(num));
  rl.close();
}
main();
