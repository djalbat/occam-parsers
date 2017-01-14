'use strict';

var NonTerminalNode = require('../../bnf/node/nonTerminal');

class MissingSecondChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var firstNode = first(nodes),
        thirdNodeOnwards = thirdOnwards(nodes),
        childNodes = [].concat(firstNode).concat(thirdNodeOnwards),
        missingSecondChildNode = new MissingSecondChildNode(childNodes, productionName);

    nodes = [missingSecondChildNode]; ///

    return nodes;
  }
}

module.exports = MissingSecondChildNode;

function first(array) { return array[0]; }
function thirdOnwards(array) { return array.slice(2); }
