/** 
 * Given an array nums of n integers and an integer target, are there elements a, b, c, 
 * and d in nums such that a + b + c + d = target? Find all unique quadruplets in the 
 * array which gives the sum of target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const result = [];
  if (nums.length < 4) {
    return result;
  }
  nums.sort((a, b) => a - b);
  // console.log([JSON.stringify(nums.join(' '))], target);

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) { continue; }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) { continue; }
      // console.log('variations base ', [nums[i], nums[j]]);

      let middle = j + 1;
      let right = nums.length - 1;
      while (middle < right) {
        const sum = nums[i] + nums[j] + nums[middle] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[middle], nums[right]]);
          // console.log([nums[i], nums[j], nums[middle], nums[right]]);
          while (nums[middle] === nums[middle + 1]) {
            middle++;
          }
          while (nums[right] === nums[right - 1]) {
            right--;
          }

          middle++;
          right--;
        } else if (sum < target) {
          middle++;
        } else {
          right--;
        }
      }
    }
  }
  // console.log(result.length);
  return result;
};

const testCases = [
  [[1, 0, -1, 0, -2, 2], 0],
  [[0, 0, 0, 0, 0], 0],
  [[], 0],
  [[-3, -1, 0, 2, 4, 5], 0],
  [[-1, 0, 1, 2, -1, -4], -1], //2
  [[-3, -2, -1, 0, 0, 1, 2, 3], 0], //8
  [[-1, -5, -5, -3, 2, 5, 0, 4], -7], //2
];

testCases.map(([x, target]) => console.log(fourSum(x, target)));
