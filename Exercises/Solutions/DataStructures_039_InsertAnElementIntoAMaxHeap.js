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
    // Being strict, the print methos should have no parameter and always slice.
    // "... add a print method which returns an array of all the items that have been added to the heap"
    // the initial null has not been added to the heap, not with an insert, so it should never be returned.
    this.print = (slice=false) => { 
        if (slice) return JSON.parse(JSON.stringify(this.theData.slice(1)));
        else return JSON.parse(JSON.stringify(this.theData));
    };
    // Only change code above this line
  };
