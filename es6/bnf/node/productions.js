'use strict';

const arrayUtil = require('../../util/array'),
      VerticalSpaceNode = require('../node/verticalSpace'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionsNode extends NonTerminalNode {
  generateProductions(Production, Definition, Parts, mappings) {
    const childNodes = this.getChildNodes(),
          productionsNodes = childNodes,  ///
          productions = productionsNodes.map(function(productionNode) {
            const production = productionNode.generateProduction(Production, Definition, Parts, mappings);
            
            return production;
          });
    
    return productions;
  }
  
  static fromNodesAndProductionName(nodes, productionName) {
    const firstNode = first(nodes),
          childNodes = (firstNode instanceof VerticalSpaceNode) ?
                         arrayUtil.discardFirst(nodes) :
                           nodes,
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ProductionsNode);

    return productionsNode;
  }
}

module.exports = ProductionsNode;

function first(array) { return array[0]; }
