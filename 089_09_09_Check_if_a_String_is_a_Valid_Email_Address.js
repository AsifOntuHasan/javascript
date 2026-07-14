const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isValidEmail(email) {
  return /^[^@]+@[^@]+\.[^@]+$/.test(email);
}
async function main() {
  const inputEmail = await question("Enter an email address: ");
  if (isValidEmail(inputEmail)) console.log("Valid email address");
  else console.log("Invalid email address");
  rl.close();
}
main();
