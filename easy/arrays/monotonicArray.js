// link to the problem - https://leetcode.com/problems/monotonic-array/?envType=study-plan&id=level-1

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let isIncreasingMonotonic = true;
  let isDecreasingMonotonic = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      isIncreasingMonotonic = false;
      break;
    }
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      isDecreasingMonotonic = false;
      break;
    }
  }

  if (!isIncreasingMonotonic && !isDecreasingMonotonic) {
    return false;
  }

  return true;
};
