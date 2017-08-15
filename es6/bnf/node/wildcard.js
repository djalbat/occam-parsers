'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal'),
      WildcardPart = require('../part/terminal/wildcard');

class WildcardNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const wildcardPart = new WildcardPart(noWhitespace);

    return wildcardPart;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(WildcardNode, nodes, ruleName); }
}

module.exports = WildcardNode;
