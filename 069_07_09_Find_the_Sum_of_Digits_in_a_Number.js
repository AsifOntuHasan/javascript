const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function sumOfDigits(n) {
  return String(n).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
async function main() {
  const number = parseInt(await question("Enter a number: "));
  console.log("Sum of digits:", sumOfDigits(number));
  rl.close();
}
main();
