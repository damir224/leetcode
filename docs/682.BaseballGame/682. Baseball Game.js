var calPoints = function (ops) {
  const arr = [+ops[0]];
  for (let i = 1; i < ops.length; i++) {
    if (ops[i] === '+') {
      arr.push(+arr[arr.length-1] + +arr[arr.length-2]);
    }
    else if (ops[i] === 'D') {
      arr.push(arr[arr.length-1] * 2);
    }
    else if (ops[i] === 'C') {
      arr.pop()
    }
    else {arr.push(+ops[i]);}
  }
  return arr.reduce((a,b)=>a+b);
};

console.log(`calPoints(["5","2","C","D","+"])`, calPoints(["5","2","C","D","+"])); // 30
console.log(`calPoints(["5","-2","4","C","D","9","+","+"])`, calPoints(["5","-2","4","C","D","9","+","+"])); // 27
