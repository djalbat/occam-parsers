'use strict';

const lexers = require('occam-lexers');

const TerminalNode = require('../terminal'),
      EpsilonNodeParseTree = require('../../parseTree/epsilonNode');

const { specialSymbols } = lexers,
      { epsilon } = specialSymbols;

class EpsilonNode extends TerminalNode {
  constructor() {
    const significantToken = null;

    super(significantToken);
  }

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
}

module.exports = EpsilonNode;
