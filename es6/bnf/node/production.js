'use strict';

const arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionNode extends NonTerminalNode {
  getName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          productionNameNode = firstChildNode,  ///
          name = productionNameNode.getName();
    
    return name;
  }
  
  getDefinitions() {
    const childNodes = this.getChildNodes(),
          lastChildNode = last(childNodes),
          definitionsNode = lastChildNode,  ///
          definitions = definitionsNode.getDefinitions();
    
    return definitions;
  }

  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = arrayUtil.discardSecond(nodes),
          productionNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ProductionNode);

    return productionNode;
  }
}

module.exports = ProductionNode;

function first(array) { return array[0]; }
function last(array) { return array[array.length - 1]; }