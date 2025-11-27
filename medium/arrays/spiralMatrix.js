// link to the problem - https://leetcode.com/problems/spiral-matrix/?envType=problem-list-v2&envId=array

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  const res = [];
  if (!matrix || matrix.length === 0) return res;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 1. Traverse from left → right on top row
    for (let j = left; j <= right; j++) {
      res.push(matrix[top][j]);
    }
    top++;

    // 2. Traverse from top → bottom on right column
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // 3. Traverse from right → left on bottom row (if still within row bounds)
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        res.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // 4. Traverse from bottom → top on left column (if still within column bounds)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
}
