'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      EpsilonTerminalNode = require('../../../common/node/terminal/epsilon');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { epsilon } = specialSymbols;

class EpsilonPart extends TerminalPart {
  parse(configuration, noWhitespace) {
    const epsilonTerminalNode = new EpsilonTerminalNode();

    return epsilonTerminalNode;
  }

  toString() {
    const string = epsilon; ///

    return string;
  }
}

module.exports = EpsilonPart;
