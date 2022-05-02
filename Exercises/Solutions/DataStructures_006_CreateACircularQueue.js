class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    if (this.queue[this.write] != null) return null;
    this.queue[this.write] = item;
    this.write = (this.write + 1) % (this.max + 1);
    return item;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    let v = this.queue[this.read];
    if (v === null) return null;
    this.queue[this.read] = null;
    this.read = (this.read + 1) %  (this.max + 1);
    return v;
    // Only change code above this line
  }
}

/*
// Personally I prefer like this

class CircularQueue {
    constructor(size) {
        if (isNaN(size)) throw Error('A number was expected as argument');
        if (size < 0) throw Error('size should be a positive number');
        this.queue = new Array(size).fill(null);
        this.read = 0;
        this.write = 0;
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
        if (this.queue[this.write] != null) return null;
        this.queue[this.write] = item;
        this.write = (this.write + 1) % this.queue.length;
        return item;
    }
  
    dequeue() {
        let v = this.queue[this.read];
        if (v === null) return null;
        this.queue[this.read] = null;
        this.read = (this.read + 1) %  this.queue.length;
        return v;
    }
  }

*/

