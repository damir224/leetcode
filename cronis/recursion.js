const task1 = (n) => {
  if (n === 0) {
    return 0;
  }
  const exeptLast = task1(Math.floor(n / 10));
  // console.log(`exeptLast`, exeptLast)
  const curDigit = n % 10;
  console.log(`curDigit`, curDigit)
  return exeptLast + curDigit
}

task1(1234)
