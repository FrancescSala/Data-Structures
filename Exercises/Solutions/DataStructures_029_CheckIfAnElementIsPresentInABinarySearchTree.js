var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
  
    this.isPresent = function(elem) {
    if (this.root === null) return false;
    let n = this.root;
    let found = false;
    while (n !== null && !found) {
        found = (n.value === elem);
        n = (elem < n.value) ? n.left : n.right;
    }
    return found;
    };

  // Only change code above this line
}
