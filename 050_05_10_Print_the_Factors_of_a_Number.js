const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function printFactors(n) {
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return factors;
}
async function main() {
  const number = parseInt(await question("Enter a number: "));
  console.log("Factors:", printFactors(number));
  rl.close();
}
main();
