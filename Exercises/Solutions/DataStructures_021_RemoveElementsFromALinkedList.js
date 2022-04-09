function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.size = function(){
      return length;
    };
  
    this.head = function(){
      return head;
    };
  
    this.add = function(element){
      var node = new Node(element);
      if(head === null){
          head = node;
      } else {
        var currentNode = head;
  
        while(currentNode.next){
          currentNode  = currentNode.next;
        }
  
        currentNode.next = node;
      }
  
      length++;
    };
  
    this.remove = function(element){
      // Only change code below this line
      let n = head;
      let p = null;   // p for previous: the previous to node n
      while (n !== null && n.element !== element) {
        p = n; n = n.next;
      }
      if (n === null) return;   // the element was not in the list, nothing to remove
      if (n === head) head = n.next;    // removing the head of the list
      else p.next = n.next;             // removing an element which is not the head
      length--;
      // Only change code above this line
    };
  }