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
    // Only change code below this line
/*    intersection(anotherSet) {
      let s = new Set();
      for (let v of this.values())
        if (anotherSet.has(v)) s.add(v);
      return s;
    }
*/
    intersection(anotherSet) {
      let s = new Set();
      let a; let b;
      if (this.size() <= anotherSet.size()) {
        a = this; b = anotherSet;
      } else {
        a = anotherSet; b = this;
      }
      for (let v of a.values())
        if (b.has(v)) s.add(v);
      return s;
    }
    // Only change code above this line
  }

  let A = new Set();
  A.add(1);
  A.add(2);
  A.add(3);
  let B = new Set();
  B.add(2);
  console.log(A.intersection(B));