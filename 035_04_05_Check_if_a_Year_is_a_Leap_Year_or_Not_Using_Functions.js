const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) return true;
      return false;
    }
    return true;
  }
  return false;
}
async function main() {
  const year = parseInt(await question("Enter a year: "));
  if (isLeapYear(year)) console.log("Leap year");
  else console.log("Not a leap year");
  rl.close();
}
main();
