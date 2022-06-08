const merge = function (nums1, m, nums2, n) {
  let l = m - 1,
    r = n - 1;
  for (let lastIndex = m + n - 1; lastIndex >= 0; lastIndex--) {
    const curL = nums1[l];
    const curR = nums2[r];
    if (r < 0) {
      return nums1;
    }
    nums1[lastIndex] = curL > curR ? nums1[l--] : nums2[r--];
  }
  return nums1;
};

console.log(1, merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(2, merge([1], 1, [], 0)); // [1]
console.log(3, merge([0], 0, [1], 1)); // [1]
console.log(4, merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)); // [1,2,3,4,5,6]
console.log(5, merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5)); // [1,2,3,4,5,6]
console.log(6, merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); // [-1,0,0,1,2,2,3,3,3]
console.log(7, merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6)); // [-1,0,0,1,1,1,2,3,3]
