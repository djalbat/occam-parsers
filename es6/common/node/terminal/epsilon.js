'use strict';

const TerminalNode = require('../terminal'),
      EpsilonTerminalNodeParseTree = require('../../parseTree/terminalNode/epsilon');

class EpsilonTerminalNode extends TerminalNode {
  getContent() {
    const content = 'ε';
    
    return content;
  }

  parseTree(lines) {
    const epsilonTerminalNode = this,  ///
          epsilonTerminalNodeParseTree = EpsilonTerminalNodeParseTree.fromEpsilonTerminalNode(epsilonTerminalNode, lines),
          parseTree = epsilonTerminalNodeParseTree;  ///

    return parseTree;
  }
}

module.exports = EpsilonTerminalNode;
