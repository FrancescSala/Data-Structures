function isSorted(a){
    for(let i = 0; i < a.length - 1; i++)
      if(a[i] > a[i + 1])
        return false;
    return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
let a = new Array(size);
for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);

return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
    // Only change code below this line
    this.heap = [null];

    this.insert = (elem) => {
        this.heap.push(elem);
        let sorted = false;
        let iElem = this.heap.length-1;
        while (!sorted) {
            let iParent = Math.floor(iElem/2);
            if (this.heap[iParent]>elem && iParent !== 0) {
                [this.heap[iParent],this.heap[iElem]] = [elem,this.heap[iParent]];
                iElem = iParent;
            } else sorted = true;
        }
    };

    this.remove = () => {

        this.min = (index) => {
            let j = 2 * index;
            let m1 = (j < this.heap.length && this.heap[index] > this.heap[j]) ? j : index;
            let m2 = (++j < this.heap.length && this.heap[index] > this.heap[j]) ? j : index;
            return (this.heap[m1] < this.heap[m2]) ? m1 : m2;
        };

        if (this.heap.length === 1) return;
        let v = this.heap[1];
        if (this.heap.length === 2) this.heap = [null];
        else {
            this.heap[1] = this.heap.pop();
            let sorted = false;
            let i = 1;
            while (!sorted) {
                let j = this.min(i);
                sorted = (i === j);
                if (!sorted) {
                    [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]];
                    i = j;
                }
            }
        };
        return v;
    };

    // make a hard copy of the array. Slicing not to include the initial null at index 0.
    this.print = () => JSON.parse(JSON.stringify(this.heap.slice(1)));

    this.isEmpty = () => {
        return this.heap.length === 1; // the null element at index 0
    }

    // IMPORTANT: the method sort does not preserve the data in the MinHeap:
    // after calling sort, the MinHeap will be empty.
    this.sort = () => {
        let elems= [];
        while (!this.isEmpty()) elems.push(this.remove());
        return elems;
    };

    // Only change code above this line
};


let mh = new MinHeap();
for (let i = 0; i< array.length; i++) mh.insert(array[i]);
let sortedArray = mh.sort();
console.log(array);
console.log(sortedArray);
console.log(isSorted(sortedArray));

