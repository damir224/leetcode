class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const head = new ListNode(7);
// const node2 = new ListNode(2);
const node3 = new ListNode(7);
const node4 = new ListNode(7);
// const node5 = new ListNode(7);
// const node6 = new ListNode(5);
const tail = new ListNode(7);
head.next = node3;
// node2.next = node3;
node3.next = node4;
// node4.next = node5;
// node5.next = node6;
node4.next = tail;

// var removeElements = function (head, val) {
//   if (!head) return head;

//   // while(head) {
//   //     if(head.val === val) {
//   //         head = head.next;
//   //     } else {
//   //         break;
//   //     }
//   // }

//   let curr = head;
//   while (curr && curr.next) {
//     if (curr.next.val === val) curr.next = curr.next.next;
//     else curr = curr.next;
//   }

//   return head;
// };
var removeElements = function (head, val) {
  if (!head) return head;

  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break
    }
  }
  let temp = head;
  while (temp && temp.next) {
    console.log(`temp`, temp)
    if (temp.next.val === val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
};

console.log(`removeElements(head, 7)`, removeElements(head, 7));
