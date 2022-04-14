var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.invert = function() {
      // At every node, its left and its right children should be swaped (left to the right and right to the left)
      // We could do that, visiting the nodes of the tree by level order. But htat would require additional memory.
      // We will do following a post order visit.
      this._invert = function(node) {
            if (node === null) return;
            this._invert(node.left);
            this._invert(node.right);
            [node.left, node.right] = [node.right,node.left];
      };
      
      if (this.root === null) return null;
      this._invert(this.root);

  }
  // Only change code above this line
}