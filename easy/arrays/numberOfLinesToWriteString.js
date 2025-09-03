// link to the problem - https://leetcode.com/problems/number-of-lines-to-write-string/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let lines = 1;
  let currentWidth = 0;

  for (let ch of s) {
    const w = widths[ch.charCodeAt(0) - "a".charCodeAt(0)];
    if (currentWidth + w <= 100) {
      currentWidth += w;
    } else {
      lines++;
      currentWidth = w;
    }
  }

  return [lines, currentWidth];
};
