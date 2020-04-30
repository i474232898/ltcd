//581. Shortest Unsorted Continuous Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = nums => nums
  .slice()
  .sort((a, b) => a - b)
  .reduce((acc, current, index) => acc.concat(current === nums[index] ? ' ' : 'x'), '')
  .trim().length;



// console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
console.log(findUnsortedSubarray([2, 6, 5, 15]));
// console.log(findUnsortedSubarray([2, 6,]));
// console.log(findUnsortedSubarray([2, 6, 3]));
// console.log(findUnsortedSubarray([7, 6,]));
// console.log(findUnsortedSubarray([7]));
// console.log(findUnsortedSubarray([]));
// console.log(findUnsortedSubarray([5, 4, 3, 2, 1]));
// console.log(findUnsortedSubarray([1, 3, 2, 4, 5]));
console.log(findUnsortedSubarray([1, 2, 2, 4, 5]));
