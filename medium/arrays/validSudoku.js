// link to the problem - https://leetcode.com/problems/valid-sudoku/description/?envType=problem-list-v2&envId=array

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let seen = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num === ".") continue;

      let rowKey = `${num} in row ${i}`;
      let colKey = `${num} in col ${j}`;
      let boxKey = `${num} in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;

      if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
        return false;
      }

      seen.add(rowKey);
      seen.add(colKey);
      seen.add(boxKey);
    }
  }

  return true;
};
