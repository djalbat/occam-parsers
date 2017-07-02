'use strict';

const lexers = require('occam-lexers');

const TerminalNode = require('../terminal'),
      EpsilonTerminalNodeParseTree = require('../../parseTree/terminalNode/epsilon');

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

  generateParseTree(lines) {
    const epsilonTerminalNode = this,  ///
          epsilonTerminalNodeParseTree = EpsilonTerminalNodeParseTree.fromEpsilonTerminalNode(epsilonTerminalNode, lines),
          parseTree = epsilonTerminalNodeParseTree;  ///

    return parseTree;
  }
}

module.exports = EpsilonTerminalNode;
