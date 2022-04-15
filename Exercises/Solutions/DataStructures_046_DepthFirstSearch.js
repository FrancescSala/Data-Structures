function dfs(graph, root) {
      
    function stack() {
        this.elems = [];
        this.push = (elem) => this.elems.push(elem);
        this.pop = () => {
            if (this.isEmpty()) return undefined;
            return this.elems.pop();
        }; 
        this.isEmpty = () => this.elems.length === 0;
    }

    // initialize distances
    let reachable = []; // the array of reachable nodes

    // Apply the algorithm    
    let s = new stack();   // here will put the nodes we are visiting
    let visited = [];      // an array of visited nodes, to prevent loops
    s.push(root);
    while (!s.isEmpty()) {
        let node = s.pop();
        visited.push(node);
        graph[node].forEach( (elem, index) => {
            if (elem !== 0 && !visited.includes(index)) s.push(index);
        });
        reachable.push(node);
    }
    return reachable;
  };
  
 

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));