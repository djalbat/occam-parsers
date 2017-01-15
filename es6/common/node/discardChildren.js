'use strict';

var arrayUtil = require('../arrayUtil'),
    NonTerminalNode = require('../../bnf/node/nonTerminal');

class DiscardChildrenNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    nodes = arrayUtil.discardAll(nodes);

    return nodes;
  }
}

module.exports = DiscardChildrenNode;
