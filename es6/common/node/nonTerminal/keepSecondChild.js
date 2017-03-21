'use strict';

const arrayUtil = require('../../../arrayUtil'),
      NonTerminalNode = require('../nonTerminal');

class KeepSecondChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = arrayUtil.keepSecond(nodes),
          keepSecondChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepSecondChildNode);

    return keepSecondChildNode;
  }
}

module.exports = KeepSecondChildNode;
