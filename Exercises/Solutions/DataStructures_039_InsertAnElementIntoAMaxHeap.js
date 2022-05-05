var MaxHeap = function() {
    // Only change code below this line
    this.theData = [null];
    
    this.insert = (elem) => {
        this.theData.push(elem);
        let iElem = this.theData.length-1;
        let iParent = Math.floor(iElem/2);
        while (this.theData[iParent] < this.theData[iElem] && iParent !== 0) {
            [this.theData[iParent],this.theData[iElem]] = [this.theData[iElem],this.theData[iParent]];
            iElem = iParent;
            iParent = Math.floor(iElem/2);
        }
    };

    
    // make a hard copy of the array. Slicing not to include the initial null at index 0.
    this.print = () => JSON.parse(JSON.stringify(this.theData.slice(1)));
    this.print2 = () => JSON.parse(JSON.stringify(this.theData)); // including th null at index 0.
    // Only change code above this line
  };
