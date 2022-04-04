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
      return this.collection[this.collection.length-1];
    }
  
    clear() {
      this.collection = [];
    }
  }
  