class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }
}
const counter = new Counter();
counter.increment();
counter.increment();
console.log("Count:", counter.count);
counter.decrement();
console.log("Count:", counter.count);
counter.reset();
console.log("Count:", counter.count);
