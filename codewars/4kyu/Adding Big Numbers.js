function add(a, b) {
  const arr = []
  const aArr = a.split('')
  const bArr = b.split('')
  const big = aArr.length < bArr.length ? bArr.length : aArr.length
  let num = 0;
  for(let i = 0; i < big; i++) {
    let n = +(aArr[aArr.length-1-i] ? aArr[aArr.length-1-i]: 0) + +(bArr[bArr.length-1-i]? bArr[bArr.length-1-i]: 0)
    let dec = n - 10 >= 0 ? n - 10 : n
    if(dec + num === 10) {
      arr.push(0)
      n++
    } else {
      arr.push(dec + num)
    }
    num = n - 10 >= 0 ? 1 : 0
  }
  num && arr.push(num)
  return arr.reverse().join('')
}


// console.log('add(1)', add('1', '1')) // 2
// console.log('add(123)', add('123', '456')) // 579
// console.log('add(888, 222)', add('888', '222')) // 1110
console.log(add('63829983432984289347293874', '90938498237058927340892374089')); // 91002328220491911630239667963


// arr [
//   3, 6, 9, 7, 6, 6, 9, 3, 2,
//   0, 2, 6, 1, 1, 9, 1, 9, 4,
//   0, 2, 2, 8, 2, 3, 2, 0, 9,
//   0, 9
// ]
