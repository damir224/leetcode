function countIf(head, p) {
  let temp = head, count=0;
  while (temp) {
    if(p(temp.data)){
      count++
    }
    temp = temp.next
  }
  return count;
}
