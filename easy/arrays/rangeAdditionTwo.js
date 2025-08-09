// link to the problem - https://leetcode.com/problems/range-addition-ii/description/?envType=problem-list-v2&envId=array

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  if (ops.length === 0) return m * n;
  let minA = m,
    minB = n;
  for (let [a, b] of ops) {
    minA = Math.min(minA, a);
    minB = Math.min(minB, b);
  }
  return minA * minB;
};

// uninteresting question - more of a identification of pattern than a problem-solving question
