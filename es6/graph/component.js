'use strict';

class Component {
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
  
  static fromStackAndVertex(stack, vertex) {
    const stackVertices = [];
    
    let stackVertex;

    do {
      stackVertex = stack.pop();

      stackVertices.push(stackVertex)
    } while (stackVertex !== vertex);
    
    const vertices = stackVertices, /// 
          component = new Component(vertices);

    return component;
  }
}

module.exports = Component;
