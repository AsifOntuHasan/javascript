const listOfDicts = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 }
];
const sortedList = listOfDicts.slice().sort((a, b) => a.age - b.age);
console.log("Sorted list of dictionaries:", sortedList);
