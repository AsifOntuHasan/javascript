const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const p = parseFloat(await question("Enter the principal amount: "));
  const r = parseFloat(await question("Enter the rate of interest: "));
  const t = parseFloat(await question("Enter the time period: "));
  const interest = (p * r * t) / 100;
  console.log("Simple Interest:", interest);
  rl.close();
}
main();
