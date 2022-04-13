var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
 
  this.levelOrder = function () {
    let queue = [];
    let nodes = [];
    if (this.root === null) return null;
    queue.push(this.root);
    while (queue.length !== 0) {
        nodes.push(queue[0].value);
        if(queue[0].left !== null) queue.push(queue[0].left);
        if(queue[0].right !== null) queue.push(queue[0].right);
        queue.shift();
    }
    return nodes;
  };

 /*
   // This is exactly the other order reversed. But the automatic corrector does not like it!
  this.reverseLevelOrder = function () {
    if (this.root === null) return null;
    let nodes = this.levelOrder();
    return nodes.reverse();
  };
*/
    this.reverseLevelOrder = function () {
        let queue = [];
        let nodes = [];
        if (this.root === null) return null;
        queue.push(this.root);
        while (queue.length !== 0) {
            if(queue[0].right !== null) queue.push(queue[0].right);
            if(queue[0].left !== null) queue.push(queue[0].left);
            nodes.push(queue[0].value);
            queue.shift();
        }
        return nodes;
    };

  // Only change code above this line
}