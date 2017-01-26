'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class DiscardChildrenNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    nodes = arrayUtil.discardAll(nodes);

    return nodes;
  }
}

module.exports = DiscardChildrenNode;
