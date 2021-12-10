ссылка на задачу 

https://leetcode.com/problems/remove-duplicates-from-sorted-list/


---
```js
var deleteDuplicates = function(head) {
    let temp = head
    
    while(temp) {
      if(temp.next !== null && temp.val == temp.next.val) {
        temp.next = temp.next.next
      } else {
        temp = temp.next
      }
    }
  return head
};
```
---

```js


```
