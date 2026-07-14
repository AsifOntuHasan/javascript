const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const num = parseInt(await question("Enter a number: "));
  if (num % 2 === 0) console.log("Even");
  else console.log("Odd");
  rl.close();
}
main();
