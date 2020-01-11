/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {

  return nums.length > 0
    ? nums.filter(v => v.toString().length % 2 === 0).length
    : 0;
};

console.log(findNumbers([0]));
