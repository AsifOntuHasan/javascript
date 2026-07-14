const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isPangram(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lower = s.toLowerCase();
  for (const ch of alphabet) {
    if (!lower.includes(ch)) return false;
  }
  return true;
}
async function main() {
  const inputString = await question("Enter a string: ");
  if (isPangram(inputString)) console.log("Pangram");
  else console.log("Not a pangram");
  rl.close();
}
main();
