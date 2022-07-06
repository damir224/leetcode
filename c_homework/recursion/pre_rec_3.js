const reverseToString = (n) => {
  if (n === 0) {
    return '';
  }
  const lastNum = n % 10;
  const curNum = (n - lastNum) / 10;
  const num = reverseToString(curNum);

  return lastNum + `${num && ', '}` + num;
};

console.log('result: ', reverseToString(29641)); // 1, 4, 6, 9, 2
