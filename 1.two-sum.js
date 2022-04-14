/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(n^2) = Solution;
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) return [i, j];
        }
    }
};

// var twoSum = function (nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     while (left < right) {
//         if (nums[left] + nums[right] === target) return [left, right];
//         if (nums[right] > target) right--;
//         else if (nums[left] < target) left++;
//     }
// }
// @lc code=end

