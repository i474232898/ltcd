/*
  Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
  Find all unique triplets in the array which gives the sum of zero. 
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const length = nums.length;

  if (length < 3) {
    return result;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    let middle = i + 1;
    let right = length - 1;

    if (nums[i] > 0) {
      break;
    }
    // skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (middle < right) {
      const sum = nums[i] + nums[middle] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[middle], nums[right]])

        while (nums[middle] === nums[middle + 1]) {
          middle++;
        }
        middle++;

        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (sum < 0) {
        middle++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// testCases = [
//   [-1, 0, 1, 2, -1, -4],
//   [0, 0, 0, 0],
// ];

// testCases.map(x => console.log(threeSum(x)));
