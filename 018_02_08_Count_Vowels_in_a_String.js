const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function countVowels(s) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (const char of s) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
async function main() {
  const string = await question("Enter a string: ");
  console.log("Number of vowels:", countVowels(string));
  rl.close();
}
main();
