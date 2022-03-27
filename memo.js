// const memoPow = (el) => {
//   const cash = {};
//   return el => {
//     if(!cash[el]){
//       cash[el] = el**2
//       console.log('cash empty',cash[el])
//     }
//     return cash[el]
//   }
// }

// const pow = memoPow()

// console.log('pow(3)', pow(3))
// console.log('pow(3)', pow(3))
let count = 0
const memoFibo = (num,cash = {}) => {
  count++
  console.log('cash', cash)
  console.log('num', num)
  if(num) return num
  return num => {
    if(!cash[num]){
      cash[num] = memoFibo(num-1, cash) * num
    } else {
    }
    return cash[num]
  }
}

const fibo = memoFibo()
console.log('count', count)
console.log('fibo(50)', fibo(50))
console.log('count', count)
console.log('ANOTHER')
console.log('fibo(50)', fibo(50))
console.log('count', count)
