'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class TransparentThenMissingFirstNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    nodes = nodes.slice(1);

    return nodes;
  }
}

module.exports = TransparentThenMissingFirstNode;

function second(array) { return array[1]; }
