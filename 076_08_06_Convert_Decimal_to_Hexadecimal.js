const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const dec = parseInt(await question("Enter a decimal number: "));
  const hexadecimal = dec.toString(16).toUpperCase();
  console.log("Hexadecimal:", hexadecimal);
  rl.close();
}
main();
