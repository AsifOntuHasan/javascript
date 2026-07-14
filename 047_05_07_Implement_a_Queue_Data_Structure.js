class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.unshift(item);
  }
  dequeue() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Dequeued item:", queue.dequeue());
console.log("Queue is empty:", queue.isEmpty());
