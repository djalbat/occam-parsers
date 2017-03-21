'use strict';

const arrayUtil = require('../../../arrayUtil'),
      NonTerminalNode = require('../nonTerminal');

class DiscardFirstChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = arrayUtil.discardFirst(nodes), ///
          discardFirstChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardFirstChildNode);

    return discardFirstChildNode;
  }
}

module.exports = DiscardFirstChildNode;
