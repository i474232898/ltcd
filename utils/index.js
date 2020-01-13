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
  }
}
