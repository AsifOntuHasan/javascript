const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const dec = parseInt(await question("Enter a decimal number: "));
  console.log("Binary:", dec.toString(2));
  console.log("Octal:", dec.toString(8));
  console.log("Hexadecimal:", dec.toString(16).toUpperCase());
  rl.close();
}
main();
