var MaxHeap = function() {
    // Only change code below this line
    this.theData = [null];
    
    this.insert = (elem) => {
        this.theData.push(elem);
        let sorted = false;
        let iElem = this.theData.length-1;

        while (!sorted) {
            let iParent = Math.floor(iElem/2);
            if (this.theData[iParent]<elem && iParent !== 0) {
                [this.theData[iParent],this.theData[iElem]] = [elem,this.theData[iParent]];
                iElem = iParent;
            } else sorted = true;
        }

    };
    
    // make a hard copy of the array. Slicing not to include the initial null at index 0.
    this.print = () => JSON.parse(JSON.stringify(this.theData.slice(1)));
    // Only change code above this line
  };

  let t0 = Date.now();

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

  let t1 = Date.now();
  console.log (t1-t0);        
