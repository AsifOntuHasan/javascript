function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}
const arr = [4, 2, 1, 7, 5];
const x = 7;
const result = linearSearch(arr, x);
if (result !== -1) console.log(`Element found at index ${result}`);
else console.log("Element not found");
