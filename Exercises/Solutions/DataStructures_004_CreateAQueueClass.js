class Queue {
    constructor() {
      this.collection = [];
    }
  
    print() {
      console.log(this.collection);
    }
    
    enqueue(item) {
      this.collection.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) throw Error('Empty queue');
      return this.collection.shift();
    }
  
    front() {
      if (this.isEmpty()) throw Error('Empty queue');
      return this.collection[0];
    }
  
    size() {
      return this.collection.length;
    }
  
    isEmpty() {
      return this.collection.length === 0;
    }
  }
  

  /*
  // Alternatively it could be done following the code started in the freeCodecCamp for this exercise:
  // with a funtion. See below. But that is not a class:

  function Queue() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
  
    this.enqueue = function(item) {
      collection.push(item);
    };
  
    this.dequeue = function() {
      if (this.isEmpty()) throw Error('Empty queue');
      return collection.shift();
    };
  
    this.front = function() {
      if (this.isEmpty()) throw Error('Empty queue');
      return collection[0];
    };
  
    this.size = function() {
      return collection.length;
    };
  
    this.isEmpty = function() {
      return collection.length === 0;
    };
  
    // Only change code above this line
  }

  */