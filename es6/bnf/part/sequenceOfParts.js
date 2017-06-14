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
    const noWhitespaceString = this.noWhitespace ?
                                '<NO_WHITESPACE>' :
                                  '',
          partString = this.part.toString(),
          string = `${noWhitespaceString}${partString}${operatorString}`;

    return string;
  }
}

module.exports = SequenceOfPartsPart;
