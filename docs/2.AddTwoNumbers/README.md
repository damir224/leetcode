ссылка на задачу 

https://leetcode.com/problems/add-two-numbers/

---

```js
const addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0), cur = dummyHead;
    let n = 0
    while(l1 !== null || l2 !== null){
      const a = l1 !== null ? l1.val : 0
      const b = l2 !== null ? l2.val : 0
      const sum = a + b + n;
      n = (sum - (sum%10)) / 10
      cur.next = new ListNode(sum % 10)
      l1 = l1 !== null ? l1.next : null
      l2 = l2 !== null ? l2.next : null
      cur=cur.next
    }
  if (n > 0) {
        cur.next = new ListNode(n);
    }
  return dummyHead.next
};
```
---

