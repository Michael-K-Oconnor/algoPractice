// Stack Min
// Create stack with push, pop, and min methods
// All methods should be O(1) time

class Stack {
  constructor() {
    this.storage = [];
    this.minimums = [];
  }

  push(value) {
    this.storage.push(value);
    if (this.storage.length === 1) {
      this.minimums.push(value);
    } else {
      this.minimums.push(
        Math.min(value, this.minimums[this.minimums.length - 1])
      );
    }
  }

  pop() {
    this.minimums.splice(this.storage.length - 1, 1);
    return this.storage.splice(this.storage.length - 1, 1);
  }

  min() {
    return this.minimums[this.minimums.length - 1];
  }
}

let stack = new Stack();
stack.push(3);
stack.push(2);
console.log(stack.min());
stack.pop();
console.log(stack.min());
