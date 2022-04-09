var Map = function() {
  this.collection = {};
  // Only change code below this line
  this.add = function(key,val) {
    console.log(this.size());
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
    // I rather do not like return this.collection[key] !== undefined
    // because if we added .add(key,undefined), then .has() would INCORRETLY return false
    // However, with the uncommented line this case is CORRECTLY managed
  };
  
  this.values = function() {
    return Object.values(this.collection);  
  };
  
  this.clear = function() {
    this.collection = {};
  };
  
  this.size = function() {
    return Object.keys(this.collection).length;
  };
  // Only change code above this line
};

