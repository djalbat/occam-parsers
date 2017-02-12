'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class DiscardFirstChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    var childNodes = arrayUtil.discardFirst(nodes), ///
        discardFirstChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardFirstChildNode);

    nodes = [discardFirstChildNode]; ///

    return nodes;
  }
}

module.exports = DiscardFirstChildNode;
