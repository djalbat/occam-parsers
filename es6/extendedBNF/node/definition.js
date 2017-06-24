'use strict';

const NonTerminalNode = require('../../common/node/nonTerminal');

class DefinitionNode extends NonTerminalNode {
  generateDefinition(Definition) {
    const childNodes = this.getChildNodes(),
          partNodes = childNodes, ///
          parts = partNodes.map(function(partNode) {
            const noWhitespace = false, ///
                  part = partNode.generatePart(noWhitespace);
  
            return part;
          }),
          definition = new Definition(parts);

    return definition;
  }

  static fromNodesAndProductionName(nodes, productionName) {
    const childNodes = nodes, ///
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DefinitionNode);

    return productionsNode;
  }
}

module.exports = DefinitionNode;
