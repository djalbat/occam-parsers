'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class KeepFirstAndThirdChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var childNodes = arrayUtil.keepFirstAndThird(nodes),
        keepFirstAndThirdChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepFirstAndThirdChildNode);

    nodes = [keepFirstAndThirdChildNode]; ///

    return nodes;
  }
}

module.exports = KeepFirstAndThirdChildNode;
