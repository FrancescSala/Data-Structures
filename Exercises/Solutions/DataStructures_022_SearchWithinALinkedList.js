function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.size = function() {
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
          currentNode = currentNode.next;
        }
  
        currentNode.next = node;
      }
  
      length++;
    };
  
    this.remove = function(element){
      var currentNode = head;
      var previousNode;
      if(currentNode.element === element){
        head = currentNode.next;
      } else {
        while(currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
  
        previousNode.next = currentNode.next;
      }
  
      length --;
    };
  
    // Only change code below this line
    this.isEmpty = function() {
        return this.size() === 0;
    }

    this.indexOf = function(element) {
        let n = head;
        let i = 0;
        while (n !== null && n.element !== element) {
            n = n.next;
            i++;
        }
        return (n === null) ? -1 : i;
    };

    this.elementAt = function(index) {
        if (isNaN(index) || index < 0) return undefined;
        let n = head;
        let i = 0;
        while (n !== null && i < index) {
            n = n.next;
            i++;
        }
        return (n !== null && i === index) ? n.element : undefined;
    };

    // Only change code above this line
  }