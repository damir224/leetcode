ссылка на задачу 

https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

---

```js
const swapNodes = function(head, k) {
  let left, temp=head, count = 0, right;
  while(temp) {
    count++
    if(count === k) {
      left = temp
    }
    temp = temp.next
  }
  let rightIndex = count - k + 1;
  temp=head;
  count = 0;
  while(temp) {
    count++
    if(count === rightIndex) {
      right = temp
    }
    temp = temp.next
  }
  temp = right.val
  right.val = left.val
  left.val = temp
  return head
};
```
---
