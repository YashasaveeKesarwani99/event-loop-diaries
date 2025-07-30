// * link to the problem - https://leetcode.com/problems/relative-ranks/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let hashMap = {};
  let res = [];

  for (let i = 0; i < score.length; i++) {
    hashMap[score[i]] = i;
  }

  let sortScore = score.sort((a, b) => a - b);

  for (let i = 0; i < sortScore.length; i++) {
    if (sortScore.length - i === 3) {
      res[hashMap[sortScore[i]]] = "Bronze Medal";
    } else if (sortScore.length - i === 2) {
      res[hashMap[sortScore[i]]] = "Silver Medal";
    } else if (sortScore.length - i === 1) {
      res[hashMap[sortScore[i]]] = "Gold Medal";
    } else {
      res[hashMap[sortScore[i]]] = (sortScore.length - i).toString();
    }
  }

  return res;
};
