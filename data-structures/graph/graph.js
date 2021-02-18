// This is the node class.
class Node {
  constructor(data) {
    this.data = data;
    this.adjacencySet = new Set();
  }
  addEdge(node) {
    this.adjacencySet.add(node)
  }
  getAdjacentVertices() {
    return this.adjacencySet;
  }
}

class Graph {
  constructor(directed = false) {
    this.numVertices = 0;
    this.directed = directed;
    this.dict = {}
  }

  addEdge(v1, v2, weight) {
    let p, q;
    if (v1 in this.dict) {
      p = this.dict[v1];
    } else {
      p = new Node(v1);
      this.dict[v1] = p;
      this.numVertices++;
    }
    if (v2 in this.dict) {
      q = this.dict[v2];
    } else {
      q = new Node(v2);
      this.dict[v2] = q;
      this.numVertices++;
    }
    p.addEdge(q);
  }
  stringify() {
    for (const [key, value] of Object.entries(this.dict)) {
      console.log(`${key}: ${[...value.adjacencySet].map(x => x.data)}`);
    }
  }
}


// This is the calling client I'm using.
graph = new Graph();
graph.addEdge(12, 13);
graph.addEdge(12, 14);
graph.addEdge(13, 15);
graph.addEdge(14, 6);
graph.stringify();
