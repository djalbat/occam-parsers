'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class MissingFirstChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var secondNodeOnwards = secondOnwards(nodes),
        childNodes = secondNodeOnwards, ///
        missingFirstChildNode = new MissingFirstChildNode(childNodes, productionName);

    nodes = [missingFirstChildNode]; ///

    return nodes;
  }
}

module.exports = MissingFirstChildNode;

function secondOnwards(array) { return array.slice(1); }
