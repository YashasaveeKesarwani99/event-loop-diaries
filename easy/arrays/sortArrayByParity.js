// link to the problem - https://leetcode.com/problems/sort-array-by-parity/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const oddArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      oddArr.push(i);
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] % 2 === 0) {
      if (oddArr.length) {
        let index = oddArr[0];
        if (index < i) {
          [nums[i], nums[index]] = [nums[index], nums[i]];
          oddArr.shift();
        }
      } else {
        break;
      }
    }
  }

  return nums;
};
