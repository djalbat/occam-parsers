'use strict';

class Cycle {
  constructor(vertices) {
    this.vertices = vertices;
  }

  static fromComponent(component) {
    const vertices = component.getVertices(),
          cycle = new Cycle(vertices);
    
    return cycle;
  }
}

module.exports = Cycle;
