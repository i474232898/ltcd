// 617. easy
/**
 * Given two binary trees and imagine that when you put one of them to 
 * cover the other, some nodes of the two trees are overlapped while the others are not.
 * You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, 
 * then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
 */

const { TreeNode, deserializeTree, serializeTree } = require('../utils');
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  if (!t1) {
    return t2;
  }
  if (!t2) {
    return t1;
  }
  const nullishAdd = (a, b, side) => {
    const val1 = a ? a[side] ? a[side].val : 0 : 0;
    const val2 = b ? b[side] ? b[side].val : 0 : 0;

    return (val1 ? val1 : 0) + (val2 ? val2 : 0);
  };
  const valOrNull = v => {
    return v
      ? v.val
        ? v.val
        : 0
      : 0;
  }
  const result = new TreeNode((((a = 0, b = 0) => a + b)(valOrNull(t1), valOrNull(t2))));

  const calc = (tr1, tr2, sumNode) => {
    if (tr1 !== null || tr2 !== null) {
      const left = ((tr1 ? tr1.left : null) || (tr2 ? tr2.left : null));
      const right = ((tr1 ? tr1.right : null) || (tr2 ? tr2.right : null));

      if (left) {
        sumNode.left = new TreeNode(nullishAdd(tr1, tr2, 'left'));
        calc((tr1 ? tr1.left : null), (tr2 ? tr2.left : null), sumNode.left);
      };
      if (right) {
        sumNode.right = new TreeNode(nullishAdd(tr1, tr2, 'right'));
        calc((tr1 ? tr1.right : null), (tr2 ? tr2.right : null), sumNode.right);
      };
    } else {

      return;
    }
  }
  calc(t1, t2, result);

  return result;
};

// const t1 = deserializeTree([1, 3, 2, 5]);
// const t2 = deserializeTree([2, 1, 3, null, 4, null, 7]);
// const t1 = deserializeTree([]);
// const t2 = deserializeTree([1]);
const t1 = deserializeTree([1, 2, null, 3]);
const t2 = deserializeTree([1, null, 2, null, 3]);

console.log(serializeTree(mergeTrees(t1, t2)));
