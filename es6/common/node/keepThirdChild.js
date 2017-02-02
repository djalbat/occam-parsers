'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class KeepThirdChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var childNodes = arrayUtil.keepThird(nodes),
        keepThirdChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, KeepThirdChildNode);

    nodes = [keepThirdChildNode]; ///

    return nodes;
  }
}

module.exports = KeepThirdChildNode;
