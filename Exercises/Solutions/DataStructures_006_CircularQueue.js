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

/*
let cq = new CircularQueue(5);
cq.enqueue('a');
cq.enqueue('b');
cq.enqueue('c');
console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq.dequeue());
cq.enqueue('d');
cq.enqueue('e');
cq.enqueue('f');
console.log(cq);
*/
