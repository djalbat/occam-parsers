'use strict';

const Cycle = require('./graph/cycle'),
      Stack = require('./graph/stack'),
      Vertex = require('./graph/vertex'),
      StronglyConnectedComponent = require('./graph/stronglyConnectedComponent');

class Graph {
  constructor () {
    this.vertexmap = {};
  }
  
  getCycles() {
    const stronglyConnectedComponents = this.getStronglyConnectedComponents(),
          cycles = stronglyConnectedComponents.reduce(function(cycles, stronglyConnectedComponent) {
            const stronglyConnectedComponentCyclic = stronglyConnectedComponent.isCyclic();
            
            if (stronglyConnectedComponentCyclic) {
              const cycle = Cycle.fromStronglyConnectedComponent(stronglyConnectedComponent);
              
              cycles.push(cycle);
            }
            
            return cycles;
          }, []);
    
    return cycles;
  }
  
  getVertices() {
    const names = Object.keys(this.vertexmap),
          vertices = names.map(function(name) {
            const vertex = this.vertexmap[name];
  
            return vertex;
          }.bind(this));
    
    return vertices;        
  }

  getStronglyConnectedComponents() {
    const stack = new Stack(),
          vertices = this.getVertices(),
          stronglyConnectedComponents = [];

    let index = 0;

    function stronglyConnectVertex(vertex) {
      const lowestIndex = index;  ///

      vertex.setIndex(index);

      vertex.setLowestIndex(lowestIndex);

      index++;

      stack.push(vertex);

      const successorVertices = vertex.getSuccessorVertices();

      successorVertices.forEach(function(successorVertex) {
        const successorVertexUnindexed = successorVertex.isUnindexed(),
              successorVertexNotStronglyConnected = successorVertexUnindexed;  ///

        if (successorVertexNotStronglyConnected) {
          stronglyConnectVertex(successorVertex);

          const successorVertexLowestIndex = successorVertex.getLowestIndex();

          vertex.updateLowestIndex(successorVertexLowestIndex);
        } else {
          const successorVertexStacked = successorVertex.isStacked();

          if (successorVertexStacked) {
            const successorVertexIndex = successorVertex.getIndex();

            vertex.updateLowestIndex(successorVertexIndex);
          }
        }
      });

      const vertexLowest = vertex.isLowest();

      if (vertexLowest) {
        const stronglyConnectedComponent = StronglyConnectedComponent.fromStackUpToAndIncludingVertex(stack, vertex);

        stronglyConnectedComponents.push(stronglyConnectedComponent);
      }
    }

    vertices.forEach(function(vertex) {
      const vertexUnindexed = vertex.isUnindexed();

      if (vertexUnindexed) {
        stronglyConnectVertex(vertex);
      }
    });

    return stronglyConnectedComponents;
  }

  addVertex(name, descendantVertexNames) {
    let successorVertices = descendantVertexNames.map(function(descendantVertexName) {
      const successorVertexName = descendantVertexName;  ///

      let successorVertex = this.vertexmap[successorVertexName];

      if (successorVertex === undefined) {
        successorVertex = Vertex.fromName(successorVertexName);

        this.vertexmap[successorVertexName] = successorVertex;
      }

      return successorVertex;
    }.bind(this));

    let vertex = this.vertexmap[name];

    if (vertex === undefined) {
      vertex = Vertex.fromName(name);

      this.vertexmap[name] = vertex;
    }

    successorVertices = successorVertices.concat([]).reverse(); ///

    vertex.setSuccessorVertices(successorVertices);
  }
}

module.exports = Graph;
