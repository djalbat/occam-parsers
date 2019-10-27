'use strict';

const EpsilonPart = require('../part/terminal/epsilon'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class EpsilonNode extends NonTerminalNode {
  generatePart(nonWhitespace, lookAhead) {
    const epsilonPart = new EpsilonPart(nonWhitespace);

    return epsilonPart;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(EpsilonNode, ruleName, childNodes); }
}

module.exports = EpsilonNode;
