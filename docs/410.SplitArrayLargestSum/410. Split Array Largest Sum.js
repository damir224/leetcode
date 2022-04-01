// WIP


/** Explanation
 * 1. For given array we first find the minimum and maximum sum from which our result can be formed.
 *    Our answer will lie between this minimum and maximum value.
 *  - The minimum sum will be the maximum of array elements.
 *  - The maximum sum will be sum of every array elements.
 * 2. Now we will apply binary search on found min and max sum.
 * 3. For current mid(sum), we will check that if we can split the array for current mid(sum) or not for given numbers of m
 *  - The array can be split if sum of continous element of array is less than or equal to current sum (mid in our case)
 *  - We will also keep track of number of partitions needed for current sum(mid), if partitions exceeds "m" then we return false because we need only "m" partitions else we return true..
 * 4. If we succeed in finding the partition. We decrease the high value because we need to find the minimum largest sum. Also, we keep track of lowest possible sum for "m" partition. We will update it if we find sum lower than our current lowest sum.
 * 5. If we fail then it means that partition could not be made for current mid(sum) and we need to update the "low" to "mid + 1" and find out solution for sum more than our current sum.
 */

const minimumSubarraysRequired = (nums, maxSumAllowed) => {
  let currentSum = 0;
  let splitsRequired = 0;

  for (let element of nums) {
    // Add element only if the sum doesn't exceed maxSumAllowed
    if (currentSum + element <= maxSumAllowed) {
      currentSum += element;
    } else {
      // If the element addition makes sum more than maxSumAllowed
      // Increment the splits required and reset sum
      currentSum = element;
      splitsRequired++;
    }
  }

  // Return the number of subarrays, which is the number of splits + 1
  console.log('minimumSubarraysRequired', splitsRequired + 1)
  return splitsRequired + 1;
};
const splitArray = function (nums, m) {
  // Find the sum of all elements and the maximum element
  let sum = 0;
  let maxElement = 0;
  for (let element of nums) {
    sum += element;
    maxElement = Math.max(maxElement, element);
  }

  // Define the left and right boundary of binary search
  let left = maxElement;
  let right = sum;
  let minimumLargestSplitSum = 0;
  while (left <= right) {
    console.log('left', left);
    console.log('right', right);
    // Find the mid value
    let maxSumAllowed = Math.floor(left + (right - left) / 2);
    console.log('maxSumAllowed', maxSumAllowed);

    // Find the minimum splits. If splitsRequired is less than
    // or equal to m move towards left i.e., smaller values
    if (minimumSubarraysRequired(nums, maxSumAllowed) <= m) {
      right = maxSumAllowed - 1;
      minimumLargestSplitSum = maxSumAllowed;
    } else {
      // Move towards right if splitsRequired is more than m
      left = maxSumAllowed + 1;
    }
  }

  return minimumLargestSplitSum;
};

console.log('splitArray([7,2,5,10,8], 2)', splitArray([7, 2, 5, 10, 8], 2)); // 18
// console.log('splitArray([1,2,3,4,5], 2)', splitArray([1,2,3,4,5], 2)) // 9
// console.log('splitArray([1,4,4], 3)', splitArray([1,4,4], 3)) // 4
