// 9. Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return (x < 0)
    ? false
    : x === Number(String(x + 0).toString().split('').reverse().join(''));
};

console.log(isPalindrome(1));
