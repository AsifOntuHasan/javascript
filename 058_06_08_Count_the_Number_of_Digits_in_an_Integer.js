const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const number = parseInt(await question("Enter an integer: "));
  const numDigits = String(Math.abs(number)).length;
  console.log("Number of digits:", numDigits);
  rl.close();
}
main();
