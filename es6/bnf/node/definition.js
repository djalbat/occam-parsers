'use strict';

const arrayUtil = require('../../util/array'),
      VerticalSpaceNode = require('../node/verticalSpace'),
      NonTerminalNode = require('../../common/node/nonTerminal');

class DefinitionNode extends NonTerminalNode {
  generateDefinition(Definition, Parts, mappings) {
    const childNodes = this.getChildNodes(),
          partNodes = childNodes, ///
          parts = partNodes.map(function(partNode) {
            const part = partNode.generatePart(Parts, mappings);
  
            return part;
          }),
          definition = new Definition(parts);

    return definition;
  }

  static fromNodesAndProductionName(nodes, productionName) {
    const lastNode = last(nodes),
          childNodes = (lastNode instanceof VerticalSpaceNode) ?
                         arrayUtil.discardLast(nodes) :
                           nodes,
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DefinitionNode);

    return productionsNode;
  }
}

module.exports = DefinitionNode;

function last(array) { return array[array.length - 1]; }
