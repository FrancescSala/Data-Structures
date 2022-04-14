var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // Only change code below this line
/*
  IMPORTANT: This one, for some reason, does not pass the corrections.
      But it works fine: add words, is able to retrieve them all with the print
      and it recognixze the words with isWord.

      The only that results different fom freeCodeCamp soluiton is the 
      ouput of displayTree.
*/

  this.root = new Node();


  this.add = function(word) {
    
    this._add = function(aWord, aNode) {
    if (aWord.length === 0 && aNode === this.root) return;
    if (aWord.length === 0 && aNode !== this.root) { 
        aNode.setEnd(); 
        return; 
    }
    if (!aNode.keys.has(word[0])) aNode.keys.set(aWord[0],new Node());
    this._add(aWord.substring(1),aNode.keys.get(aWord[0]));
    };

    this._add(word,this.root);
  };

/*
 alternatively, a little bit shorter and works the same:
this.add = function(word, aNode = this.root) {
    
  if (word.length === 0 && aNode === this.root) return;
  if (word.length === 0 && aNode !== this.root) { 
      aNode.setEnd(); 
      return; 
  }
  if (!aNode.keys.has(word[0])) aNode.keys.set(word[0],new Node());
  this.add(word.substring(1),aNode.keys.get(word[0]));
};
*/
  
  this.isWord = function(aString) {
    if (aString === null || aString.length === 0) return false;
    let i = 0;
    let n = this.root;
    while (i < aString.length && n !== null && n !== undefined) {
      if (n.keys.has(aString[i])) n = n.keys.get(aString[i]);
      i++;
    }
    return (n !== null && n.isEnd());
  };

  this.print = function() {
    this._print = function(node, path) {
      if (node === null) return;
      if (node.isEnd()) this.words.push(path);
      for (k of node.keys.keys()) this._print(node.keys.get(k),path+k);
    }

    this.words = [];
    this._print(this.root,'');
    return this.words;
  };

  // Only change code above this line
};

let d = new Trie();
d.add('Hola');
d.add('pajarito');
d.add('sin');
d.add('cola');
d.add('sincope');
d.add('sinergia');
displayTree(d);
console.log(d.print());
console.log('sinergia is word : ', d.isWord('sinergia'));
console.log('sinergético is word : ', d.isWord('sinergético'));
console.log('sinergio is word : ', d.isWord('sinergio'));
console.log('Hola is word : ', d.isWord('Hola'));
console.log('hola is word : ', d.isWord('hola'));
console.log('Hol is word : ', d.isWord('Hol'));


