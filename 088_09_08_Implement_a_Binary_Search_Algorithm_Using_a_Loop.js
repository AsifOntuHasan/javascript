function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < x) low = mid + 1;
    else if (arr[mid] > x) high = mid - 1;
    else return mid;
  }
  return -1;
}
const arr = [2, 3, 4, 10, 40];
const x = 10;
const result = binarySearch(arr, x);
if (result !== -1) console.log(`Element found at index ${result}`);
else console.log("Element not found");
