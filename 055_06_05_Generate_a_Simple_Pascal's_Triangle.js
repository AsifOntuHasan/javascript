function generatePascalsTriangle(n) {
  const triangle = [[1]];
  for (let i = 1; i < n; i++) {
    const prevRow = triangle[triangle.length - 1];
    const currRow = [1];
    for (let j = 0; j < i - 1; j++) {
      currRow.push(prevRow[j] + prevRow[j + 1]);
    }
    currRow.push(1);
    triangle.push(currRow);
  }
  return triangle;
}
const rows = 5;
console.log("Pascal's Triangle:");
for (const row of generatePascalsTriangle(rows)) {
  console.log(row);
}
