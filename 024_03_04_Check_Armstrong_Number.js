const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isArmstrong(n) {
  const order = String(n).length;
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, order);
    temp = Math.floor(temp / 10);
  }
  return n === sum;
}
async function main() {
  const number = parseInt(await question("Enter a number: "));
  if (isArmstrong(number)) console.log("Armstrong number");
  else console.log("Not an Armstrong number");
  rl.close();
}
main();
