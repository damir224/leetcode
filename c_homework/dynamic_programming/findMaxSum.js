const arr = [3, 1, 6, 7, 4, 5, 1];
const findMaxSum = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 2]) {
      arr[i] = Math.max(arr[i - 1], arr[i] + arr[i - 2]);
    } else {
      arr[i] = Math.max(arr[i - 1], arr[i]);
    }
  }
  return arr.at(-1);
};
console.log('findMaxSum(arr)', findMaxSum(arr));
