ссылка на задачу 

https://leetcode.com/problems/remove-nth-node-from-end-of-list/


---

```js
const removeNthFromEnd = function(head, n) {
  let cur=head, temp = head;
  while(n--){
    temp=temp.next
  }
  while(temp && temp.next){
    cur=cur.next
    temp=temp.next
  }
  if(!temp){
    head=head.next
  } else {
    cur.next = cur.next ? cur.next.next : null
  }
  return head
};

```

