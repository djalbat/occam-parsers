'use strict';

const arrayUtil = require('../../../arrayUtil'),
      NonTerminalNode = require('../nonTerminal');

class KeepLastChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = arrayUtil.keepLast(nodes),
          keepLastChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepLastChildNode);

    return keepLastChildNode;
  }
}

module.exports = KeepLastChildNode;
