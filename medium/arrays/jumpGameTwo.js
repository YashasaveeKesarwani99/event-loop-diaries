// link to the problem - https://leetcode.com/problems/jump-game-ii/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // let us do this by dynamic programming
  let n = nums.length;
  let dp = new Array(n).fill(Infinity); // filling with Infinity cause we want the least value

  dp[n - 1] = 0; // base case, cause the jumps required to reach the last index is 0;

  // we want the value of dp[0], cause that will be the least jumps required to reach the last index;
  for (let i = n - 2; i >= 0; i--) {
    let maxJump = Math.min(n - 1, i + nums[i]);
    for (let j = i + 1; j <= maxJump; j++) {
      dp[i] = Math.min(dp[i], 1 + dp[j]);
    }
  }

  return dp[0];
};
