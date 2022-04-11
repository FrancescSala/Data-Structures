class Set {
    constructor() {
      // This will hold the set
      this.dictionary = {};
      this.length = 0;
    }
    // This method will check for the presence of an element and return true or false
    has(element) {
      return this.dictionary[element] !== undefined;
    }
    // This method will return all the values in the set
    values() {
      return Object.keys(this.dictionary);
    }
    // This method will add an element to the set
    add(element) {
      if (!this.has(element)) {
        this.dictionary[element] = true;
        this.length++;
        return true;
      }
  
      return false;
    }
    // This method will remove an element from a set
    remove(element) {
      if (this.has(element)) {
        delete this.dictionary[element];
        this.length--;
        return true;
      }
  
      return false;
    }
    // This method will return the size of the set
    size() {
      return this.length;
    }
    // This is our union method 
    union(set) {
      const newSet = new Set();
      this.values().forEach(value => {
        newSet.add(value);
      })
      set.values().forEach(value => {
        newSet.add(value);
      })
  
      return newSet;
    }
    // This is our intersection method
    intersection(set) {
      const newSet = new Set();
  
      let largeSet;
      let smallSet;
      if (this.dictionary.length > set.length) {
        largeSet = this;
        smallSet = set;
      } else {
        largeSet = set;
        smallSet = this;
      }
  
      smallSet.values().forEach(value => {
        if (largeSet.dictionary[value]) {
          newSet.add(value);
        }
      })
  
      return newSet;
    }
  
    difference(set) {
      const newSet = new Set();
  
      this.values().forEach(value => {
        if (!set.dictionary[value]) {
          newSet.add(value);
        }
      })
  
      return newSet;
    }
    // Only change code below this line
 
    isSubsetOf(anotherSet) {
      return this.difference(anotherSet).size() === 0;
    }

    /* These two ways also would work, but are less efficient (depending on the sets):
    isSubsetOf(anotherSet) {
        let b = anotherSet.values();
        return this.values().every(elem => b.includes(elem));
    }
   
    isSubsetOf(anotherSet) {
      return this.values().every(elem => anotherSet.values().includes(elem));
    } 
    */

    // Only change code above this line
  }

  let A = new Set();
  for (let i = 1; i<1000;i++) A.add(i);
  let B = new Set();
  for (let i = 1; i<400;i++) B.add(2*i);
  
  console.log(B.isSubsetOf(A));
  console.log(A.isSubsetOf(B));
  let t1 = Date.now();
  const numIter = 10000;
  for (let i =0; i<numIter;i++) B.isSubsetOf(A);
  for (let i =0; i<numIter;i++) A.isSubsetOf(B);
  let t2 = Date.now();
  console.log(t2-t1);   // elapsed time: to check which implementation is more efficient
