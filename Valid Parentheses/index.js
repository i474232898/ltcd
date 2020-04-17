// 20. Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const getOpposite = s => {
    if (s === '[') return ']';
    if (s === ']') return '[';
    if (s === '{') return '}';
    if (s === '}') return '{';
    if (s === '(') return ')';
    if (s === ')') return '(';
  }

  const tmpArr = [];
  let result = true;
  s.split('').forEach(v => {
    if (v === ']' || v === '}' || v === ')') {
      const a = tmpArr.shift();
      if (a !== v) {
        result = false;
      }
    } else {
      tmpArr.unshift(getOpposite(v));
    }
  });

  return tmpArr.length
    ? false
    : result;
};

// console.log(isValid("([()])"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
console.log(isValid("(("));
