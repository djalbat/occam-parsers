'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class SecondChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var secondNode = second(nodes);

    nodes = [secondNode];  ///

    return nodes;
  }
}

module.exports = SecondChildNode;

function second(array) { return array[1]; }
