const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const base = parseInt(await question("Enter the base: "));
  const exponent = parseInt(await question("Enter the exponent: "));
  let result = 1;
  for (let i = 0; i < exponent; i++) result *= base;
  console.log("Result:", result);
  rl.close();
}
main();
