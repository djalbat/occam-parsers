'use strict';

const arrayUtil = require('../../../arrayUtil'),
      NonTerminalNode = require('../nonTerminal');

class DiscardLastChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = arrayUtil.discardLast(nodes), ///
          discardLastChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardLastChildNode);

    return discardLastChildNode;
  }
}

module.exports = DiscardLastChildNode;
