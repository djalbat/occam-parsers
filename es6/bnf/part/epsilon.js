'use strict';

const lexers = require('occam-lexers');

const EpsilonTerminalNode = require('../../common/node/terminal/epsilon');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { epsilon } = specialSymbols;

class EpsilonPart {
  parse(configuration, noWhitespace) {
    const epsilonTerminalNode = new EpsilonTerminalNode();

    return epsilonTerminalNode;
  }

  getNoWhitespace() {
    return this.noWhitespace; ///
  }
  
  toString() {
    const string = epsilon; ///

    return string;
  }
}

module.exports = EpsilonPart;
