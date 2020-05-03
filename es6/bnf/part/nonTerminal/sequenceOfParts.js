"use strict";

const NonTerminalPart = require("../../part/nonTerminal");

class SequenceOfPartsPart extends NonTerminalPart {
  constructor(type, part) {
    super(type);

    this.part = part;
  }

  getPart() {
    return this.part;
  }
  
  asString(operatorString) {
    const partString = this.part.asString(),
          string = `${partString}${operatorString}`;

    return string;
  }

  clone(Part) { return super.clone(Part, this.part); }
}

module.exports = SequenceOfPartsPart;
