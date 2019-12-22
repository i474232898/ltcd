/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (
    (!s.length) ||
    (s.length === 1) ||
    (s.length === 2 && s[0] === s[1])
  ) { return s }

  if (s.length === 2) {
    return s[0];
  }
  /** @description returns length of expansion */
  const expandAroundCenter = (str, left, rigth) => {
    let L = left;
    let R = rigth;

    while (str[L] && str[R] && str[L] === str[R]) {
      L--;
      R++;
    }

    return R - L - 1;
  }

  let result = 0;
  let palindromStart = 0;
  let palindromEnd = 0;

  for (let i = 0; i < s.length; i++) {
    const tmpRes1 = expandAroundCenter(s, i, i);
    const tmpRes2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(tmpRes1, tmpRes2);

    if (len > palindromEnd - palindromStart) {
      palindromStart = Math.round(i - (len - 1) / 2);
      palindromEnd = i + len / 2;
    }
  }

  result = s.slice(palindromStart, palindromEnd + 1);

  return result;
};

console.log(longestPalindrome("bbb"));
//console.log(longestPalindrome("abbaa"));
// console.log(longestPalindrome("babad"));