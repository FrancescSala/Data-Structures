var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.findMinHeight = function() {
      this._findMinHeight = function(node) {
          if (node === null) return -1;
          let hl = this._findMinHeight(node.left);
          let hr = this._findMinHeight(node.right);
          return Math.min(hl,hr) + 1;
      }
      return this._findMinHeight(this.root);
    }

    this.findMaxHeight = function() {
        this._findMaxHeight = function(node) {
            if (node === null) return -1;
            let hl = this._findMaxHeight(node.left);
            let hr = this._findMaxHeight(node.right);
            return Math.max(hl,hr) + 1;
        }
        return this._findMaxHeight(this.root);
      }

      this.isBalanced = function() {
          return (this.findMaxHeight() - this.findMinHeight()) <= 1;
      }
      // Only change code above this line
}

let t = new BinarySearchTree();
console.log(t.findMinHeight());
