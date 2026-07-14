function powerSet(s) {
  const result = [[]];
  for (const elem of s) {
    const len = result.length;
    for (let i = 0; i < len; i++) {
      result.push([...result[i], elem]);
    }
  }
  return result;
}
const inputSet = [1, 2, 3];
console.log("Power set:", powerSet(inputSet));
