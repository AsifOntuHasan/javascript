const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const base = parseFloat(await question("Enter the base of the triangle: "));
  const height = parseFloat(await question("Enter the height of the triangle: "));
  const area = 0.5 * base * height;
  console.log("Area of the triangle:", area);
  rl.close();
}
main();
