const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const char = await question("Enter a character: ");
  const asciiValue = char.charCodeAt(0);
  console.log("ASCII value:", asciiValue);
  rl.close();
}
main();
