
// WIP
const factorial = (num) => {
  let sum=1;
  for (let i = 1; i <= num; i++) {
    sum *= i
    
  }
  return sum
}
const modifyArr = (arr) =>
  arr.reduce((acc, cur) => {
    if (cur - 1 > 0) {
      acc.push(cur - 1);
    }
    return acc;
  }, []);

const numberOfSubstrings = function(s) {
  let A = B = C = res = 0;
  for(i=0,j=0;i<s.length;i++){
      if(s[i]==="a") A++;
      if(s[i]==="b") B++;
      if(s[i]==="c") C++;
      while(A&&B&&C){
        console.log('s.length', s.length)
        console.log('i', i)
        console.log('s.length-i', s.length-i)
          res+=s.length-i;
          console.log('res', res)
          console.log('---');
          if(s[j]==="a") A--;
          if(s[j]==="b") B--;
          if(s[j]==="c") C--;
          j++;       
      }}
  return res;
  // const obj = {}
  // for (let i = 0; i < s.length; i++) {
  //   obj[s[i]] = (obj[s[i]] || 0) +1
  // }
  // const arr = Object.values(obj)
  // if(arr.length !== 3) return false
  // let arr1 = modifyArr(arr)
  // let sum = 1;
  // while(arr1.length > 2){
  //   console.log('arr1', arr1)
  //   // console.log('factorial(arr1.length)', factorial(arr1.length))
  //   sum += factorial(arr1.length) + arr1.length
  //   arr1 = modifyArr(arr1)
  //   console.log('arr1', arr1)
  //   // console.log('arr1', arr1)
  //   console.log('sum', sum)
  // }
  // // const sum = arr1.reduce((a,b)=>b>0? a+(b-1) : , 0)
  // // const fac = factorial(sum)
  // if(arr1.length > 0) {
  //   sum += arr1.pop()
  // }
  // return sum
};

// {a:3,b:2,c:2} -> {a:2,b:1,c:1} 1 + 3! + 3
// {a:2,b:2,c:2} -> {a:1,b:1,c:1} 1 + 3! + 3
// {a:3,b:1,c:1} -> {a:2,b:0,c:0}
// {a:2,b:4,c:1} -> {a:1,b:3,c:0}

// console.log('numberOfSubstrings("abcabc")', numberOfSubstrings("abcabc")) // 10
// console.log('numberOfSubstrings("aaacb")', numberOfSubstrings("aaacb")) // 3
console.log('numberOfSubstrings("aaacb")', numberOfSubstrings("acbbb")) // 3
// console.log('numberOfSubstrings("abc")', numberOfSubstrings("abc")) // 1
// console.log('numberOfSubstrings("ababbbc")', numberOfSubstrings("ababbbc")) // 3
