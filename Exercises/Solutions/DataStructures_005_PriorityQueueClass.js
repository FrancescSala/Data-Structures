class PriorityQueue {
    constructor() {
        this.collection = [];
    }

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
