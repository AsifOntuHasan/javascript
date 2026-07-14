const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function computeGcd(x, y) {
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
}
function computeLcm(x, y) {
  return Math.floor((x * y) / computeGcd(x, y));
}
async function main() {
  const num1 = parseInt(await question("Enter first number: "));
  const num2 = parseInt(await question("Enter second number: "));
  console.log("LCM:", computeLcm(num1, num2));
  console.log("GCD:", computeGcd(num1, num2));
  rl.close();
}
main();
