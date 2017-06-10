'use strict';

const Cycle = require('./graph/cycle'),
      Stack = require('./graph/stack'),
      Vertex = require('./graph/vertex'),
      Component = require('./graph/component');

class Graph {
  constructor () {
    this.vertexmap = {};
  }
  
  getCycles() {
    const components = this.getComponents(),
          cycles = components.reduce(function(cycles, component) {
            const componentCyclic = component.isCyclic();
            
            if (componentCyclic) {
              const cycle = Cycle.fromComponent(component);
              
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

  getComponents() {
    const stack = new Stack(),
          vertices = this.getVertices(),
          components = [];

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
        const component = Component.fromStackAndVertex(stack, vertex);

        components.push(component);
      }
    }

    vertices.forEach(function(vertex) {
      const vertexUnindexed = vertex.isUnindexed();

      if (vertexUnindexed) {
        stronglyConnectVertex(vertex);
      }
    });

    return components;
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

  static fromUnitRulesProductions(unitRulesProductions) {
    const graph = new Graph();
  
    unitRulesProductions.forEach(function(unitRulesProduction) {
      const productionName = unitRulesProduction.getName(),
            productionNames = unitRulesProduction.getProductionNames(),
            vertexName = productionName,  ///
            descendantVertexNames = productionNames; ///
  
      graph.addVertex(vertexName, descendantVertexNames);
    });
  
    return graph;
  }  
}

module.exports = Graph;
