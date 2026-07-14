const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}
async function main() {
  const inputString = await question("Enter a string: ");
  if (isPalindrome(inputString)) console.log("Palindrome");
  else console.log("Not a palindrome");
  rl.close();
}
main();
