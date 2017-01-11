'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class TransparentNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    return nodes;
  }
}

module.exports = TransparentNode;
