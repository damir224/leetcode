ссылка на задачу 

https://leetcode.com/problems/middle-of-the-linked-list/


---
```js
var middleNode = function(head) {
  let fast = head, slow = head
  while (fast !== null && fast.next !== null){
    if(fast.next == null) {return slow}
    if(fast.next.next == null) {return slow.next}
    fast = fast.next.next
    slow = slow.next
  }
  return slow
};
```
---

```js
var middleNode = function(head) {
    let fast = head, slow = head
    while (fast !== null && fast.next !== null){
      fast = fast.next.next
      slow = slow.next
    }
  return slow
};
```
