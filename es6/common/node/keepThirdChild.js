'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

class KeepThirdChildNode extends NonTerminalNode {
  static fromNodes(nodes, productionName) {
    var childNodes = arrayUtil.keepThird(nodes),
        keepThirdChildNode = new KeepThirdChildNode(childNodes, productionName);

    nodes = [keepThirdChildNode]; ///

    return nodes;
  }
}

module.exports = KeepThirdChildNode;
