// link to the problem - https://leetcode.com/problems/flipping-an-image/?envType=problem-list-v2&envId=array

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let n = image.length;
  if (n == 1 && image[0][0] === 1) {
    return [[0]];
  } else if (n == 1 && image[0][0] === 0) {
    return [[1]];
  }

  for (let i = 0; i < n; i++) {
    image[i] = image[i].reverse();
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (image[i][j] === 0) {
        image[i][j] = 1;
      } else {
        image[i][j] = 0;
      }
    }
  }

  return image;
};
