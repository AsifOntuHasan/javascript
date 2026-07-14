const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  let a = await question("Enter the value of a: ");
  let b = await question("Enter the value of b: ");
  [a, b] = [b, a];
  console.log("Value of a after swapping:", a);
  console.log("Value of b after swapping:", b);
  rl.close();
}
main();
