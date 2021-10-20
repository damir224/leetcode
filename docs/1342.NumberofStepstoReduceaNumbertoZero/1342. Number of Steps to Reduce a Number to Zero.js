var numberOfSteps = function(num) {
  let count = 0
  while (num > 0) {
    if(num & 1) {
      num = num - 1
      count++
    } else {
      num = num >> 1
      count++
    }
  }
  return count
};

console.log(`numberOfSteps(14)`, numberOfSteps(14)) // 6
console.log(`numberOfSteps(8)`, numberOfSteps(8)) // 4
console.log(`numberOfSteps(123)`, numberOfSteps(123)) // 12

console.log(`(1 >>> 0).toString(2)`, (1 >>> 0).toString(2))
console.log(`(2 >>> 0).toString(2)`, (2 >>> 0).toString(2))
console.log(`(3 >>> 0).toString(2)`, (3 >>> 0).toString(2))
console.log(`(4 >>> 0).toString(2)`, (4 >>> 0).toString(2))
console.log(`(5 >>> 0).toString(2)`, (5 >>> 0).toString(2))
console.log(`(6 >>> 0).toString(2)`, (6 >>> 0).toString(2))
console.log(`(7 >>> 0).toString(2)`, (7 >>> 0).toString(2))
console.log(`(123 >>> 0).toString(2)`, (123 >>> 0).toString(2))
// 0000
// 0001
// 0010
// 0011
// 0100
// 0101
// 0110
// 0111
// 1000
