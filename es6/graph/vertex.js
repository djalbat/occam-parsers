'use strict';

class Vertex {
  constructor(name, index, stacked, visited, lowestIndex, successorVertices) {
    this.name = name;
    this.index = index;
    this.stacked = stacked;
    this.visited = visited;
    this.lowestIndex = lowestIndex;
    this.successorVertices = successorVertices;
  }

  getName() {
    return this.name;
  }

  getIndex() {
    return this.index;
  }

  isStacked() {
    return this.stacked;
  }

  isVisited() {
    return this.visited;
  }

  getLowestIndex() {
    return this.lowestIndex;
  }

  getSuccessorVertices() {
    return this.successorVertices;
  }
  
  isUnindexed() {
    const unindexed = (this.index < 0); ///
    
    return unindexed;
  }
  
  isLowest() {
    const lowest = (this.index === this.lowestIndex); ///
    
    return lowest;
  }

  setIndex(index) {
    this.index = index;
  }

  setStacked(stacked) {
    this.stacked = stacked;
  }

  setVisited(visited) {
    this.visited = visited;
  }
  
  setLowestIndex(lowestIndex) {
    this.lowestIndex = lowestIndex;
  }

  setSuccessorVertices(successorVertices) {
    this.successorVertices =  successorVertices;
  }
  
  updateLowestIndex(lowestIndex) {
    if (lowestIndex < this.lowestIndex) {
      this.lowestIndex = lowestIndex;
    }
  }

  static fromName(name) {
    const index = -1,
          stacked = false,
          visited = false,
          lowestIndex = -1,
          successorVertices = [],
          vertex = new Vertex(name, index, stacked, visited, lowestIndex, successorVertices);

    return vertex;
  }
}

module.exports = Vertex;
