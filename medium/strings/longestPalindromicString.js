// link to the problem - https://leetcode.com/problems/longest-palindromic-substring/description/?envType=problem-list-v2&envId=string

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s) return "";

  let end = 0;
  let start = 0;

  function expandingTheBihh(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expandingTheBihh(i, i); // odd-length
    const len2 = expandingTheBihh(i, i + 1); // even-length
    const len = Math.max(len1, len2); // choose the longer one

    // Update start and end pointers if a longer palindrome is found
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};
