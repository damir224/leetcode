/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const dict = {};
  const res = [];
    for (let num of nums1) {
      dict[num] = dict[num] ? ++dict[num] : 1
    }
    for (let num of nums2) {
      console.log(`!!dict[num]`, !!dict[num])
      if(dict[num]) {
        console.log(`dict[num]`, dict[num])
        res.push(num)
        dict[num]--
      }
    }
  return res
};

console.log(`intersect([1,2,2,1], [2,2,2])`, intersect([1, 2, 2, 1], [2, 2,2,2,2])); // [2,2]
console.log(
  `intersect([4,9,5], [9,4,9,8,4])`,
  intersect([4, 9, 5], [9, 4, 9, 8, 4])
); // [4,9]
