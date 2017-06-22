'use strict';

const lexers = require('occam-lexers');

const EpsilonTerminalNode = require('../../common/node/terminal/epsilon');

const { ExtendedBNFLexer } = lexers,
      { specialSymbols } = ExtendedBNFLexer,
      { epsilon } = specialSymbols;

class EpsilonPart {
  parse(context, noWhitespace) {
    const epsilonTerminalNode = new EpsilonTerminalNode();

    return epsilonTerminalNode;
  }

  toString() {
    const string = epsilon;

    return string;
  }
}

module.exports = EpsilonPart;
