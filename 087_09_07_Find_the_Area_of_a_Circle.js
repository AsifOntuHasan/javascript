const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const radius = parseFloat(await question("Enter the radius of the circle: "));
  const area = Math.PI * radius * radius;
  console.log("Area of the circle:", area);
  rl.close();
}
main();
