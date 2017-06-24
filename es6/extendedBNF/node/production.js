'use strict';

const arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionNode extends NonTerminalNode {
  generateProduction(Production, Definition, mappings) {
    const name = this.getName(),
          definitions = this.generateDefinitions(Definition),
          mappingsNodeExists = mappings.hasOwnProperty(name),
          Node = mappingsNodeExists ?
                   mappings[name] :
                     NonTerminalNode,
          production = new Production(name, definitions, Node);

    return production;
  }

  getName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          productionNameNode = firstChildNode,  ///
          productionNameNodeProductionName = productionNameNode.getProductionName(),
          name = productionNameNodeProductionName;
    
    return name;
  }
  
  generateDefinitions(Definition) {
    const childNodes = this.getChildNodes(),
          lastButOneChildNode = arrayUtil.lastButOne(childNodes),
          definitionsNode = lastButOneChildNode,  ///
          definitions = definitionsNode.generateDefinitions(Definition);
    
    return definitions;
  }

  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = arrayUtil.discardSecond(nodes),
          productionNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, ProductionNode);

    return productionNode;
  }
}

module.exports = ProductionNode;
