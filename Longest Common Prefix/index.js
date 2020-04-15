// 14. Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    newPrefix = '';
    for (let j = 0; j < prefix.length; j++) {
      if (prefix.charAt(j) === strs[i].charAt(j)) {
        newPrefix = newPrefix.concat(strs[i].charAt(j));
      } else {
        break;
      }
    }
    prefix = newPrefix;
    console.log({ prefix, newPrefix });
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower"]));
