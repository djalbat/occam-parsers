'use strict';

const arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionNameNode extends NonTerminalNode {
  generatePart(Parts, noWhitespace) {
    const productionName = this.getProductionName(),
          ProductionNamePart = Parts['ProductionNamePart'],
          productionNamePart = new ProductionNamePart(productionName, noWhitespace);

    return productionNamePart;
  }

  getProductionName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          terminalNode = firstChildNode,  ///
          terminalNodeContent = terminalNode.getContent(),
          productionName = terminalNodeContent; ///
    
    return productionName;
  }
  
  static fromNodesAndProductionName(nodes, productionName) { return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, ProductionNameNode); }
}

module.exports = ProductionNameNode;
