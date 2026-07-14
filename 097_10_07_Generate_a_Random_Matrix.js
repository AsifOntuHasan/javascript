const rows = 3;
const cols = 3;
const randomMatrix = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => Math.random())
);
console.log("Random matrix:");
for (const row of randomMatrix) console.log(row);
