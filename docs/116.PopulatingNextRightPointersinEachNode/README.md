ссылка на задачу 

https://leetcode.com/problems/populating-next-right-pointers-in-each-node/


---
```js
const connect = function(root) {
  if(root === null || root.left === null) {
    return root
  }
  root.left.next = root.right
  root.right.next = root.next ? root.next.left : null
  connect(root.left)
  connect(root.right)
  return root
};
```
---

```js


```
