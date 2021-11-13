class ListNode {
  constructor(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

const head = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
const tail = new ListNode(6)
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = tail;

const task2 = (ls, n) => {
  let temp = ls, test, tail = ls, head = ls;
  while (temp) {
    if(temp.next.val === n){
      test = temp.next
    } else {
      temp = temp.next;
    }
  }
  let temp = ls;
  while (temp) {
    if(temp.next.val === n){
      test = temp.next
      break;
    } else {
      temp = temp.next;
    }
  }
  return 1
}

console.log(`task2(head, 4)`, task2(head, 4))
// const task1 = (ls, n) => {
//   let temp = head,count = 0;
//   while(temp){
//     if(temp.val > n) {
//       ++count
//     }
//     temp = temp.next;
//   }
//   return count
// }

// console.log(`task1(head, 2)`, task1(head, 2))
