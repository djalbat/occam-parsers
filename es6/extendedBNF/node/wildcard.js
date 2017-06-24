'use strict';

const WildcardPart = require('../part/wildcard'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class WildcardNode extends NonTerminalNode {
  generatePart(noWhitespace) {
    const wildcardPart = new WildcardPart(noWhitespace);

    return wildcardPart;
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, WildcardNode); }
}

module.exports = WildcardNode;
