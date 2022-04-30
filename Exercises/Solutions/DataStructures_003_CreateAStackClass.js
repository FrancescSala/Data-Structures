function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  
  this.isEmpty = function() {
    return collection.length === 0;
  };

  this.push = function(item) {
    collection.push(item);
  };

  this.pop = function() {
    if (this.isEmpty()) throw Error('Empty stack');
    return collection.pop();
  };
  
  this.peek = function() {
    if (this.isEmpty()) throw Error('Empty stack');
    return collection.at(-1);
  };

  this.clear = function() {
    collection = [];
  };
  
  // Only change code above this line
}


/*
// Personally I would have prefered like this:
class Stack {
    constructor() {
      this.collection = [];
    }
  
    print() {
      console.log(this.collection);
    }
    
    isEmpty() {
      return this.collection.length === 0;
    }
  
    push(item) {
      this.collection.push(item);
    }
  
    pop() {
      if (this.isEmpty()) throw Error('Empty stack');
      return this.collection.pop();
    }
  
    peek() {
      if (this.isEmpty()) throw Error('Empty stack');
      return this.collection.at(-1);
    }
  
    clear() {
      this.collection = [];
    }
  }
*/