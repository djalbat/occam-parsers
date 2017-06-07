'use strict';

const Vertex = require('./graph/vertex');

class Graph {
  constructor () {
    this.descendantVertexMap = {};
  }
  
  addVertex(vertexName, descendantVertexNames) {
    descendantVertexNames = guaranteeArray(descendantVertexNames);  ///

    const successorVertices = descendantVertexNames.map(function(descendantVertexName) {
      let successorVertex = this.descendantVertexMap[descendantVertexName];

      if (successorVertex === undefined) {
        const successorVertexName = descendantVertexName;  ///

        successorVertex = Vertex.fromName(successorVertexName);

        this.descendantVertexMap[successorVertexName] = successorVertex;
      }

      return successorVertex;
    }.bind(this));

    let vertex = this.descendantVertexMap[vertexName];

    if (vertex === undefined) {
      vertex = Vertex.fromName(vertexName);

      this.descendantVertexMap[vertexName] = vertex;
    }

    const vertexSuccessVertices = successorVertices.concat([]).reverse(); ///

    vertex.setSuccessorVertices(vertexSuccessVertices);

    return this;  ///
  }

  getStronglyConnectedComponents() {
    const descendantVertexNames = Object.keys(this.descendantVertexMap),
          descendantVertices = descendantVertexNames.map(function(descendantVertexName) {
            const descendantVertex = this.descendantVertexMap[descendantVertexName];

            descendantVertex.reset();

            return descendantVertex;
          }.bind(this));

    var index = 0,
        stack = [],
        stronglyConnectedComponents = [];

    function stronglyConnect(vertex) {
      const lowLink = index;  ///

      vertex.setIndex(index);

      vertex.setLowLink(lowLink);

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
          const successorVertexLowLink = successorVertex.getLowLink();

          let vertexLowLink = vertex.getLowLink();

          vertexLowLink = Math.min(vertexLowLink, successorVertexLowLink);

          vertex.setLowLink(vertexLowLink);
        }
      });

      const vertexIndex = vertex.getIndex(),
            vertexLowLink = vertex.getLowLink() ;

      if (vertexIndex === vertexLowLink) {
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

    descendantVertices.forEach(function(descendantVertex) {
      const descendantVertexIndex = descendantVertex.getIndex(),
            descendantVertexUnindexed = (descendantVertexIndex < 0);

      if (descendantVertexUnindexed) {
        stronglyConnect(descendantVertex);
      }
    });

    return stronglyConnectedComponents;
  }
}

module.exports = Graph;

function guaranteeArray(arrayOrElement) {
  return (arrayOrElement instanceof Array) ?
            arrayOrElement :
              [arrayOrElement];
}
