function generateFibonacci(n) {
  const fibonacciSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextNum = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(nextNum);
  }
  return fibonacciSequence;
}
const terms = 10;
console.log("Fibonacci sequence:", generateFibonacci(terms));
