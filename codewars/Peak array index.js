
// https://www.codewars.com/kata/5a61a846cadebf9738000076/train/javascript
function peak(arr){
  let sum = arr.reduce((a,b)=>a+b),  leftSum = 0, answer = -1;
  arr.forEach((e,i)=>{
    sum -= e
    if (sum === leftSum) {
      answer = i
    }
    leftSum += e
  })
  return answer
}

peak([1,2,3,5,3,2,1]) // 3
peak([1,12,3,3,6,3,1]) // 2
peak([10,20,30,40]) // -1
