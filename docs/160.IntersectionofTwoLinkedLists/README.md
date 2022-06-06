ссылка на задачу 

https://leetcode.com/problems/intersection-of-two-linked-lists/


---

```js
const getIntersectionNode = function (headA, headB) {
  let s1 = 0;
  let s2 = 0;
  let temp1 = headA;
  let temp2 = headB;
  while (temp1 || temp2) {
    if (temp1) {
      s1++;
      temp1 = temp1.next;
    }
    if (temp2) {
      s2++;
      temp2 = temp2.next;
    }
  }

  temp1 = headA;
  temp2 = headB;
  while (s1 !== s2) {
    if (s1 > s2) {
      s1--;
      temp1 = temp1.next;
    }

    if (s1 < s2) {
      s2--;
      temp2 = temp2.next;
    }
  }
  while (temp1 || temp2) {
    if (temp1 === temp2) {
      return temp1;
    }
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  return null;
};
```
---

```js

```
---
