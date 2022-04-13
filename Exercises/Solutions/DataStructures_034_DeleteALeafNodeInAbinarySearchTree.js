var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  this.remove = function(elem) {
      // will consider only removal of leaf nodes
      if (this.root === null) return null;
      let n = this.root;
      let p = null
      while (n !== null && n.value !== elem) {
          p = n;
          n = (n.value > elem) ? n.left : n.right;
      }
      if (n === null) return null;      // elem was not found in the tree
      if (p === null) this.root = null; // tree has only one node and its value is elem (the value to remove)
      if (p !== null && p.left === n) p.left = null;    // p is previous node, and we must remove either its left or its right son
      if (p !== null && p.right === n) p.right = null;
  };

}