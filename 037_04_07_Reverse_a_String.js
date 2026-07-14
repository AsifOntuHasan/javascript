const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const string = await question("Enter a string: ");
  const reversedString = string.split('').reverse().join('');
  console.log("Reversed string:", reversedString);
  rl.close();
}
main();
