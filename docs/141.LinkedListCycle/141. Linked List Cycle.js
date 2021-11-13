class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const head = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);
// const node5 = new ListNode(3);
// const node6 = new ListNode(2);
// const tail = new ListNode(1);
head.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;
// node5.next = node6;
// node6.next = tail;

var hasCycle = function(head) {
  let fast=head, slow=head;
  while(fast !== null && fast.next !== null && fast.next.next !== null) {
      slow = slow.next
      fast = fast.next.next
      if(fast === slow) {
          return true
      }
  }
  return false
};

