ссылка на задачу 

https://leetcode.com/problems/remove-linked-list-elements/


---
первый while для случая removeElements([7, 7, 7], 7)
```js
var removeElements = function (head, value) {
    let temp = head;
    
    while (head) {
      if(head.val === value){
        head = head.next
      } else break
    }
    
    while (temp && temp.next) { 
      if(temp.next.val === value) {
        temp.next = temp.next.next
      } else {
        temp = temp.next
      }
    }
    return head;
};
```
---

```js


```
