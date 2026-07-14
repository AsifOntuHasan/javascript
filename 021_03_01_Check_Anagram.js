const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isAnagram(s1, s2) {
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}
async function main() {
  const string1 = await question("Enter the first string: ");
  const string2 = await question("Enter the second string: ");
  if (isAnagram(string1, string2)) console.log("Anagrams");
  else console.log("Not anagrams");
  rl.close();
}
main();
