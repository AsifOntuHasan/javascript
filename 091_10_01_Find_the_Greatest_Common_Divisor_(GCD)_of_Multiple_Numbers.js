function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
const numbers = [24, 36, 48, 60, 72];
let result = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  result = gcd(result, numbers[i]);
}
console.log("GCD of the numbers:", result);
