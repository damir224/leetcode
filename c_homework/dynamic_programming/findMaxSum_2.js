const arr = [3, 1, 6, 7, 4, 5, 1];
const findMaxSum = (arr) => {
  arr[1] = Math.max(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i] + arr[i - 2]);
  }
  return arr.at(-1);
};
console.log('findMaxSum(arr)', findMaxSum(arr));
