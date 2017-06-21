'use strict';

const WildcardPart = require('../part/wildcard'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class WildcardSymbolNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    const WildcardPart = Parts['WildcardPart'],
          wildcardPart = new WildcardPart(noWhitespace);

    return wildcardPart;
  }

  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, WildcardSymbolNode); }
}

module.exports = WildcardSymbolNode;
