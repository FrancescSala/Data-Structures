function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = function(index,element) {
    if (isNaN(index)) throw Error('Argument index should be a number');
    if (index < 0) return false;
    // Or, alternatively, if (isNaN(index) || (index <0)) rerturn false;
    let i = 0;
    let n = head;
    let p = null;
    while (i < index && n !== null) {
      p = n;
      n = n.next;
      i++;
    }
    if (i< index - 1) return false;
    let newNode = new Node(element);
    if (index === 0) {
      newNode.next = head;
      head = newNode;
    } else {
      p.next = newNode;
      newNode.next = n;
    }
    length++;
  }
   
  // Only change code above this line
}

