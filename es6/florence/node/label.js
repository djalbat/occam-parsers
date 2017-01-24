'use strict';

var TerminalNode = require('../../bnf/node/terminal');

class LabelNode extends TerminalNode {
  update() {
    var productionName = this.getProductionName(),
        significantToken = this.getSignificantToken(),
        significantTokenType = productionName;  ///

    significantToken.setType(significantTokenType);
  }

  static fromNodes(nodes, productionName) {
    var firstNode = first(nodes),
        terminalNode = firstNode, ///
        significantToken = terminalNode.getSignificantToken(),
        labelNode = new LabelNode(significantToken, productionName);

    nodes = [labelNode]; ///

    return nodes;
  }
}

module.exports = LabelNode;

function first(array) { return array[0]; }
