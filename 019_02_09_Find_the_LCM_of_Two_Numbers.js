const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function computeLcm(x, y) {
  let greater = x > y ? x : y;
  while (true) {
    if (greater % x === 0 && greater % y === 0) return greater;
    greater++;
  }
}
async function main() {
  const num1 = parseInt(await question("Enter first number: "));
  const num2 = parseInt(await question("Enter second number: "));
  console.log("LCM:", computeLcm(num1, num2));
  rl.close();
}
main();
