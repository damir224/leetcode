ссылка на задачу 

https://leetcode.com/problems/reverse-linked-list/


---
stack
```js
var reverseList = function(head) {
  if (!head) return head;
  
  const stack = [];
  let temp = head;
  stack.push(temp.val);
  while (temp !== null && temp.next !== null) {
    temp = temp.next;
    stack.push(temp.val);
  }
  temp = head;
  while (stack.length !== 0) {
    temp.val = stack.pop();
    temp = temp.next;
  }
  return head;
};
```
---
iterative
```js
var reverseList = function (head) {
  let prev = null
  let cur = head
  let next = null
  while(cur !== null){
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
};
```
---
recursive
```js

```
