'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class KeepFirstChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var childNodes = arrayUtil.keepFirst(nodes),
        keepFirstChildNode = NonTerminalNode.fromChildNodesAndProductionName(childNodes, productionName, KeepFirstChildNode);

    nodes = [keepFirstChildNode]; ///

    return nodes;
  }
}

module.exports = KeepFirstChildNode;
