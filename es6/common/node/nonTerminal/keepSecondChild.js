'use strict';

var arrayUtil = require('../../../arrayUtil'),
    NonTerminalNode = require('../nonTerminal');

class KeepSecondChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    var childNodes = arrayUtil.keepSecond(nodes),
        keepSecondChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepSecondChildNode);

    return keepSecondChildNode;
  }
}

module.exports = KeepSecondChildNode;
