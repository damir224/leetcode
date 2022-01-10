function solution(number) {
  return number < 0
    ? 0
    : new Array(number).fill(number).reduce((a, _c, i) => {
        if (i % 3 === 0 || i % 5 === 0) {
          return (a += i);
        }
        return a;
      }, 0);
}
// function solution(number){
//   let a = []
//   for(let i = 0; i< number; i++){
//     if(i % 3 === 0 || i % 5 === 0) {
//       a.push(i)
//     }
//   }
//   return a?.reduce((a,b)=>a+b, 0)
// }

console.log(`solution(10)`, solution(10)); // 23
