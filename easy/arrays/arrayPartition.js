// * link to the problem - https://leetcode.com/problems/array-partition/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sortedArr = nums.sort((a, b) => a - b);

  let maximizedSum = 0;

  for (let i = 0; i < sortedArr.length; i = i + 2) {
    maximizedSum += sortedArr[i];
  }

  return maximizedSum;
};
