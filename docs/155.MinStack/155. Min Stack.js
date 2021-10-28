var MinStack = function() {
  this.elements = [];
  this.minElements = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.elements.push(val)
  if(this.minElements.length === 0) {
    this.minElements.push(val)
  }
  if(this.minElements[this.minElements.length-1] > val) {
    this.minElements.push(val)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.elements.pop()
  if(this.minElements[this.minElements.length-1] === this.elements[this.elements.length-1]) {
    this.minElements.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.elements[this.elements.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minElements[this.minElements.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


 const minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 console.log(`minStack.getMin()`, minStack.getMin()); // return -3
 minStack.pop();
 console.log(`minStack.top()`, minStack.top())  // return 0
 console.log(`minStack.getMin()`, minStack.getMin()); // return -2

 