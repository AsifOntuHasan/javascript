const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
async function main() {
  const num = parseInt(await question("Enter a number: "));
  if (isPrime(num)) console.log("Prime");
  else console.log("Not prime");
  rl.close();
}
main();
