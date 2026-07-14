const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
function isValidIP(ip) {
  const parts = ip.split('.');
  if (parts.length !== 4) return false;
  return parts.every(part => {
    const num = parseInt(part, 10);
    if (isNaN(num) || num < 0 || num > 255) return false;
    if (part !== String(num)) return false;
    return true;
  });
}
async function main() {
  const ipAddress = await question("Enter an IP address: ");
  if (isValidIP(ipAddress)) console.log("Valid IP address");
  else console.log("Invalid IP address");
  rl.close();
}
main();
