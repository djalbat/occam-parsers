'use strict';

class SequenceOfPartsPart {
  constructor(part) {
    this.part = part;
  }

  getPart() {
    return this.part;
  }
  
  toString(operatorString) {
    const partString = this.part.toString(),
          string = `${partString}${operatorString}`;

    return string;
  }
}

module.exports = SequenceOfPartsPart;
