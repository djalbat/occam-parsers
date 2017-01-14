'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class IncludeDirectiveNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var thirdNode = third(nodes),
        childNodes = [thirdNode],
        includeDirectiveNode = new IncludeDirectiveNode(childNodes, productionName);

    nodes = [includeDirectiveNode]; ///

    return nodes;
  }
}

module.exports = IncludeDirectiveNode;

function third(array) { return array[2]; }
