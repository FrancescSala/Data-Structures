var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.preorder = function() {
    this._preorder = function(node) {
        if (node === null) return;
        nodes.push(node.value);
        this._preorder(node.left);
        this._preorder(node.right);
    };

    if (this.root === null) return null;
    let nodes = [];
    this._preorder(this.root);
    return nodes;
  };


  this.inorder = function() {
      this._inorder = function(node) {
        if (node === null) return;
        this._inorder(node.left);
        nodes.push(node.value);
        this._inorder(node.right);
      };

      if (this.root === null) return null;
      let nodes = [];
      this._inorder(this.root);
      return nodes;
  };

  this.postorder = function() {
    this._postorder = function(node) {
        if (node === null) return;
        this._postorder(node.left);
        this._postorder(node.right);
        nodes.push(node.value);
    };

    if (this.root === null) return null;
    let nodes = [];
    this._postorder(this.root);
    return nodes;
  };
 
  // Only change code above this line
}