const fibonacci = (num) => {
  const memo = Array(num + 1).fill(0);
  return memoFibonacci(num, memo);
};
const memoFibonacci = (num, memo) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  if (memo[num] === 0) {
    memo[num] = memoFibonacci(num - 1, memo) + memoFibonacci(num - 2, memo);
  }
  return memo[num];
};

console.log('fibonacci(9)', fibonacci(9)); // 34
