'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class TransparentThenSecondNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var secondNode = second(nodes);

    nodes = [secondNode];

    return nodes;
  }
}

module.exports = TransparentThenSecondNode;

function second(array) { return array[1]; }
