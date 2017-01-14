'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class DiscardSecondChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var firstNode = first(nodes),
        thirdNodeOnwards = thirdOnwards(nodes),
        childNodes = [].concat(firstNode).concat(thirdNodeOnwards),
        discardSecondChildNode = new DiscardSecondChildNode(childNodes, productionName);

    nodes = [discardSecondChildNode]; ///

    return nodes;
  }
}

module.exports = DiscardSecondChildNode;

function first(array) { return array[0]; }
function thirdOnwards(array) { return array.slice(2); }
