const list1 = [1, 3, 5, 7];
const list2 = [2, 4, 6, 8];
const mergedList = [...list1, ...list2].sort((a, b) => a - b);
console.log("Merged and sorted list:", mergedList);
