'use strict';

class Edge {
  constructor(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
  }

  getFirstName() {
    return this.firstName;
  }
  
  getSecondName() {
    return this.secondName;
  }
}

module.exports = Edge;
