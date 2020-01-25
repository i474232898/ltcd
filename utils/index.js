function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports = {
  /**
   * @param {Array} arr
   * @returns {TreeNode}
   */
  deserializeTree: arr => {
    const root = new TreeNode(arr.shift());
    let firstLayer = [root];
    let secondLayer = [];

    while (true) {
      if (arr.length === 0) {
        break;
      }

      firstLayer.forEach(node => {
        const tmpLeftNode = new TreeNode(arr.shift());
        const tmpRightNode = new TreeNode(arr.shift());
        node.left = tmpLeftNode;
        node.right = tmpRightNode;

        secondLayer.push(tmpLeftNode);
        secondLayer.push(tmpRightNode);
      });

      firstLayer = secondLayer;
    }

    return root;
  },

  /**
   * @param {TreeNode} root
   * @returns {Array} arr
   */
  serializeTree: root => {
    if (!root && root.val === null || root.val === undefined) {
      return;
    }
    let firstLayer = [root];
    let secondLayer = [];
    const result = [];

    while (true) {
      if (firstLayer.length === 0) {
        break;
      }

      firstLayer.forEach(node => {
        if (node) {
          result.push(node.val);
          secondLayer.push(node.left);
          secondLayer.push(node.right);
        }

      });
      firstLayer = secondLayer;
      secondLayer = [];
    }

    return result;
    //[3,9,20,null,null,15,7]
  },

  /**
   * @param {TreeNode} root
   * @returns {Array} undefined
   */
  depthFirstTreeTraversal: root => {
    if (root !== null) {
      console.log(root.val);
      root.left ? mergeTrees(root.left) : '';
      root.right ? mergeTrees(root.right) : '';
    } else {
      return;
    }
  },

  TreeNode,
}
