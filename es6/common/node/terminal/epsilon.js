'use strict';

const TerminalNode = require('../terminal'),
      EpsilonTerminalNodeParseTree = require('../../parseTree/terminalNode/epsilon');

class EpsilonTerminalNode extends TerminalNode {
  constructor() {
    const significantToken = null,
          line = null;
    
    super(significantToken, line);
  }

  getContent() {
    const content = 'ε';
    
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
