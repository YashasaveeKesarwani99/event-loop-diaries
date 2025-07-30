// * link to the problem - https://leetcode.com/problems/3sum-closest/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let numsArr = nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < numsArr.length - 2; i++) {
    let j = i + 1;
    let k = numsArr.length - 1;

    while (j < k) {
      let currentSum = numsArr[i] + numsArr[j] + numsArr[k];
      let currentDiff = Math.abs(currentSum - target);

      if (currentDiff < minDiff) {
        closestSum = currentSum;
        minDiff = currentDiff;
      }

      if (currentSum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return closestSum;
};
