class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Popped item:", stack.pop());
console.log("Stack is empty:", stack.isEmpty());
