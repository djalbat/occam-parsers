'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionNameNode extends NonTerminalNode {
  getName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes);
  }
  
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ProductionNameNode); }
}

module.exports = ProductionNameNode;

function first(array) { return array[0]; }
