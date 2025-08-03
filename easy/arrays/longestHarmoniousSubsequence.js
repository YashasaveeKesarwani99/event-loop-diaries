// link to the problem - https://leetcode.com/problems/longest-harmonious-subsequence/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let eleFreq = new Map();
  let max = 0;

  // Build frequency map
  for (let ele of nums) {
    eleFreq.set(ele, (eleFreq.get(ele) || 0) + 1);
  }

  // Iterate correctly over Map keys
  for (let key of eleFreq.keys()) {
    const alterEle = key + 1;

    if (eleFreq.has(alterEle)) {
      const length = eleFreq.get(key) + eleFreq.get(alterEle);
      if (max < length) {
        max = length;
      }
    }
  }

  return max;
};
