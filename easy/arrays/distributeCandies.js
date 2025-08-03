// link to the problem - https://leetcode.com/problems/distribute-candies/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let candyMap = new Map();
  let candyCount = 0;

  for (let ele of candyType) {
    if (!candyMap?.get(ele)) {
      candyMap.set(ele, 1);
      candyCount++;
    } else {
      let newVal = candyMap.get(ele) + 1;
      candyMap.set(ele, newVal);
    }
  }

  if (candyCount < candyType.length / 2) {
    return candyCount;
  }

  return candyType.length / 2;
};
