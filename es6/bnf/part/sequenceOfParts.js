'use strict';

class SequenceOfPartsPart {
  constructor(part, noWhitespace = false, backtrackingDirection = null) {
    this.part = part;
    this.noWhitespace = noWhitespace;
    this.backtrackingDirection = backtrackingDirection;
  }

  getPart() {
    return this.part;
  }

  getNoWhitespace() {
    return this.noWhitespace;
  }
  
  getBacktrackingDirection() {
    return this.backtrackingDirection;
  }

  toString(operatorString) {
    const partString = part.toString(),
          string = `${partString}${operatorString}`;

    return string;
  }
}

module.exports = SequenceOfPartsPart;
