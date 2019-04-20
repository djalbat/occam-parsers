'use strict';

const lexers = require('occam-lexers');

const NonTerminalPart = require('../../part/nonTerminal');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { questionMark } = specialSymbols;

const type = 'OptionalPart';

class OptionalPartPart extends NonTerminalPart {
  constructor(part) {
    super(type);

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
          parsed = (partNodeOrNodes !== null);

    if (parsed) {
      nodes = partNodeOrNodes;
    }

    return nodes;
  }

  asString() {
    const operatorString = questionMark,  ///
          partString = this.part.asString(),
          string = `${partString}${operatorString}`;

    return string;
  }
}

Object.assign(OptionalPartPart, {
  type
});

module.exports = OptionalPartPart;
