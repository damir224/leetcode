const digitsSum = (n) => {
  if (n == 0) return 0;
  const currentDigit = n % 10;
  const digitsSum_except_last = digitsSum((n - currentDigit) / 10);
  return digitsSum_except_last + currentDigit;
};


const sum = (num, result = 0) => {
  if (num < 10) {
    return result + num;
  }
  const edge = num % 10;
  const curNum = (num - edge) / 10;
  result += edge;
  return sum(curNum, result);
};

// console.log('sum(1234)', sum(1234)); // 10
