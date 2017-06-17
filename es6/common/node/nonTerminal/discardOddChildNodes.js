'use strict';

const arrayUtil = require('../../../util/array'),
      NonTerminalNode = require('../nonTerminal');

class DiscardOddChildNodes extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = arrayUtil.discardOdd(nodes), ///
          discardOddChildNodes = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardOddChildNodes);

    return discardOddChildNodes;
  }
}

module.exports = DiscardOddChildNodes;
