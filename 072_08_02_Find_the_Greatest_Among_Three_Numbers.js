const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const a = parseFloat(await question("Enter the first number: "));
  const b = parseFloat(await question("Enter the second number: "));
  const c = parseFloat(await question("Enter the third number: "));
  const maxNum = Math.max(a, b, c);
  console.log("Greatest number:", maxNum);
  rl.close();
}
main();
