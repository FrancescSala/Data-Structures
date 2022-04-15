function bfs(graph, root) {
    var nodesLen = {};
  
    function queue() {
        this.elems = [];
        this.add = (elem) => this.elems.push(elem);
        this.remove = () => {
            if (this.isEmpty()) return undefined;
            return this.elems.shift();
        }; 
        this.isEmpty = () => this.elems.length === 0;
    }

    // initialize distances
    for (let i = 0; i < graph.length; i++) nodesLen[i] = Infinity;
    nodesLen[root] = 0;

    // Apply the algorithm    
    let q = new queue();   // here will put the nodes we are visiting
    let visited = [];      // an array of visited nodes, to prevent loops
    q.add(root);
    while (!q.isEmpty()) {
        let node = q.remove();
        visited.push(node);
        graph[node].forEach( (elem, index) => {
            if (elem !== 0 && !visited.includes(index)) { 
                q.add(index);
                nodesLen[index] = nodesLen[node] + 1;
            }
        });
    }
    return nodesLen;
  };
  
  var exBFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
  ];
  console.log(bfs(exBFSGraph, 1));
  console.log(bfs(exBFSGraph, 0));

  
