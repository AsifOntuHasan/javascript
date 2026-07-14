const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
}
async function main() {
  const length = parseFloat(await question("Enter length of the rectangle: "));
  const width = parseFloat(await question("Enter width of the rectangle: "));
  const rect = new Rectangle(length, width);
  console.log("Area of the rectangle:", rect.area());
  rl.close();
}
main();
