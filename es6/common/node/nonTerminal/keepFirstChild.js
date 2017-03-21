'use strict';

const arrayUtil = require('../../../arrayUtil'),
      NonTerminalNode = require('../nonTerminal');

class KeepFirstChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = arrayUtil.keepFirst(nodes),
          keepFirstChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepFirstChildNode);

    return keepFirstChildNode;
  }
}

module.exports = KeepFirstChildNode;
