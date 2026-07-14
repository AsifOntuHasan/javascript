const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
async function main() {
  const celsius = parseFloat(await question("Enter temperature in Celsius: "));
  const fahrenheit = (celsius * 9 / 5) + 32;
  console.log("Temperature in Fahrenheit:", fahrenheit);
  rl.close();
}
main();
