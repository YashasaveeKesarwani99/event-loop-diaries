// link to the problem - https://leetcode.com/problems/smallest-range-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  let opsRes = nums[nums.length - 1] - k - (nums[0] + k);

  return opsRes >= 0 ? opsRes : 0;
};
