'use strict';

const lexers = require('occam-lexers');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { questionMark } = specialSymbols;

class OptionalPartPart {
  constructor(part) {
    this.part = part;
  }

  getPart() {
    return this.part;
  }

  parse(configuration, noWhitespace) {
    noWhitespace = false; ///

    let nodes = [];
    
    const part = this.getPart(),
          partNodeOrNodes = part.parse(configuration, noWhitespace),
          partParsed = (partNodeOrNodes !== null);

    if (partParsed) {
      nodes = partNodeOrNodes;
    }

    return nodes;
  }

  toString() {
    const operatorString = questionMark,  ///
          partString = this.part.toString(),
          string = `${partString}${operatorString}`;

    return string;
  }
}

module.exports = OptionalPartPart;
