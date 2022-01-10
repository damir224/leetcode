// var add = function(n) {
//   const f = x => add(n + x)
//   f.valueOf = () => n
//   return f;
// }
// console.log(add(1)(2)(3))
// console.log(add(1)(2)(3).valueOf())
// console.log(add(1)(2)(3) == '6')
// console.log(add(1)(2)(3) === '6')

// // console.log(`add(1)(2)(3)(4)`, add(1)(2)(3)(4)) // 10
// // console.log(`add(1)(2)(3)(4)(5)`, add(1)(2)(3)(4)(5)) // 15

// // var addTwo = add(2);
// // console.log(`addTwo`, addTwo) // 2
// // console.log(`addTwo + 5`, addTwo + 5) // 7
// // console.log(`addTwo(3)`, addTwo(3)) // 5
// // console.log(`addTwo(3)(5)`, addTwo(3)(5)) // 10
// const check = (str) => {
//   const one = []
//   const dict = {
//       '(': ')',
//       '{': '}',
//       '[': ']',
//   }
//   str.forEach(el=>{
//     const len = one.length-1
//     if(dict[el]){
//         one.push(el)
//     } else if(one[len] === el) {
//         one.pop()
//     } else {
//         return false
//     }
// })
//   return one.length === 0
// }

check('(())') // true
check('()[]{}') // true
check('([)]') // false
check('(]') // false

