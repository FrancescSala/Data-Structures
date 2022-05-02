function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
  
      // Note that I am considering that a higher priority is indicated with a lower value of the piority argument.
      // That means: priority 1 is higher than priority 2 (and so on).
      this.enqueue = function(item) {
          // parse argument item.
          if (!Array.isArray(item)) throw Error('Argument does not have expected format: array object expected');
          if (item.length !== 2) throw Error('Argument does not have expected format: length 2 expected');
          if (isNaN(item[1])) throw Error('Argument does not have expected format: priority should be a number');
          // let's look for the position item should have
          let j = this.collection.findIndex(elem => elem[1] > item[1]); // index of the first element that has less priority than the item we are adding
          // item has to be inserted in position before j
          if (j === -1) this.collection.push(item);
          else this.collection.splice(j,0,item);
      };
      
      this.dequeue = function() {
          if (this.isEmpty()) throw Error('Empty priority queue');
          return this.collection.shift()[0];
      };
  
      this.size = function() {
          return this.collection.length;
      };
  
      this.front = function() {
        if (this.isEmpty()) throw Error('Empty priority queue');
        return this.collection[0][0];
      };
  
      this.isEmpty = function() {
          return this.size() === 0;
      };
  
  
    // Only change code above this line
  }
  

/*

I would have preferred doing like this, with a class:


class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    // Note that I am considering that a higher priority is indicated with a lower value of the piority argument.
    // That means: priority 1 is higher than priority 2 (and so on).
    enqueue(item) {
        // parse argument item.
        if (!Array.isArray(item)) throw Error('Argument does not have expected format: array object expected');
        if (item.length !== 2) throw Error('Argument does not have expected format: length 2 expected');
        if (isNaN(item[1])) throw Error('Argument does not have expected format: priority should be a number');
        // let's look for the position item should have
        let j = this.collection.findIndex(elem => elem[1] > item[1]); // index of the first element that has less priority than the item we are adding
        // item has to be inserted in position before j
        if (j === -1) this.collection.push(item);
        else this.collection.splice(j,0,item);
}
    
    dequeue() {
        if (this.isEmpty()) throw Error('Empty priority queue');
        return this.collection.shift()[0];
    }

    size() {
        return this.collection.length;
    }

    front() {
        if (this.isEmpty()) throw Error('Empty priority queue');
        return this.collection[0][0];
    }

    isEmpty() {
        return this.size() === 0;
    }

    print() {
        console.log(this.collection);
    }
}
*/


let pq = new PriorityQueue();
pq.enqueue(['kitten',2]);
pq.enqueue(['dog',2]);
pq.enqueue(['rabbit',2]);
pq.enqueue(['human',1]);
console.log(pq.front());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
