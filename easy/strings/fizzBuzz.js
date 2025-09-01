// link to the problem - https://leetcode.com/problems/fizz-buzz/description/?envType=problem-list-v2&envId=string

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  return new Array(n).fill(undefined).map((_, index) => {
    const num = index + 1;
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num.toString();
    }
  });
};
