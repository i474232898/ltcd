//136. Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((acc, c) => acc ^ c, 0);
};
