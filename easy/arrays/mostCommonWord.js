// link to the problem - https://leetcode.com/problems/most-common-word/description/?envType=problem-list-v2&envId=array

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const bannedSet = new Set(banned);

  const words = paragraph
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean); // removes empty strings

  const freq = new Map();

  for (let word of words) {
    if (!bannedSet.has(word)) {
      freq.set(word, (freq.get(word) || 0) + 1);
    }
  }

  // find key with max value
  return [...freq.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
};
