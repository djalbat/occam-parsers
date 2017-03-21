'use strict';

const arrayUtil = require('../../../arrayUtil'),
      NonTerminalNode = require('../nonTerminal');

class DiscardSecondChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = arrayUtil.discardSecond(nodes),
          discardSecondChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardSecondChildNode);

    return discardSecondChildNode;
  }
}

module.exports = DiscardSecondChildNode;
