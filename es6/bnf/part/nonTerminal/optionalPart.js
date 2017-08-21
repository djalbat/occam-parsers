'use strict';

const lexers = require('occam-lexers');

const NonTerminalPart = require('../../part/nonTerminal');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { questionMark } = specialSymbols;

class OptionalPartPart extends NonTerminalPart {
  constructor(part) {
    const type = OptionalPartPart.type;

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
          partParsed = (partNodeOrNodes !== null);

    if (partParsed) {
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

OptionalPartPart.type = 'OptionalPart';

module.exports = OptionalPartPart;
