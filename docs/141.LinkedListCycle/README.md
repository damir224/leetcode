ссылка на задачу 

https://leetcode.com/problems/linked-list-cycle/


---
```js
var hasCycle = function(head) {
    let fast=head, slow=head;
    while(fast !== null && fast.next !== null && fast.next.next !== null) {
      slow = slow.next
      fast = fast.next.next
      if(fast === slow) {
          return true
      }
    }
    return false
};
```
---

```js
var hasCycle = function(head) {
  if(!head || !head.next) return false
  let fast=head, slow=head;
  
  while(fast?.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true    
    }
  }
  
  return false
};
```
