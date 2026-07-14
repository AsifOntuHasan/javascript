const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function fibonacciSeries(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    process.stdout.write(a + " ");
    [a, b] = [b, a + b];
  }
  console.log();
}
async function main() {
  const terms = parseInt(await question("Enter the number of terms: "));
  console.log("Fibonacci series:");
  fibonacciSeries(terms);
  rl.close();
}
main();
