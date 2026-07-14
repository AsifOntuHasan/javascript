function binarySearchRecursive(arr, low, high, x) {
  if (high >= low) {
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] === x) return mid;
    else if (arr[mid] > x) return binarySearchRecursive(arr, low, mid - 1, x);
    else return binarySearchRecursive(arr, mid + 1, high, x);
  }
  return -1;
}
const arr = [2, 3, 4, 10, 40];
const x = 10;
const result = binarySearchRecursive(arr, 0, arr.length - 1, x);
if (result !== -1) console.log(`Element found at index ${result}`);
else console.log("Element not found");
