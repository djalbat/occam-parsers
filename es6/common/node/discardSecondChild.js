'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class DiscardSecondChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var childNodes = arrayUtil.discardSecond(nodes),
        discardSecondChildNode = NonTerminalNode.fromChildNodesAndProductionName(childNodes, productionName, DiscardSecondChildNode);

    nodes = [discardSecondChildNode]; ///

    return nodes;
  }
}

module.exports = DiscardSecondChildNode;
