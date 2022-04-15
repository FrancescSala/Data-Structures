var MaxHeap = function () {
    this.heap = [];
    this.parent = index => {
      return Math.floor((index - 1) / 2);
    }
    this.insert = element => {
      this.heap.push(element);
      this.heapifyUp(this.heap.length - 1);
    }
    this.heapifyUp = index => {
      let currentIndex = index,
      parentIndex = this.parent(currentIndex);
      while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(parentIndex);
      }
    }
    this.swap = (index1, index2) => {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    this.print = () => {
      return this.heap;
    }
    // Only change code below this line
    // Note that in the code above, it is no longer putting a null value at index 0 of the heap. 
    this.remove = () => {

        this.max = (index) => {
            let j = 2 * index + 1;
            let m1 = (j < this.heap.length && this.heap[index] < this.heap[j]) ? j : index;
            let m2 = (++j < this.heap.length && this.heap[index] < this.heap[j]) ? j : index;
            return (this.heap[m1] > this.heap[m2]) ? m1 : m2;
        };

        if (this.heap.length === 0) return;
        let v = this.heap[0];
        if (this.heap.length === 1) this.heap = [];
        else {
            this.heap[0] = this.heap.pop();
            let sorted = false;
            let i = 0;
            while (!sorted) {
                let j = this.max(i);
                sorted = (i === j);
                if (!sorted) {
                    [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]];
                    i = j;
                }
            }
        };
        return v;
    };

    // Only change code above this line
  };

let maxh = new MaxHeap();
  maxh.insert(6);
  console.log(maxh.print());
  maxh.insert(48);
  console.log(maxh.print());
  maxh.insert(30);
  console.log(maxh.print());
  maxh.insert(2);
  console.log(maxh.print());
  maxh.insert(100);
  console.log(maxh.print());
  console.log(maxh.remove());
  console.log(maxh.print());
  console.log(maxh.remove());
  console.log(maxh.print());
  console.log(maxh.remove());
  console.log(maxh.print());
  console.log(maxh.remove());
  console.log(maxh.print());
  console.log(maxh.remove());
  console.log(maxh.print());

