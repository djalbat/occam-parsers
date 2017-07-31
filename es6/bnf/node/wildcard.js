'use strict';

const WildcardPart = require('../part/wildcard'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class WildcardNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const wildcardPart = new WildcardPart(noWhitespace);

    return wildcardPart;
  }

  static fromNodesAndRuleName(nodes, ruleName) { return NonTerminalNode.fromNodesAndRuleName(WildcardNode, nodes, ruleName); }
}

module.exports = WildcardNode;
