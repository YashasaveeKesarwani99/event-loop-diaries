// * link to the problem - https://leetcode.com/problems/reshape-the-matrix/?envType=problem-list-v2&envId=array

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length,
    n = mat[0].length;

  if (m * n !== r * c) return mat;

  let flat = mat.flat();

  let newArr = [];
  let extCounter = 0;

  for (let i = 0; i < r; i++) {
    let temArr = [];
    for (let j = 0; j < c; j++) {
      temArr.push(flat[extCounter]);
      extCounter++;
    }
    newArr.push(temArr);
  }

  return newArr;
};
