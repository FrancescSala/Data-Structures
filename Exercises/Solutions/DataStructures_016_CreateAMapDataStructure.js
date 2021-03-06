var Map = function() {
    this.collection = {};
    // Only change code below this line
    this.add = function(key,val) {
      //if (this.has(key)) throw Error('key already exists');
      this.collection[key] = val;
    };
    
    this.remove = function(key) {
      delete this.collection[key];
    };
    
    this.get = function(key) {
      return this.collection[key];
    };
    
    this.has = function(key) {
      return this.collection.hasOwnProperty(key);
    };

    /* 
      Alternatively, for has it could be used
      return this.collection[key] !== undefined
      but I do not like that option because if we do
      let myMap = new Map();
      myMap.add('myKey',undefined)
      myMap.has('myKey')   with return this.collection[key] !== undefined    would return false, wich is INCORRECT
      myMap.has('myKey')   with return this.collection.hasOwnProperty(key)   would return true,  which is CORRECT
      
    */
    
    this.values = function() {
      return Object.values(this.collection); 
    };
    
    this.clear = function() {
      this.collection = {};
    };
    
    this.size = function() {
      return this.size;
    };
    // Only change code above this line
  };
