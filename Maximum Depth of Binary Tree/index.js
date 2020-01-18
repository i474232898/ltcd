// 104. Maximum Depth of Binary Tree
const { deserializeTree } = require('../utils');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const depth = node => {
    if (node) {
      return Math.max(depth(node.left), depth(node.right)) + 1;
    } else {
      return 0;
    }
  }

  return depth(root);
};

const root = deserializeTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(root));
