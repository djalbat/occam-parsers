'use strict';

class Component {
  constructor(vertices) {
    this.vertices = vertices;
  }
  
  getVertices() {
    return this.vertices;
  }

  getFirstVertex() {
    const firstVertex = first(this.vertices);
    
    return firstVertex;
  }
  
  isCyclic() {
    const verticesLength = this.vertices.length,
          cyclic = (verticesLength > 1);  ///
    
    return cyclic;
  }

  isNonCyclic() {
    const cyclic = this.isCyclic(),
          nonCyclic = !cyclic;
    
    return nonCyclic;
  }
  
  mapVertices(callback) { return this.vertices.map(callback); }
  
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

function first(array) { return array[0]; }
