var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

var HashTable = function() {
  this.collection = {};
  // Only change code below this line

  // I will store h  --->  [key,value]   (that is, arrays)
  // in case of collision   h  ---> [key1,value,key2,value2,...]
  this.add = function(key,value) {
     let h = hash(key);
     if (this.collection.hasOwnProperty(h)) {
        let i = this.collection[h].indexOf(key);
        if (i === -1) {
            this.collection[h].push(key);
            this.collection[h].push(value);
        } else this.collection[h][++i] = value;
     } 
     else this.collection[h] = [key, value];
  };

  this.remove = function(key) {
    let h = hash(key);
    if (this.collection.hasOwnProperty(h)) {
        let i = this.collection[h].indexOf(key);
        if (i !== -1) this.collection[h].splice(i,2);
        if (this.collection[h].length === 0) delete this.collection[h];
    }
  };

  this.lookup = function(key) {
     let h = hash(key);
     if (!this.collection.hasOwnProperty(h)) return null;
     let i = this.collection[h].indexOf(key);
     return (i === -1)? null: this.collection[h][i+1]; 
  };
  // Only change code above this line
};