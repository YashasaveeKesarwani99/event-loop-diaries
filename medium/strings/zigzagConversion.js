// link to the problem - https://leetcode.com/problems/zigzag-conversion/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length === 1 || numRows === 1) return s;

  let theArray = new Array(numRows).fill("");
  let itsGoingDownForReal = false;
  let currentRowa = 0;

  for (let ele of s) {
    theArray[currentRowa] += ele;
    if (currentRowa === 0 || currentRowa === numRows - 1)
      itsGoingDownForReal = !itsGoingDownForReal;
    currentRowa += itsGoingDownForReal ? 1 : -1;
  }

  let resultingStringy = theArray.reduce((acc, item) => (acc += item), "");

  return resultingStringy;
};
