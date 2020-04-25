//665. Non-decreasing Array
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let flagsToModify = 0;

  if (nums.length < 3) {
    return true;
  }
  let a = 0;
  let b = 1;

  do {
    if (nums[a] > nums[b]) {
      const c = b + 1;
      if (!nums[c] || nums[c] > nums[a]) {
        nums[b] = nums[a];
      } else {
        nums[a] = nums[b];
      }
      a = 0;
      b = 1;
      flagsToModify++;
      continue;
    }

    a++;
    b++;

  } while (flagsToModify < 2 && b < nums.length);

  return flagsToModify < 2;
};

console.log(checkPossibility([4, 2, 3])); //true
console.log(checkPossibility([2, 3, 3, 2, 4])); //true
console.log(checkPossibility([3, 4, 2, 3])); //false
console.log(checkPossibility([-1, 4, 2, 3])); //true
console.log(checkPossibility([1, 2, 4, 5, 3])); //true
console.log(checkPossibility([1, 3, 4, 2, 5])); //true
