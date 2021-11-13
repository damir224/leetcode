class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const head = new ListNode(1)
const b = new ListNode(1)
const c = new ListNode(1)
head.next = b;
b.next = c
function getDecimalValue(head){
  console.log(`head`, head)
  let temp = head;
  let res = 0
  while(temp) {
    res = (res * 2) + temp.val
    temp = temp.next
  }
  return res
};

console.log(`getDecimalValue(head)`, getDecimalValue(head))

console.log(`a`, a)
