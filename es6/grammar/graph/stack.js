'use strict';

class Stack {
  constructor() {
    this.vertices = [];
  }
  
  pop() {
    const vertex = this.vertices.pop(),
          stacked = false;
    
    vertex.setStacked(stacked);
    
    return vertex;
  }
  
  push(vertex) {
    const stacked = true;
    
    vertex.setStacked(stacked);
    
    this.vertices.push(vertex);
  }
}

module.exports = Stack;
