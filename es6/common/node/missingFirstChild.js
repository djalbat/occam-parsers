'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class MissingFirstChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var childNodes = nodes.slice(1), ///
        missingFirstChildNode = new MissingFirstChildNode(childNodes, productionName);

    nodes = [missingFirstChildNode]; ///

    return nodes;
  }
}

module.exports = MissingFirstChildNode;
