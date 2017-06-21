'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionsNode extends NonTerminalNode {
  generateProductions(Production, Definition, Parts, mappings) {
    const childNodes = this.getChildNodes(),
          productionNodes = childNodes,  ///
          productions = productionNodes.map(function(productionNode) {
            const production = productionNode.generateProduction(Production, Definition, Parts, mappings);
            
            return production;
          });
    
    return productions;
  }
  
  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = nodes, ///
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ProductionsNode);

    return productionsNode;
  }
}

module.exports = ProductionsNode;
