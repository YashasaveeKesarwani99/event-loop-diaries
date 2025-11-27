// link to the problem - https://leetcode.com/problems/available-captures-for-rook/description/?envType=problem-list-v2&envId=array

var numRookCaptures = function (board) {
  let I = -1,
    J = -1;

  // Find Rook position
  outer: for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") {
        I = i;
        J = j;
        break outer;
      }
    }
  }

  let count = 0;

  // Up
  for (let i = I - 1; i >= 0; i--) {
    if (board[i][J] !== ".") {
      if (board[i][J] === "p") count++;
      break;
    }
  }

  // Down
  for (let i = I + 1; i < 8; i++) {
    if (board[i][J] !== ".") {
      if (board[i][J] === "p") count++;
      break;
    }
  }

  // Left
  for (let j = J - 1; j >= 0; j--) {
    if (board[I][j] !== ".") {
      if (board[I][j] === "p") count++;
      break;
    }
  }

  // Right
  for (let j = J + 1; j < 8; j++) {
    if (board[I][j] !== ".") {
      if (board[I][j] === "p") count++;
      break;
    }
  }

  return count;
};
