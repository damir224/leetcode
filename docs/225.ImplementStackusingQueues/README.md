ссылка на задачу 

https://leetcode.com/problems/implement-stack-using-queues/


---
```js

var MyStack = function() {
    this.obj = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.obj.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.obj.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.obj[this.obj.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.obj.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```
---
