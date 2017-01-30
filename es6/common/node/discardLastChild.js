'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class DiscardLastChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var childNodes = arrayUtil.discardLast(nodes), ///
        discardLastChildNode = NonTerminalNode.fromChildNodesAndProductionName(childNodes, productionName, DiscardLastChildNode);

    nodes = [discardLastChildNode]; ///

    return nodes;
  }
}

module.exports = DiscardLastChildNode;
