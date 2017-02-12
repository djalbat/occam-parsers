'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class DiscardSecondChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    var childNodes = arrayUtil.discardSecond(nodes),
        discardSecondChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardSecondChildNode);

    nodes = [discardSecondChildNode]; ///

    return nodes;
  }
}

module.exports = DiscardSecondChildNode;
