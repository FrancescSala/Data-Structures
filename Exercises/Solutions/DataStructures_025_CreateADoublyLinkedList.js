var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  // we'll add only at the end of the list
  this.add = function(elem) {
    let nNode = new Node(elem,this.tail);
    if (this.tail !== null) this.tail.next = nNode;
    this.tail = nNode;
    if (this.head === null) this.head = nNode;
  }

  this.remove = function (elem) {
    if (this.head === null && this.tail === null) return null;
    let n = this.head;
    let p = null;
    while (n !== null) {
      if (n.data === elem) {
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
          break;
        }
        if (p !== null) p.next = n.next;
        if (n === this.head) this.head = n.next;
        if (n === this.tail) {
          this.tail = p;
          p.next = null;
        }
      }
      p = n;
      n = n.next;
    }
  }
  // Only change code above this line
};

let dll = new DoublyLinkedList();
console.log(dll.remove('Pamplona'));
dll.add('Pepe');
dll.add('Juan');
dll.add('Guillermo');
console.log(dll);
console.log(dll.remove('Guillermo'));
console.log(dll);
