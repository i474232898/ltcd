// 7. Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;
  let num = isNegative ? Math.abs(x) : x;
  let result = num % 10;
  num = Math.floor(num / 10);
  while (num !== 0) {
    result = (result * 10) + (num % 10);
    num = Math.floor(num / 10);
  }

  result = (result > 2147483647 || result < -2147483647) ? 0 : result;
  return isNegative ? (0 - result) : result;
};

console.log('reversed:', reverse(1534236469))
