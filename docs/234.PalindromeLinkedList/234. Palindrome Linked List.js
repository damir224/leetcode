// var isPalindrome = function(head) {
//   let temp = head
//   const stack = [];
//   while(temp !== null){
//       stack.push(temp)
//       temp = temp.next
//   }
//   temp = head
//   while(temp !== null){
//       if(temp.val !== stack.pop().val){
//           return false
//       }
//       temp = temp.next
//   }
//   return true
// };

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(3);
const node6 = new ListNode(2);
const tail = new ListNode(1);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = tail;

var isPalindrome = function (head) {
  let slow = head,
    fast = head,
    prev,
    temp;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  prev = slow;
  slow = slow.next;
  prev.next = null;
  while (slow != null) {
    console.log(`slow`, slow)
    temp = slow.next;
    slow.next = prev;
    console.log(`slow`, slow)
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
console.log(`isPalindrome(head)`, isPalindrome(head));
