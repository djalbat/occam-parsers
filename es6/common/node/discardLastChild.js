'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class DiscardLastChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    var childNodes = arrayUtil.discardLast(nodes), ///
        discardLastChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardLastChildNode);

    nodes = [discardLastChildNode]; ///

    return nodes;
  }
}

module.exports = DiscardLastChildNode;
