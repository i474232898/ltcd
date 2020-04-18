// 26. Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   for (let i = 1; i < nums.length; i++){
//       if(nums[i-1] === nums[i]){
//           nums.splice(i, 1);
//           i--;
//       }
//   }

//   return nums.length;
// };
var removeDuplicates = function (nums) {
  let a = 0;
  let b = 1;
  for (; b < nums.length; b++) {
    if (nums[a] !== nums[b]) nums[++a] = nums[b];
  }

  return nums.length;
};

const a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(a);
console.log(a);
