const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isPerfectSquare(n) {
  const root = Math.floor(Math.sqrt(n));
  return root * root === n;
}
async function main() {
  const number = parseInt(await question("Enter a number: "));
  if (isPerfectSquare(number)) console.log("Perfect square");
  else console.log("Not a perfect square");
  rl.close();
}
main();
