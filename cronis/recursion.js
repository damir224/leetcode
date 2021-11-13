// function nonRepeatingChar(word) { 
//   const newW = word.split(''); 
//   for (let i = 0; i < word.length; i++) { 
//     newW.splice(i, 1) 
//     console.log(`newW`, newW)
//     if (!newW.includes(word[i])) { return word[i]; } 
//     if()
//   } return false; 
// } 
 
// console.log(nonRepeatingChar('wallawagllaingbang'))
// function nonRepeatingChar(word) {
//   for (let i = 0; i < word.length; i++) {
//     if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
//       return word[i];
//     }
//   }
//   return false;
// } 
 
// console.log(nonRepeatingChar('wallawagllaingbang'))

// function task4(str, s) {
// const l = str.length-1;
//   if(l===0) {return false}
//   if(l===1) {return false}
//   if(l===2) {return str[0]=== str[1]}
//   if(s === Math.floor(l/2)) {return true}
//   return str[s]=== str[l-s] && task4(str, s+1)
// }
// console.log(`task4('abba', 0)`, task4('abba', 0)) // true
// console.log(`task4('abcba', 0)`, task4('abcba', 0)) // true

// function task3(n) {
//   if(n%10 === 0) {return ""}
//   const a = Math.floor(n/10)
//   if(task3(a).length <=0) {return n%10}
//   return `${n%10}, ${task3(a)}`
  
// }
// console.log(`task3(29641)`, task3(29641)) // "1, 4, 6, 9, 2"

// const task2Su = (arr, start, end) => {
//   if(end === 0) {return 1}
//   else if(end === 1) {return arr[0]}
//   else if(end === 2) {return Math.max(arr[0], arr[1])}
//   console.log(`end`, end)
//   return Math.max(arr[end-1], task2Su(arr, start, end - 1)) // 22
// }
// console.log(`task2Su([1, 4, 22, -1], 0, 4)`, task2Su([1, 4, 22, -1], 0, 4))

// const task2 = (arr, n) => {
//   if(n==1) {return arr[0]}
//   let maxEl = task2(arr, n-1)
//   return maxEl > arr[n-1] ? maxEl : arr[n-1]
// }
// console.log(`task2([1, 4, 22, -1], 4)`, task2([1, 4, 22, -1], 4)) // 22


// const task1 = (n) => {
//   if (n === 0) {
//     return 0;
//   }
//   const exeptLast = task1(Math.floor(n / 10));
//   const curDigit = n % 10;
//   return exeptLast + curDigit
// }
// const task1 = (n) => {
//   if(n===0) {return 0}
//   return n % 10 + task1(Math.floor(n/10))
// }
// console.log(`task1(1234)`, task1(1234)) // 10
