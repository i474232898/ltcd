/**
 * Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. 
 * Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
 */

const { deserializeTree, serializeTree } = require('../utils');

var searchBST = function (root, val) {
  if (root && root.val === val) {
    return root;
  }

  const left = root.left ? searchBST(root.left, val) : null;
  const right = root.right ? searchBST(root.right, val) : null;

  return left ? left : right;
};

// console.log(searchBST(deserializeTree([4, 2, 7, 1, 3]), 2));
console.log(searchBST(deserializeTree([]), 2));

