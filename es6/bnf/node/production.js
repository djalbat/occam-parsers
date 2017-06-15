'use strict';

const arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class ProductionNode extends NonTerminalNode {
  generateProduction(Production, Definition, Parts, mappings) {
    const name = this.getName(),
          definitions = this.generateDefinitions(Definition, Parts),
          Node = mappings[name] || NonTerminalNode,
          production = new Production(name, definitions, Node);

    return production;
  }

  getName() {
    const childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          productionNameNode = firstChildNode,  ///
          name = productionNameNode.getName();
    
    return name;
  }
  
  generateDefinitions(Definition, Parts) {
    const childNodes = this.getChildNodes(),
          lastChildNode = last(childNodes),
          definitionsNode = lastChildNode,  ///
          definitions = definitionsNode.generateDefinitions(Definition, Parts);
    
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
