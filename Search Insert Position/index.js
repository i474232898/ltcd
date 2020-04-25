// 35. Search Insert Position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const binarySearch = val => arr => {
    let R = arr.length - 1;
    let L = 0;
    let m;

    while (L <= R) {
      m = Math.floor((L + R) / 2);

      if (arr[m] === val) {
        break;
      }
      if (val < arr[m]) {
        R = m - 1;
        continue;
      }
      if (val > arr[m]) {
        L = m + 1;
        continue;
      }
    }

    if (arr[m] < val) {
      return m + 1;
    }

    return m;
  }

  return binarySearch(target)(nums);
};

console.log(searchInsert([1, 3, 5, 6], 5));
