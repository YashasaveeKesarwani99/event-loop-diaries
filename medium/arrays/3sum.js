// * link to the problem - https://leetcode.com/problems/3sum/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  let numsSorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < numsSorted.length; i++) {
    if (i > 0 && numsSorted[i] === numsSorted[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = numsSorted.length - 1;

    while (j < k) {
      let total = numsSorted[i] + numsSorted[j] + numsSorted[k];

      if (total > 0) {
        k--;
      } else if (total < 0) {
        j++;
      } else {
        res.push([numsSorted[i], numsSorted[j], numsSorted[k]]);
        j++;

        while (numsSorted[j] === numsSorted[j - 1] && j < k) {
          j++;
        }
      }
    }
  }

  return res;
};
