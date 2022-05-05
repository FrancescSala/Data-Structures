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

      // given index, it calculates the index of left and right children. And of these three indexes, returns the one with greatest value in the heap
      // if some of the children does not exist, then the index of the parent is considered
      this.max = (index) => {
          let j = 2 * index + 1;
          let m1 = (j < this.heap.length && this.heap[index] < this.heap[j]) ? j : index;
          let m2 = (++j < this.heap.length && this.heap[index] < this.heap[j]) ? j : index; // note the pre-increment ++j to move to the right child
          return (this.heap[m1] > this.heap[m2]) ? m1 : m2;
      };

      if (this.heap.length === 0) return;
      let v = this.heap[0];
      if (this.heap.length === 1) this.heap = [];
      else {
          this.heap[0] = this.heap.pop();
          let i = 0; 
          let j = this.max(0);
          while (i !== j) {
              [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]];
              i = j;
              j = this.max(i);
          }
      };
      return v;
  };
    // Only change code above this line
  };
