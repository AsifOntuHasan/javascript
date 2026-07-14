const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isPerfectCube(n) {
  const root = Math.round(Math.pow(n, 1 / 3));
  return root * root * root === n;
}
async function main() {
  const number = parseInt(await question("Enter a number: "));
  if (isPerfectCube(number)) console.log("Perfect cube");
  else console.log("Not a perfect cube");
  rl.close();
}
main();
