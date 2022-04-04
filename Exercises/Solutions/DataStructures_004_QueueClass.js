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
      if (this.isEmpty) throw Error('Empty queue');
      return this.collection.shift();
    }
  
    front() {
      if (this.isEmpty) throw Error('Empty queue');
      return this.collection[0];
    }
  
    size() {
      return this.collection.length;
    }
  
    isEmpty() {
      return this.collection.length === 0;
    }
  }
  