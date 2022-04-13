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
    };
  
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
    };
  
    this.reverse = function () {
      if (this.head === null) return null;
      let n = this.head;
      let aux;
      while (n !== null) {
        aux = n.next;
//        [n.prev,n.next] = [n.next,n.prev];  slightly less sfficient
        n.next = n.prev;
        n.prev = aux;
        n = aux;
      }
//      [this.head, this.tail] = [this.tail, this.head]; slightly less efficient
      aux = this.head;
      this.head = this.tail;
      this.tail = aux;
    };  
  
    this.traverse = function() {
      let n = this.head;
      while (n !== null) {
        console.log(n.data);
        n = n.next;
      }
    };
  
    // Only change code above this line
  };
  
  
  let dll = new DoublyLinkedList();
  dll.add('Pedro');
  dll.add('Santiago');
  dll.add('Juan');
  dll.add('Andrés');
  dll.add('Bartolomé');
  dll.add('Santiago');
  dll.add('Judas');
  dll.add('Judas');
  dll.add('Mateo');
  dll.add('Felipe');
  dll.add('Simón');
  dll.add('Tomás');
  
  dll.traverse();
  console.log('');
  dll.traverse(dll.reverse());
  