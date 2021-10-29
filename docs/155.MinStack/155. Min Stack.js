var MinStack = function () {
  this.elements = [];
  this.minElements = [];
};

MinStack.prototype.push = function (val) {
  this.elements.push(val);
  if (this.minElements.length === 0) {
    this.minElements.push(val);
  } else if (this.minElements[this.minElements.length - 1] >= val) {
    this.minElements.push(val);
  }
};
MinStack.prototype.pop = function () {
  if (
    this.minElements[this.minElements.length - 1] ===
    this.elements[this.elements.length - 1]
  ) {
    this.minElements.pop();
  }
  this.elements.pop();
};
MinStack.prototype.top = function () {
  return this.elements[this.elements.length - 1];
};
MinStack.prototype.getMin = function () {
  return this.minElements[this.minElements.length - 1];
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(`minStack.getMin()`, minStack.getMin()); // return -3
minStack.pop();
console.log(`minStack.top()`, minStack.top()); // return 0
console.log(`minStack.getMin()`, minStack.getMin()); // return -2
