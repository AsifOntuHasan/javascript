const n = 5;
for (let i = 0; i < n; i++) {
  console.log(' '.repeat(n - i - 1) + '*'.repeat(i + 1));
}
for (let i = n - 1; i > 0; i--) {
  console.log(' '.repeat(n - i) + '*'.repeat(i));
}
