function linearRegression(X, y) {
  const n = X.length;
  const p = X[0].length;
  const xMean = Array(p).fill(0);
  const yMean = y.reduce((a, b) => a + b, 0) / n;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < p; j++) {
      xMean[j] += X[i][j];
    }
  }
  for (let j = 0; j < p; j++) xMean[j] /= n;
  const xDiff = X.map(row => row.map((v, j) => v - xMean[j]));
  const yDiff = y.map(v => v - yMean);
  let xtx = Array.from({ length: p }, () => Array(p).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < p; k++) {
        xtx[j][k] += xDiff[i][j] * xDiff[i][k];
      }
    }
  }
  let xty = Array(p).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < p; j++) {
      xty[j] += xDiff[i][j] * yDiff[i];
    }
  }
  function invert2x2(m) {
    const det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
    return [[m[1][1] / det, -m[0][1] / det], [-m[1][0] / det, m[0][0] / det]];
  }
  const xtxInv = invert2x2(xtx);
  const coef = Array(p).fill(0);
  for (let j = 0; j < p; j++) {
    for (let k = 0; k < p; k++) {
      coef[j] += xtxInv[j][k] * xty[k];
    }
  }
  const intercept = yMean - coef.reduce((s, c, i) => s + c * xMean[i], 0);
  return { coef, intercept };
}
const X = [[1, 1], [1, 2], [2, 2], [2, 3]];
const y = X.map(row => row[0] * 1 + row[1] * 2 + 3);
const result = linearRegression(X, y);
console.log("Coef:", result.coef);
console.log("Intercept:", result.intercept);
