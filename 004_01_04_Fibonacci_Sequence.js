const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
async function main() {
  const terms = parseInt(await question("Enter the number of terms: "));
  console.log("Fibonacci sequence:");
  for (let i = 0; i < terms; i++) {
    console.log(fibonacci(i));
  }
  rl.close();
}
main();
