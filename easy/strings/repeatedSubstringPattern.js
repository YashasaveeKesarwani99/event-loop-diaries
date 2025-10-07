// link to the problem. - https://leetcode.com/problems/repeated-substring-pattern/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let mayBeStringo = "";
  let flago = false;

  for (let i = 0; i < s.length; i++) {
    if (mayBeStringo.length && s.length % mayBeStringo.length === 0) {
      let theFactor = s.length / mayBeStringo.length;
      let theString = "";
      while (theFactor > 0) {
        theString += mayBeStringo;
        theFactor--;
      }

      if (theString === s) {
        flago = true;
        break;
      }
    }

    mayBeStringo = s.slice(0, i + 1);
  }

  return flago;
};
