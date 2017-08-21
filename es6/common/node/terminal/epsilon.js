'use strict';

const lexers = require('occam-lexers');

const TerminalNode = require('../terminal'),
      EpsilonNodeParseTree = require('../../parseTree/epsilonNode');

const { BNFLexer } = lexers,
      { specialSymbols } = BNFLexer,
      { epsilon } = specialSymbols;

class EpsilonNode extends TerminalNode {
  constructor() {
    const significantToken = null,
          line = null;

    super(significantToken, line);
  }
  
  isEpsilonNode() {
    const epsilonNode = true;
    
    return epsilonNode;
  }

  getContent() {
    const content = epsilon;  ///

    return content;
  }

  asParseTree(lines) {
    const epsilonNodeParseTree = EpsilonNodeParseTree.fromNothing(),
          parseTree = epsilonNodeParseTree;  ///

    return parseTree;
  }
}

module.exports = EpsilonNode;
