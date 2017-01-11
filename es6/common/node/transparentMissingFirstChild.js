'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class TransparentMissingFirstChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var childNodes = nodes.slice(1);

    nodes = childNodes;

    return nodes;
  }
}

module.exports = TransparentMissingFirstChildNode;

function second(array) { return array[1]; }
