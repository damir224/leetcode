ссылка на задачу 

https://leetcode.com/problems/merge-two-sorted-lists/


---

```js
var mergeTwoLists = function(l1, l2) {
  let mergedLL = new ListNode()
  let temp = mergedLL
  while (l1 || l2) {
    let val1 = l1 ? l1.val : Number.MAX_VALUE;
    let val2 = l2 ? l2.val : Number.MAX_VALUE;
    if(val1 < val2) {
      temp.next = l1
      l1 = l1?.next
    } else {
      temp.next = l2
      l2 = l2?.next
    }
    temp = temp?.next
  }
  return mergedLL.next
};
```

