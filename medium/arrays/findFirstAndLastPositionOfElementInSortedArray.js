// link to the problem - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const binarySearch = (isSearchingLeft) => {
    let left = 0;
    let right = nums.length - 1;
    let idx = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (target > nums[mid]) {
        left = mid + 1;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        idx = mid;
        if (isSearchingLeft) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }

    return idx;
  };

  let left = binarySearch(true);
  let right = binarySearch(false);

  return [left, right];
};
