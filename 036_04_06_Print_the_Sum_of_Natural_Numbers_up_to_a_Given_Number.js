const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const n = parseInt(await question("Enter a number: "));
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  console.log("Sum of natural numbers:", sum);
  rl.close();
}
main();
