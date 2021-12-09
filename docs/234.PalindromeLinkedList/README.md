ссылка на задачу 

https://leetcode.com/problems/palindrome-linked-list/


---
```js
var isPalindrome = function(head) {
  let temp = head
  const stack = [];
  while(temp !== null){
    stack.push(temp)
    temp = temp.next
  }
  temp = head
  while(temp !== null){
    if(temp.val !== stack.pop().val){
        return false
    }
    temp = temp.next
  }
  return true
};
```
---

```js
var isPalindrome = function(head) {
  let fast = head, slow = head, stack = []
  while(fast !== null && fast.next !== null) {
    stack.push(slow)
    fast = fast.next.next
    slow = slow.next  
  }
  if(fast) {slow = slow.next}
  while(stack.length) {
    if(stack[stack.length-1].val !== slow.val){ return false}
    stack.pop()
    slow = slow.next  
  }
  return true
};
```
---
hard to understand answer

```js
var isPalindrome = function(head) {
  let slow = head, fast = head, prev, temp;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  prev = slow;
  slow = slow.next;
  prev.next = null;
  while (slow != null) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  fast = head;
  slow = prev;
  while (slow != null) {
    if (fast.val != slow.val) return false;
    fast = fast.next;
    slow = slow.next;
  }
  return true;
};

```
