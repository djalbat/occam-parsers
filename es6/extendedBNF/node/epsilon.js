'use strict';

const EpsilonPart = require('../part/epsilon'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class EpsilonNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const epsilonPart = new EpsilonPart(noWhitespace);

    return epsilonPart;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, EpsilonNode); }
}

module.exports = EpsilonNode;
