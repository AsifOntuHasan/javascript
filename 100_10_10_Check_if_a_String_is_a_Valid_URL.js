const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isValidURL(url) {
  const regex = /^(?:http|ftp)s?:\/\/(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[?[A-F0-9]*:[A-F0-9:]+\]?)(?::\d+)?(?:\/?|[/?]\S+)$/i;
  return regex.test(url);
}
async function main() {
  const inputURL = await question("Enter a URL: ");
  if (isValidURL(inputURL)) console.log("Valid URL");
  else console.log("Invalid URL");
  rl.close();
}
main();
