class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const head = new ListNode();
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);
// const node4 = new ListNode(4);
// const node5 = new ListNode(5);
// const node6 = new ListNode(5);
// const tail = new ListNode(7);
// head.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;
// node4.next = tail;

var reverseList = function (head) {
  let prev = null
  let cur = head
  let next = null
  while(cur !== null){
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
};
console.log(`reverseList([1,2,3,4,5])`, reverseList(head));
