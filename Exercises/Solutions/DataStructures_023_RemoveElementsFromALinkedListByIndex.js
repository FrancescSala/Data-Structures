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
  
    // Only change code below this line
    this.removeAt = function(index) {
        if (isNaN(index) || index < 0) return null;
        let i = 0;
        let n = head;
        let p = null;
        while (i < index && n !== null) {
            p = n;
            n = n.next;
            i++;
        }
        if (n === null) return null;
        if (index === 0) head = n.next;
        else p.next = n.next;
        length--;
        return n.element;
    };
    // Only change code above this line
  }