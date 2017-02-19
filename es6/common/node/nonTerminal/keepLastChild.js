'use strict';

var arrayUtil = require('../../../arrayUtil'),
    NonTerminalNode = require('../nonTerminal');

class KeepLastChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    var childNodes = arrayUtil.keepLast(nodes),
        keepLastChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepLastChildNode);

    return keepLastChildNode;
  }
}

module.exports = KeepLastChildNode;
