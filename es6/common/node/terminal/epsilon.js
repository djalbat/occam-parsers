'use strict';

const lexers = require('occam-lexers');

const TerminalNode = require('../terminal'),
      EpsilonNodeParseTree = require('../../parseTree/epsilonNode');

const { specialSymbols } = lexers,
      { epsilon } = specialSymbols;

class EpsilonNode extends TerminalNode {
  getContent() {
    const content = epsilon;  ///

    return content;
  }

  isEpsilonNode() {
    const epsilonNode = true;
    
    return epsilonNode;
  }

  asParseTree(tokens) {
    const epsilonNodeParseTree = EpsilonNodeParseTree.fromNothing(),
          parseTree = epsilonNodeParseTree;  ///

    return parseTree;
  }

  static fromNothing() {
    const significantToken = null,
          epsilonNode = TerminalNode.fromSignificantToken(EpsilonNode, significantToken);

    return epsilonNode;
  }
}

module.exports = EpsilonNode;
