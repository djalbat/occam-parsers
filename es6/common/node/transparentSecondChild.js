'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class TransparentSecondChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var childNodes = nodes, ///
        secondChildNode = second(childNodes);

    nodes = [secondChildNode];

    return nodes;
  }
}

module.exports = TransparentSecondChildNode;

function second(array) { return array[1]; }
