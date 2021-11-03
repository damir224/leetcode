const task1 = (n) => {
  if (n === 0) {
    return 0;
  }
  const exeptLast = task1(Math.floor(n / 10));
  const curDigit = n % 10;
  return exeptLast + curDigit
}

console.log(`task1(1234)`, task1(1234))
