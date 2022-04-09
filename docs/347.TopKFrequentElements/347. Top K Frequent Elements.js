const topKFrequent = (nums, k) =>
  Object.entries(
    nums.reduce((acc, cur) => {
      acc[cur] = (acc[cur] ?? 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, cur) => {
      if (k > 0) {
        acc.push(+cur[0]);
      }
      k--;
      return acc;
    }, []);

console.log(
  'topKFrequent([1,1,1,2,2,3], 2)',
  topKFrequent([1, 1, 1, 2, 2, 3], 2)
); // [1,2]
console.log('topKFrequent([1], 1)', topKFrequent([1], 1)) // [1]
