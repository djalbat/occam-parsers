'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('../../bnf/node/nonTerminal');

class DiscardSecondChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var childNodes = arrayUtil.discardSecond(nodes),
        discardSecondChildNode = new DiscardSecondChildNode(childNodes, productionName);

    nodes = [discardSecondChildNode]; ///

    return nodes;
  }
}

module.exports = DiscardSecondChildNode;
