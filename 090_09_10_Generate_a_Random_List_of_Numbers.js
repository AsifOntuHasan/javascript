const randomList = [];
while (randomList.length < 5) {
  const num = Math.floor(Math.random() * 99) + 1;
  if (!randomList.includes(num)) randomList.push(num);
}
console.log("Random list:", randomList);
