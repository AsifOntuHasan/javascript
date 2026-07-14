const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const string = await question("Enter a string: ");
  const wordCount = string.split(/\s+/).filter(w => w).length;
  console.log("Number of words:", wordCount);
  rl.close();
}
main();
