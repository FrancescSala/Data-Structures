var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = function(elem) {
    let o = new Node(elem);
    if (this.root === null) {
        this.root = o;
        return;
    }
    let n = this.root;
    let p = null;
    // Traverse the tree looking for the location where to add elem
    // Note two facts:
    // - the exact shape of the tree depends on the order the elements are added to it
    // - given an order of the additions, there is no a single strategy to locate the elems: resulting in more or less balanced tree
    // - I AM GOING SIMPLE and will add new values as leafs of the tree 
    // - (a smarter strategy would have been trying to keep tree balanced: that would improve search time in the tree)
    while (n !== null) {
        p = n;
        if (n.value === elem) return null;  // not very elegant
        n = (n.value > elem) ? n.left : n.right;
    }
    if (p.value > elem) p.left = o;
    else p.right = o;
  };
  
  this.findMin = function() {
    if (this.root === null) return null;
    let n = this.root;
    while (n.left !== null) n = n.left;
    return n.value;
  };

  this.findMax = function() {
    if (this.root === null) return null;
    let n = this.root;
    while (n.right !== null) n = n.right;
    return n.value;
  };    
  // Only change code above this line
}
