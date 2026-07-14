const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const a = parseFloat(await question("Enter the length of side a: "));
  const b = parseFloat(await question("Enter the length of side b: "));
  const c = parseFloat(await question("Enter the length of side c: "));
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log("Area of the triangle:", area);
  rl.close();
}
main();
