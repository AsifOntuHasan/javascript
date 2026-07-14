const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function generatePrimes(start, end) {
  const primes = [];
  for (let num = start; num <= end; num++) {
    if (num > 1) {
      let isPrime = true;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) { isPrime = false; break; }
      }
      if (isPrime) primes.push(num);
    }
  }
  return primes;
}
async function main() {
  const startRange = parseInt(await question("Enter the starting range: "));
  const endRange = parseInt(await question("Enter the ending range: "));
  console.log("Prime numbers:", generatePrimes(startRange, endRange));
  rl.close();
}
main();
