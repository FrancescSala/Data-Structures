function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };
  
    this.add = function(element){
      // Only change code below this line
      if (this.size() === 0) head = new Node(element);
      else {
        let n = head;
        while (n.next !== null) n = n.next;
        n.next = new Node(element);
      }
      length++;
      // Only change code above this line
    };
  }
