'use strict';

class SequenceOfPartsPart {
  constructor(part, noWhitespace = false) {
    this.part = part;
    this.noWhitespace = noWhitespace;
  }

  getPart() {
    return this.part;
  }

  getNoWhitespace() {
    return this.noWhitespace;
  }

  toString(operatorString) {
    const partString = part.toString(),
          string = `${partString}${operatorString}`;

    return string;
  }
}

module.exports = SequenceOfPartsPart;
