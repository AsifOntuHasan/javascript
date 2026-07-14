const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const num = parseFloat(await question("Enter a number: "));
  if (num > 0) console.log("Positive number");
  else if (num < 0) console.log("Negative number");
  else console.log("Zero");
  rl.close();
}
main();
