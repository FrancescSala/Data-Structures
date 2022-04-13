var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line
  function _isBinarySearchTree(node) {
    if (node === null) return true;
    if (node.left !== null && node.left.value >= node.value) return false;
    if (node.right !== null && node.right.value <= node.value) return false;
    return _isBinarySearchTree(node.left) && _isBinarySearchTree(node.right);
  };
  
  return _isBinarySearchTree(tree.root);
   
  // Only change code above this line
}
