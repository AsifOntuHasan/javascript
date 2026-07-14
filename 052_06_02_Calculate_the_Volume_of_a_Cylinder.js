const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const radius = parseFloat(await question("Enter the radius of the cylinder: "));
  const height = parseFloat(await question("Enter the height of the cylinder: "));
  const volume = Math.PI * radius * radius * height;
  console.log("Volume of the cylinder:", volume);
  rl.close();
}
main();
