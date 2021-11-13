ссылка на задачу 

https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/


---
```js
function getDecimalValue(head){
  console.log(`head`, head)
  let temp = head;
  let res = 0
  while(temp) {
    res = (res * 2) + temp.val
    temp = temp.next
  }
  return res
};
```
---

```js

```
