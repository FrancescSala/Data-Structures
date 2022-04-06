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
      return Object.values(this.dictionary);
    }
    // This method will add an element to the set
    add(element) {
      if (!this.has(element)) {
        this.dictionary[element] = element;
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
    // Only change code below this line
    union(b) {
      let s = new Set();
      for (let v of this.values()) s.add(v);
      for (let v of b.values()) s.add(v);
      return s;
    }
    // Note, wirtten like this because the description of the exercise says union should return a NEW set.
    // That is, A.union(B) does not modify A, and does not modify B.
    // An implementation modifying A would be:
    //union(b) {
    //  for (let v of b.values()) this.add(v);
    //  return this;
    //}
    
    // Only change code above this line
  }
  