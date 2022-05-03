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
  // Only change code below this line
  difference(anotherSet) {
      let a = this.values();
      a = a.filter(elem => !anotherSet.has(elem));
      let s = new Set();
      for (let elem of a) s.add(elem);
      return s;
  } 
  // Only change code above this line
}

/*
     ATTENTION! My preference would have been:
     // 1. To modify the constructor.
     Sow it accepts let A = new Set();  with no arguments
     But also accepts let A = new Set([1,2,3,5,0,2]);  with an array of elements as argument
     In this way it accpets what was in the description of exercise 'Create a Set'
  
     constructor(arr) {
      // This will hold the set
      this.dictionary = {};
      this.length = 0;
      if (arguments.length !== 0)
        for (let elem of arr) this.add(elem); 
    }
     // 2. And then, having that constructor, to implement difference like this:

    difference(anotherSet) {
      let a = this.values();
      return new Set(a.filter(elem => !anotherSet.has(elem)));  // I can do this because I modified the constructor
  } 
*/
