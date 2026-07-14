const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum === n;
}
async function main() {
  const number = parseInt(await question("Enter a number: "));
  if (isPerfectNumber(number)) console.log("Perfect number");
  else console.log("Not a perfect number");
  rl.close();
}
main();
