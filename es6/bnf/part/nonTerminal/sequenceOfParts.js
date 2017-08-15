'use strict';

const NonTerminalPart = require('../../part/nonTerminal');

class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, part) {
    super(type);

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
