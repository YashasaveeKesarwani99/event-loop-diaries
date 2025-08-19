// link to the problem - https://leetcode.com/problems/maximum-product-of-three-numbers/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let sortoNumo = nums.sort((a, b) => a - b);

  let count = 0;
  let product = 1;

  if (nums.length === 3) {
    return nums.reduce((acc, num) => acc * num, 1);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    product *= sortoNumo[i];
    count++;

    if (count === 3) {
      break;
    }
  }

  let mayBeBetterProduct =
    sortoNumo[0] * sortoNumo[1] * sortoNumo[nums.length - 1];

  return Math.max(mayBeBetterProduct, product);
};
