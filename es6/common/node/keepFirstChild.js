'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class KeepFirstChildNode extends NonTerminalNode {
  static fromNodesAndProductionName(nodes, productionName) {
    var childNodes = arrayUtil.keepFirst(nodes),
        keepFirstChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepFirstChildNode);

    nodes = [keepFirstChildNode]; ///

    return nodes;
  }
}

module.exports = KeepFirstChildNode;
