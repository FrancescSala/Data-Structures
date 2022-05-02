class Set {
    constructor() {
      // Dictionary will hold the items of our set
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
  
    // Only change code below this line
    add(element) {
        if (this.has(element)) return false;
        this.dictionary[element] = element;
        this.length++; 
        // it would be more reliable: this.length = Object.keys(this.dictionary).length;
        return true;
    }

    remove(element) {
        if (!this.has(element)) return false;
        delete this.dictionary[element];
        this.length--;
        // it would be more reliable: this.length = Object.keys(this.dictionary).length;
        return true;
    }
  
    size() {
        return this.length;
    }
    // Only change code above this line
  }

 /*

// Personally I prefer this implementation, with an array
// also because in the skeleton proposed by freecodecamp the constructor
// does not have any parameter - empty constructor - , which does not 
// match  the description of the exercise.
class Set {
    constructor(arr) {
        if (!Array.isArray(arr)) throw Error('An array was expected as argument');
        this.collection = JSON.parse(JSON.stringify(arr));
        // eliminate possible repetitions
        this.collection = this.collection.filter((x,index,arr) => arr.indexOf(x) === index);
    }

    has(item) {
        return this.collection.includes(item);
    }

    add(item) {
        if (this.has(item)) return false;
        this.collection.push(item);
        return true;
    }

    remove(item) {
        if (!this.has(item)) return false;
        this.collection.splice(this.collection.indexOf(item),1);
        return true;
    }

    size() {
        return this.collection.length;
    }
}

*/
