'use strict';

class LabelNode {
  static fromNodes(nodes, productionName) {
    var childNodes = nodes, ///
        firstChildNode = first(childNodes),
        terminalNode = firstChildNode,  ///
        significantToken = terminalNode.getSignificantToken(),
        significantTokenType = 'label'; ///

    significantToken.setType(significantTokenType);

    nodes = [terminalNode]; ///

    return nodes;
  }
}

module.exports = LabelNode;

function first(array) { return array[0]; }
