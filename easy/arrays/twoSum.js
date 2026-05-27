// link to the problem - https://leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) {
    let hashMap = {}

    let resArr

    for (let i = 0; i < nums.length; i++) {
        let indexo = target - nums[i]
        if (hashMap[indexo] || hashMap[indexo] === 0) {
            resArr = [hashMap[indexo], i];
            break;
        } else {
            hashMap[nums[i]] = i;
        }
    }

    return resArr;
};