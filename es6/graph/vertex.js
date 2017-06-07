'use strict';

class Vertex {
  constructor(name, successorVertices) {
    this.name = name;
    this.successorVertices = successorVertices;

    this.index = undefined;
    this.lowLink = undefined;
    this.onStack = undefined;
    this.visited = undefined;

    this.reset(); ///
  }

  getName() {
    return this.name;
  }

  getSuccessorVertices() {
    return this.successorVertices;
  }

  getIndex() {
    return this.index;
  }

  getLowLink() {
    return this.lowLink;
  }

  isOnStack() {
    return this.onStack;
  }

  isVisited() {
    return this.visited;
  }

  setSuccessorVertices(successorVertices) {
    this.successorVertices =  successorVertices;
  }

  setIndex(index) {
    this.index = index;
  }

  setLowLink(lowLink) {
    this.lowLink = lowLink;
  }

  setOnStack(onStack) {
    this.onStack = onStack;
  }

  setVisited(visited) {
    this.visited = visited;
  }

  reset() {
    this.index = -1;
    this.lowLink = -1;
    this.onStack = false;
    this.visited = false;
  }

  static fromName(name) {
    const successorVertices = [],
          vertex = new Vertex(name, successorVertices);

    return vertex;
  }
}

module.exports = Vertex;