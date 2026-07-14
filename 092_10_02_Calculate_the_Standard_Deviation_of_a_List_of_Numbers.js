function stdev(data) {
  const n = data.length;
  const mean = data.reduce((a, b) => a + b, 0) / n;
  const variance = data.reduce((sum, x) => sum + (x - mean) ** 2, 0) / (n - 1);
  return Math.sqrt(variance);
}
const data = [1, 2, 3, 4, 5];
console.log("Standard deviation:", stdev(data));
