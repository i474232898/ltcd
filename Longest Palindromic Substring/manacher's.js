/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const interleave = str => `|${s.split('').join('|')}|`;
  
    //return the result substring by the input string and calculated lengths
    //canada, [0,1,0,1,0,3,0,1,0,3,0,1,0] -> ana
    const getLongest = (str, pal) => {
  
      //Maximum palindrome's length and index
      const [length, index] = pal.reduce((max, x, i, arr) => x > arr[max[1]] ? [x, i] : max, [0, 0]),
        startIndex = (index - length) / 2 | 0;
  
      return str.substring(startIndex, startIndex + length);
    }
  
    let C = 0;
    let R = 0;
    let P = [];
    let mirror = 0;
  
    const preprocessedP = interleave(s);
  
    for (let i = 0, l = preprocessedP.length; i < l; i++) {
      mirror = C * 2 - i;
  
      P[i] = R > i ? Math.min(R - i, P[mirror]) : 0;
  
      while ((preprocessedP[i + (P[i] + 1)] && preprocessedP[i - (P[i] + 1)]) && (preprocessedP[i + (P[i] + 1)] === preprocessedP[i - (P[i] + 1)])) {
        P[i]++;
      }
  
      if (i + P[i] > R) {
        C = i;
        R = i + P[i];
      }
    }
  
    const result = getLongest(s, P);
    return result;
  };
  
  console.log(longestPalindrome("abababa"));
  console.log(longestPalindrome("abbaa"));
  console.log(longestPalindrome("babad"));