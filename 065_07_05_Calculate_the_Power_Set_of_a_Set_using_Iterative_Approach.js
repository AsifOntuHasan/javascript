function powerSetIterative(s) {
  const powerSet = [[]];
  for (const elem of s) {
    const len = powerSet.length;
    for (let i = 0; i < len; i++) {
      powerSet.push([...powerSet[i], elem]);
    }
  }
  return powerSet;
}
const inputSet = [1, 2, 3];
console.log("Power set (iterative):", powerSetIterative(inputSet));
