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
        let j;
        for (let i = 0; i<this.collection.length;i++)
            if (this.collection[i][1] > item[1]) { j = i; break; }
        // item has to be inserted in position before j
        if (j === undefined) this.collection.push(item);
        else if (j === 0) this.collection.unshift(item);
        else this.collection.splice(j,0,item);
    }
    
    dequeue() {
        if (this.isEmpty()) throw Error('Empty priority queue');
        let v =this.collection.shift();
        return v[0];
    }

    size() {
        return this.collection.length;
    }

    front() {
        return this.collection[0][0];
    }

    isEmpty() {
        return this.size() === 0;
    }

    print() {
        console.log(this.collection);
    }
}

/*
let pq = new PriorityQueue();
console.log(pq.size());
pq.enqueue(['kitten', 2]);
console.log(pq.front());
pq.enqueue(['dog', 2]);
pq.enqueue(['rabbit', 2]);
pq.enqueue(['human', 1]);
console.log(pq);
console.log(pq.dequeue());
*/

/*
// Alternatively it could be done following the code started in the freeCodecCamp for this exercise:
  // with a funtion. See below. But that is not a class:

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
        let j;
        for (let i = 0; i<this.size();i++)
            if (this.collection[i][1] > item[1]) { j = i; break; }
        // item has to be inserted in position before j
        if (j === undefined) this.collection.push(item);
        else if (j === 0) this.collection.unshift(item);
        else this.collection.splice(j,0,item);
    };
    
    this.dequeue = function() {
        if (this.isEmpty()) throw Error('Empty priority queue');
        let v = this.collection.shift();
        return v[0];
    };

    this.size = function() {
        return this.collection.length;
    };

    this.front = function() {
        return this.collection[0][0];
    };

    this.isEmpty = function() {
        return this.size() === 0;
    };


  // Only change code above this line
}
*/