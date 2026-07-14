const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const string1 = await question("Enter the first string: ");
  const string2 = await question("Enter the second string: ");
  const concatenatedString = string1 + string2;
  console.log("Concatenated string:", concatenatedString);
  rl.close();
}
main();
