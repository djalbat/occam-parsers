'use strict';

const arrayUtil = require('../../util/array'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class DefinitionsNode extends NonTerminalNode {
  generateDefinitions(Definition) {
    const childNodes = this.getChildNodes(),
          definitionNodes = childNodes, ///
          definitions = definitionNodes.map(function(definitionNode) {
            const definition = definitionNode.generateDefinition(Definition);
            
            return definition;
          });
    
    return definitions;
  }

  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = arrayUtil.discardOdd(nodes),
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DefinitionsNode);

    return productionsNode;
  }
}

module.exports = DefinitionsNode;
