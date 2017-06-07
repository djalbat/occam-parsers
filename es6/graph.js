'use strict';

const Vertex = require('./graph/vertex');

class Graph {
  constructor () {
    this.vertexmap = {};
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
  
  getCycles() {
    const stronglyConnectedComponents = this.getStronglyConnectedComponents(),
          cycles = stronglyConnectedComponents.reduce(function(cycles, stronglyConnectedComponent) {
            const stronglyConnectedComponentLength = stronglyConnectedComponent.length;
            
            if (stronglyConnectedComponentLength > 1) {
              const cycle = stronglyConnectedComponent;
              
              cycles.push(cycle);
            }
            
            return cycles;
          }, []);
    
    return cycles;
  }

  getStronglyConnectedComponents() {
    const names = Object.keys(this.vertexmap),
          vertices = names.map(function(name) {
            const vertex = this.vertexmap[name];

            vertex.reset();

            return vertex;
          }.bind(this)),
          stack = [],
          stronglyConnectedComponents = [];

    let index = 0;

    function stronglyConnect(vertex) {
      const lowestIndex = index;  ///

      vertex.setIndex(index);

      vertex.setLowestIndex(lowestIndex);

      index++;

      stack.push(vertex);

      const onStack = true;

      vertex.setOnStack(onStack);

      const successorVertices = vertex.getSuccessorVertices();

      successorVertices.forEach(function(successorVertex) {
        const successorVertexIndex = successorVertex.getIndex(),
              successorVertexOnStack = successorVertex.isOnStack(),
              successVertexUnindexed = (successorVertexIndex < 0); ///

        if (successVertexUnindexed) {
          stronglyConnect(successorVertex);
        }

        if ((successVertexUnindexed) || successorVertexOnStack){
          const successorVertexLowestIndex = successorVertex.getLowestIndex();

          let vertexLowestIndex = vertex.getLowestIndex();

          vertexLowestIndex = Math.min(vertexLowestIndex, successorVertexLowestIndex);

          vertex.setLowestIndex(vertexLowestIndex);
        }
      });

      const vertexIndex = vertex.getIndex(),
            vertexLowestIndex = vertex.getLowestIndex() ;

      if (vertexIndex === vertexLowestIndex) {
        const stronglyConnectedComponent = [];

        let stackVertex;

        do {
          stackVertex = stack.pop();

          const stackVertexOnStack = false;
          
          stackVertex.setOnStack(stackVertexOnStack);

          stronglyConnectedComponent.push(stackVertex);
        } while (stackVertex !== vertex);

        stronglyConnectedComponents.push(stronglyConnectedComponent);
      }
    }

    vertices.forEach(function(vertex) {
      const vertexIndex = vertex.getIndex(),
            vertexUnindexed = (vertexIndex < 0);

      if (vertexUnindexed) {
        stronglyConnect(vertex);
      }
    });

    return stronglyConnectedComponents;
  }
}

module.exports = Graph;
