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
    while (n !== null) {
        if (p !== null && n!== null && p.value <= elem && elem <= n.value) break;
        if (p !== null && n!== null && p.value >= elem && elem >= n.value) break;
        if (n !== null && n.value === elem) break;
        p = n;
        n = (n.value > elem) ? n.left : n.right;
    }
    // There are 4 cases now:
    // 1. Tree already contains elem
    // 2. n === null, elem has to be inserted as a leaf in the tree; as a child of p, left or right child has to be seen
    // 3. p < elem < n; elem must be inserted between p and n (right child of p and n will become left child of elem)
    // 4. p > elem > n; elem must be inserted between p and n (left child of p and n will become right child of elem)

    // Case 1. Tree already contains elem
    if (n !== null && n.value === elem) return null;

    // Case 2. n === null, elem has to be inserted as a leaf in the tree; as a child of p, left or right child has to be seen
    if (n === null) {
      if (p.value < elem) p.right = o;
      else p.left = o;
      return;
    }

    // Case 3. p < elem < n; elem must be inserted between p and n (right child of p and n will become left child of elem)
    if (p !== null && n!== null && p.value <= elem && elem <= n.value) {
       p.right = o;
       o.right = n;
       return;
    }
    // Case 4. p > elem > n; elem must be inserted between p and n (left child of p and n will become right child of elem)
    if (p !== null && n!== null && p.value >= elem && elem >= n.value) {
      p.left = o;
      o.left = n;
    }
  }; 
  // Only change code above this line
}

