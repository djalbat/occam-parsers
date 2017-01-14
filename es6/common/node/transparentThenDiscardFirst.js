'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class TransparentThenDiscardFirstNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    nodes = nodes.slice(1);

    return nodes;
  }
}

module.exports = TransparentThenDiscardFirstNode;

function second(array) { return array[1]; }
