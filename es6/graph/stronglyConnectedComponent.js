'use strict';

class StronglyConnectedComponent {
  constructor(vertices) {
    this.vertices = vertices;
  }
  
  getVertices() {
    return this.vertices;
  }
  
  isCyclic() {
    const verticesLength = this.vertices.length,
          cyclic = (verticesLength > 1);  ///
    
    return cyclic;
  }
  
  static fromStackUpToAndIncludingVertex(stack, vertex) {
    const stackVertices = [];
    
    let stackVertex;

    do {
      stackVertex = stack.pop();

      stackVertices.push(stackVertex)
    } while (stackVertex !== vertex);
    
    const vertices = stackVertices, /// 
          stronglyConnectedComponent = new StronglyConnectedComponent(vertices);

    return stronglyConnectedComponent;
  }
}

module.exports = StronglyConnectedComponent;
