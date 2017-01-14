'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class DiscardFirstChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var secondNodeOnwards = secondOnwards(nodes),
        childNodes = secondNodeOnwards, ///
        discardFirstChildNode = new DiscardFirstChildNode(childNodes, productionName);

    nodes = [discardFirstChildNode]; ///

    return nodes;
  }
}

module.exports = DiscardFirstChildNode;

function secondOnwards(array) { return array.slice(1); }
