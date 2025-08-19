// link to the problem - https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let count = 0;
  let stacky = [];
  let averageMaxxer = -Infinity;

  for (let i = 0; i < nums.length + 1; ) {
    if (count < k) {
      stacky.push(nums[i]);
      count++;
      i++;
    } else {
      let avereju = stacky.reduce((acc, num) => acc + num, 0) / k;

      if (averageMaxxer < avereju) {
        averageMaxxer = avereju;
      }

      count--;
      stacky.shift();
    }
  }

  return averageMaxxer;
};
