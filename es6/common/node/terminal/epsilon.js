'use strict';

const lexers = require('occam-lexers');

const TerminalNode = require('../terminal');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { epsilon } = specialSymbols;

class EpsilonTerminalNode extends TerminalNode {
  constructor() {
    const significantToken = null,
          line = null;

    super(significantToken, line);
  }

  getContent() {
    const content = epsilon;  ///

    return content;
  }
}

module.exports = EpsilonTerminalNode;
