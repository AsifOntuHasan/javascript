const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function gcd(x, y) {
  if (y === 0) return x;
  return gcd(y, x % y);
}
async function main() {
  const num1 = parseInt(await question("Enter the first number: "));
  const num2 = parseInt(await question("Enter the second number: "));
  console.log("GCD:", gcd(num1, num2));
  rl.close();
}
main();
